

## Bhagavad Gita Bengali App — Implementation Plan

### Overview
A React-based Bhagavad Gita app with Bengali content, wrapped with Capacitor for native Android deployment. Clean, minimal UI inspired by the "Bhagavad Gita for All" style. Audio will be skipped for now.

### Content & Data
- Local JSON data for all 18 chapters with: chapter name (Bengali), Sanskrit slokas, Bengali transliteration, Bengali translation, and simple Bengali explanation
- Sample full content for chapters 1-3; remaining chapters with 5+ verses each as a starting point
- All text in Bengali script (বাংলা)

### Screens & Navigation

1. **Home Screen** — App logo/title "শ্রীমদ্ভগবদ্গীতা", a brief intro in Bengali, and a "অধ্যায় দেখুন" (View Chapters) button. Warm, spiritual color palette (saffron/orange accents on cream background).

2. **Chapter List** — Grid/list of 18 chapters showing chapter number, Bengali name, Sanskrit name, and verse count. Tappable cards.

3. **Chapter Detail / Verse List** — Chapter header with name and summary. List of all verses (শ্লোক) with preview text. Tap to read full verse.

4. **Verse View** — Full verse display: Sanskrit sloka, Bengali transliteration, Bengali translation, and Bengali explanation. Swipe or prev/next buttons to navigate between verses. Bookmark/favorite button.

5. **Bookmarks Screen** — List of all bookmarked/favorited verses, stored in localStorage. Tap to jump to the verse.

### Navigation
- Bottom tab bar with: Home (হোম), Chapters (অধ্যায়), Bookmarks (পছন্দ)
- Back navigation within chapter → verse flow

### Design
- Warm spiritual theme: cream/saffron background, dark text, orange accent color
- Clean card-based layouts with good typography for Bengali script
- Mobile-first responsive design optimized for phone screens

### Capacitor Setup
- Install Capacitor dependencies and configure for Android
- Provide instructions for the user to build and run on Android device/emulator

### Features Summary
- ✅ 18 chapters with Bengali content
- ✅ Verse-by-verse reading
- ✅ Bookmark/favorite system (localStorage)
- ✅ Clean minimal UI
- ✅ No login required
- ✅ Local data (fast, offline-capable)
- ⏭️ Audio playback (future addition)

