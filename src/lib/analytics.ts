// Analytics scaffolding for Firebase Analytics / Google Analytics.
// Currently a no-op stub. To activate:
// 1. Create a Firebase project at https://console.firebase.google.com
// 2. Add the Android app with package name "com.bhagwadgeeta.knowledge"
// 3. Download google-services.json to android/app/
// 4. Install: npm install firebase
// 5. Initialize Firebase in this file with your config

type EventParams = Record<string, string | number | boolean>;

let firebaseAnalytics: { logEvent: (name: string, params?: EventParams) => void } | null = null;

async function getAnalytics() {
  if (firebaseAnalytics) return firebaseAnalytics;

  try {
    const { initializeApp } = await import("firebase/app");
    const { getAnalytics, logEvent } = await import("firebase/analytics");

    const app = initializeApp({
      // TODO: Replace with your Firebase config from the Firebase Console
      // apiKey: "...",
      // authDomain: "...",
      // projectId: "...",
      // storageBucket: "...",
      // messagingSenderId: "...",
      // appId: "...",
      // measurementId: "...",
    });

    const analytics = getAnalytics(app);
    firebaseAnalytics = {
      logEvent: (name: string, params?: EventParams) => logEvent(analytics, name, params),
    };
    return firebaseAnalytics;
  } catch {
    return null;
  }
}

/** Log an analytics event. No-op until Firebase is configured. */
export async function trackEvent(name: string, params?: EventParams): Promise<void> {
  const analytics = await getAnalytics();
  analytics?.logEvent(name, params);
}

/** Track a screen view */
export async function trackScreen(screenName: string): Promise<void> {
  await trackEvent("screen_view", { screen_name: screenName });
}

/** Track a book purchase */
export async function trackPurchase(bookId: string, price: number): Promise<void> {
  await trackEvent("purchase", {
    item_id: bookId,
    value: price,
    currency: "INR",
  });
}

/** Track verse audio play */
export async function trackAudioPlay(chapter: number, verse: number, language: string): Promise<void> {
  await trackEvent("audio_play", {
    chapter,
    verse,
    language,
  });
}
