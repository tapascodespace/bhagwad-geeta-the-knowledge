import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chapters, getChapterName, pickText } from "@/data/gita";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useLanguage } from "@/contexts/LanguageContext";

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
    <div className="pb-28 px-4 pt-4">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="lg"
          className="-ml-2 text-base h-12"
          onClick={() => navigate(`/chapters/${chapter.id}`)}
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> {t("chapter")} {chapter.id}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-14 w-14"
          onClick={() => toggleBookmark(chapter.id, verse.id)}
          aria-label="bookmark"
        >
          <Heart
            className={`!w-7 !h-7 ${bookmarked ? "fill-primary text-primary" : "text-muted-foreground"}`}
          />
        </Button>
      </div>

      <div className="mb-5 px-1">
        <p className="text-base text-primary font-semibold mb-1">
          {chapterName} · {t("verse")} {verse.id}
        </p>
      </div>

      {/* Sanskrit */}
      <section className="rounded-2xl bg-secondary/60 p-5 mb-4">
        <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase tracking-wide">
          {t("sanskrit")}
        </p>
        <p className="text-xl text-foreground whitespace-pre-line leading-loose font-medium">
          {verse.sanskrit}
        </p>
      </section>

      {/* Transliteration */}
      {verse.transliteration && (
        <section className="rounded-2xl bg-secondary/40 p-5 mb-4">
          <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase tracking-wide">
            {t("transliteration")}
          </p>
          <p className="text-lg text-foreground whitespace-pre-line leading-relaxed italic">
            {verse.transliteration}
          </p>
        </section>
      )}

      {/* Translation */}
      <section className="rounded-2xl border-2 border-border bg-card p-5 mb-4">
        <p className="text-sm text-primary mb-2 font-semibold uppercase tracking-wide">
          {t("translation")}
        </p>
        <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">
          {translation}
        </p>
      </section>

      {/* Explanation */}
      {explanation && (
        <section className="rounded-2xl border-2 border-border bg-card p-5 mb-8">
          <p className="text-sm text-primary mb-2 font-semibold uppercase tracking-wide">
            {t("explanation")}
          </p>
          <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">
            {explanation}
          </p>
        </section>
      )}

      {/* Prev / Next */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="outline"
          size="lg"
          className="flex-1 h-14 text-base border-2"
          disabled={!hasPrev}
          onClick={goPrev}
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> {t("previous")}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex-1 h-14 text-base border-2"
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
