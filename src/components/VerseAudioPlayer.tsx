import { useEffect, useState, useSyncExternalStore } from "react";
import { Pause, Play, Loader2, ListMusic } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { audioController } from "@/lib/audio-controller";
import { getCachedAudio, setCachedAudio } from "@/lib/audio-cache";

type Part = "sanskrit" | "translation" | "explanation";

interface Props {
  cacheKey: string; // e.g. "1-1-en"
  sanskrit: string;
  translation: string;
  explanation?: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const PART_LABEL: Record<Part, string> = {
  sanskrit: "Sanskrit",
  translation: "Translation",
  explanation: "Explanation",
};

const fetchAudio = async (part: Part, text: string, key: string): Promise<string> => {
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
    body: JSON.stringify({ text, part }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || `TTS failed: ${res.status}`);
  }
  const buf = await res.arrayBuffer();
  return setCachedAudio(key, buf);
};

// Subscribe to global audio state via useSyncExternalStore
const useAudioState = () =>
  useSyncExternalStore(
    (cb) => audioController.subscribe(cb),
    () => ({ activeId: (audioController as any).activeId as string | null, isPlaying: !(audioController as any).audio?.paused }),
    () => ({ activeId: null, isPlaying: false })
  );

const VerseAudioPlayer = ({ cacheKey, sanskrit, translation, explanation }: Props) => {
  const state = useAudioState();
  const [loadingPart, setLoadingPart] = useState<Part | null>(null);
  const [playAllMode, setPlayAllMode] = useState(false);

  // When the user navigates to another verse, stop any audio that belongs to
  // the previous verse so it can never keep playing in the background.
  useEffect(() => {
    return () => {
      const active = (audioController as any).activeId as string | null;
      if (active && active.startsWith(cacheKey)) {
        audioController.stop();
      }
    };
  }, [cacheKey]);

  const idFor = (part: Part) => `${cacheKey}:${part}`;

  const playPart = async (part: Part, text: string, onEnded?: () => void) => {
    const id = idFor(part);
    // Resume if the SAME part is paused
    if (audioController.isPaused(id)) {
      await audioController.resume(id);
      return;
    }
    try {
      setLoadingPart(part);
      const url = await fetchAudio(part, text, id);
      setLoadingPart(null);
      await audioController.play(id, url, onEnded);
    } catch (e: any) {
      setLoadingPart(null);
      console.error(e);
      toast({
        title: "Audio error",
        description: e?.message || "Could not play audio",
        variant: "destructive",
      });
    }
  };

  const togglePart = async (part: Part, text: string) => {
    if (!text || !text.trim()) return;
    const id = idFor(part);
    setPlayAllMode(false);
    if (audioController.isActive(id)) {
      audioController.pause();
      return;
    }
    await playPart(part, text);
  };

  const handlePlayAll = async () => {
    // If currently playing in playAll mode, stop everything
    if (playAllMode && state.isPlaying) {
      audioController.stop();
      setPlayAllMode(false);
      return;
    }
    setPlayAllMode(true);
    const queue: { part: Part; text: string }[] = [
      { part: "sanskrit", text: sanskrit },
      { part: "translation", text: translation },
    ];
    if (explanation && explanation.trim()) {
      queue.push({ part: "explanation", text: explanation });
    }
    const runAt = async (i: number) => {
      if (i >= queue.length) {
        setPlayAllMode(false);
        return;
      }
      const { part, text } = queue[i];
      await playPart(part, text, () => {
        setTimeout(() => runAt(i + 1), 500);
      });
    };
    runAt(0);
  };

  const parts: { key: Part; text: string }[] = [
    { key: "sanskrit", text: sanskrit },
    { key: "translation", text: translation },
  ];
  if (explanation && explanation.trim()) {
    parts.push({ key: "explanation", text: explanation });
  }

  return (
    <div className="rounded-3xl bg-gradient-card border border-gold/30 p-5 mb-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-0.5">
            ✦ Sacred Recitation
          </p>
          <p className="text-xs text-muted-foreground">
            Tap a section to listen, or play all
          </p>
        </div>
        <button
          onClick={handlePlayAll}
          className={`shrink-0 inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-medium border transition-all active:scale-95 ${
            playAllMode
              ? "bg-gradient-primary text-primary-foreground border-transparent shadow-soft"
              : "bg-background/70 text-foreground border-border hover:border-primary"
          }`}
          aria-label="Play all"
        >
          <ListMusic className="w-4 h-4" />
          {playAllMode && state.isPlaying ? "Stop" : "Play All"}
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {parts.map(({ key, text }) => {
          const id = idFor(key);
          const isActive = state.activeId === id;
          const isThisPlaying = isActive && state.isPlaying;
          const isThisLoading = loadingPart === key;
          return (
            <button
              key={key}
              onClick={() => togglePart(key, text)}
              disabled={isThisLoading}
              className={`flex items-center gap-3 p-3 rounded-2xl border transition-all active:scale-[0.98] ${
                isActive
                  ? "bg-gradient-primary/10 border-primary/50 shadow-soft"
                  : "bg-background/60 border-border/60 hover:border-primary/40"
              }`}
            >
              <span
                className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                  isThisPlaying
                    ? "bg-gradient-primary text-primary-foreground animate-soft-pulse"
                    : isActive
                    ? "bg-gradient-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {isThisLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isThisPlaying ? (
                  <Pause className="w-5 h-5" fill="currentColor" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                )}
              </span>
              <span className="flex-1 text-left">
                <span className="block text-sm font-semibold text-foreground">
                  {PART_LABEL[key]}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {isThisLoading
                    ? "Preparing..."
                    : isThisPlaying
                    ? "Now playing"
                    : isActive
                    ? "Paused — tap to resume"
                    : "Tap to play"}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VerseAudioPlayer;
