-- Auto-create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Ensure purchases.user_id is unique per (user_id, stripe_session_id) for idempotency
CREATE UNIQUE INDEX IF NOT EXISTS purchases_session_unique
  ON public.purchases (stripe_session_id);

CREATE INDEX IF NOT EXISTS purchases_user_book_idx
  ON public.purchases (user_id, book_id);