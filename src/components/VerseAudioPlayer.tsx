import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Pause, Play, Loader2, AudioLines, BookOpen, Headphones, Lightbulb } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { audioController } from "@/lib/audio-controller";
import { fetchTtsAudio, type TtsLang } from "@/lib/tts-fetch";

type Part = "sanskrit" | "translation" | "explanation";

interface SectionMeta {
  key: Part;
  title: string;
  subtitle: string;
  icon: typeof BookOpen;
}

interface Props {
  cacheKey: string;
  part: Part;
  text: string;
  meta: SectionMeta;
  language: TtsLang;
}

const fetchAudio = (part: Part, text: string, key: string, language: TtsLang) =>
  fetchTtsAudio(part, text, key, language);

const useAudioState = () =>
  useSyncExternalStore(
    audioController.subscribe,
    audioController.getSnapshot,
    audioController.getSnapshot
  );

const formatTime = (s: number) => {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const VerseAudioPlayer = ({ cacheKey, part, text, meta, language }: Props) => {
  const state = useAudioState();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const id = `${cacheKey}:${part}`;
  const isActive = state.activeId === id;
  const isPlaying = isActive && state.isPlaying;
  const rafRef = useRef<number | null>(null);

  // Track progress while active
  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      setDuration(0);
      return;
    }
    const tick = () => {
      const a = audioController.getAudioElement();
      if (a) {
        setProgress(a.currentTime || 0);
        if (a.duration && isFinite(a.duration)) setDuration(a.duration);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive]);

  // Stop our audio when component unmounts (verse change)
  useEffect(() => {
    return () => {
      const active = audioController.getSnapshot().activeId;
      if (active === id) audioController.stop();
    };
  }, [id]);

  const toggle = async () => {
    if (!text || !text.trim()) return;
    if (audioController.isActive(id)) {
      audioController.pause();
      return;
    }
    if (audioController.isPaused(id)) {
      await audioController.resume(id);
      return;
    }
    try {
      setLoading(true);
      const url = await fetchAudio(part, text, id, language);
      setLoading(false);
      await audioController.play(id, url);
    } catch (e: any) {
      setLoading(false);
      console.error(e);
      toast({
        title: "Audio error",
        description: e?.message || "Could not play audio",
        variant: "destructive",
      });
    }
  };

  const Icon = meta.icon;
  const pct = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div
      className={`mt-4 rounded-2xl border p-4 transition-all ${
        isActive
          ? "bg-gold/5 border-gold/40 shadow-soft"
          : "bg-secondary/40 border-border/50"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Thumbnail circle */}
        <div
          className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 ${
            isActive
              ? "border-gold/60 bg-gradient-primary text-primary-foreground"
              : "border-gold/30 bg-gradient-card text-primary"
          }`}
        >
          <Icon className="w-6 h-6" strokeWidth={1.8} />
        </div>

        {/* Title + subtitle */}
        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-foreground text-base leading-tight truncate">
            {meta.title}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            {meta.subtitle}
          </p>
        </div>

        {/* Play button */}
        <button
          onClick={toggle}
          disabled={loading}
          aria-label={isPlaying ? "Pause" : "Play"}
          className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-95 ${
            isPlaying
              ? "bg-gradient-primary text-primary-foreground shadow-soft animate-soft-pulse"
              : "bg-gradient-primary text-primary-foreground shadow-soft hover:opacity-95"
          }`}
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-5 h-5" fill="currentColor" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
          )}
        </button>

        {/* Waveform decoration */}
        <AudioLines
          className={`shrink-0 w-5 h-5 ${
            isPlaying ? "text-gold animate-pulse" : "text-gold/50"
          }`}
        />
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-3 mt-3 px-1">
        <span className="text-[11px] text-muted-foreground tabular-nums w-9">
          {formatTime(progress)}
        </span>
        <div className="flex-1 h-1 rounded-full bg-border/60 overflow-hidden">
          <div
            className="h-full bg-gradient-primary transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-[11px] text-muted-foreground tabular-nums w-9 text-right">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
};

export const SECTION_META = { BookOpen, Headphones, Lightbulb };
export default VerseAudioPlayer;
