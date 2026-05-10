# Server-Side Paywall Authorization

This is a critical security fix. Today the app has no user authentication and "unlocked books" live entirely in `localStorage`, so anyone can grant themselves free access via DevTools. Stripe Checkout works, but nothing the client claims is verified server-side at read time. The fix below introduces real authentication, persists purchases in the database, and serves paid book content through an authenticated edge function so client tampering cannot bypass it.

## What you'll see as a user

- A new **Sign in / Sign up** screen (email + password, plus Google).
- You must be signed in to buy a book or open a paid book.
- After a successful Stripe payment, the purchase is recorded against your account on the server, not in your browser. Clearing storage or switching devices keeps your library.
- A "Restore purchases" option re-syncs from the server.
- Free content (Bhagavad Gita verses, free verse audio CDN) stays open to everyone, no login required.

## Database changes

Add two tables (with RLS) and one helper:

- `profiles` — one row per auth user (`user_id`, `display_name`). Auto-created on signup via trigger. Used so the rest of the app can read user metadata without hitting `auth.users`.
- `purchases` — `user_id`, `book_id`, `stripe_session_id` (unique), `amount`, `currency`, `created_at`. RLS: a user can only `SELECT` their own rows. No client `INSERT` / `UPDATE` / `DELETE` policies — only edge functions using the service role can write.
- `has_purchased(_user_id uuid, _book_id text)` — `SECURITY DEFINER` SQL function that returns `true` iff a row exists in `purchases`. Used by the content edge function and (optionally) by future RLS policies.

## Edge function changes

- `create-checkout` — now requires a valid JWT. Reads `user_id` from `getClaims()`, keeps the server-side `BOOK_CATALOG` price, and stores `user_id` + `bookId` in the Stripe session `metadata`. Rejects unauthenticated requests.
- `verify-payment` — requires a valid JWT. Retrieves the Stripe session, confirms `payment_status === "paid"` and that `metadata.user_id` matches the caller, then `INSERT`s into `purchases` (idempotent on `stripe_session_id`) using the service-role client. Returns `{ paid, bookId }`.
- `get-book-content` (new) — requires a valid JWT. Takes `{ bookId }`, calls `has_purchased(user_id, bookId)`, and only then returns the book sections JSON. For free books it returns content directly. This is the choke point that makes localStorage tampering useless: the content itself never leaves the server unless the DB confirms purchase.

All three keep generic error messages and log details server-side.

## Frontend changes

- New `/auth` page with sign-in / sign-up tabs (email+password and Google). Uses `supabase.auth.onAuthStateChange` set up before `getSession()`.
- New `usePurchases` hook backed by a Supabase query against `purchases` (not localStorage). Exposes `isUnlocked(bookId)` and `refetch()`.
- `BookReader` no longer reads `library:unlocked`. It calls the `get-book-content` edge function; if the function returns 403, it redirects to the paywall / sign-in.
- `BookDetail` "Buy" button requires sign-in; if signed out, redirects to `/auth?next=...`.
- `PaymentSuccess` calls `verify-payment` with the user's JWT, then refetches `purchases`. No more `localStorage.setItem("library:unlocked", ...)`.
- `Settings` "Purchase History" reads from the `purchases` table. Old `library:purchases` localStorage code is removed.
- All `useUnlockedBooks`, `library:unlocked` writes, and any query-param unlock paths are deleted.

Reading progress, bookmarks, and reader prefs stay in `localStorage` — they are not security-sensitive.

## Verification (after build)

- Signed-out: hitting `/read/<paid-book>` redirects to `/auth`. Calling `get-book-content` directly returns 401.
- Signed-in but no purchase: `get-book-content` returns 403; UI shows paywall.
- Manually setting `localStorage['library:unlocked']` to any value has no effect — content still gated by the edge function.
- After a real Stripe test payment, `purchases` row appears, `verify-payment` returns `paid: true`, content loads, and clearing localStorage does not lose access.
- Trying to call `verify-payment` with another user's `session_id` is rejected (metadata mismatch).

## Open question before I start

One decision affects scope. Please pick:

1. **Migrate existing localStorage "purchases" to the database on first login** — friendlier for current testers, but technically grants paid access based on untrusted client data the first time. Recommended only if no real money has been taken yet.
2. **Do not migrate** — every existing "unlocked" book must be paid for again. Strictly correct, slightly worse UX for testers.

Reply "1" or "2" (or "go" for option 2, the safer default) and I'll implement.
