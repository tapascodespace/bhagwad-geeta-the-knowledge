// Temporary TTS proxy using ELEVENLABS_API_KEY
// Used to generate verse audio from sandbox scripts.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const MAX_TEXT_LENGTH = 5000;
const ALLOWED_VOICES = new Set([
  "JBFqnCBsd6RMkjVDRZzb", // George (default)
  "CwhRBWXzGAHq8TQ4Fs17", // Roger
  "EXAVITQu4vr4xnSDxMaL", // Sarah
  "FGY2WhTYpPnrIDTdsKH5", // Laura
  "IKne3meq5aSn9XLyUdCD", // Charlie
  "N2lVS1w4EtoT3dr4eOWO", // Callum
  "TX3LPaxmHKxFdv7VOQHJ", // Liam
  "Xb7hH8MSUJpSbSDYk0k2", // Alice
  "XrExE9yKIg1WjnnlVkGX", // Matilda
  "onwK4e9ZLuTAKqWW03F9", // Daniel
  "pFZP5JQG7iQjIQuC4Bku", // Lily
]);
const ALLOWED_MODELS = new Set([
  "eleven_multilingual_v2",
  "eleven_turbo_v2_5",
  "eleven_turbo_v2",
]);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("ELEVENLABS_API_KEY_ACCOUNT1");
    if (!apiKey) {
      console.error("tts-account1: ELEVENLABS_API_KEY not configured");
      return new Response(JSON.stringify({ error: "Service unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => null);
    const {
      text,
      voice_id = "JBFqnCBsd6RMkjVDRZzb",
      model_id = "eleven_multilingual_v2",
      voice_settings,
      language_code,
    } = body ?? {};

    if (!text || typeof text !== "string") {
      return new Response(JSON.stringify({ error: "Missing 'text'" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (text.length > MAX_TEXT_LENGTH) {
      return new Response(
        JSON.stringify({ error: `Text exceeds ${MAX_TEXT_LENGTH} character limit` }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (typeof voice_id !== "string" || !ALLOWED_VOICES.has(voice_id)) {
      return new Response(JSON.stringify({ error: "Invalid voice_id" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (typeof model_id !== "string" || !ALLOWED_MODELS.has(model_id)) {
      return new Response(JSON.stringify({ error: "Invalid model_id" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload: Record<string, unknown> = {
      text,
      model_id,
      voice_settings: voice_settings ?? {
        stability: 0.82,
        similarity_boost: 0.75,
        style: 0.35,
        use_speaker_boost: true,
        speed: 0.85,
      },
    };
    if (language_code) payload.language_code = language_code;

    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error(`tts-account1 ElevenLabs ${res.status}:`, errText);
      return new Response(
        JSON.stringify({ error: "Speech synthesis failed" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const audio = await res.arrayBuffer();
    return new Response(audio, {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "audio/mpeg" },
    });
  } catch (e) {
    console.error("tts-account1 error:", e);
    return new Response(JSON.stringify({ error: "Service unavailable" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
