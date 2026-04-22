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

  getAudioElement = (): HTMLAudioElement | null => this.audio;

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
    a.onended = () => {
      this.update({ isPlaying: false, activeId: null });
      onEnded?.();
    };
    // Workaround: MP3s without an accurate duration header (e.g. ElevenLabs
    // output) report Infinity/0 for `duration` until fully scanned. Seek to
    // the end so the browser computes the real duration, then reset to 0.
    await this.resolveDuration(a);
    try {
      a.currentTime = 0;
    } catch {
      /* ignore */
    }
    await a.play();
    this.update({ activeId: id, isPlaying: true });
  }

  private resolveDuration(a: HTMLAudioElement): Promise<void> {
    return new Promise((resolve) => {
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        a.removeEventListener("durationchange", onDurChange);
        resolve();
      };
      const onDurChange = () => {
        if (isFinite(a.duration) && a.duration > 0) done();
      };
      const start = () => {
        if (isFinite(a.duration) && a.duration > 0) {
          done();
          return;
        }
        a.addEventListener("durationchange", onDurChange);
        try {
          a.currentTime = 1e101;
        } catch {
          /* ignore — browser will still emit durationchange */
        }
        // Safety timeout so playback never stalls
        setTimeout(done, 1500);
      };
      if (a.readyState >= 1) start();
      else a.addEventListener("loadedmetadata", start, { once: true });
    });
  }
}

export const audioController = new AudioController();
