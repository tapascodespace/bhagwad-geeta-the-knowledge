// Upload a verse MP3 to the public verse-audio bucket (service role, server-side only).
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BUCKET = "verse-audio";
const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const FILENAME_RE = /^ch\d+-v\d+-(?:shloka|(?:hi|en|bn)-(?:translation|explanation))\.mp3$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = Deno.env.get("SUPABASE_URL");
    const serviceKey =
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ??
      Deno.env.get("SUPABASE_SECRET_KEY");
    if (!url || !serviceKey) {
      console.error("upload-verse-audio: missing Supabase env");
      return new Response(JSON.stringify({ error: "Service unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => null) as {
      filename?: string;
      audioBase64?: string;
    } | null;

    const filename = body?.filename?.trim();
    const audioBase64 = body?.audioBase64;

    if (!filename || !FILENAME_RE.test(filename)) {
      return new Response(JSON.stringify({ error: "Invalid filename" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!audioBase64 || typeof audioBase64 !== "string") {
      return new Response(JSON.stringify({ error: "Missing audioBase64" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const binary = Uint8Array.from(atob(audioBase64), (c) => c.charCodeAt(0));
    if (binary.byteLength > MAX_BYTES) {
      return new Response(JSON.stringify({ error: "File too large" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(url, serviceKey);
    const { error } = await supabase.storage.from(BUCKET).upload(filename, binary, {
      contentType: "audio/mpeg",
      upsert: true,
    });

    if (error) {
      console.error("upload-verse-audio storage error:", error);
      return new Response(JSON.stringify({ error: "Upload failed" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const publicUrl = `${url}/storage/v1/object/public/${BUCKET}/${filename}`;
    return new Response(JSON.stringify({ ok: true, url: publicUrl }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("upload-verse-audio error:", e);
    return new Response(JSON.stringify({ error: "Service unavailable" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
