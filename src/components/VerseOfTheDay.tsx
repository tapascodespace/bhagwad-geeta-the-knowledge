import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { chapters, pickText, getChapterName } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";

const hashString = (value: string) => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

// Date-seeded verse-of-the-day: random-looking each day, stable for the full
// local day, and shared by every user on that date.
const getDailyVerse = () => {
  const all: { chapterId: number; verseIndex: number }[] = [];
  chapters.forEach((c) => {
    c.verses.forEach((_, i) => all.push({ chapterId: c.id, verseIndex: i }));
  });

  const now = new Date();
  const dateKey = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const idx = hashString(`gita-verse-of-day:${dateKey}`) % all.length;
  const pick = all[idx];
  const chapter = chapters.find((c) => c.id === pick.chapterId)!;
  const verse = chapter.verses[pick.verseIndex];
  return { chapter, verse };
};

const VerseOfTheDay = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { chapter, verse } = useMemo(getDailyVerse, []);

  const translation = pickText(verse.translation, language);
  const chapterName = getChapterName(chapter, language);

  const handleOpen = () => {
    navigate(`/chapters/${chapter.id}/verses/${verse.id}`);
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
          {chapter.id}.{verse.id}
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
