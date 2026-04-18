import { useEffect, useRef, useState } from "react";
import { Pause, Play, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

type Part = "sanskrit" | "translation" | "explanation";

interface Props {
  cacheKey: string; // unique per verse + language
  sanskrit: string;
  translation: string;
  explanation?: string;
}

const audioCache = new Map<string, string>(); // key -> object URL

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
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  // Reset when verse changes
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
        // small pause between sections
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
    // resume if paused mid-track
    if (a.src && a.currentTime > 0 && !a.ended) {
      await a.play();
      setIsPlaying(true);
      return;
    }
    // fresh start
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

  const label = isLoading
    ? "Loading..."
    : isPlaying
    ? `Playing ${currentPart ?? ""}`
    : "Play Audio";

  return (
    <Button
      variant="default"
      size="lg"
      className="w-full h-14 text-base mb-4 gap-2"
      onClick={handleClick}
      disabled={isLoading && !isPlaying}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : isPlaying ? (
        <Pause className="w-5 h-5" />
      ) : (
        <Play className="w-5 h-5" />
      )}
      {label}
    </Button>
  );
};

export default VerseAudioPlayer;
