import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Lock, BookOpen, Clock, Sparkles, Check, ArrowRight, Loader2 } from "lucide-react";
import { getBook, getBookMeta, getBookSections, hasContent } from "@/data/books";
import { useReadingProgress, useUnlockedBooks } from "@/hooks/useLibrary";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const STRINGS = {
  bn: {
    notFound: "বই পাওয়া যায়নি",
    backToLibrary: "পুস্তকালয়ে ফিরে যান",
    library: "পুস্তকালয়",
    comingSoon: "এই বইটি শীঘ্রই উপলব্ধ হবে",
    unlocked: "বইটি আনলক হয়েছে!",
    isUnlocked: "বইটি আনলক করা আছে",
    locked: "এই বইটি লক করা আছে",
    oneTime: "এককালীন প্রদান",
    chapters: (n: number) => `${n} সরল অধ্যায়`,
    designed: "মোবাইলে পড়ার জন্য ডিজাইন করা",
    themeFont: "লাইট / ডার্ক মোড ও ফন্ট নিয়ন্ত্রণ",
    startReading: "পড়া শুরু করুন",
    buyNow: (p: number) => `এখনই কিনুন — ₹${p}`,
    demoNote: "নিরাপদ পেমেন্ট Stripe দ্বারা পরিচালিত।",
    preview: "প্রিভিউ — প্রথম অধ্যায় পড়ুন",
    processing: "চেকআউট প্রস্তুত হচ্ছে…",
    paymentError: "পেমেন্ট শুরু করা যায়নি। আবার চেষ্টা করুন।",
  },
  hi: {
    notFound: "पुस्तक नहीं मिली",
    backToLibrary: "पुस्तकालय पर वापस जाएँ",
    library: "पुस्तकालय",
    comingSoon: "यह पुस्तक जल्द ही उपलब्ध होगी",
    unlocked: "पुस्तक अनलॉक हो गई!",
    isUnlocked: "पुस्तक अनलॉक है",
    locked: "यह पुस्तक लॉक है",
    oneTime: "एक बार का भुगतान",
    chapters: (n: number) => `${n} सरल अध्याय`,
    designed: "मोबाइल पर पढ़ने के लिए डिज़ाइन किया गया",
    themeFont: "लाइट / डार्क मोड और फ़ॉन्ट कंट्रोल",
    startReading: "पढ़ना शुरू करें",
    buyNow: (p: number) => `अभी ख़रीदें — ₹${p}`,
    demoNote: "सुरक्षित भुगतान Stripe द्वारा संचालित।",
    preview: "प्रीव्यू — पहला अध्याय पढ़ें",
    processing: "चेकआउट तैयार हो रहा है…",
    paymentError: "भुगतान शुरू नहीं हो सका। कृपया पुनः प्रयास करें।",
  },
  en: {
    notFound: "Book not found",
    backToLibrary: "Back to library",
    library: "Library",
    comingSoon: "This book will be available soon",
    unlocked: "Book unlocked!",
    isUnlocked: "Book is unlocked",
    locked: "This book is locked",
    oneTime: "One-time payment",
    chapters: (n: number) => `${n} simple chapters`,
    designed: "Designed for reading on mobile",
    themeFont: "Light / Dark mode and font controls",
    startReading: "Start reading",
    buyNow: (p: number) => `Buy now — ₹${p}`,
    demoNote: "Demo: this button unlocks the book without payment.",
    preview: "Preview — read first chapter",
  },
} as const;

const BookDetail = () => {
  const { bookId = "" } = useParams();
  const navigate = useNavigate();
  const book = useMemo(() => getBook(bookId), [bookId]);
  const { isUnlocked, unlock } = useUnlockedBooks();
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.hi;
  const { section } = useReadingProgress(bookId);

  if (!book) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-muted-foreground">{s.notFound}</p>
          <Button onClick={() => navigate("/library")} variant="outline" className="mt-4">
            {s.backToLibrary}
          </Button>
        </div>
      </main>
    );
  }

  const meta = getBookMeta(book, language);
  const unlocked = isUnlocked(book.id);
  const total = Math.max(book.hindiSections.length, book.englishSections.length);
  const available = hasContent(book);

  const handleUnlock = () => {
    if (!available) {
      toast.info(s.comingSoon);
      return;
    }
    unlock(book.id);
    toast.success(s.unlocked);
  };

  const handleRead = () => {
    if (!available) {
      toast.info(s.comingSoon);
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
        <ChevronLeft className="w-4 h-4" /> {s.library}
      </button>

      <div
        className={`w-full aspect-[3/4] max-w-[220px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-br ${book.cover} flex items-center justify-center shadow-elegant`}
      >
        {book.coverImage ? (
          <img src={book.coverImage} alt={meta.title} className="book-cover-img w-full h-full object-cover" />
        ) : (
          <BookOpen className="w-16 h-16 text-foreground/50" />
        )}
      </div>

      <h1 className="font-display text-2xl font-bold text-center mt-6">{meta.title}</h1>
      <p className="text-center text-sm text-muted-foreground mt-1">{meta.author}</p>
      <p className="text-center text-foreground/80 mt-4 px-2 leading-relaxed">{meta.description}</p>

      <div className="mt-8 mx-auto max-w-sm rounded-2xl border border-border bg-card p-6 shadow-card">
        {unlocked ? (
          <div className="flex items-center gap-2 text-emerald-700">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">{s.isUnlocked}</span>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-amber-700">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">{s.locked}</span>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">₹{book.price}</span>
              <span className="text-sm text-muted-foreground">{s.oneTime}</span>
            </div>
          </>
        )}

        <ul className="mt-4 space-y-2 text-sm text-foreground/80">
          <li className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" /> {s.chapters(total || 22)}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" /> {s.designed}
          </li>
          <li className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gold" /> {s.themeFont}
          </li>
        </ul>

        {unlocked ? (
          <>
            {(() => {
              const totalSec = getBookSections(book, language === "en" ? "en" : "hi").length;
              const pct = totalSec > 0 ? Math.min(100, Math.round((section / totalSec) * 100)) : 0;
              return (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>{s.chapters(totalSec)}</span>
                    <span>{pct}%</span>
                  </div>
                  <Progress value={pct} className="h-1.5" />
                </div>
              );
            })()}
            <Button className="w-full mt-5" size="lg" onClick={handleRead}>
              {s.startReading} <ArrowRight className="w-4 h-4" />
            </Button>
          </>
        ) : (
          <>
            <Button className="w-full mt-5" size="lg" onClick={handleUnlock}>
              {s.buyNow(book.price)}
            </Button>
            <Button
              variant="outline"
              className="w-full mt-2"
              size="lg"
              onClick={() => {
                if (!available) {
                  toast.info(s.comingSoon);
                  return;
                }
                navigate(`/library/${book.id}/read?preview=1`);
              }}
            >
              {s.preview}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center mt-3">
              {s.demoNote}
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default BookDetail;
