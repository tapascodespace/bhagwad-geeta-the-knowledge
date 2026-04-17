import { useNavigate } from "react-router-dom";
import { Heart, ChevronRight } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { chapters, getChapterName, pickText } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";

const Bookmarks = () => {
  const navigate = useNavigate();
  const { bookmarks } = useBookmarks();
  const { t, language } = useLanguage();

  const items = bookmarks
    .map((b) => {
      const ch = chapters.find((c) => c.id === b.chapterId);
      const verse = ch?.verses.find((v) => v.id === b.verseId);
      return ch && verse ? { chapter: ch, verse } : null;
    })
    .filter(Boolean) as {
      chapter: (typeof chapters)[0];
      verse: (typeof chapters)[0]["verses"][0];
    }[];

  return (
    <div className="pb-28 px-4 pt-6">
      <h2 className="text-3xl font-bold text-foreground mb-6 px-2">
        {t("myBookmarks")}
      </h2>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6">
          <Heart className="w-16 h-16 text-muted-foreground/30 mb-4" />
          <p className="text-foreground text-lg mb-2">{t("noBookmarks")}</p>
          <p className="text-muted-foreground text-base">{t("noBookmarksHint")}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map(({ chapter, verse }) => {
            const chName = getChapterName(chapter, language);
            const preview = pickText(verse.translation, language);
            return (
              <button
                key={`${chapter.id}-${verse.id}`}
                onClick={() => navigate(`/chapters/${chapter.id}/verses/${verse.id}`)}
                className="w-full text-left rounded-2xl border-2 border-border bg-card p-5 shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-base text-primary font-semibold mb-2">
                      {chName} · {t("verse")} {verse.id}
                    </p>
                    <p className="text-base text-foreground line-clamp-3 leading-relaxed">
                      {preview}
                    </p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-muted-foreground shrink-0 mt-1" />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
