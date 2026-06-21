---
name: testing-bhagwad-geeta
description: Test the Bhagwad Geeta app end-to-end. Use when verifying UI changes, purchase flow, legal pages, or settings.
---

# Testing Bhagwad Geeta The Knowledge

## Running the App Locally

```bash
cd /home/ubuntu/repos/bhagwad-geeta-the-knowledge
npm install
npx vite --host 0.0.0.0 --port 5174
```

The app runs at `http://localhost:5174/`. On first load, select a language (Bengali/Hindi/English) to proceed.

## Key Test Flows

### 1. Privacy Policy & Terms of Service
- Navigate to Settings (gear icon in bottom nav) → scroll to "Support" section
- Tap "Privacy Policy" → should navigate to `/privacy` (NOT show a toast)
- Tap "Terms & Conditions" → should navigate to `/terms` (NOT show a toast)
- Both pages should have 6 content sections and a back button

### 2. Book Purchase (Web Fallback)
- Navigate to Library (book icon in bottom nav)
- Tap any paid book (shows ₹99 badge)
- On the book detail page, tap "Buy now — ₹99"
- **Expected on web:** Toast appears saying "This book can only be purchased in the app."
- **Expected on Android native:** Google Play Billing dialog opens (requires real device + Play Console products)
- No Stripe references should appear anywhere in the UI

### 3. Payment Redirect Stubs
- Navigate to `/payment-success` → should immediately redirect to `/library`
- Navigate to `/payment-cancelled` → should immediately redirect to `/library`

### 4. PWA / Service Worker
- Service workers only register in **production builds** (`npm run build` + serve from `dist/`)
- In dev mode, service worker will NOT be active — this is expected behavior
- To test SW: `npm run build && npx serve dist -l 5174`

## Architecture Notes

### Login/Auth
- Login (Supabase Google OAuth + email OTP) is **only used in Settings.tsx** to display user email
- It does NOT gate any content, sync data, or connect to purchases
- All user data is stored in `localStorage` (device-only, no server sync):
  - `library:unlocked` — unlocked books
  - `library:purchases` — purchase records
  - `library:progress` — reading progress
  - `library:book-bookmarks` — bookmarks
  - `library:reader-prefs` — font size, theme

### Google Play Billing
- Payments are handled by `@capgo/native-purchases` (native plugin)
- On web, `isNativePlatform()` returns false and purchases show a fallback toast
- Google Play handles all payment auth via the user's Google account on the device
- Product IDs follow the pattern `book_<slug>` (e.g., `book_bhagavad_gita`)

### Capacitor / Android
- App ID: `com.bhagwadgeeta.knowledge`
- To test on Android device: `npm run build && npx cap sync && npx cap run android`
- Signing keystore must be configured in `android/keystore.properties` for release builds

## Lint & Build

```bash
npm run lint    # ESLint — may have pre-existing warnings in auto-generated UI components
npm run build   # Vite build + Workbox SW generation
```

## Vercel Preview
- PRs get automatic Vercel preview deployments
- The preview URL might require Vercel SSO login depending on project settings
- If SSO is required, test locally instead

## Devin Secrets Needed
- No secrets needed for basic UI testing
- For Google Play Billing end-to-end testing: requires Google Play Console access + test in-app products
- For Firebase analytics: requires `google-services.json` from Firebase Console
