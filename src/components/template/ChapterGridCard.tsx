import { Heart, Star } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Chapter } from "@/data/gita";

type ChapterGridCardProps = {
  chapter: Chapter;
  name: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

const ChapterGridCard = ({ chapter, name, onClick, style }: ChapterGridCardProps) => {
  const { t } = useLanguage();
  const { isBookmarked } = useBookmarks();
  const hasBookmark = chapter.verses.some((v) => isBookmarked(chapter.id, v.id));
  const preview = chapter.verses[0]?.sanskrit?.split("\n")[0] ?? "";

  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className="text-left rounded-[20px] bg-card shadow-product-card p-4 pt-3 active:scale-[0.98] hover:border-primary/25 border border-transparent transition-all animate-slide-up min-h-[225px] flex flex-col"
    >
      <div className="relative flex-1 flex flex-col items-center justify-center mb-3">
        <div className="absolute bottom-2 h-2.5 w-[55%] rounded-full bg-primary/15 blur-[1px]" aria-hidden />
        <div className="relative z-10 w-[88px] h-[88px] rounded-full bg-gradient-primary flex items-center justify-center shadow-elegant">
          <span className="font-display text-primary-foreground text-3xl font-semibold">{chapter.id}</span>
        </div>
        {preview && (
          <p className="font-sanskrit text-center text-sm text-muted-foreground mt-3 line-clamp-2 px-1 leading-snug opacity-80">
            {preview}
          </p>
        )}
      </div>

      <div className="mt-auto">
        <p className="font-semibold text-foreground text-base leading-snug line-clamp-2">{name}</p>
        <div className="flex items-center justify-between mt-2 gap-2">
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="font-medium text-foreground/80">{chapter.verseCount}</span>
            <span>{t("verses")}</span>
          </span>
          {hasBookmark && (
            <Heart className="h-5 w-5 text-primary fill-primary/20 shrink-0" aria-hidden />
          )}
        </div>
      </div>
    </button>
  );
};

export default ChapterGridCard;
