
-- Create public bucket for pre-generated verse audio
INSERT INTO storage.buckets (id, name, public)
VALUES ('verse-audio', 'verse-audio', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Public read access
CREATE POLICY "Verse audio is publicly readable"
ON storage.objects
FOR SELECT
USING (bucket_id = 'verse-audio');
