const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Voice IDs for different parts (good multilingual male/female calm voices)
const VOICE_MAP = {
  sanskrit: "JBFqnCBsd6RMkjVDRZzb", // George - deep calm male
  translation: "EXAVITQu4vr4xnSDxMaL", // Sarah - clear narration
  explanation: "XrExE9yKIg1WjnnlVkGX", // Matilda - warm friendly
} as const;

type Part = keyof typeof VOICE_MAP;

const PART_SETTINGS: Record<Part, { stability: number; similarity_boost: number; style: number; use_speaker_boost: boolean; speed: number }> = {
  sanskrit: { stability: 0.85, similarity_boost: 0.8, style: 0.35, use_speaker_boost: true, speed: 0.78 },
  translation: { stability: 0.6, similarity_boost: 0.75, style: 0.25, use_speaker_boost: true, speed: 0.95 },
  explanation: { stability: 0.5, similarity_boost: 0.75, style: 0.4, use_speaker_boost: true, speed: 1.0 },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("ELEVENLABS_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "ELEVENLABS_API_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { text, part } = await req.json();
    if (!text || typeof text !== "string") {
      return new Response(JSON.stringify({ error: "text is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const partKey: Part = (part as Part) in VOICE_MAP ? (part as Part) : "translation";
    const voiceId = VOICE_MAP[partKey];
    const settings = PART_SETTINGS[partKey];

    // Add subtle pause cues for sanskrit lines
    const finalText =
      partKey === "sanskrit"
        ? text.replace(/\n+/g, " ... ").replace(/।/g, "। ... ").replace(/॥/g, "॥ ... ")
        : text;

    const r = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: finalText,
          model_id: "eleven_multilingual_v2",
          voice_settings: settings,
        }),
      }
    );

    if (!r.ok) {
      const errText = await r.text();
      console.error("ElevenLabs error:", r.status, errText);
      return new Response(JSON.stringify({ error: "TTS failed", details: errText }), {
        status: r.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const audio = await r.arrayBuffer();
    return new Response(audio, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (e) {
    console.error("tts error", e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
