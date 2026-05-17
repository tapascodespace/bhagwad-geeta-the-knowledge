export type NowPlayingMeta = {
  title: string;
  artist?: string;
  album?: string;
};

const iconUrl = (size: number) =>
  new URL(`/icons/icon-${size}.png`, window.location.origin).href;

const artwork = () => [
  { src: iconUrl(192), sizes: "192x192", type: "image/png" },
  { src: iconUrl(512), sizes: "512x512", type: "image/png" },
];

export const updateMediaSession = (meta: NowPlayingMeta) => {
  if (!("mediaSession" in navigator)) return;

  navigator.mediaSession.metadata = new MediaMetadata({
    title: meta.title,
    artist: meta.artist ?? "Srimad Bhagavad Gita",
    album: meta.album ?? "Bhagwad Geeta The Knowledge",
    artwork: artwork(),
  });
};

export const clearMediaSession = () => {
  if (!("mediaSession" in navigator)) return;
  navigator.mediaSession.metadata = null;
};

export const bindMediaSessionHandlers = (handlers: {
  onPlay?: () => void;
  onPause?: () => void;
}) => {
  if (!("mediaSession" in navigator)) return;

  try {
    navigator.mediaSession.setActionHandler("play", handlers.onPlay ?? null);
    navigator.mediaSession.setActionHandler("pause", handlers.onPause ?? null);
  } catch {
    /* unsupported action */
  }
};
