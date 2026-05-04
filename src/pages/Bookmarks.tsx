import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ChevronRight, Bookmark as BookmarkIcon, Trash2 } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useBookBookmarks } from "@/hooks/useLibrary";
import { chapters, getChapterName, pickText } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";

type Tab = "slokas" | "books";

const Bookmarks = () => {
  const navigate = useNavigate();
  const { bookmarks } = useBookmarks();
  const { items: bookItems, remove } = useBookBookmarks();
  const { t, language } = useLanguage();
  const [tab, setTab] = useState<Tab>("slokas");

  const slokas = bookmarks
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
      <h2 className="text-3xl font-bold text-foreground mb-4 px-2">
        {t("myBookmarks")}
      </h2>

      {/* Tabs */}
      <div className="px-2 mb-5">
        <div role="tablist" className="inline-flex rounded-full border border-border bg-card p-0.5 text-sm w-full">
          <button
            role="tab"
            aria-selected={tab === "slokas"}
            onClick={() => setTab("slokas")}
            className={`flex-1 px-3 py-2 rounded-full transition-colors ${
              tab === "slokas" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
            }`}
          >
            {t("tabSlokas")} ({slokas.length})
          </button>
          <button
            role="tab"
            aria-selected={tab === "books"}
            onClick={() => setTab("books")}
            className={`flex-1 px-3 py-2 rounded-full transition-colors ${
              tab === "books" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
            }`}
          >
            {t("tabBookmarks")} ({bookItems.length})
          </button>
        </div>
      </div>

      {tab === "slokas" ? (
        slokas.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center px-6">
            <Heart className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-foreground text-lg mb-2">{t("noBookmarks")}</p>
            <p className="text-muted-foreground text-base">{t("noBookmarksHint")}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {slokas.map(({ chapter, verse }) => {
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
        )
      ) : bookItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center px-6">
          <BookmarkIcon className="w-16 h-16 text-muted-foreground/30 mb-4" />
          <p className="text-foreground text-lg mb-2">{t("noBookBookmarks")}</p>
          <p className="text-muted-foreground text-base">{t("noBookBookmarksHint")}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {[...bookItems].sort((a, b) => b.savedAt - a.savedAt).map((b) => (
            <div
              key={`${b.bookId}-${b.lang}-${b.sectionId}`}
              className="w-full text-left rounded-2xl border-2 border-border bg-card p-5 shadow-sm flex items-start gap-3"
            >
              <button
                onClick={() => navigate(`/library/${b.bookId}/read`)}
                className="flex-1 min-w-0 text-left active:scale-[0.98] transition-transform"
              >
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
                  {b.bookTitle} · {b.lang === "en" ? "EN" : "हि"}
                </p>
                <p className="text-base text-primary font-semibold mb-1">
                  {t("section")} {b.sectionId}
                </p>
                <p className="text-base text-foreground line-clamp-2 leading-relaxed">
                  {b.title}
                </p>
              </button>
              <button
                onClick={() => remove(b.bookId, b.lang, b.sectionId)}
                className="p-2 rounded-full hover:bg-foreground/5 text-muted-foreground"
                aria-label="remove"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
