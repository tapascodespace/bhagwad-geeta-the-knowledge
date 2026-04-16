import { useNavigate } from "react-router-dom";
import { useBookmarks } from "@/hooks/useBookmarks";
import { chapters } from "@/data/gita";
import { Heart } from "lucide-react";

const Bookmarks = () => {
  const navigate = useNavigate();
  const { bookmarks } = useBookmarks();

  const items = bookmarks
    .map((b) => {
      const ch = chapters.find((c) => c.id === b.chapterId);
      const verse = ch?.verses.find((v) => v.id === b.verseId);
      return ch && verse ? { chapter: ch, verse } : null;
    })
    .filter(Boolean) as { chapter: (typeof chapters)[0]; verse: (typeof chapters)[0]["verses"][0] }[];

  return (
    <div className="pb-24 px-4 pt-4">
      <h2
        className="text-xl font-bold text-foreground mb-4"
        style={{ fontFamily: "'Noto Serif Bengali', serif" }}
      >
        পছন্দের শ্লোক
      </h2>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
          <Heart className="w-12 h-12 text-muted-foreground/30 mb-3" />
          <p className="text-muted-foreground text-sm">
            আপনি এখনও কোনো শ্লোক পছন্দ করেননি।
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            শ্লোক পড়ার সময় ♥ বোতামে চাপ দিন।
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map(({ chapter, verse }) => (
            <button
              key={`${chapter.id}-${verse.id}`}
              onClick={() => navigate(`/chapters/${chapter.id}/verses/${verse.id}`)}
              className="w-full text-left rounded-xl border border-border bg-card p-4 shadow-sm active:scale-[0.98] transition-transform"
            >
              <p className="text-xs text-primary font-medium mb-1">
                অধ্যায় {chapter.id} · শ্লোক {verse.id}
              </p>
              <p className="text-sm text-foreground line-clamp-2 leading-relaxed">
                {verse.bengaliTranslation}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
