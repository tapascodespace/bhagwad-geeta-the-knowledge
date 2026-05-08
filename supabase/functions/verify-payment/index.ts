// Verify a Stripe Checkout session and return the bookId to unlock if paid.
import Stripe from "https://esm.sh/stripe@17.7.0?target=deno";

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
    const key = Deno.env.get("STRIPE_SECRET_KEY");
    if (!key) {
      return new Response(
        JSON.stringify({ error: "STRIPE_SECRET_KEY is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const url = new URL(req.url);
    let sessionId = url.searchParams.get("session_id");
    if (!sessionId && req.method === "POST") {
      const body = await req.json().catch(() => null) as { sessionId?: string } | null;
      sessionId = body?.sessionId ?? null;
    }
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "Missing session_id" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripe = new Stripe(key, { apiVersion: "2024-11-20.acacia" });
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const paid = session.payment_status === "paid";
    const bookId = (session.metadata?.bookId as string | undefined) ?? null;

    return new Response(
      JSON.stringify({
        paid,
        bookId,
        status: session.payment_status,
        amountTotal: session.amount_total,
        currency: session.currency,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("verify-payment error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
