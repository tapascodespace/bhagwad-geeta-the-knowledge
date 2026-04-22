import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bookmark,
  Settings,
  BookOpen,
  Headphones,
  Lightbulb,
  Share2,
  Copy,
  ArrowRight,
} from "lucide-react";
import { chapters, getChapterName, pickText } from "@/data/gita";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useLanguage } from "@/contexts/LanguageContext";
import VerseAudioPlayer from "@/components/VerseAudioPlayer";
import PlayAllButton from "@/components/PlayAllButton";
import { toast } from "@/hooks/use-toast";

const VerseView = () => {
  const { chapterId, verseId } = useParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { t, language } = useLanguage();

  const chapter = chapters.find((c) => c.id === Number(chapterId));
  const verseIdx = chapter?.verses.findIndex((v) => v.id === Number(verseId)) ?? -1;
  const verse = chapter?.verses[verseIdx];

  // Hooks must run unconditionally — keep them above any early return.
  const cacheKey = `${chapterId}-${verseId}-${language}`;
  const AUTOPLAY_FLAG = "gita-autoplay-chain";
  const [autoStartKey, setAutoStartKey] = useState<string | null>(null);
  const hasNext = !!chapter && verseIdx >= 0 && verseIdx < chapter.verses.length - 1;
  const hasNextRef = useRef(hasNext);
  hasNextRef.current = hasNext;

  useEffect(() => {
    if (sessionStorage.getItem(AUTOPLAY_FLAG) === "1") {
      sessionStorage.removeItem(AUTOPLAY_FLAG);
      setAutoStartKey(cacheKey);
    } else {
      setAutoStartKey(null);
    }
  }, [cacheKey]);

  if (!chapter || !verse) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground text-lg">{t("notFound")}</p>
      </div>
    );
  }

  const bookmarked = isBookmarked(chapter.id, verse.id);
  const chapterName = getChapterName(chapter, language);
  const translation = pickText(verse.translation, language);
  const explanation = pickText(verse.explanation, language);

  const goNext = () => {
    if (hasNext) navigate(`/chapters/${chapter.id}/verses/${chapter.verses[verseIdx + 1].id}`, { replace: true });
  };

  const handleCopy = async () => {
    const text = `${verse.sanskrit}\n\n${translation}${explanation ? `\n\n${explanation}` : ""}`;
    try {
      await navigator.clipboard.writeText(text);
      toast({ title: "Copied", description: "Verse copied to clipboard" });
    } catch {
      toast({ title: "Copy failed", variant: "destructive" });
    }
  };

  const handleShare = async () => {
    const text = `${chapterName} • ${t("verse")} ${verse.id}\n\n${verse.sanskrit}\n\n${translation}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `Bhagavad Gita ${chapter.id}.${verse.id}`, text });
      } else {
        await navigator.clipboard.writeText(text);
        toast({ title: "Copied to clipboard" });
      }
    } catch {
      /* user dismissed */
    }
  };

  const handleVerseAudioComplete = () => {
    if (!hasNextRef.current) return;
    sessionStorage.setItem(AUTOPLAY_FLAG, "1");
    setTimeout(() => {
      navigate(
        `/chapters/${chapter.id}/verses/${chapter.verses[verseIdx + 1].id}`,
        { replace: true }
      );
    }, 350);
  };

  const audioLang = (language === "hi" || language === "bn" ? language : "en") as "en" | "hi" | "bn";
  const playAllSegments = [
    { part: "shloka" as const, chapter: chapter.id, verse: verse.id, language: audioLang },
    { part: "translation" as const, chapter: chapter.id, verse: verse.id, language: audioLang },
    ...(explanation
      ? [{ part: "explanation" as const, chapter: chapter.id, verse: verse.id, language: audioLang }]
      : []),
  ];

  return (
    <div key={`${chapter.id}-${verse.id}`} className="pb-28 animate-fade-in">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <button
          onClick={() => navigate(`/chapters/${chapter.id}`)}
          className="w-11 h-11 rounded-full bg-card border border-border/60 flex items-center justify-center shadow-soft active:scale-95 transition-all"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmark(chapter.id, verse.id)}
            className="w-11 h-11 rounded-full bg-card border border-border/60 flex items-center justify-center shadow-soft active:scale-95 transition-all"
            aria-label="Bookmark"
          >
            <Bookmark
              className={`w-5 h-5 transition-all ${
                bookmarked ? "fill-primary text-primary" : "text-foreground"
              }`}
            />
          </button>
          <button
            onClick={() => navigate("/settings/language")}
            className="w-11 h-11 rounded-full bg-card border border-border/60 flex items-center justify-center shadow-soft active:scale-95 transition-all"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Decorative title */}
      <div className="text-center px-4 mb-2">
        <p className="font-sanskrit text-gold text-base tracking-wider">
          ॥ श्रीमद्भगवद्गीता ॥
        </p>
        <div className="text-gold/70 text-xs mt-1">━━━━ ✦ ━━━━</div>
      </div>

      <div className="text-center px-4 mb-5">
        <h1 className="font-display text-4xl font-semibold text-foreground leading-tight">
          {t("chapter")} {chapter.id}
        </h1>
        <p className="font-display text-xl text-foreground/85 mt-1">
          {chapterName}
        </p>
      </div>

      {/* Main verse card */}
      <div className="mx-4 rounded-3xl bg-gradient-card border border-gold/30 shadow-card p-6">
        {/* Verse pill */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="text-gold/60 text-sm">━ ✦ ━</span>
          <span className="px-4 py-1 rounded-full border border-gold/50 bg-gold/10 text-xs font-semibold tracking-widest text-gold uppercase">
            {t("verse")} {chapter.id}.{verse.id}
          </span>
          <span className="text-gold/60 text-sm">━ ✦ ━</span>
        </div>

        {/* Sanskrit shloka with side marks */}
        <div className="relative px-1 mb-5">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 font-sanskrit text-gold/70 text-lg select-none">
            ॥
          </span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 font-sanskrit text-gold/70 text-lg select-none">
            ॥
          </span>
          <p className="font-sanskrit text-center text-[17px] sm:text-lg text-foreground font-medium leading-[1.9] whitespace-pre-line px-5 tracking-normal">
            {verse.sanskrit}
          </p>
        </div>

        {/* Transliteration */}
        {verse.transliteration && (
          <p className="text-center italic text-foreground/70 text-sm leading-relaxed whitespace-pre-line mb-2">
            {verse.transliteration}
          </p>
        )}

        {/* Play All — sequential audio for the whole verse, auto-advances */}
        <PlayAllButton
          sessionId={cacheKey}
          segments={playAllSegments}
          onVerseComplete={handleVerseAudioComplete}
          autoStartKey={autoStartKey}
        />

        {/* Shloka (Sanskrit) audio */}
        <VerseAudioPlayer
          chapter={chapter.id}
          verse={verse.id}
          part="shloka"
          language={audioLang}
          meta={{
            key: "shloka",
            title: "Listen to Sanskrit",
            subtitle: "Traditional Chant • Sacred Recitation",
            icon: BookOpen,
          }}
        />

        {/* Divider */}
        <div className="ornament-divider my-6">
          <span className="px-3 text-gold/70 text-sm bg-card relative">✦</span>
        </div>

        {/* Translation */}
        <div className="mb-1">
          <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">
            {t("translation")}
          </p>
          <p className="text-base text-foreground leading-relaxed whitespace-pre-line">
            {translation}
          </p>
        </div>

        <VerseAudioPlayer
          chapter={chapter.id}
          verse={verse.id}
          part="translation"
          language={audioLang}
          meta={{
            key: "translation",
            title: "Listen to Translation",
            subtitle: "Clear Narration • Spoken Voice",
            icon: Headphones,
          }}
        />

        {/* Divider */}
        {explanation && (
          <>
            <div className="ornament-divider my-6">
              <span className="px-3 text-gold/70 text-sm bg-card relative">✦</span>
            </div>

            <div className="mb-1">
              <p className="text-xs text-gold font-bold uppercase tracking-widest mb-3">
                {t("explanation")}
              </p>
              <p className="text-[15px] text-foreground/90 leading-relaxed whitespace-pre-line">
                {explanation}
              </p>
            </div>

            <VerseAudioPlayer
              chapter={chapter.id}
              verse={verse.id}
              part="explanation"
              language={audioLang}
              meta={{
                key: "explanation",
                title: "Listen to Explanation",
                subtitle: "Simple Explanation • Friendly Voice",
                icon: Lightbulb,
              }}
            />
          </>
        )}

        {/* Action row */}
        <div className="grid grid-cols-4 gap-2 pt-6 mt-6 border-t border-gold/20">
          <button
            onClick={() => toggleBookmark(chapter.id, verse.id)}
            className="flex flex-col items-center gap-1.5 py-2 active:scale-95 transition-all"
          >
            <span className="w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
              <Bookmark className={`w-5 h-5 ${bookmarked ? "fill-current" : ""}`} />
            </span>
            <span className="text-xs text-foreground/80 font-medium">
              {t("bookmark") || "Bookmark"}
            </span>
          </button>
          <button
            onClick={handleShare}
            className="flex flex-col items-center gap-1.5 py-2 active:scale-95 transition-all"
          >
            <span className="w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
              <Share2 className="w-5 h-5" />
            </span>
            <span className="text-xs text-foreground/80 font-medium">Share</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex flex-col items-center gap-1.5 py-2 active:scale-95 transition-all"
          >
            <span className="w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
              <Copy className="w-5 h-5" />
            </span>
            <span className="text-xs text-foreground/80 font-medium">Copy</span>
          </button>
          <button
            onClick={goNext}
            disabled={!hasNext}
            className="flex flex-col items-center gap-1.5 py-2 active:scale-95 transition-all disabled:opacity-40"
          >
            <span className="w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
              <ArrowRight className="w-5 h-5" />
            </span>
            <span className="text-xs text-foreground/80 font-medium">
              {t("next")} {t("verse")}
            </span>
          </button>
        </div>
      </div>

      {/* Footer quote */}
      <div className="text-center px-6 mt-8">
        <p className="font-display text-lg text-foreground/85">
          Reflect. Understand. Apply.
        </p>
        <p className="text-sm text-muted-foreground italic mt-1">
          The wisdom is timeless. The journey is yours.
        </p>
        <div className="text-gold/60 text-xs mt-3">━━━ ✦ ━━━</div>
      </div>
    </div>
  );
};

export default VerseView;
