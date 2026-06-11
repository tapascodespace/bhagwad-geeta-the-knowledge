// Google Play Billing integration via @capgo/native-purchases.
// This module wraps the native plugin and provides a simple API for
// purchasing books and restoring previous purchases.
//
// SETUP REQUIRED:
// 1. Create products in Google Play Console matching the IDs in PRODUCT_IDS
// 2. The product IDs follow the pattern: "book-<bookId>"
//    e.g. book ID "bhagavad-gita" → product ID "book-bhagavad-gita"

import { Capacitor } from "@capacitor/core";

export interface NativePurchaseResult {
  success: boolean;
  productId: string;
  bookId: string;
  transactionId?: string;
}

/** Convert a book ID to a Google Play product ID */
export const toProductId = (bookId: string): string =>
  `book-${bookId}`;

/** Convert a Google Play product ID back to a book ID */
export const toBookId = (productId: string): string =>
  productId.replace(/^book-/, "");

const isNative = (): boolean => Capacitor.isNativePlatform();

let purchasesModule: typeof import("@capgo/native-purchases") | null = null;
let configured = false;

async function getPurchases() {
  if (!isNative()) return null;
  if (!purchasesModule) {
    purchasesModule = await import("@capgo/native-purchases");
  }
  if (!configured) {
    try {
      await purchasesModule.NativePurchases.configure({
        apiKey: "goog_placeholder",
      });
      configured = true;
    } catch (err) {
      console.warn("NativePurchases.configure() failed:", err);
    }
  }
  return purchasesModule;
}

/**
 * Purchase a book via Google Play Billing.
 * On web, this is a no-op that returns { success: false }.
 */
export async function purchaseBook(bookId: string): Promise<NativePurchaseResult> {
  const mod = await getPurchases();
  if (!mod) {
    return { success: false, productId: toProductId(bookId), bookId };
  }

  const productId = toProductId(bookId);
  try {
    const result = await mod.NativePurchases.purchaseProduct({
      productIdentifier: productId,
      productType: "inapp",
    });

    return {
      success: true,
      productId,
      bookId,
      transactionId: result.transactionId,
    };
  } catch (err) {
    console.error("Native purchase failed:", err);
    return { success: false, productId, bookId };
  }
}

/**
 * Restore previously purchased books.
 * Returns an array of book IDs that the user has purchased.
 */
export async function restorePurchases(): Promise<string[]> {
  const mod = await getPurchases();
  if (!mod) return [];

  try {
    const result = await mod.NativePurchases.restorePurchases();
    return (result.purchases ?? [])
      .filter((p) => p.productIdentifier.startsWith("book-"))
      .map((p) => toBookId(p.productIdentifier));
  } catch (err) {
    console.error("Restore purchases failed:", err);
    return [];
  }
}

/**
 * Get the localized price for a book from the Play Store.
 * Returns null on web or if the product isn't found.
 */
export async function getBookPrice(bookId: string): Promise<string | null> {
  const mod = await getPurchases();
  if (!mod) return null;

  try {
    const productId = toProductId(bookId);
    const result = await mod.NativePurchases.getProducts({
      productIdentifiers: [productId],
      productType: "inapp",
    });
    const product = result.products?.find((p) => p.productIdentifier === productId);
    return product?.priceString ?? null;
  } catch {
    return null;
  }
}

// ── Subscription helpers ─────────────────────────────────────────────

const SUBSCRIPTION_PRODUCT_ID = "premium_yearly";
const SUBSCRIPTION_PLAN_ID = "yearly-plan";

export interface SubscriptionResult {
  success: boolean;
  active: boolean;
  productId?: string;
  expiresAt?: number;
  transactionId?: string;
}

/**
 * Purchase the yearly subscription via Google Play Billing.
 * On web, returns { success: false, active: false }.
 */
export async function purchaseSubscription(): Promise<SubscriptionResult> {
  const mod = await getPurchases();
  if (!mod) return { success: false, active: false };

  try {
    const result = await mod.NativePurchases.purchaseProduct({
      productIdentifier: SUBSCRIPTION_PRODUCT_ID,
      planIdentifier: SUBSCRIPTION_PLAN_ID,
      productType: "subs",
    });
    return {
      success: true,
      active: true,
      productId: SUBSCRIPTION_PRODUCT_ID,
      transactionId: result.transactionId,
    };
  } catch (err) {
    console.error("Subscription purchase failed:", err);
    return { success: false, active: false };
  }
}

/**
 * Restore/check subscription status via Google Play.
 * Returns whether the subscription is currently active.
 */
export async function restoreSubscription(): Promise<SubscriptionResult> {
  const mod = await getPurchases();
  if (!mod) return { success: false, active: false };

  try {
    const result = await mod.NativePurchases.restorePurchases();
    const sub = (result.purchases ?? []).find(
      (p) => p.productIdentifier === SUBSCRIPTION_PRODUCT_ID,
    );
    if (sub) {
      return {
        success: true,
        active: true,
        productId: SUBSCRIPTION_PRODUCT_ID,
        transactionId: sub.transactionId,
      };
    }
    return { success: true, active: false };
  } catch (err) {
    console.error("Restore subscription failed:", err);
    return { success: false, active: false };
  }
}

/**
 * Get the localized subscription price string from the Play Store.
 * Returns null on web or if the product isn't found.
 */
export async function getSubscriptionPrice(): Promise<string | null> {
  const mod = await getPurchases();
  if (!mod) return null;

  try {
    const result = await mod.NativePurchases.getProducts({
      productIdentifiers: [SUBSCRIPTION_PRODUCT_ID],
      productType: "subs",
    });
    const product = result.products?.find(
      (p) => p.productIdentifier === SUBSCRIPTION_PRODUCT_ID,
    );
    return product?.priceString ?? null;
  } catch {
    return null;
  }
}

/** Whether we're running on a native platform with billing support */
export { isNative as isNativePlatform };
