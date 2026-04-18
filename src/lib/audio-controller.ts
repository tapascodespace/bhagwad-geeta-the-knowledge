// Global single-audio controller. Ensures that across the entire app,
// only ONE audio plays at a time and switching verses/parts always stops
// any previously playing audio cleanly.

type Listener = (state: { activeId: string | null; isPlaying: boolean }) => void;

class AudioController {
  private audio: HTMLAudioElement | null = null;
  private activeId: string | null = null;
  private listeners = new Set<Listener>();

  private ensureAudio() {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.preload = "auto";
    }
    return this.audio;
  }

  subscribe(l: Listener) {
    this.listeners.add(l);
    return () => this.listeners.delete(l);
  }

  private emit() {
    const state = { activeId: this.activeId, isPlaying: !!this.audio && !this.audio.paused };
    this.listeners.forEach((l) => l(state));
  }

  isActive(id: string) {
    return this.activeId === id && !!this.audio && !this.audio.paused;
  }

  isPaused(id: string) {
    return this.activeId === id && !!this.audio && this.audio.paused && this.audio.currentTime > 0;
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.removeAttribute("src");
      this.audio.load();
      this.audio.onended = null;
    }
    this.activeId = null;
    this.emit();
  }

  pause() {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
      this.emit();
    }
  }

  async resume(id: string) {
    if (this.activeId === id && this.audio) {
      await this.audio.play();
      this.emit();
    }
  }

  async play(id: string, url: string, onEnded?: () => void) {
    // Always stop whatever was playing before
    const a = this.ensureAudio();
    a.pause();
    a.onended = null;
    this.activeId = id;
    a.src = url;
    a.currentTime = 0;
    a.onended = () => {
      this.emit();
      onEnded?.();
    };
    await a.play();
    this.emit();
  }
}

export const audioController = new AudioController();
