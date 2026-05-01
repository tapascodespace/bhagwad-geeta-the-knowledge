import { useEffect, useSyncExternalStore } from "react";
import { Loader2, Play, Square } from "lucide-react";
import { playAllController, type PlayAllSegment } from "@/lib/play-all-controller";
import { AudioNotAvailableError } from "@/lib/audio-url";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  sessionId: string;
  segments: PlayAllSegment[];
  onVerseComplete?: () => void;
  /** Auto-start when this key changes (used to chain across verses). */
  autoStartKey?: string | null;
}

const useState_ = () =>
  useSyncExternalStore(
    playAllController.subscribe,
    playAllController.getSnapshot,
    playAllController.getSnapshot
  );


const PlayAllButton = ({
  sessionId,
  segments,
  onVerseComplete,
  autoStartKey,
}: Props) => {
  const state = useState_();
  const { t } = useLanguage();
  const isThisSession = state.sessionId === sessionId && state.isActive;
  const partLabel = (p?: string | null) =>
    p === "shloka" ? t("partShloka")
    : p === "translation" ? t("partTranslation")
    : p === "explanation" ? t("partExplanation")
    : "";

  const start = async () => {
    try {
      await playAllController.playVerse(sessionId, segments, onVerseComplete);
    } catch (e: any) {
      if (e instanceof AudioNotAvailableError) {
        toast({
          title: "Audio not available yet",
          description: "This verse hasn't been recorded in the selected language.",
        });
      } else {
        toast({
          title: "Audio error",
          description: e?.message || "Could not play audio",
          variant: "destructive",
        });
      }
    }
  };

  // Auto-start chain on next verse
  useEffect(() => {
    if (!autoStartKey) return;
    void start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStartKey]);

  // Stop on unmount if we own the session
  useEffect(() => {
    return () => {
      if (playAllController.getSnapshot().sessionId === sessionId) {
        playAllController.stop();
      }
    };
  }, [sessionId]);

  const handleClick = () => {
    if (isThisSession) {
      playAllController.stop();
    } else {
      void start();
    }
  };

  const status = isThisSession
    ? state.isLoading
      ? `${t("preparing")} ${partLabel(state.currentPart)}…`
      : state.currentPart
        ? `${t("playing")} ${partLabel(state.currentPart)}…`
        : `${t("playing")}…`
    : t("playAllHint");

  return (
    <button
      onClick={handleClick}
      className={`w-full mt-2 mb-4 rounded-2xl px-5 py-4 flex items-center gap-4 transition-all active:scale-[0.98] shadow-soft border ${
        isThisSession
          ? "bg-gradient-primary text-primary-foreground border-gold/50 animate-soft-pulse"
          : "bg-gradient-primary text-primary-foreground border-gold/40 hover:opacity-95"
      }`}
      aria-label={isThisSession ? t("stopAutoPlay") : t("playAll")}
    >
      <span className="shrink-0 w-12 h-12 rounded-full bg-primary-foreground/15 flex items-center justify-center">
        {isThisSession && state.isLoading ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : isThisSession ? (
          <Square className="w-5 h-5" fill="currentColor" />
        ) : (
          <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
        )}
      </span>
      <div className="flex-1 min-w-0 text-left">
        <p className="font-display font-semibold text-base leading-tight">
          {isThisSession ? "Stop Auto-Play" : "Play All"}
        </p>
        <p className="text-xs opacity-90 mt-0.5 truncate">{status}</p>
      </div>
    </button>
  );
};

export default PlayAllButton;
