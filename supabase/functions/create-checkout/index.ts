// Create a Stripe Checkout session for a book purchase.
// Public endpoint (no auth required for this app).
import Stripe from "https://esm.sh/stripe@17.7.0?target=deno";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Body {
  bookId: string;
  title: string;
  price: number; // INR rupees
  currency?: string; // default "inr"
  origin?: string; // app origin for return URLs
}

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

    const body = (await req.json().catch(() => null)) as Body | null;
    if (
      !body ||
      typeof body.bookId !== "string" ||
      typeof body.title !== "string" ||
      typeof body.price !== "number" ||
      body.price <= 0
    ) {
      return new Response(
        JSON.stringify({ error: "Invalid request body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const stripe = new Stripe(key, { apiVersion: "2024-11-20.acacia" });

    const origin =
      body.origin ||
      req.headers.get("origin") ||
      req.headers.get("referer")?.replace(/\/$/, "") ||
      "";

    const currency = (body.currency || "inr").toLowerCase();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount: Math.round(body.price * 100),
            product_data: {
              name: body.title,
              metadata: { bookId: body.bookId },
            },
          },
        },
      ],
      metadata: { bookId: body.bookId },
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment-cancelled?book_id=${encodeURIComponent(body.bookId)}`,
    });

    return new Response(
      JSON.stringify({ url: session.url, sessionId: session.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("create-checkout error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
