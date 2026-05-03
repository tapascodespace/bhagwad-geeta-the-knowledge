import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Lock, BookOpen, Clock, Sparkles, Check, ArrowRight } from "lucide-react";
import { getBook, hasContent } from "@/data/books";
import { useUnlockedBooks } from "@/hooks/useLibrary";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BookDetail = () => {
  const { bookId = "" } = useParams();
  const navigate = useNavigate();
  const book = useMemo(() => getBook(bookId), [bookId]);
  const { isUnlocked, unlock } = useUnlockedBooks();

  if (!book) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-muted-foreground">पुस्तक नहीं मिली</p>
          <Button onClick={() => navigate("/library")} variant="outline" className="mt-4">
            पुस्तकालय पर वापस जाएँ
          </Button>
        </div>
      </main>
    );
  }

  const unlocked = isUnlocked(book.id);
  const total = book.sections.length;

  const handleUnlock = () => {
    if (book.sections.length === 0) {
      toast.info("यह पुस्तक जल्द ही उपलब्ध होगी");
      return;
    }
    unlock(book.id);
    toast.success("पुस्तक अनलॉक हो गई!");
  };

  const handleRead = () => {
    if (book.sections.length === 0) {
      toast.info("यह पुस्तक जल्द ही उपलब्ध होगी");
      return;
    }
    navigate(`/library/${book.id}/read`);
  };

  return (
    <main className="min-h-screen pb-28 px-5 pt-6 max-w-lg mx-auto">
      <button
        onClick={() => navigate("/library")}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-6"
      >
        <ChevronLeft className="w-4 h-4" /> पुस्तकालय
      </button>

      <div
        className={`w-full aspect-[3/4] max-w-[220px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-br ${book.cover} flex items-center justify-center shadow-elegant`}
      >
        {book.coverImage ? (
          <img src={book.coverImage} alt={book.title} className="book-cover-img w-full h-full object-cover" />
        ) : (
          <BookOpen className="w-16 h-16 text-foreground/50" />
        )}
      </div>

      <h1 className="font-display text-2xl font-bold text-center mt-6">{book.title}</h1>
      <p className="text-center text-sm text-muted-foreground mt-1">{book.author}</p>
      <p className="text-center text-foreground/80 mt-4 px-2 leading-relaxed">{book.description}</p>

      <div className="mt-8 mx-auto max-w-sm rounded-2xl border border-border bg-card p-6 shadow-card">
        {unlocked ? (
          <div className="flex items-center gap-2 text-emerald-700">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">पुस्तक अनलॉक है</span>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-amber-700">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">यह पुस्तक लॉक है</span>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">₹{book.price}</span>
              <span className="text-sm text-muted-foreground">एक बार का भुगतान</span>
            </div>
          </>
        )}

        <ul className="mt-4 space-y-2 text-sm text-foreground/80">
          <li className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" /> {total || 22} सरल अध्याय
          </li>
          <li className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" /> मोबाइल पर पढ़ने के लिए डिज़ाइन किया गया
          </li>
          <li className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gold" /> लाइट / डार्क मोड और फ़ॉन्ट कंट्रोल
          </li>
        </ul>

        {unlocked ? (
          <Button className="w-full mt-5" size="lg" onClick={handleRead}>
            पढ़ना शुरू करें <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <>
            <Button className="w-full mt-5" size="lg" onClick={handleUnlock}>
              अभी ख़रीदें — ₹{book.price}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center mt-3">
              डेमो: यह बटन भुगतान के बिना पुस्तक अनलॉक कर देता है।
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default BookDetail;
