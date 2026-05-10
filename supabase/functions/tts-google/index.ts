// Google Cloud Text-to-Speech proxy.
// Used for generating verse audio (Hindi: hi-IN, Sanskrit shlokas: hi-IN with native voice).

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const MAX_TEXT_LENGTH = 5000;
const ALLOWED_LANGUAGES = new Set(["hi-IN", "en-US", "en-IN", "en-GB"]);
const ALLOWED_VOICES = new Set([
  "hi-IN-Wavenet-A",
  "hi-IN-Wavenet-B",
  "hi-IN-Wavenet-C",
  "hi-IN-Wavenet-D",
  "hi-IN-Neural2-A",
  "hi-IN-Neural2-B",
  "hi-IN-Neural2-C",
  "hi-IN-Neural2-D",
  "en-US-Wavenet-D",
  "en-US-Neural2-J",
  "en-IN-Wavenet-A",
  "en-IN-Wavenet-B",
  "en-IN-Wavenet-C",
  "en-IN-Wavenet-D",
]);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GOOGLE_TTS_API_KEY");
    if (!apiKey) {
      console.error("tts-google: GOOGLE_TTS_API_KEY not configured");
      return new Response(JSON.stringify({ error: "Service unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => null);
    const {
      text,
      languageCode = "hi-IN",
      voiceName = "hi-IN-Wavenet-A",
      speakingRate = 0.88,
      pitch = 0,
      ssml = false,
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
    if (typeof languageCode !== "string" || !ALLOWED_LANGUAGES.has(languageCode)) {
      return new Response(JSON.stringify({ error: "Invalid languageCode" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (typeof voiceName !== "string" || !ALLOWED_VOICES.has(voiceName)) {
      return new Response(JSON.stringify({ error: "Invalid voiceName" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const rate = typeof speakingRate === "number" ? Math.min(Math.max(speakingRate, 0.5), 2.0) : 0.88;
    const p = typeof pitch === "number" ? Math.min(Math.max(pitch, -20), 20) : 0;

    const payload = {
      input: ssml ? { ssml: text } : { text },
      voice: { languageCode, name: voiceName },
      audioConfig: {
        audioEncoding: "MP3",
        speakingRate: rate,
        pitch: p,
        sampleRateHertz: 24000,
      },
    };

    const res = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error(`tts-google ${res.status}:`, errText);
      return new Response(
        JSON.stringify({ error: "Speech synthesis failed" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const json = await res.json();
    const b64 = json.audioContent as string;
    if (!b64) {
      console.error("tts-google: missing audioContent in response");
      return new Response(JSON.stringify({ error: "Speech synthesis failed" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

    return new Response(bytes, {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "audio/mpeg" },
    });
  } catch (e) {
    console.error("tts-google error:", e);
    return new Response(JSON.stringify({ error: "Service unavailable" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
