// Shared TTS fetcher used by VerseAudioPlayer and the Play-All controller.
import { supabase } from "@/integrations/supabase/client";
import { getCachedAudio, setCachedAudio } from "@/lib/audio-cache";

export type TtsPart = "sanskrit" | "translation" | "explanation";
export type TtsLang = "en" | "hi" | "bn";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export const fetchTtsAudio = async (
  part: TtsPart,
  text: string,
  key: string,
  language: TtsLang = "en"
): Promise<string> => {
  const cached = getCachedAudio(key);
  if (cached) return cached;

  const { data: sessionData } = await supabase.auth.getSession();
  const token = sessionData.session?.access_token ?? SUPABASE_KEY;
  const res = await fetch(`${SUPABASE_URL}/functions/v1/tts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text, part, language }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || `TTS failed: ${res.status}`);
  }
  const buf = await res.arrayBuffer();
  return setCachedAudio(key, buf);
};
