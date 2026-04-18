import { useEffect, useRef, useState } from "react";
import { Pause, Play, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

type Part = "sanskrit" | "translation" | "explanation";

interface Props {
  cacheKey: string;
  sanskrit: string;
  translation: string;
  explanation?: string;
}

const audioCache = new Map<string, string>();

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const fetchPart = async (part: Part, text: string, key: string): Promise<string> => {
  if (audioCache.has(key)) return audioCache.get(key)!;
  const { data: sessionData } = await supabase.auth.getSession();
  const token = sessionData.session?.access_token ?? SUPABASE_KEY;
  const res = await fetch(`${SUPABASE_URL}/functions/v1/tts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text, part }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || `TTS failed: ${res.status}`);
  }
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  audioCache.set(key, url);
  return url;
};

const PART_LABEL: Record<Part, string> = {
  sanskrit: "Sanskrit",
  translation: "Translation",
  explanation: "Explanation",
};

const VerseAudioPlayer = ({ cacheKey, sanskrit, translation, explanation }: Props) => {
  const { t } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPart, setCurrentPart] = useState<Part | null>(null);

  const queueRef = useRef<{ part: Part; text: string }[]>([]);
  const idxRef = useRef(0);
  const stoppedRef = useRef(false);

  useEffect(() => {
    if (!audioRef.current) audioRef.current = new Audio();
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
    setCurrentPart(null);
    idxRef.current = 0;
    stoppedRef.current = false;
  }, [cacheKey]);

  const playNext = async () => {
    if (stoppedRef.current) return;
    const queue = queueRef.current;
    if (idxRef.current >= queue.length) {
      setIsPlaying(false);
      setCurrentPart(null);
      idxRef.current = 0;
      return;
    }
    const { part, text } = queue[idxRef.current];
    setCurrentPart(part);
    try {
      setIsLoading(true);
      const key = `${cacheKey}:${part}`;
      const url = await fetchPart(part, text, key);
      setIsLoading(false);
      if (stoppedRef.current) return;
      const a = audioRef.current!;
      a.src = url;
      a.onended = async () => {
        idxRef.current += 1;
        await new Promise((r) => setTimeout(r, 600));
        playNext();
      };
      await a.play();
      setIsPlaying(true);
    } catch (e: any) {
      setIsLoading(false);
      setIsPlaying(false);
      console.error(e);
      toast({
        title: "Audio error",
        description: e?.message || "Could not play audio",
        variant: "destructive",
      });
    }
  };

  const handleClick = async () => {
    const a = audioRef.current!;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
      return;
    }
    if (a.src && a.currentTime > 0 && !a.ended) {
      await a.play();
      setIsPlaying(true);
      return;
    }
    stoppedRef.current = false;
    const q: { part: Part; text: string }[] = [
      { part: "sanskrit", text: sanskrit },
      { part: "translation", text: translation },
    ];
    if (explanation && explanation.trim()) {
      q.push({ part: "explanation", text: explanation });
    }
    queueRef.current = q;
    idxRef.current = 0;
    playNext();
  };

  const parts: Part[] = explanation && explanation.trim()
    ? ["sanskrit", "translation", "explanation"]
    : ["sanskrit", "translation"];

  return (
    <div className="rounded-3xl bg-gradient-card border border-gold/30 p-5 mb-5 shadow-card">
      <div className="flex items-center gap-4">
        {/* Big circular play button */}
        <button
          onClick={handleClick}
          disabled={isLoading && !isPlaying}
          aria-label={isPlaying ? "Pause" : "Play"}
          className={`relative shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-elegant active:scale-95 transition-all ${
            isPlaying ? "animate-soft-pulse" : ""
          } ${isLoading && !isPlaying ? "opacity-70" : ""}`}
        >
          {isLoading ? (
            <Loader2 className="w-7 h-7 animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-7 h-7" fill="currentColor" />
          ) : (
            <Play className="w-7 h-7 ml-0.5" fill="currentColor" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-1">
            ✦ Sacred Recitation
          </p>
          <p className="text-sm text-muted-foreground">
            {isPlaying && currentPart
              ? `Now playing · ${PART_LABEL[currentPart]}`
              : isLoading
              ? "Preparing audio..."
              : "Tap to listen"}
          </p>
        </div>
      </div>

      {/* Section pills */}
      <div className="flex items-center gap-2 mt-4">
        {parts.map((p) => {
          const active = currentPart === p && (isPlaying || isLoading);
          return (
            <span
              key={p}
              className={`flex-1 text-center text-xs font-medium py-1.5 px-2 rounded-full border transition-all ${
                active
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-soft"
                  : "bg-background/60 text-muted-foreground border-border/60"
              }`}
            >
              {PART_LABEL[p]}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default VerseAudioPlayer;
