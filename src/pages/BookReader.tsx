import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Minus,
  Plus,
  Sun,
  Moon,
} from "lucide-react";
import { getBook } from "@/data/books";
import { useReaderPrefs, useReadingProgress, useUnlockedBooks } from "@/hooks/useLibrary";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
  const { theme, toggleTheme } = useTheme();
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

  // If not unlocked, redirect to the detail/paywall page.
  useEffect(() => {
    if (!unlocked) {
      navigate(`/library/${book.id}`, { replace: true });
    }
  }, [unlocked, book.id, navigate]);

  if (!unlocked) return null;

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
              onClick={() => navigate(`/library/${book.id}`)}
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
              onClick={toggleTheme}
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
