import { useNavigate } from "react-router-dom";
import { BookOpen, Lock, Check } from "lucide-react";
import { books } from "@/data/books";
import { useUnlockedBooks } from "@/hooks/useLibrary";
import { Card } from "@/components/ui/card";

const Library = () => {
  const navigate = useNavigate();
  const { isUnlocked } = useUnlockedBooks();

  return (
    <main className="min-h-screen pb-28 px-5 pt-8 max-w-lg mx-auto">
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold text-foreground">पुस्तकालय</h1>
        <p className="text-sm text-muted-foreground mt-1">
          आध्यात्मिक ज्ञान की चुनिंदा ई-पुस्तकें
        </p>
      </header>

      <div className="space-y-4">
        {books.map((book) => {
          const unlocked = isUnlocked(book.id);
          return (
            <Card
              key={book.id}
              onClick={() => navigate(`/library/${book.id}`)}
              className="overflow-hidden cursor-pointer active:scale-[0.99] transition-transform shadow-card hover:shadow-elegant"
            >
              <div className="flex gap-4 p-4">
                <div
                  className={`shrink-0 w-20 h-28 rounded-lg bg-gradient-to-br ${book.cover} flex items-center justify-center shadow-soft`}
                >
                  <BookOpen className="w-8 h-8 text-foreground/60" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h2 className="font-display text-lg font-semibold leading-tight text-foreground">
                      {book.title}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">{book.author}</p>
                    <p className="text-sm text-foreground/80 mt-2 line-clamp-2 leading-snug">
                      {book.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-base font-semibold text-primary">₹{book.price}</span>
                    {unlocked ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">
                        <Check className="w-3 h-3" /> उपलब्ध
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-800 bg-amber-100 px-2 py-1 rounded-full">
                        <Lock className="w-3 h-3" /> ख़रीदें
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </main>
  );
};

export default Library;
