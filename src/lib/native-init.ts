// Initialize native Capacitor plugins (Android/iOS).
// This module is imported once in main.tsx and sets up:
// - Status bar styling
// - Splash screen auto-hide
// - Android back button handling
// - App state lifecycle
import { Capacitor } from "@capacitor/core";

export async function initNativePlugins(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;

  const [{ StatusBar, Style }, { SplashScreen }, { App }] = await Promise.all([
    import("@capacitor/status-bar"),
    import("@capacitor/splash-screen"),
    import("@capacitor/app"),
  ]);

  // Style the status bar
  try {
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.setBackgroundColor({ color: "#3d1a0a" });
  } catch {
    // Status bar may not be available on all platforms
  }

  // Hide splash screen after a brief delay
  try {
    await SplashScreen.hide({ fadeOutDuration: 300 });
  } catch {
    // Splash screen may already be hidden
  }

  // Handle Android back button
  App.addListener("backButton", ({ canGoBack }) => {
    if (canGoBack) {
      window.history.back();
    } else {
      App.exitApp();
    }
  });
}
