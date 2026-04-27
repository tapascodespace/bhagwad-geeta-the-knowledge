// Background music controller.
// - Plays a calm, looping bansuri track underneath voice playback.
// - Starts from 0:00 each time voice begins (verse audio or Play All).
// - Ducks volume while voice is playing, and stops on voice stop.
// - Smoothly fades in / out and never overlaps multiple instances.
import bansuriUrl from "@/assets/bansuri-drift.mp3";
import { audioController } from "@/lib/audio-controller";
import { playAllController } from "@/lib/play-all-controller";

const BASE_VOLUME = 0.45; // default music volume (55%) — audible at ~50–60% phone volume
const DUCKED_VOLUME = 0.32; // while voice is audible (~32%) — present but never masks voice
const FADE_MS = 700; // fade in/out duration

class BackgroundMusic {
  private audio: HTMLAudioElement | null = null;
  private fadeRaf: number | null = null;
  private wired = false;

  private ensure() {
    if (!this.audio) {
      const a = new Audio(bansuriUrl);
      a.loop = true;
      a.preload = "auto";
      a.volume = 0;
      this.audio = a;
    }
    return this.audio;
  }

  /** Wire up listeners so music follows voice state automatically. */
  wire() {
    if (this.wired) return;
    this.wired = true;

    const sync = () => {
      const voice = audioController.getSnapshot();
      const playAll = playAllController.getSnapshot();
      const voiceActive = voice.isPlaying || playAll.isActive;

      if (voiceActive) {
        // Start (from 0) the first time, then just keep ducking smoothly.
        if (!this.audio || this.audio.paused) {
          this.start();
        } else {
          this.fadeTo(DUCKED_VOLUME);
        }
      } else {
        this.stop();
      }
    };

    audioController.subscribe(sync);
    playAllController.subscribe(sync);
  }

  private start() {
    const a = this.ensure();
    try {
      a.currentTime = 0;
    } catch {
      /* ignore */
    }
    a.volume = 0;
    const p = a.play();
    if (p && typeof p.then === "function") {
      p.then(() => this.fadeTo(DUCKED_VOLUME)).catch(() => {
        /* autoplay blocked; ignore */
      });
    } else {
      this.fadeTo(DUCKED_VOLUME);
    }
  }

  stop() {
    if (!this.audio || this.audio.paused) return;
    this.fadeTo(0, () => {
      if (this.audio) {
        this.audio.pause();
        try {
          this.audio.currentTime = 0;
        } catch {
          /* ignore */
        }
      }
    });
  }

  private fadeTo(target: number, onDone?: () => void) {
    const a = this.ensure();
    if (this.fadeRaf) cancelAnimationFrame(this.fadeRaf);
    const start = a.volume;
    const delta = target - start;
    if (Math.abs(delta) < 0.001) {
      a.volume = target;
      onDone?.();
      return;
    }
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / FADE_MS);
      a.volume = Math.max(0, Math.min(1, start + delta * t));
      if (t < 1) {
        this.fadeRaf = requestAnimationFrame(step);
      } else {
        this.fadeRaf = null;
        onDone?.();
      }
    };
    this.fadeRaf = requestAnimationFrame(step);
  }
}

export const backgroundMusic = new BackgroundMusic();
// Note: BASE_VOLUME is reserved for future "voice paused" states; current
// behaviour ducks to DUCKED_VOLUME whenever voice is active.
export const BG_MUSIC_VOLUMES = { BASE_VOLUME, DUCKED_VOLUME };
