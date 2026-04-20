// Orchestrates sequential playback of (shloka → translation → explanation)
// for the current verse, then triggers an onComplete callback so the page
// can advance to the next verse and resume the chain seamlessly.
import { audioController } from "@/lib/audio-controller";
import {
  resolveVerseAudio,
  AudioNotAvailableError,
  type AudioPart,
  type AudioLang,
} from "@/lib/audio-url";

export interface PlayAllSegment {
  part: AudioPart;
  chapter: number;
  verse: number;
  language: AudioLang;
}

type Listener = () => void;

interface PlayAllState {
  isActive: boolean;
  isLoading: boolean;
  currentPart: AudioPart | null;
  sessionId: string | null;
}

const segmentId = (s: PlayAllSegment) =>
  `ch${s.chapter}-v${s.verse}-${s.part === "shloka" ? "shloka" : `${s.language}-${s.part}`}`;

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
   * was cancelled or any segment was unavailable.
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
      const id = segmentId(seg);

      try {
        this.update({ isLoading: true, currentPart: seg.part });
        const url = await resolveVerseAudio(seg.chapter, seg.verse, seg.part, seg.language);
        if (this.cancelled) return false;

        this.update({ isLoading: false });
        await new Promise<void>((resolve, reject) => {
          audioController
            .play(id, url, () => resolve())
            .catch(reject);
        });
        if (this.cancelled) return false;
      } catch (e) {
        this.stop();
        if (e instanceof AudioNotAvailableError) {
          // Re-throw so caller can show a friendly message, but don't advance.
          throw e;
        }
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
