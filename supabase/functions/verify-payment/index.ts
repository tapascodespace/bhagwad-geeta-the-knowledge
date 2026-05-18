// DEPRECATED: This endpoint previously verified Stripe Checkout sessions.
// Payments are now processed natively via Google Play Billing.
// Kept as a stub to avoid 404s from any old client versions.

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

  return new Response(
    JSON.stringify({ error: "This endpoint is deprecated. Purchases are now handled via Google Play Billing." }),
    { status: 410, headers: { ...corsHeaders, "Content-Type": "application/json" } },
  );
});
