// Global single-audio controller. Ensures only ONE audio plays at a time
// across the app and switching verses/parts always stops previous playback.

export interface AudioState {
  activeId: string | null;
  isPlaying: boolean;
}

type Listener = () => void;

class AudioController {
  private audio: HTMLAudioElement | null = null;
  private listeners = new Set<Listener>();
  private snapshot: AudioState = { activeId: null, isPlaying: false };

  private ensureAudio() {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.preload = "auto";
    }
    return this.audio;
  }

  subscribe = (l: Listener) => {
    this.listeners.add(l);
    return () => {
      this.listeners.delete(l);
    };
  };

  getSnapshot = (): AudioState => this.snapshot;

  private update(next: Partial<AudioState>) {
    const merged = { ...this.snapshot, ...next };
    if (merged.activeId === this.snapshot.activeId && merged.isPlaying === this.snapshot.isPlaying) {
      return;
    }
    this.snapshot = merged;
    this.listeners.forEach((l) => l());
  }

  isActive(id: string) {
    return this.snapshot.activeId === id && this.snapshot.isPlaying;
  }

  isPaused(id: string) {
    return (
      this.snapshot.activeId === id &&
      !this.snapshot.isPlaying &&
      !!this.audio &&
      this.audio.currentTime > 0 &&
      !this.audio.ended
    );
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.removeAttribute("src");
      this.audio.load();
      this.audio.onended = null;
    }
    this.update({ activeId: null, isPlaying: false });
  }

  pause() {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
      this.update({ isPlaying: false });
    }
  }

  async resume(id: string) {
    if (this.snapshot.activeId === id && this.audio) {
      await this.audio.play();
      this.update({ isPlaying: true });
    }
  }

  async play(id: string, url: string, onEnded?: () => void) {
    const a = this.ensureAudio();
    a.pause();
    a.onended = null;
    a.src = url;
    a.currentTime = 0;
    a.onended = () => {
      this.update({ isPlaying: false, activeId: null });
      onEnded?.();
    };
    await a.play();
    this.update({ activeId: id, isPlaying: true });
  }
}

export const audioController = new AudioController();
