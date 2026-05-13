import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Minus,
  Plus,
  Sun,
  Moon,
  Bookmark,
  BookmarkCheck,
  Lock,
} from "lucide-react";
import { getBook, getBookMeta, getBookSections, type BookLanguage } from "@/data/books";
import { useBookBookmarks, useReaderPrefs, useReadingProgress, useUnlockedBooks } from "@/hooks/useLibrary";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const readingTime = (text: string) => {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 120));
};

const READER_LANG_KEY = "library:reader-lang";

const BookReader = () => {
  const { bookId = "" } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isPreview = searchParams.get("preview") === "1";
  const book = useMemo(() => getBook(bookId), [bookId]);
  const { isUnlocked } = useUnlockedBooks();
  const { section, setSection } = useReadingProgress(bookId);
  const { prefs, update } = useReaderPrefs();
  const { language: appLang, t } = useLanguage();
  const { isBookmarked, toggle } = useBookBookmarks();
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

  // Override the global theme while the reader is mounted so the reader's
  // independent light/dark toggle works regardless of the app theme.
  // We snapshot the original `dark` class state and restore it on unmount.
  useEffect(() => {
    const root = document.documentElement;
    const hadDark = root.classList.contains("dark");
    const readerDark = prefs.theme === "dark";
    root.classList.toggle("dark", readerDark);
    const prevColorScheme = root.style.colorScheme;
    root.style.colorScheme = readerDark ? "dark" : "light";
    return () => {
      root.classList.toggle("dark", hadDark);
      root.style.colorScheme = prevColorScheme;
    };
  }, [prefs.theme]);

  const unlocked = book ? (isUnlocked(book.id) || book.price === 0) : false;

  // If not unlocked AND not in preview mode, redirect to the detail/paywall page.
  useEffect(() => {
    if (book && !unlocked && !isPreview) {
      navigate(`/library/${book.id}`, { replace: true });
    }
  }, [unlocked, book, navigate, isPreview]);

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

  if (!unlocked && !isPreview) return null;

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

  const effectiveSection = isPreview ? 1 : section;
  const current = sections[Math.min(effectiveSection, total) - 1];
  const isDark = prefs.theme === "dark";
  const goPrev = () => !isPreview && section > 1 && setSection(section - 1);
  const goNext = () => {
    if (isPreview) {
      toast.info(bookLang === "en" ? "Unlock the book to read more chapters." : "अधिक अध्याय पढ़ने के लिए पुस्तक अनलॉक करें।");
      return;
    }
    if (section < total) setSection(section + 1);
  };
  const toggleReaderTheme = () => update({ theme: isDark ? "light" : "dark" });
  const meta = getBookMeta(book, bookLang);
  const bookmarked = isBookmarked(book.id, bookLang, current.id);
  const handleBookmark = () => {
    toggle({
      bookId: book.id,
      lang: bookLang,
      sectionId: current.id,
      title: current.title,
      bookTitle: meta.title,
      savedAt: Date.now(),
    });
    toast.success(bookmarked ? t("bookmarkRemoved") : t("bookmarkAdded"));
  };

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
              <p className="text-[11px] opacity-60">अध्याय {effectiveSection} / {total}</p>
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
            <button
              onClick={handleBookmark}
              className="p-2 rounded-full hover:bg-foreground/5"
              aria-label="bookmark"
              aria-pressed={bookmarked}
            >
              {bookmarked ? <BookmarkCheck className="w-4 h-4 text-primary" /> : <Bookmark className="w-4 h-4" />}
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
            <Progress value={(effectiveSection / total) * 100} className="h-1" />
          </div>
          {isPreview && (
            <div className="px-4 pb-2 max-w-lg mx-auto">
              <div className="flex items-center justify-between gap-2 rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-xs">
                <span className="flex items-center gap-1.5 font-medium text-gold">
                  <Lock className="w-3.5 h-3.5" />
                  {bookLang === "en" ? "Preview — first chapter only" : "प्रीव्यू — केवल पहला अध्याय"}
                </span>
                <button
                  onClick={() => navigate(`/library/${book.id}`)}
                  className="font-semibold underline opacity-90 hover:opacity-100"
                >
                  {bookLang === "en" ? "Unlock" : "अनलॉक करें"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Section content */}
        <article
          key={animKey}
          className="max-w-lg mx-auto px-6 pt-8 animate-in fade-in slide-in-from-right-4 duration-300"
        >
          <div className="text-center mb-6">
            <span className="inline-block text-[11px] uppercase tracking-widest opacity-60">
              {bookLang === "en" ? `Chapter ${effectiveSection} • ${readingTime(current.body)} min read` : `अध्याय ${effectiveSection} • ${readingTime(current.body)} मिनट का पाठ`}
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
              {bookLang === "en" ? "Key Message" : "मुख्य संदेश"}
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
                disabled={isPreview || section === 1}
                variant="ghost"
                className="flex-1 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" /> {bookLang === "en" ? "Previous" : "पिछला"}
              </Button>
              <div className="text-xs opacity-70 px-2 whitespace-nowrap">
                {effectiveSection} / {total}
              </div>
              {isPreview ? (
                <Button
                  onClick={() => navigate(`/library/${book.id}`)}
                  className="flex-1 rounded-full"
                >
                  <Lock className="w-4 h-4" /> {bookLang === "en" ? "Unlock" : "अनलॉक"}
                </Button>
              ) : (
                <Button
                  onClick={goNext}
                  disabled={section === total}
                  className="flex-1 rounded-full"
                >
                  {bookLang === "en" ? "Next" : "अगला"} <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookReader;
