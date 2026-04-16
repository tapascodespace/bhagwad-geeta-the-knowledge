import { useNavigate, useParams } from "react-router-dom";
import { chapters } from "@/data/gita";
import { useBookmarks } from "@/hooks/useBookmarks";
import { ArrowLeft, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const VerseView = () => {
  const { chapterId, verseId } = useParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const chapter = chapters.find((c) => c.id === Number(chapterId));
  const verseIdx = chapter?.verses.findIndex((v) => v.id === Number(verseId)) ?? -1;
  const verse = chapter?.verses[verseIdx];

  if (!chapter || !verse) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">শ্লোক পাওয়া যায়নি</p>
      </div>
    );
  }

  const bookmarked = isBookmarked(chapter.id, verse.id);
  const hasPrev = verseIdx > 0;
  const hasNext = verseIdx < chapter.verses.length - 1;

  const goPrev = () => {
    if (hasPrev) navigate(`/chapters/${chapter.id}/verses/${chapter.verses[verseIdx - 1].id}`, { replace: true });
  };
  const goNext = () => {
    if (hasNext) navigate(`/chapters/${chapter.id}/verses/${chapter.verses[verseIdx + 1].id}`, { replace: true });
  };

  return (
    <div className="pb-28 px-4 pt-4">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="sm" className="-ml-2" onClick={() => navigate(`/chapters/${chapter.id}`)}>
          <ArrowLeft className="w-4 h-4 mr-1" /> অধ্যায় {chapter.id}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleBookmark(chapter.id, verse.id)}
        >
          <Heart className={`w-5 h-5 ${bookmarked ? "fill-primary text-primary" : "text-muted-foreground"}`} />
        </Button>
      </div>

      <p className="text-xs text-primary font-medium mb-1">
        অধ্যায় {chapter.id} · শ্লোক {verse.id}
      </p>

      {/* Sanskrit */}
      <div className="rounded-xl bg-secondary/50 p-4 mb-4">
        <p className="text-xs text-muted-foreground mb-1 font-medium">সংস্কৃত</p>
        <p className="text-base text-foreground whitespace-pre-line leading-relaxed">{verse.sanskrit}</p>
      </div>

      {/* Bengali Transliteration */}
      <div className="rounded-xl bg-secondary/50 p-4 mb-4">
        <p className="text-xs text-muted-foreground mb-1 font-medium">বাংলা লিপি</p>
        <p
          className="text-base text-foreground whitespace-pre-line leading-relaxed"
          style={{ fontFamily: "'Noto Serif Bengali', serif" }}
        >
          {verse.bengaliTransliteration}
        </p>
      </div>

      {/* Translation */}
      <div className="rounded-xl border border-border bg-card p-4 mb-4">
        <p className="text-xs text-primary mb-1 font-medium">বাংলা অনুবাদ</p>
        <p className="text-base text-foreground leading-relaxed">{verse.bengaliTranslation}</p>
      </div>

      {/* Explanation */}
      <div className="rounded-xl border border-border bg-card p-4 mb-6">
        <p className="text-xs text-primary mb-1 font-medium">ব্যাখ্যা</p>
        <p className="text-sm text-foreground leading-relaxed">{verse.bengaliExplanation}</p>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" disabled={!hasPrev} onClick={goPrev}>
          <ChevronLeft className="w-4 h-4 mr-1" /> পূর্ববর্তী
        </Button>
        <Button variant="outline" size="sm" disabled={!hasNext} onClick={goNext}>
          পরবর্তী <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default VerseView;
