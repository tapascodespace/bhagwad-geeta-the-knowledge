// Create a Stripe Checkout session for a book purchase.
// Requires an authenticated Supabase user. Price/title come from a server-side
// catalog; client-supplied price is ignored to prevent tampering.
import Stripe from "https://esm.sh/stripe@17.7.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BOOK_CATALOG: Record<string, { title: string; price: number }> = {
  "bhagavad-gita": { title: "Bhagavad Gita", price: 99 },
  "gita-essence": { title: "Gita Essence", price: 99 },
  "krishna-relationships": { title: "Krishna on Relationships", price: 99 },
  "krishnas-guide-to-fearless-living": { title: "Krishna's Guide to Fearless Living", price: 99 },
  "the-boy-who-tried-to-eat-the-sun": { title: "The Boy Who Tried to Eat the Sun", price: 49 },
  "importance-of-patience": { title: "The Importance of Patience", price: 99 },
  "krishna-leelas": { title: "Krishna Leelas", price: 99 },
  "ganesha-birth": { title: "The Birth of Ganesha", price: 99 },
  "ganesha-kartikeya-universe-race": { title: "Ganesha & Kartikeya: The Universe Race", price: 99 },
  "why-shiva-drank-poison": { title: "Why Shiva Drank Poison", price: 99 },
  "ramayana-tales": { title: "Ramayana Tales", price: 99 },
  "mahabharata-glimpses": { title: "Mahabharata Glimpses", price: 99 },
  "meditation-basics": { title: "Meditation Basics", price: 99 },
  "yoga-of-life": { title: "The Yoga of Life", price: 99 },
  "power-of-karma": { title: "The Power of Karma", price: 99 },
  "the-way-of-dharma": { title: "The Way of Dharma", price: 99 },
  "inner-peace-in-modern-life": { title: "Inner Peace in Modern Life", price: 99 },
  "beating-procrastination": { title: "Beating Procrastination", price: 99 },
  "science-of-decision-making": { title: "The Science of Decision Making", price: 99 },
  "turning-failures-into-life-lessons": { title: "Turning Failures into Life Lessons", price: 99 },
  "how-to-stop-overthinking": { title: "How to Stop Overthinking", price: 99 },
  "students-discipline": { title: "A Student's Guide to Discipline", price: 99 },
  "ganesha-and-kuberas-gold": { title: "Ganesha and Kubera's Gold", price: 49 },
  "ganesha-writes-mahabharata": { title: "Ganesha Writes the Mahabharata", price: 49 },
  "hanuman-forgets-his-powers": { title: "Hanuman Forgets His Powers", price: 49 },
  "short-wisdom": { title: "Short Wisdom", price: 49 },
  "short-mantras": { title: "Short Mantras", price: 49 },
  "manage-your-life": { title: "Manage Your Life", price: 99 },
};

const ALLOWED_ORIGIN_HOSTS = [
  "bhagwad-geeta-the-knowledge.lovable.app",
  "id-preview--51f564b6-e7cd-45d8-a13c-995607cd78c9.lovable.app",
  "51f564b6-e7cd-45d8-a13c-995607cd78c9.lovable.app",
  "localhost",
  "127.0.0.1",
];

function isAllowedOrigin(origin: string): boolean {
  try {
    const u = new URL(origin);
    return ALLOWED_ORIGIN_HOSTS.some(
      (h) => u.hostname === h || u.hostname.endsWith(`.${h}`),
    );
  } catch {
    return false;
  }
}

interface Body {
  bookId: string;
  currency?: string;
  origin?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Require authenticated user
    const authHeader = req.headers.get("Authorization") ?? "";
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
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

    const key = Deno.env.get("STRIPE_SECRET_KEY");
    if (!key) {
      console.error("create-checkout: STRIPE_SECRET_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = (await req.json().catch(() => null)) as Body | null;
    if (!body || typeof body.bookId !== "string") {
      return new Response(
        JSON.stringify({ error: "Invalid request" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const entry = BOOK_CATALOG[body.bookId];
    if (!entry) {
      return new Response(
        JSON.stringify({ error: "Unknown book" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const stripe = new Stripe(key, { apiVersion: "2024-11-20.acacia" });

    const requestedOrigin = body.origin || req.headers.get("origin") || "";
    const origin =
      requestedOrigin && isAllowedOrigin(requestedOrigin)
        ? requestedOrigin.replace(/\/$/, "")
        : "https://bhagwad-geeta-the-knowledge.lovable.app";

    const currency = body.currency === "usd" ? "usd" : "inr";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: user.email ?? undefined,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount: Math.round(entry.price * 100),
            product_data: {
              name: entry.title,
              metadata: { bookId: body.bookId },
            },
          },
        },
      ],
      metadata: { bookId: body.bookId, userId: user.id },
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment-cancelled?book_id=${encodeURIComponent(body.bookId)}`,
    });

    return new Response(
      JSON.stringify({ url: session.url, sessionId: session.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("create-checkout error:", err);
    return new Response(
      JSON.stringify({ error: "Payment could not be initialised" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
