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
import { getBook, getBookSections, type BookLanguage } from "@/data/books";
import { useReaderPrefs, useReadingProgress, useUnlockedBooks } from "@/hooks/useLibrary";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const readingTime = (text: string) => {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 120));
};

const READER_LANG_KEY = "library:reader-lang";

const BookReader = () => {
  const { bookId = "" } = useParams();
  const navigate = useNavigate();
  const book = useMemo(() => getBook(bookId), [bookId]);
  const { isUnlocked } = useUnlockedBooks();
  const { section, setSection } = useReadingProgress(bookId);
  const { prefs, update } = useReaderPrefs();
  const { language: appLang } = useLanguage();
  const [animKey, setAnimKey] = useState(0);

  // Per-book language preference. Defaults to the app language
  // (Bengali/Hindi → Hindi version, English → English version).
  const [bookLang, setBookLangState] = useState<BookLanguage>(() => {
    try {
      const raw = localStorage.getItem(READER_LANG_KEY);
      const map = raw ? (JSON.parse(raw) as Record<string, BookLanguage>) : {};
      if (map[bookId]) return map[bookId];
    } catch { /* ignore */ }
    return appLang === "en" ? "en" : "hi";
  });

  const setBookLang = (lang: BookLanguage) => {
    setBookLangState(lang);
    try {
      const raw = localStorage.getItem(READER_LANG_KEY);
      const map = raw ? (JSON.parse(raw) as Record<string, BookLanguage>) : {};
      map[bookId] = lang;
      localStorage.setItem(READER_LANG_KEY, JSON.stringify(map));
    } catch { /* ignore */ }
  };

  useEffect(() => {
    setAnimKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section, bookLang]);

  const unlocked = book ? isUnlocked(book.id) : false;

  // If not unlocked, redirect to the detail/paywall page.
  useEffect(() => {
    if (book && !unlocked) {
      navigate(`/library/${book.id}`, { replace: true });
    }
  }, [unlocked, book, navigate]);

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

  const sections = getBookSections(book, bookLang);
  const total = sections.length;

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

  const current = sections[Math.min(section, total) - 1];
  const isDark = prefs.theme === "dark";
  const goPrev = () => section > 1 && setSection(section - 1);
  const goNext = () => section < total && setSection(section + 1);
  const toggleReaderTheme = () => update({ theme: isDark ? "light" : "dark" });

  return (
    // Scope `dark` class to this subtree only so the reader theme stays
    // independent from the global app theme.
    <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen pb-32 bg-background text-foreground transition-colors">
        {/* Top toolbar */}
        <div className="sticky top-0 z-20 backdrop-blur-md border-b border-border bg-card/85">
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
              onClick={toggleReaderTheme}
              className="p-2 rounded-full hover:bg-foreground/5"
              aria-label="रीडर थीम बदलें"
              aria-pressed={isDark}
            >
              {isDark ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          {/* Language toggle (Hindi / English) */}
          <div className="px-4 pb-2 max-w-lg mx-auto flex justify-center">
            <div role="tablist" aria-label="Reader language" className="inline-flex rounded-full border border-border bg-background/60 p-0.5 text-xs">
              <button
                role="tab"
                aria-selected={bookLang === "hi"}
                onClick={() => setBookLang("hi")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  bookLang === "hi" ? "bg-primary text-primary-foreground" : "opacity-70 hover:opacity-100"
                }`}
              >
                हिन्दी
              </button>
              <button
                role="tab"
                aria-selected={bookLang === "en"}
                onClick={() => setBookLang("en")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  bookLang === "en" ? "bg-primary text-primary-foreground" : "opacity-70 hover:opacity-100"
                }`}
              >
                English
              </button>
            </div>
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

          <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-5">
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
            <div className="flex items-center gap-2 rounded-full p-1.5 shadow-elegant border border-border bg-card/90 backdrop-blur-md">
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
