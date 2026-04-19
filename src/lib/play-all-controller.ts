// Orchestrates sequential playback of (sanskrit → translation → explanation)
// for the current verse, then triggers an onComplete callback so the page
// can advance to the next verse and resume the chain seamlessly.
import { audioController } from "@/lib/audio-controller";
import { fetchTtsAudio, type TtsPart } from "@/lib/tts-fetch";

export interface PlayAllSegment {
  part: TtsPart;
  text: string;
  cacheKey: string; // unique id per (verse, part, language)
}

type Listener = () => void;

interface PlayAllState {
  isActive: boolean;
  isLoading: boolean;
  currentPart: TtsPart | null;
  sessionId: string | null; // verse cache key prefix
}

class PlayAllController {
  private listeners = new Set<Listener>();
  private snapshot: PlayAllState = {
    isActive: false,
    isLoading: false,
    currentPart: null,
    sessionId: null,
  };
  private cancelled = false;

  subscribe = (l: Listener) => {
    this.listeners.add(l);
    return () => {
      this.listeners.delete(l);
    };
  };

  getSnapshot = (): PlayAllState => this.snapshot;

  private update(next: Partial<PlayAllState>) {
    this.snapshot = { ...this.snapshot, ...next };
    this.listeners.forEach((l) => l());
  }

  isActiveSession(sessionId: string) {
    return this.snapshot.isActive && this.snapshot.sessionId === sessionId;
  }

  stop() {
    this.cancelled = true;
    audioController.stop();
    this.update({
      isActive: false,
      isLoading: false,
      currentPart: null,
      sessionId: null,
    });
  }

  /**
   * Play a verse's segments in order. Returns true if the chain completed
   * naturally (so the caller can advance to the next verse), false if it
   * was cancelled.
   */
  async playVerse(
    sessionId: string,
    segments: PlayAllSegment[],
    onComplete?: () => void
  ): Promise<boolean> {
    this.cancelled = false;
    this.update({ isActive: true, sessionId, isLoading: true, currentPart: null });

    for (const seg of segments) {
      if (this.cancelled) return false;
      if (!seg.text || !seg.text.trim()) continue;

      try {
        this.update({ isLoading: true, currentPart: seg.part });
        const url = await fetchTtsAudio(seg.part, seg.text, seg.cacheKey);
        if (this.cancelled) return false;

        this.update({ isLoading: false });
        await new Promise<void>((resolve, reject) => {
          audioController
            .play(seg.cacheKey, url, () => resolve())
            .catch(reject);
        });
        if (this.cancelled) return false;
      } catch (e) {
        this.stop();
        throw e;
      }
    }

    if (this.cancelled) return false;
    this.update({ isLoading: false, currentPart: null });
    onComplete?.();
    return true;
  }
}

export const playAllController = new PlayAllController();
