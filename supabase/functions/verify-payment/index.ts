// Verify a Stripe Checkout session, persist the purchase server-side,
// and return the bookId. Requires an authenticated Supabase user that
// matches the userId stored in the session metadata.
import Stripe from "https://esm.sh/stripe@17.7.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    // Require authenticated user
    const authHeader = req.headers.get("Authorization") ?? "";
    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userError } = await userClient.auth.getUser();
    const user = userData?.user;
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: "Authentication required" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      console.error("verify-payment: STRIPE_SECRET_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const url = new URL(req.url);
    let sessionId = url.searchParams.get("session_id");
    if (!sessionId && req.method === "POST") {
      const body = (await req.json().catch(() => null)) as { sessionId?: string } | null;
      sessionId = body?.sessionId ?? null;
    }
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "Missing session_id" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2024-11-20.acacia" });
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const paid = session.payment_status === "paid";
    const bookId = (session.metadata?.bookId as string | undefined) ?? null;
    const sessionUserId = (session.metadata?.userId as string | undefined) ?? null;

    if (!paid || !bookId || !sessionUserId) {
      return new Response(
        JSON.stringify({ paid: false, error: "Payment not completed" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Confirm caller owns this checkout session
    if (sessionUserId !== user.id) {
      console.warn("verify-payment: user mismatch", { expected: sessionUserId, got: user.id });
      return new Response(
        JSON.stringify({ error: "Forbidden" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Persist purchase via service role (idempotent on stripe_session_id)
    const adminClient = createClient(supabaseUrl, serviceKey);
    const { error: insertError } = await adminClient
      .from("purchases")
      .upsert(
        {
          user_id: user.id,
          book_id: bookId,
          stripe_session_id: sessionId,
          amount: session.amount_total ?? 0,
          currency: (session.currency ?? "inr").toUpperCase(),
        },
        { onConflict: "stripe_session_id", ignoreDuplicates: true },
      );

    if (insertError) {
      console.error("verify-payment: failed to persist purchase", insertError);
      return new Response(
        JSON.stringify({ error: "Could not record purchase" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        paid: true,
        bookId,
        amountTotal: session.amount_total,
        currency: session.currency,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("verify-payment error:", err);
    return new Response(
      JSON.stringify({ error: "Payment could not be verified" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
