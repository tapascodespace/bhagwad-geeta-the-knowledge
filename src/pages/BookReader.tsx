import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Lock,
  Minus,
  Plus,
  Sun,
  Moon,
  BookOpen,
  Clock,
  Sparkles,
} from "lucide-react";
import { getBook } from "@/data/books";
import { useReaderPrefs, useReadingProgress, useUnlockedBooks } from "@/hooks/useLibrary";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const readingTime = (text: string) => {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 120));
};

const BookReader = () => {
  const { bookId = "" } = useParams();
  const navigate = useNavigate();
  const book = useMemo(() => getBook(bookId), [bookId]);
  const { isUnlocked, unlock } = useUnlockedBooks();
  const { section, setSection } = useReadingProgress(bookId);
  const { prefs, update } = useReaderPrefs();
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section]);

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

  // Paywall
  if (!unlocked) {
    return (
      <main className="min-h-screen pb-28 px-5 pt-6 max-w-lg mx-auto">
        <button
          onClick={() => navigate("/library")}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-6"
        >
          <ChevronLeft className="w-4 h-4" /> पुस्तकालय
        </button>

        <div className={`w-full aspect-[3/4] max-w-[220px] mx-auto rounded-2xl bg-gradient-to-br ${book.cover} flex items-center justify-center shadow-elegant`}>
          <BookOpen className="w-16 h-16 text-foreground/50" />
        </div>

        <h1 className="font-display text-2xl font-bold text-center mt-6">{book.title}</h1>
        <p className="text-center text-sm text-muted-foreground mt-1">{book.author}</p>
        <p className="text-center text-foreground/80 mt-4 px-4 leading-relaxed">{book.description}</p>

        <div className="mt-8 mx-auto max-w-sm rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="flex items-center gap-2 text-amber-700">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">यह पुस्तक लॉक है</span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">₹{book.price}</span>
            <span className="text-sm text-muted-foreground">एक बार का भुगतान</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-gold" /> {total || 22} सरल अध्याय</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> मोबाइल पर पढ़ने के लिए डिज़ाइन किया गया</li>
            <li className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-gold" /> लाइट / डार्क मोड और फ़ॉन्ट कंट्रोल</li>
          </ul>
          <Button
            className="w-full mt-5"
            size="lg"
            onClick={() => {
              if (book.sections.length === 0) {
                toast.info("यह पुस्तक जल्द ही उपलब्ध होगी");
                return;
              }
              unlock(book.id);
              toast.success("पुस्तक अनलॉक हो गई!");
            }}
          >
            अभी ख़रीदें
          </Button>
          <p className="text-[11px] text-muted-foreground text-center mt-3">
            डेमो: यह बटन भुगतान के बिना पुस्तक अनलॉक कर देता है।
          </p>
        </div>
      </main>
    );
  }

  if (total === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-muted-foreground">यह पुस्तक जल्द ही उपलब्ध होगी।</p>
          <Button onClick={() => navigate("/library")} variant="outline" className="mt-4">
            पुस्तकालय
          </Button>
        </div>
      </main>
    );
  }

  const current = book.sections[section - 1];
  const isDark = prefs.theme === "dark";
  const goPrev = () => section > 1 && setSection(section - 1);
  const goNext = () => section < total && setSection(section + 1);

  return (
    <div className={isDark ? "dark" : ""}>
      <main
        className="min-h-screen pb-32 transition-colors"
        style={{
          background: isDark ? "hsl(24 18% 8%)" : "hsl(38 44% 96%)",
          color: isDark ? "hsl(40 30% 92%)" : "hsl(24 30% 14%)",
        }}
      >
        {/* Top toolbar */}
        <div className="sticky top-0 z-20 backdrop-blur-md border-b" style={{
          background: isDark ? "hsl(24 16% 12% / 0.85)" : "hsl(38 50% 98% / 0.85)",
          borderColor: isDark ? "hsl(24 14% 22%)" : "hsl(32 28% 86%)",
        }}>
          <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-2">
            <button
              onClick={() => navigate("/library")}
              className="p-2 -ml-2 rounded-full hover:bg-foreground/5"
              aria-label="वापस"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 min-w-0">
              <p className="text-xs opacity-70 truncate">{book.title}</p>
              <p className="text-[11px] opacity-60">अध्याय {section} / {total}</p>
            </div>
            <button
              onClick={() => update({ fontSize: Math.max(14, prefs.fontSize - 1) })}
              className="p-2 rounded-full hover:bg-foreground/5"
              aria-label="फ़ॉन्ट छोटा"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={() => update({ fontSize: Math.min(22, prefs.fontSize + 1) })}
              className="p-2 rounded-full hover:bg-foreground/5"
              aria-label="फ़ॉन्ट बड़ा"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={() => update({ theme: isDark ? "light" : "dark" })}
              className="p-2 rounded-full hover:bg-foreground/5"
              aria-label="थीम बदलें"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          <div className="px-4 pb-3 max-w-lg mx-auto">
            <Progress value={(section / total) * 100} className="h-1" />
          </div>
        </div>

        {/* Section content */}
        <article
          key={animKey}
          className="max-w-lg mx-auto px-6 pt-8 animate-in fade-in slide-in-from-right-4 duration-300"
        >
          <div className="text-center mb-6">
            <span className="inline-block text-[11px] uppercase tracking-widest opacity-60">
              अध्याय {section} • {readingTime(current.body)} मिनट का पाठ
            </span>
            <h1 className="font-display text-3xl font-bold mt-2 leading-tight">
              {current.title}
            </h1>
            <div className="ornament-divider mt-4 h-3" />
          </div>

          <p
            className="leading-relaxed whitespace-pre-line"
            style={{ fontSize: `${prefs.fontSize}px`, lineHeight: 1.8 }}
          >
            {current.body}
          </p>

          <div
            className="mt-8 rounded-2xl border p-5"
            style={{
              borderColor: isDark ? "hsl(42 80% 58% / 0.4)" : "hsl(42 78% 52% / 0.4)",
              background: isDark ? "hsl(42 80% 58% / 0.08)" : "hsl(42 78% 52% / 0.08)",
            }}
          >
            <p className="text-[11px] uppercase tracking-widest font-semibold text-gold">
              मुख्य संदेश
            </p>
            <p
              className="mt-2 font-medium"
              style={{ fontSize: `${prefs.fontSize - 1}px`, lineHeight: 1.6 }}
            >
              {current.takeaway}
            </p>
          </div>
        </article>

        {/* Bottom nav for sections */}
        <div className="fixed bottom-20 left-0 right-0 z-20">
          <div className="max-w-lg mx-auto px-4">
            <div
              className="flex items-center gap-2 rounded-full p-1.5 shadow-elegant border backdrop-blur-md"
              style={{
                background: isDark ? "hsl(24 16% 12% / 0.9)" : "hsl(38 50% 98% / 0.9)",
                borderColor: isDark ? "hsl(24 14% 22%)" : "hsl(32 28% 86%)",
              }}
            >
              <Button
                onClick={goPrev}
                disabled={section === 1}
                variant="ghost"
                className="flex-1 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" /> पिछला
              </Button>
              <div className="text-xs opacity-70 px-2 whitespace-nowrap">
                {section} / {total}
              </div>
              <Button
                onClick={goNext}
                disabled={section === total}
                className="flex-1 rounded-full"
              >
                अगला <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookReader;
