import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Lock } from "lucide-react";
import { toast } from "sonner";
import { books, CATEGORIES, getBookMeta, getBookSections, hasContent, type Book, type BookCategory } from "@/data/books";
import { readProgressMap, useUnlockedBooks } from "@/hooks/useLibrary";
import { useLanguage } from "@/contexts/LanguageContext";
import { Progress } from "@/components/ui/progress";

const CATEGORY_LABEL_KEYS: Record<BookCategory, "catBhagavadGita" | "catStoriesEpics" | "catSpiritualGuides" | "catForStudents" | "catShortReads"> = {
  "bhagavad-gita": "catBhagavadGita",
  "stories-epics": "catStoriesEpics",
  "spiritual-guides": "catSpiritualGuides",
  "for-students": "catForStudents",
  "short-reads": "catShortReads",
};

const BookCard = ({ book, onClick, unlocked, lang, progress }: { book: Book; onClick: () => void; unlocked: boolean; lang: string; progress: number }) => {
  const meta = getBookMeta(book, lang);
  const total = getBookSections(book, lang === "en" ? "en" : "hi").length;
  const pct = unlocked && total > 0 ? Math.min(100, Math.round((progress / total) * 100)) : 0;
  return (
    <button
      onClick={onClick}
      className="group shrink-0 w-32 sm:w-36 snap-start text-left active:scale-[0.97] transition-transform duration-200"
      aria-label={meta.title}
    >
      <div
        className={`relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br ${book.cover} shadow-card group-hover:shadow-elegant transition-shadow flex items-center justify-center`}
      >
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={meta.title}
            loading="lazy"
            className="book-cover-img w-full h-full object-cover"
          />
        ) : (
          <BookOpen className="w-8 h-8 text-foreground/40" />
        )}

        {!unlocked && (
          <span className="absolute top-2 right-2 inline-flex items-center gap-1 text-[10px] font-semibold text-amber-900 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded-full shadow-soft">
            <Lock className="w-2.5 h-2.5" />₹{book.price}
          </span>
        )}
      </div>
      <p className="mt-2 text-xs font-medium text-foreground line-clamp-2 leading-snug">
        {meta.title}
      </p>
      {unlocked && total > 0 && (
        <div className="mt-1.5">
          <Progress value={pct} className="h-1" />
          <p className="text-[10px] text-muted-foreground mt-0.5">{pct}%</p>
        </div>
      )}
    </button>
  );
};

const Library = () => {
  const navigate = useNavigate();
  const { isUnlocked } = useUnlockedBooks();
  const { t, language } = useLanguage();
  const [progressMap, setProgressMap] = useState<Record<string, number>>(() => readProgressMap());

  useEffect(() => {
    setProgressMap(readProgressMap());
    const onStorage = () => setProgressMap(readProgressMap());
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onStorage);
    };
  }, []);

  const rows = CATEGORIES.map((c) => ({
    ...c,
    items: books.filter((b) => b.category === c.id),
  })).filter((r) => r.items.length > 0);

  return (
    <main className="min-h-screen pb-28 pt-8 max-w-lg mx-auto">
      <header className="mb-6 px-5">
        <h1 className="font-display text-3xl font-bold text-foreground">{t("libraryTitle")}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t("librarySubtitle")}
        </p>
      </header>

      <div className="space-y-7">
        {rows.map((row) => (
          <section key={row.id}>
            <h2 className="px-5 mb-3 font-display text-lg font-semibold text-foreground">
              {t(CATEGORY_LABEL_KEYS[row.id])}
            </h2>
            <div
              className="flex gap-3 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-none"
              style={{ scrollbarWidth: "none" }}
            >
              {row.items.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  lang={language}
                  unlocked={isUnlocked(book.id)}
                  progress={progressMap[book.id] ?? 1}
                  onClick={() => navigate(`/library/${book.id}`)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Library;
