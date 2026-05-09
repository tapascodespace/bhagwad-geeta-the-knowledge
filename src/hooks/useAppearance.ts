import { useCallback, useEffect, useState } from "react";

export interface Appearance {
  fontScale: number; // 0.85 - 1.3 (relative to base 17px)
  lineSpacing: number; // 1.4 - 2.0
}

const KEY = "gita.appearance";

const DEFAULTS: Appearance = { fontScale: 1, lineSpacing: 1.65 };

const read = (): Appearance => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Appearance>) };
  } catch {
    /* ignore */
  }
  return DEFAULTS;
};

const apply = (a: Appearance) => {
  const root = document.documentElement;
  root.style.setProperty("--app-font-scale", String(a.fontScale));
  root.style.setProperty("--app-line-spacing", String(a.lineSpacing));
};

export const initAppearance = () => apply(read());

export const useAppearance = () => {
  const [appearance, setAppearance] = useState<Appearance>(() => read());

  useEffect(() => {
    apply(appearance);
    try {
      localStorage.setItem(KEY, JSON.stringify(appearance));
    } catch {
      /* ignore */
    }
  }, [appearance]);

  const update = useCallback((next: Partial<Appearance>) => {
    setAppearance((p) => ({ ...p, ...next }));
  }, []);

  const reset = useCallback(() => setAppearance(DEFAULTS), []);

  return { appearance, update, reset };
};
