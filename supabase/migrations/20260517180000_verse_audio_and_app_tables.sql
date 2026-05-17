-- Storage: public verse-audio bucket (MP3 playback)
INSERT INTO storage.buckets (id, name, public)
VALUES ('verse-audio', 'verse-audio', true)
ON CONFLICT (id) DO UPDATE SET public = true;

CREATE POLICY "Verse audio is publicly readable"
ON storage.objects FOR SELECT
USING (bucket_id = 'verse-audio');

-- App tables (Stripe verify-payment / profiles — if not already present)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE,
  display_name text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  book_id text NOT NULL,
  amount integer NOT NULL,
  currency text NOT NULL DEFAULT 'inr',
  stripe_session_id text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION public.has_purchased(_user_id uuid, _book_id text)
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.purchases
    WHERE user_id = _user_id AND book_id = _book_id
  );
$$;
