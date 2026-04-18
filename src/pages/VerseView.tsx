import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chapters, getChapterName, pickText } from "@/data/gita";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useLanguage } from "@/contexts/LanguageContext";
import VerseAudioPlayer from "@/components/VerseAudioPlayer";

const VerseView = () => {
  const { chapterId, verseId } = useParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { t, language } = useLanguage();

  const chapter = chapters.find((c) => c.id === Number(chapterId));
  const verseIdx = chapter?.verses.findIndex((v) => v.id === Number(verseId)) ?? -1;
  const verse = chapter?.verses[verseIdx];

  if (!chapter || !verse) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground text-lg">{t("notFound")}</p>
      </div>
    );
  }

  const bookmarked = isBookmarked(chapter.id, verse.id);
  const hasPrev = verseIdx > 0;
  const hasNext = verseIdx < chapter.verses.length - 1;
  const chapterName = getChapterName(chapter, language);
  const translation = pickText(verse.translation, language);
  const explanation = pickText(verse.explanation, language);

  const goPrev = () => {
    if (hasPrev) navigate(`/chapters/${chapter.id}/verses/${chapter.verses[verseIdx - 1].id}`, { replace: true });
  };
  const goNext = () => {
    if (hasNext) navigate(`/chapters/${chapter.id}/verses/${chapter.verses[verseIdx + 1].id}`, { replace: true });
  };

  return (
    <div key={`${chapter.id}-${verse.id}`} className="pb-28 px-4 pt-4 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="lg"
          className="-ml-2 text-base h-12 rounded-full"
          onClick={() => navigate(`/chapters/${chapter.id}`)}
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> {t("chapter")} {chapter.id}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-14 w-14 rounded-full"
          onClick={() => toggleBookmark(chapter.id, verse.id)}
          aria-label="bookmark"
        >
          <Heart
            className={`!w-7 !h-7 transition-all ${bookmarked ? "fill-primary text-primary scale-110" : "text-muted-foreground"}`}
          />
        </Button>
      </div>

      {/* Verse header */}
      <div className="rounded-3xl bg-gradient-header p-5 mb-5 shadow-elegant text-center">
        <p className="text-primary-foreground/80 text-xs uppercase tracking-widest font-medium mb-1">
          {chapterName}
        </p>
        <p className="font-display text-2xl text-primary-foreground font-semibold">
          {t("verse")} {verse.id}
        </p>
      </div>

      {/* Audio Player */}
      <VerseAudioPlayer
        cacheKey={`${chapter.id}-${verse.id}-${language}`}
        sanskrit={verse.sanskrit}
        translation={translation}
        explanation={explanation}
      />

      {/* Sanskrit - centered, devotional */}
      <section
        data-part="sanskrit"
        className="rounded-3xl bg-gradient-card border border-gold/30 p-7 mb-5 shadow-card text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="text-xs text-gold mb-3 font-semibold uppercase tracking-widest">
          ✦ {t("sanskrit")} ✦
        </p>
        <p className="font-sanskrit text-2xl text-foreground whitespace-pre-line leading-loose font-medium">
          {verse.sanskrit}
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* Transliteration */}
      {verse.transliteration && (
        <section className="rounded-2xl bg-secondary/50 p-5 mb-5 border border-border/50">
          <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-widest">
            {t("transliteration")}
          </p>
          <p className="text-base text-foreground/90 whitespace-pre-line leading-relaxed italic">
            {verse.transliteration}
          </p>
        </section>
      )}

      {/* Translation */}
      <section
        data-part="translation"
        className="rounded-2xl bg-card border border-border/60 p-6 mb-5 shadow-soft"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-5 bg-gradient-primary rounded-full" />
          <p className="text-xs text-primary font-semibold uppercase tracking-widest">
            {t("translation")}
          </p>
        </div>
        <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">
          {translation}
        </p>
      </section>

      {/* Explanation */}
      {explanation && (
        <section
          data-part="explanation"
          className="rounded-2xl bg-card border border-border/60 p-6 mb-8 shadow-soft"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-gold rounded-full" />
            <p className="text-xs text-gold font-semibold uppercase tracking-widest">
              {t("explanation")}
            </p>
          </div>
          <p className="text-base text-foreground/90 leading-relaxed whitespace-pre-line">
            {explanation}
          </p>
        </section>
      )}

      {/* Prev / Next */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="outline"
          size="lg"
          className="flex-1 h-14 text-base border-2 rounded-full hover:border-primary hover:text-primary"
          disabled={!hasPrev}
          onClick={goPrev}
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> {t("previous")}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex-1 h-14 text-base border-2 rounded-full hover:border-primary hover:text-primary"
          disabled={!hasNext}
          onClick={goNext}
        >
          {t("next")} <ChevronRight className="w-5 h-5 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default VerseView;
