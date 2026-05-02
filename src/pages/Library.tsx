import { useNavigate } from "react-router-dom";
import { BookOpen, Lock } from "lucide-react";
import { books, CATEGORIES, type Book } from "@/data/books";
import { useUnlockedBooks } from "@/hooks/useLibrary";

const BookCard = ({ book, onClick, unlocked }: { book: Book; onClick: () => void; unlocked: boolean }) => (
  <button
    onClick={onClick}
    className="group shrink-0 w-32 sm:w-36 snap-start text-left active:scale-[0.97] transition-transform duration-200"
    aria-label={book.title}
  >
    <div
      className={`relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br ${book.cover} shadow-card group-hover:shadow-elegant transition-shadow flex items-center justify-center`}
    >
      {book.coverImage ? (
        <img
          src={book.coverImage}
          alt={book.title}
          loading="lazy"
          className="w-full h-full object-cover"
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
      {book.title}
    </p>
  </button>
);

const Library = () => {
  const navigate = useNavigate();
  const { isUnlocked } = useUnlockedBooks();

  const rows = CATEGORIES.map((c) => ({
    ...c,
    items: books.filter((b) => b.category === c.id),
  })).filter((r) => r.items.length > 0);

  return (
    <main className="min-h-screen pb-28 pt-8 max-w-lg mx-auto">
      <header className="mb-6 px-5">
        <h1 className="font-display text-3xl font-bold text-foreground">पुस्तकालय</h1>
        <p className="text-sm text-muted-foreground mt-1">
          आध्यात्मिक ज्ञान की चुनिंदा ई-पुस्तकें
        </p>
      </header>

      <div className="space-y-7">
        {rows.map((row) => (
          <section key={row.id}>
            <h2 className="px-5 mb-3 font-display text-lg font-semibold text-foreground">
              {row.label}
            </h2>
            <div
              className="flex gap-3 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-none"
              style={{ scrollbarWidth: "none" }}
            >
              {row.items.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  unlocked={isUnlocked(book.id)}
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
