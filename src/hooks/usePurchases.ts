import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export interface PurchaseRecord {
  bookId: string;
  price: number; // in INR rupees
  purchasedAt: number; // epoch ms
  currency: string;
}

interface PurchaseRow {
  book_id: string;
  amount: number;
  currency: string;
  created_at: string;
}

const fromRow = (r: PurchaseRow): PurchaseRecord => ({
  bookId: r.book_id,
  // amount is stored in smallest currency unit (paise/cents)
  price: Math.round((r.amount ?? 0) / 100),
  currency: r.currency ?? "INR",
  purchasedAt: new Date(r.created_at).getTime(),
});

export const usePurchases = () => {
  const { user, loading: authLoading } = useAuth();
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!user) {
      setPurchases([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from("purchases")
      .select("book_id, amount, currency, created_at")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("usePurchases: fetch failed", error);
      setPurchases([]);
    } else {
      setPurchases((data ?? []).map(fromRow));
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (authLoading) return;
    void refresh();
  }, [authLoading, refresh]);

  // Realtime: keep purchases in sync after a successful checkout
  useEffect(() => {
    if (!user) return;
    const channel = supabase
      .channel(`purchases:${user.id}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "purchases",
          filter: `user_id=eq.${user.id}`,
        },
        () => void refresh(),
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, refresh]);

  return { purchases, loading, refresh };
};
