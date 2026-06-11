import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { isNativePlatform } from "@/lib/native-purchases";

const STORAGE_KEY = "gita.subscription";

interface SubscriptionState {
  active: boolean;
  expiresAt: number | null; // epoch ms — null when unknown / web-only dev override
  productId: string | null;
}

interface SubscriptionContextValue extends SubscriptionState {
  /** Whether a billing call is in progress */
  loading: boolean;
  /** Purchase the yearly subscription via Google Play */
  subscribe: () => Promise<boolean>;
  /** Restore a previously purchased subscription */
  restore: () => Promise<boolean>;
  /** Check whether a given chapter + verse is free (Ch 1, v 1-2) */
  isFreeVerse: (chapterId: number, verseId: number) => boolean;
  /** Dev-only: toggle subscription without billing */
  devToggle: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextValue | null>(null);

// ── Product configuration ────────────────────────────────────────────
export const SUBSCRIPTION_PRODUCT_ID = "premium-yearly";
export const SUBSCRIPTION_PLAN_ID = "yearly-plan"; // Base Plan ID in Google Play Console

// ── Persistence helpers ──────────────────────────────────────────────
const readState = (): SubscriptionState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as SubscriptionState;
      // If we have an expiry date and it's passed, mark inactive
      if (parsed.expiresAt && parsed.expiresAt < Date.now()) {
        return { active: false, expiresAt: parsed.expiresAt, productId: parsed.productId };
      }
      return parsed;
    }
  } catch { /* ignore */ }
  return { active: false, expiresAt: null, productId: null };
};

const writeState = (state: SubscriptionState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

// ── Provider ─────────────────────────────────────────────────────────
export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<SubscriptionState>(readState);
  const [loading, setLoading] = useState(false);

  // On mount (native only): silently check current entitlements
  useEffect(() => {
    if (!isNativePlatform()) return;
    (async () => {
      try {
        const { restoreSubscription } = await import("@/lib/native-purchases");
        const result = await restoreSubscription();
        if (result.active) {
          const next: SubscriptionState = {
            active: true,
            expiresAt: result.expiresAt ?? null,
            productId: result.productId ?? SUBSCRIPTION_PRODUCT_ID,
          };
          setState(next);
          writeState(next);
        }
      } catch {
        // Silently fail — user can manually restore later
      }
    })();
  }, []);

  const subscribe = useCallback(async (): Promise<boolean> => {
    if (!isNativePlatform()) {
      // Web fallback: no billing available
      return false;
    }
    setLoading(true);
    try {
      const { purchaseSubscription } = await import("@/lib/native-purchases");
      const result = await purchaseSubscription();
      if (result.success) {
        const next: SubscriptionState = {
          active: true,
          expiresAt: result.expiresAt ?? null,
          productId: SUBSCRIPTION_PRODUCT_ID,
        };
        setState(next);
        writeState(next);
        return true;
      }
      return false;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const restore = useCallback(async (): Promise<boolean> => {
    if (!isNativePlatform()) return false;
    setLoading(true);
    try {
      const { restoreSubscription } = await import("@/lib/native-purchases");
      const result = await restoreSubscription();
      if (result.active) {
        const next: SubscriptionState = {
          active: true,
          expiresAt: result.expiresAt ?? null,
          productId: result.productId ?? SUBSCRIPTION_PRODUCT_ID,
        };
        setState(next);
        writeState(next);
        return true;
      }
      return false;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const isFreeVerse = useCallback(
    (chapterId: number, verseId: number): boolean => {
      if (state.active) return true;
      // Only Chapter 1, Verse 1 and 2 are free
      return chapterId === 1 && (verseId === 1 || verseId === 2);
    },
    [state.active],
  );

  const devToggle = useCallback(() => {
    const next: SubscriptionState = state.active
      ? { active: false, expiresAt: null, productId: null }
      : { active: true, expiresAt: Date.now() + 365 * 24 * 60 * 60 * 1000, productId: "dev_override" };
    setState(next);
    writeState(next);
  }, [state.active]);

  return (
    <SubscriptionContext.Provider
      value={{
        ...state,
        loading,
        subscribe,
        restore,
        isFreeVerse,
        devToggle,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = (): SubscriptionContextValue => {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) throw new Error("useSubscription must be used within SubscriptionProvider");
  return ctx;
};
