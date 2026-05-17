import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { chapters, pickText, getChapterName } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";

// Deterministic verse-of-the-day: cycles through every verse in the Gita
// based on day-of-year so users see something new each day, and the same
// verse is shown to everyone on a given day.
const getDailyVerse = () => {
  const all: { chapterId: number; verseIndex: number }[] = [];
  chapters.forEach((c) => {
    c.verses.forEach((_, i) => all.push({ chapterId: c.id, verseIndex: i }));
  });

  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  // Mix in year so it doesn't repeat identically every year
  const seed = dayOfYear + now.getFullYear() * 7;
  const idx = seed % all.length;
  const pick = all[idx];
  const chapter = chapters.find((c) => c.id === pick.chapterId)!;
  const verse = chapter.verses[pick.verseIndex];
  return { chapter, verse, verseNumber: pick.verseIndex + 1 };
};

const VerseOfTheDay = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { chapter, verse, verseNumber } = useMemo(getDailyVerse, []);

  const translation = pickText(verse.translation, language);
  const chapterName = getChapterName(chapter, language);

  const handleOpen = () => {
    navigate(`/chapters/${chapter.id}/verses/${verseNumber}`);
  };

  return (
    <button
      onClick={handleOpen}
      className="w-full text-left rounded-[20px] bg-card shadow-product-card border border-primary/15 p-5 active:scale-[0.99] transition-all hover:border-primary/35 group"
      aria-label={t("verseOfTheDay")}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gold animate-soft-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {t("verseOfTheDay")}
          </span>
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          {chapter.id}.{verseNumber}
        </span>
      </div>

      <p className="font-display text-lg leading-snug text-foreground mb-2 line-clamp-2">
        {verse.sanskrit}
      </p>

      {translation && (
        <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3 mb-3">
          {translation}
        </p>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-border/40">
        <span className="text-xs text-muted-foreground italic truncate pr-2">
          {chapterName}
        </span>
        <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
          {t("readFullVerse")}
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </button>
  );
};

export default VerseOfTheDay;
