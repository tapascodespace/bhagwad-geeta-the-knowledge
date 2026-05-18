// Hook for purchasing books via Google Play Billing on native,
// with a fallback message on web.
import { useState } from "react";
import { purchaseBook, restorePurchases, isNativePlatform } from "@/lib/native-purchases";
import { useUnlockedBooks } from "@/hooks/useLibrary";
import { recordPurchase } from "@/hooks/usePurchases";
import { getBook } from "@/data/books";

export const useNativePurchase = () => {
  const [loading, setLoading] = useState(false);
  const { unlock } = useUnlockedBooks();

  const buy = async (bookId: string): Promise<{ success: boolean; webFallback: boolean }> => {
    if (!isNativePlatform()) {
      return { success: false, webFallback: true };
    }

    setLoading(true);
    try {
      const result = await purchaseBook(bookId);
      if (result.success) {
        unlock(bookId);
        const book = getBook(bookId);
        if (book) {
          recordPurchase({
            bookId: book.id,
            price: book.price,
            currency: "INR",
            purchasedAt: Date.now(),
          });
        }
        return { success: true, webFallback: false };
      }
      return { success: false, webFallback: false };
    } finally {
      setLoading(false);
    }
  };

  const restore = async (): Promise<string[]> => {
    if (!isNativePlatform()) return [];
    setLoading(true);
    try {
      const bookIds = await restorePurchases();
      for (const id of bookIds) {
        unlock(id);
        const book = getBook(id);
        if (book) {
          recordPurchase({
            bookId: book.id,
            price: book.price,
            currency: "INR",
            purchasedAt: Date.now(),
          });
        }
      }
      return bookIds;
    } finally {
      setLoading(false);
    }
  };

  return { buy, restore, loading, isNative: isNativePlatform() };
};
