import { useCallback, useEffect, useState } from "react";

export interface PurchaseRecord {
  bookId: string;
  price: number; // INR paid
  purchasedAt: number; // epoch ms
  currency?: string;
}

const KEY = "library:purchases";

const read = (): PurchaseRecord[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as PurchaseRecord[]) : [];
  } catch {
    return [];
  }
};

const write = (items: PurchaseRecord[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* ignore */
  }
};

export const recordPurchase = (entry: PurchaseRecord) => {
  const items = read();
  // Avoid duplicates per bookId — keep the most recent
  const filtered = items.filter((i) => i.bookId !== entry.bookId);
  filtered.push(entry);
  write(filtered);
  // Notify listeners in same tab
  window.dispatchEvent(new Event("purchases:updated"));
};

export const usePurchases = () => {
  const [items, setItems] = useState<PurchaseRecord[]>(() => read());

  useEffect(() => {
    const sync = () => setItems(read());
    window.addEventListener("storage", sync);
    window.addEventListener("focus", sync);
    window.addEventListener("purchases:updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("focus", sync);
      window.removeEventListener("purchases:updated", sync);
    };
  }, []);

  const remove = useCallback((bookId: string) => {
    write(read().filter((i) => i.bookId !== bookId));
    setItems(read());
    window.dispatchEvent(new Event("purchases:updated"));
  }, []);

  return { purchases: items, remove };
};
