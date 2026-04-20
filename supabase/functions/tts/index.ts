const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

type Part = "sanskrit" | "translation" | "explanation";
type Lang = "en" | "hi" | "bn";

// All voices below are ElevenLabs default (free-tier-safe) voices.
// For Bengali pronunciation we rely on `language_code: "bn"` + the
// eleven_multilingual_v2 model — that is what controls phoneme output,
// NOT the voice identity. Library/premium voices would require a paid plan.
//
// George (JBFqnCBsd6RMkjVDRZzb)  — deep calm male, great for chant
// Sarah  (EXAVITQu4vr4xnSDxMaL)  — clear neutral female narration
// Matilda(XrExE9yKIg1WjnnlVkGX)  — warm friendly female
// Daniel (onwK4e9ZLuTAKqWW03F9)  — calm male narrator
// Lily   (pFZP5JQG7iQjIQuC4Bku)  — warm female, handles Indic scripts cleanly
const VOICE_BY_LANG_PART: Record<Lang, Record<Part, string>> = {
  en: {
    sanskrit: "JBFqnCBsd6RMkjVDRZzb", // George
    translation: "EXAVITQu4vr4xnSDxMaL", // Sarah
    explanation: "XrExE9yKIg1WjnnlVkGX", // Matilda
  },
  hi: {
    sanskrit: "JBFqnCBsd6RMkjVDRZzb", // George
    translation: "EXAVITQu4vr4xnSDxMaL", // Sarah
    explanation: "XrExE9yKIg1WjnnlVkGX", // Matilda
  },
  bn: {
    // Bengali: language_code="bn" forces native Bengali phonemes regardless
    // of voice. We pick a calm male for chant and a warm female for prose.
    sanskrit: "onwK4e9ZLuTAKqWW03F9", // Daniel — calm devotional
    translation: "pFZP5JQG7iQjIQuC4Bku", // Lily — soft Bengali narration
    explanation: "pFZP5JQG7iQjIQuC4Bku", // Lily — warm explanation
  },
};

const PART_SETTINGS: Record<Part, { stability: number; similarity_boost: number; style: number; use_speaker_boost: boolean; speed: number }> = {
  sanskrit: { stability: 0.85, similarity_boost: 0.8, style: 0.35, use_speaker_boost: true, speed: 0.78 },
  translation: { stability: 0.6, similarity_boost: 0.75, style: 0.25, use_speaker_boost: true, speed: 0.95 },
  explanation: { stability: 0.5, similarity_boost: 0.75, style: 0.4, use_speaker_boost: true, speed: 1.0 },
};

const isLang = (v: unknown): v is Lang => v === "en" || v === "hi" || v === "bn";
const isPart = (v: unknown): v is Part =>
  v === "sanskrit" || v === "translation" || v === "explanation";

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

    const body = await req.json();
    const { text, part, language } = body ?? {};
    if (!text || typeof text !== "string") {
      return new Response(JSON.stringify({ error: "text is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const partKey: Part = isPart(part) ? part : "translation";
    // Sanskrit text is always Devanagari → use Hindi voice mapping/lang code
    // regardless of UI language, so the chant sounds correct.
    const langKey: Lang = partKey === "sanskrit" ? "hi" : isLang(language) ? language : "en";
    const voiceId = VOICE_BY_LANG_PART[langKey][partKey];
    const settings = PART_SETTINGS[partKey];

    // Add subtle pause cues for sanskrit lines
    const finalText =
      partKey === "sanskrit"
        ? text.replace(/\n+/g, " ... ").replace(/।/g, "। ... ").replace(/॥/g, "॥ ... ")
        : text;

    // Model selection per language:
    //   • Bengali → eleven_v3 (the only model that natively supports `bn`).
    //     Forces correct Bengali phonemes via language_code="bn", so the
    //     output never falls back to Hindi/English accent.
    //   • English/Hindi → eleven_multilingual_v2 (best quality for those).
    const useV3ForBengali = langKey === "bn";
    const modelId = useV3ForBengali ? "eleven_v3" : "eleven_multilingual_v2";
    const requestBody: Record<string, unknown> = {
      text: finalText,
      model_id: modelId,
      voice_settings: settings,
    };
    if (useV3ForBengali) {
      requestBody.language_code = "bn";
    }

    const r = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
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
