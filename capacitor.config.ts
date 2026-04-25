import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.51f564b6e7cd45d8a13c995607cd78c9',
  appName: 'Bhagwad Geeta The Knowledge',
  webDir: 'dist',
  // ───────────────────────────────────────────────────────────────
  // DEV MODE (hot-reload from Lovable preview).
  // Great while testing on a real device / emulator.
  //
  // BEFORE you build the release AAB for the Play Store:
  //   1) DELETE the entire `server` block below (or comment it out).
  //   2) Run `npm run build` then `npx cap sync android`.
  // This makes the app load the bundled local web build instead of
  // the Lovable preview URL, which is required for Play Store.
  // ───────────────────────────────────────────────────────────────
  server: {
    url: 'https://51f564b6-e7cd-45d8-a13c-995607cd78c9.lovableproject.com?forceHideBadge=true',
    cleartext: true,
  },
};

export default config;
