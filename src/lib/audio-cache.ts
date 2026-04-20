// Two-level audio cache for TTS-generated MP3s.
// L1: in-memory Map<key, objectUrl> — instant playback within session.
// L2: localStorage<key, base64 dataUrl> — persists across reloads so we
//     never re-spend ElevenLabs credits for verses already generated.

// Bumped to v2 after Bengali source text was corrected — old cached
// Bengali audio (which was Hindi pronounced with Bengali letters) must
// be discarded so users hear the regenerated, properly-Bengali audio.
const LS_PREFIX = "gita-audio:v2:";
// Cap stored audio entries to avoid blowing past localStorage quota (~5MB).
const MAX_ENTRIES = 60;

const memCache = new Map<string, string>();

const arrayBufferToBase64 = (buf: ArrayBuffer): string => {
  const bytes = new Uint8Array(buf);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + chunk)));
  }
  return btoa(binary);
};

const trackKey = (k: string) => {
  try {
    const idxRaw = localStorage.getItem(LS_PREFIX + "__index");
    const idx: string[] = idxRaw ? JSON.parse(idxRaw) : [];
    const filtered = idx.filter((x) => x !== k);
    filtered.push(k);
    while (filtered.length > MAX_ENTRIES) {
      const evict = filtered.shift();
      if (evict) localStorage.removeItem(LS_PREFIX + evict);
    }
    localStorage.setItem(LS_PREFIX + "__index", JSON.stringify(filtered));
  } catch {
    /* ignore */
  }
};

export const getCachedAudio = (key: string): string | null => {
  if (memCache.has(key)) return memCache.get(key)!;
  try {
    const stored = localStorage.getItem(LS_PREFIX + key);
    if (stored) {
      memCache.set(key, stored);
      return stored;
    }
  } catch {
    /* ignore */
  }
  return null;
};

export const setCachedAudio = (key: string, buf: ArrayBuffer): string => {
  const b64 = arrayBufferToBase64(buf);
  const dataUrl = `data:audio/mpeg;base64,${b64}`;
  memCache.set(key, dataUrl);
  try {
    localStorage.setItem(LS_PREFIX + key, dataUrl);
    trackKey(key);
  } catch {
    // Quota exceeded — purge oldest then retry once
    try {
      const idxRaw = localStorage.getItem(LS_PREFIX + "__index");
      const idx: string[] = idxRaw ? JSON.parse(idxRaw) : [];
      while (idx.length > 10) {
        const evict = idx.shift();
        if (evict) localStorage.removeItem(LS_PREFIX + evict);
      }
      localStorage.setItem(LS_PREFIX + "__index", JSON.stringify(idx));
      localStorage.setItem(LS_PREFIX + key, dataUrl);
      trackKey(key);
    } catch {
      /* give up persistence — memory cache still works */
    }
  }
  return dataUrl;
};
