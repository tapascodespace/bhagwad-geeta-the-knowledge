import { hashString } from "@/lib/verse-pick";

/** Cinematic backgrounds for verse share cards (portrait 9:16). */
export const SHARE_BACKGROUNDS = [
  "/share-backgrounds/bg-halo.png",
  "/share-backgrounds/bg-1.png",
  "/share-backgrounds/bg-2.png",
  "/share-backgrounds/bg-3.png",
  "/share-backgrounds/bg-4.png",
  "/share-backgrounds/bg-5.png",
  "/share-backgrounds/bg-6.png",
  "/share-backgrounds/bg-7.png",
  "/share-backgrounds/bg-8.png",
  "/share-backgrounds/bg-9.png",
] as const;

export const pickBackgroundBySeed = (seed: string) => {
  const idx = hashString(`gita-bg:${seed}`) % SHARE_BACKGROUNDS.length;
  return SHARE_BACKGROUNDS[idx];
};
