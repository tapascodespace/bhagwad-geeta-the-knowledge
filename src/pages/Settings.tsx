import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Receipt,
  BookMarked,
  Heart,
  Languages,
  Palette,
  UserCircle2,
  LifeBuoy,
  ChevronRight,
  Sun,
  Moon,
  Smartphone,
  Type,
  AlignJustify,
  Mail,
  Lightbulb,
  ShieldCheck,
  ScrollText,
  RotateCcw,
  LogOut,
  Sparkles,
  BookOpen,
  Check,
  PlayCircle,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme, type Theme } from "@/contexts/ThemeContext";
import { useAppearance } from "@/hooks/useAppearance";
import { usePurchases } from "@/hooks/usePurchases";
import {
  readProgressMap,
  useUnlockedBooks,
  useBookBookmarks,
} from "@/hooks/useLibrary";
import { useBookmarks } from "@/hooks/useBookmarks";
import { LANGUAGES, type Language } from "@/i18n/translations";
import {
  books as ALL_BOOKS,
  getBook,
  getBookMeta,
  getBookSections,
} from "@/data/books";

const fmtDate = (ts: number, lang: Language) => {
  const locale = lang === "hi" ? "hi-IN" : lang === "bn" ? "bn-IN" : "en-IN";
  try {
    return new Date(ts).toLocaleDateString(locale, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return new Date(ts).toLocaleString();
  }
};

const SectionCard = ({
  icon: Icon,
  title,
  subtitle,
  children,
  delayMs = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  delayMs?: number;
}) => (
  <section
    className="rounded-3xl border border-border/60 bg-gradient-card shadow-card p-5 animate-fade-in"
    style={{ animationDelay: `${delayMs}ms`, animationFillMode: "both" }}
  >
    <div className="flex items-start gap-3 mb-4">
      <div className="w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft shrink-0">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <h2 className="font-display text-xl font-semibold text-foreground leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
    {children}
  </section>
);

const Row = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-background/50 border border-border/50 hover:bg-secondary/60 active:scale-[0.99] transition-all text-left"
  >
    {children}
  </button>
);

const STR = {
  hi: {
    title: "सेटिंग्स",
    subtitle: "अपने अनुभव को व्यक्तिगत बनाएँ",
    purchases: "खरीद इतिहास",
    purchasesSub: "आपकी अनलॉक की गई पुस्तकें",
    noPurchases: "अभी तक कोई खरीद नहीं हुई।",
    browseLibrary: "पुस्तकालय देखें",
    paid: "भुगतान",
    purchased: "खरीदा गया",
    readNow: "अभी पढ़ें",
    progress: "पढ़ने की प्रगति",
    progressSub: "जहाँ छोड़ा था, वहीं से शुरू करें",
    noProgress: "अभी पढ़ना शुरू नहीं किया।",
    lastRead: "अंतिम पढ़ी गई पुस्तक",
    section: "अध्याय",
    completed: "पूर्ण",
    continueReading: "पढ़ना जारी रखें",
    bookmarks: "बुकमार्क और पसंदीदा",
    bookmarksSub: "आपके सहेजे गए श्लोक और अध्याय",
    savedSlokas: "सहेजे गए श्लोक",
    savedSections: "सहेजे गए अध्याय",
    viewAll: "सभी देखें",
    language: "भाषा",
    languageSub: "ऐप की भाषा चुनें",
    appearance: "रूप-रंग",
    appearanceSub: "थीम, फ़ॉन्ट और स्पेसिंग",
    light: "लाइट",
    dark: "डार्क",
    amoled: "एमोलेड",
    fontSize: "फ़ॉन्ट आकार",
    spacing: "पंक्ति स्पेसिंग",
    reset: "रीसेट करें",
    sample: "सैंपल टेक्स्ट",
    sampleText:
      "जो हुआ वह अच्छा हुआ, जो हो रहा है वह अच्छा हो रहा है, जो होगा वह भी अच्छा ही होगा।",
    account: "खाता",
    accountSub: "आपकी प्रोफ़ाइल और खरीद",
    guest: "अतिथि उपयोगकर्ता",
    guestSub: "इस डिवाइस पर सहेजा गया",
    restore: "खरीद पुनर्स्थापित करें",
    signOut: "साइन आउट",
    signOutConfirm: "स्थानीय डेटा साफ़ करना चाहते हैं?",
    cleared: "स्थानीय डेटा साफ़ किया गया",
    restoreNote: "यदि आपने पहले खरीदा है, तो सहायता से संपर्क करें।",
    support: "सहायता",
    supportSub: "हमसे संपर्क करें या बई का सुझाव दें",
    contact: "सहायता से संपर्क करें",
    suggest: "एक पुस्तक सुझाएँ",
    privacy: "गोपनीयता नीति",
    terms: "नियम और शर्तें",
    soon: "जल्द आ रहा है",
    back: "वापस",
  },
  en: {
    title: "Settings",
    subtitle: "Personalise your spiritual journey",
    purchases: "Purchase History",
    purchasesSub: "Books you have unlocked",
    noPurchases: "No purchases yet.",
    browseLibrary: "Browse Library",
    paid: "Paid",
    purchased: "Purchased",
    readNow: "Read Now",
    progress: "Reading Progress",
    progressSub: "Pick up right where you left off",
    noProgress: "You haven't started reading yet.",
    lastRead: "Last read book",
    section: "Section",
    completed: "complete",
    continueReading: "Continue Reading",
    bookmarks: "Bookmarks & Favourites",
    bookmarksSub: "Your saved verses and sections",
    savedSlokas: "Saved verses",
    savedSections: "Saved sections",
    viewAll: "View all",
    language: "Language",
    languageSub: "Choose your app language",
    appearance: "Appearance",
    appearanceSub: "Theme, font and spacing",
    light: "Light",
    dark: "Dark",
    amoled: "AMOLED",
    fontSize: "Font size",
    spacing: "Line spacing",
    reset: "Reset",
    sample: "Sample text",
    sampleText:
      "What has happened was good, what is happening is good, and what will happen will also be good.",
    account: "Account",
    accountSub: "Your profile and purchases",
    guest: "Guest user",
    guestSub: "Saved on this device",
    restore: "Restore purchases",
    signOut: "Sign out",
    signOutConfirm: "Clear all local data on this device?",
    cleared: "Local data cleared",
    restoreNote: "If you purchased before, please contact support.",
    support: "Support",
    supportSub: "Reach out or suggest a book",
    contact: "Contact support",
    suggest: "Suggest a book",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    soon: "Coming soon",
    back: "Back",
  },
  bn: {
    title: "সেটিংস",
    subtitle: "আপনার অভিজ্ঞতা ব্যক্তিগত করুন",
    purchases: "ক্রয়ের ইতিহাস",
    purchasesSub: "আপনার আনলক করা বই",
    noPurchases: "এখনও কোনো ক্রয় হয়নি।",
    browseLibrary: "পুস্তকালয় দেখুন",
    paid: "পরিশোধিত",
    purchased: "কেনা হয়েছে",
    readNow: "এখন পড়ুন",
    progress: "পাঠের অগ্রগতি",
    progressSub: "যেখানে রেখেছিলেন সেখান থেকে শুরু করুন",
    noProgress: "এখনও পড়া শুরু করেননি।",
    lastRead: "সর্বশেষ পড়া বই",
    section: "অধ্যায়",
    completed: "সম্পূর্ণ",
    continueReading: "পড়া চালিয়ে যান",
    bookmarks: "বুকমার্ক এবং পছন্দ",
    bookmarksSub: "আপনার সংরক্ষিত শ্লোক ও অধ্যায়",
    savedSlokas: "সংরক্ষিত শ্লোক",
    savedSections: "সংরক্ষিত অধ্যায়",
    viewAll: "সব দেখুন",
    language: "ভাষা",
    languageSub: "অ্যাপের ভাষা বেছে নিন",
    appearance: "রূপ",
    appearanceSub: "থিম, ফন্ট এবং স্পেসিং",
    light: "লাইট",
    dark: "ডার্ক",
    amoled: "AMOLED",
    fontSize: "ফন্ট আকার",
    spacing: "লাইন স্পেসিং",
    reset: "রিসেট",
    sample: "নমুনা টেক্সট",
    sampleText:
      "যা হয়েছে তা ভালো হয়েছে, যা হচ্ছে তা ভালো হচ্ছে, যা হবে তাও ভালোই হবে।",
    account: "অ্যাকাউন্ট",
    accountSub: "আপনার প্রোফাইল ও ক্রয়",
    guest: "অতিথি ব্যবহারকারী",
    guestSub: "এই ডিভাইসে সংরক্ষিত",
    restore: "ক্রয় পুনরুদ্ধার করুন",
    signOut: "সাইন আউট",
    signOutConfirm: "এই ডিভাইস থেকে স্থানীয় ডেটা মুছবেন?",
    cleared: "স্থানীয় ডেটা মুছে ফেলা হয়েছে",
    restoreNote: "যদি আপনি আগে কিনে থাকেন, সহায়তার সাথে যোগাযোগ করুন।",
    support: "সহায়তা",
    supportSub: "যোগাযোগ করুন বা বইয়ের পরামর্শ দিন",
    contact: "সহায়তায় যোগাযোগ",
    suggest: "একটি বই প্রস্তাব করুন",
    privacy: "গোপনীয়তা নীতি",
    terms: "নিয়ম ও শর্ত",
    soon: "শীঘ্রই আসছে",
    back: "ফিরে যান",
  },
} as const;

const SUPPORT_EMAIL = "support@bhagwad-geeta.app";

const Settings = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { appearance, update, reset } = useAppearance();
  const { purchases } = usePurchases();
  const { unlock } = useUnlockedBooks();
  const { items: bookBookmarks } = useBookBookmarks();
  const { bookmarks: verseBookmarks } = useBookmarks();
  const s = STR[language] ?? STR.en;

  const progressMap = useMemo(() => readProgressMap(), [purchases]);

  // Reading progress entries
  const progressEntries = useMemo(() => {
    return Object.entries(progressMap)
      .map(([bookId, section]) => {
        const book = getBook(bookId);
        if (!book) return null;
        const lang = language === "en" ? "en" : "hi";
        const total = getBookSections(book, lang).length;
        const meta = getBookMeta(book, language);
        const pct = total > 0 ? Math.min(100, Math.round((section / total) * 100)) : 0;
        return { book, meta, section, total, pct };
      })
      .filter(Boolean) as Array<{
        book: ReturnType<typeof getBook> & object;
        meta: { title: string; author: string; description: string };
        section: number;
        total: number;
        pct: number;
      }>;
  }, [progressMap, language]);

  const sortedPurchases = useMemo(
    () => [...purchases].sort((a, b) => b.purchasedAt - a.purchasedAt),
    [purchases],
  );

  const sortedProgress = useMemo(
    () => progressEntries.slice().sort((a, b) => b.pct - a.pct),
    [progressEntries],
  );
  const lastRead = sortedProgress[0];

  const handleRestore = () => {
    // No auth yet — best-effort: re-unlock anything stored in purchases history
    purchases.forEach((p) => unlock(p.bookId));
    if (purchases.length > 0) {
      toast.success(s.restore, { description: `${purchases.length} book(s) restored` });
    } else {
      toast(s.restore, { description: s.restoreNote });
    }
  };

  const handleSignOut = () => {
    if (!window.confirm(s.signOutConfirm)) return;
    try {
      [
        "library:unlocked",
        "library:purchases",
        "library:progress",
        "library:book-bookmarks",
        "library:reader-prefs",
        "gita-bookmarks",
      ].forEach((k) => localStorage.removeItem(k));
    } catch {
      /* ignore */
    }
    toast.success(s.cleared);
    setTimeout(() => window.location.reload(), 600);
  };

  const themeOptions: { id: Theme; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "light", label: s.light, icon: Sun },
    { id: "dark", label: s.dark, icon: Moon },
    { id: "amoled", label: s.amoled, icon: Smartphone },
  ];

  const continueReadingItems = sortedProgress.slice(0, 4);

  return (
    <main className="min-h-screen pb-28 pt-6 max-w-lg mx-auto px-5 animate-fade-in-slow">
      {/* Header */}
      <header className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3"
          aria-label={s.back}
        >
          <ArrowLeft className="w-4 h-4" /> {s.back}
        </button>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-header p-6 shadow-elegant">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gold/30 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-2 text-primary-foreground/80 text-xs uppercase tracking-[0.2em] mb-1">
              <Sparkles className="w-3.5 h-3.5" /> {s.subtitle}
            </div>
            <h1 className="font-display text-4xl font-bold text-primary-foreground tracking-tight">
              {s.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="space-y-5">
        {/* Purchase History */}
        <SectionCard icon={Receipt} title={s.purchases} subtitle={s.purchasesSub} delayMs={40}>
          {sortedPurchases.length === 0 ? (
            <div className="text-center py-6">
              <BookOpen className="w-10 h-10 mx-auto text-muted-foreground/40 mb-2" />
              <p className="text-sm text-muted-foreground mb-4">{s.noPurchases}</p>
              <Button variant="outline" size="sm" onClick={() => navigate("/library")}>
                {s.browseLibrary}
              </Button>
            </div>
          ) : (
            <ul className="space-y-3">
              {sortedPurchases.map((p) => {
                const book = getBook(p.bookId);
                if (!book) return null;
                const meta = getBookMeta(book, language);
                return (
                  <li
                    key={p.bookId}
                    className="flex gap-3 p-3 rounded-2xl bg-background/60 border border-border/50"
                  >
                    <div
                      className={`relative w-14 h-20 rounded-lg overflow-hidden bg-gradient-to-br ${book.cover} shrink-0`}
                    >
                      {book.coverImage ? (
                        <img
                          src={book.coverImage}
                          alt={meta.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <BookOpen className="w-6 h-6 text-foreground/40 m-auto mt-6" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">
                          {meta.title}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-900 bg-emerald-100 px-1.5 py-0.5 rounded-full shrink-0">
                          <Check className="w-2.5 h-2.5" /> {s.purchased}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {fmtDate(p.purchasedAt, language)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs font-medium text-foreground/80">
                          {s.paid}: ₹{p.price}
                        </p>
                        <button
                          onClick={() => navigate(`/library/${book.id}/read`)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                        >
                          {s.readNow} <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </SectionCard>

        {/* Reading Progress */}
        <SectionCard icon={PlayCircle} title={s.progress} subtitle={s.progressSub} delayMs={80}>
          {!lastRead ? (
            <p className="text-sm text-muted-foreground text-center py-4">{s.noProgress}</p>
          ) : (
            <>
              <div className="rounded-2xl bg-gradient-primary p-4 text-primary-foreground shadow-soft mb-3">
                <p className="text-[10px] uppercase tracking-wider opacity-80">
                  {s.lastRead}
                </p>
                <p className="font-display text-lg font-semibold leading-tight mt-0.5 line-clamp-1">
                  {lastRead.meta.title}
                </p>
                <p className="text-xs opacity-90 mt-1">
                  {s.section} {lastRead.section} · {lastRead.pct}% {s.completed}
                </p>
                <div className="mt-3 h-1.5 rounded-full bg-white/25 overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all"
                    style={{ width: `${lastRead.pct}%` }}
                  />
                </div>
                <button
                  onClick={() => navigate(`/library/${lastRead.book.id}/read`)}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors"
                >
                  {s.continueReading} <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {continueReadingItems.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 snap-x scrollbar-none" style={{ scrollbarWidth: "none" }}>
                  {continueReadingItems.slice(1).map((item) => (
                    <button
                      key={item.book.id}
                      onClick={() => navigate(`/library/${item.book.id}/read`)}
                      className="snap-start shrink-0 w-40 text-left rounded-2xl border border-border/50 bg-background/60 p-3 hover:shadow-card transition-shadow active:scale-[0.98]"
                    >
                      <div className={`relative w-full h-20 rounded-lg overflow-hidden bg-gradient-to-br ${item.book.cover} mb-2`}>
                        {item.book.coverImage ? (
                          <img src={item.book.coverImage} alt={item.meta.title} loading="lazy" className="w-full h-full object-cover" />
                        ) : (
                          <BookOpen className="w-6 h-6 text-foreground/40 m-auto mt-6" />
                        )}
                      </div>
                      <p className="text-xs font-semibold text-foreground line-clamp-2 leading-snug">
                        {item.meta.title}
                      </p>
                      <Progress value={item.pct} className="h-1 mt-1.5" />
                      <p className="text-[10px] text-muted-foreground mt-0.5">{item.pct}%</p>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </SectionCard>

        {/* Bookmarks & Favourites */}
        <SectionCard icon={Heart} title={s.bookmarks} subtitle={s.bookmarksSub} delayMs={120}>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate("/bookmarks")}
              className="rounded-2xl p-4 text-left bg-background/60 border border-border/50 hover:bg-secondary/60 active:scale-[0.98] transition-all"
            >
              <Heart className="w-5 h-5 text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground leading-none">
                {verseBookmarks.length}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{s.savedSlokas}</p>
            </button>
            <button
              onClick={() => navigate("/bookmarks")}
              className="rounded-2xl p-4 text-left bg-background/60 border border-border/50 hover:bg-secondary/60 active:scale-[0.98] transition-all"
            >
              <BookMarked className="w-5 h-5 text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground leading-none">
                {bookBookmarks.length}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{s.savedSections}</p>
            </button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="w-full mt-3 justify-between"
            onClick={() => navigate("/bookmarks")}
          >
            <span>{s.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </SectionCard>

        {/* Language */}
        <SectionCard icon={Languages} title={s.language} subtitle={s.languageSub} delayMs={160}>
          <div className="grid grid-cols-3 gap-2">
            {LANGUAGES.map((lang) => {
              const active = language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`rounded-2xl p-3 text-center border-2 transition-all active:scale-95 ${
                    active
                      ? "border-primary bg-primary/10 shadow-soft"
                      : "border-border/60 bg-background/50 hover:border-primary/40"
                  }`}
                >
                  <p className="text-base font-semibold text-foreground">
                    {lang.native}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {lang.label}
                  </p>
                  {active && (
                    <span className="mt-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary mx-auto">
                      <Check className="w-2.5 h-2.5 text-primary-foreground" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </SectionCard>

        {/* Appearance */}
        <SectionCard icon={Palette} title={s.appearance} subtitle={s.appearanceSub} delayMs={200}>
          {/* Theme */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {themeOptions.map((opt) => {
              const active = theme === opt.id;
              const Icon = opt.icon;
              return (
                <button
                  key={opt.id}
                  onClick={() => setTheme(opt.id)}
                  className={`rounded-2xl p-3 flex flex-col items-center gap-1.5 border-2 transition-all active:scale-95 ${
                    active
                      ? "border-primary bg-primary/10"
                      : "border-border/60 bg-background/50 hover:border-primary/40"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-xs font-medium text-foreground">{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Font size */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{s.fontSize}</span>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">
                {Math.round(appearance.fontScale * 100)}%
              </span>
            </div>
            <Slider
              value={[appearance.fontScale]}
              min={0.85}
              max={1.3}
              step={0.05}
              onValueChange={([v]) => update({ fontScale: v })}
            />
          </div>

          {/* Spacing */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <AlignJustify className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{s.spacing}</span>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">
                {appearance.lineSpacing.toFixed(2)}
              </span>
            </div>
            <Slider
              value={[appearance.lineSpacing]}
              min={1.4}
              max={2}
              step={0.05}
              onValueChange={([v]) => update({ lineSpacing: v })}
            />
          </div>

          {/* Sample */}
          <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
              {s.sample}
            </p>
            <p className="text-foreground font-display italic">
              "{s.sampleText}"
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="w-full mt-3"
            onClick={reset}
          >
            <RotateCcw className="w-4 h-4 mr-1" /> {s.reset}
          </Button>
        </SectionCard>

        {/* Account */}
        <SectionCard icon={UserCircle2} title={s.account} subtitle={s.accountSub} delayMs={240}>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-background/60 border border-border/50 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
              <UserCircle2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-foreground">{s.guest}</p>
              <p className="text-xs text-muted-foreground">{s.guestSub}</p>
            </div>
          </div>
          <div className="space-y-2">
            <Row onClick={handleRestore}>
              <span className="flex items-center gap-3">
                <RotateCcw className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{s.restore}</span>
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Row>
            <Row onClick={handleSignOut}>
              <span className="flex items-center gap-3">
                <LogOut className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">{s.signOut}</span>
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Row>
          </div>
        </SectionCard>

        {/* Support */}
        <SectionCard icon={LifeBuoy} title={s.support} subtitle={s.supportSub} delayMs={280}>
          <div className="space-y-2">
            <Row
              onClick={() => {
                window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Support request")}`;
              }}
            >
              <span className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{s.contact}</span>
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Row>
            <Row
              onClick={() => {
                window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Book suggestion")}&body=${encodeURIComponent("I would love to read…")}`;
              }}
            >
              <span className="flex items-center gap-3">
                <Lightbulb className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-foreground">{s.suggest}</span>
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Row>
            <Row onClick={() => toast(s.privacy, { description: s.soon })}>
              <span className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{s.privacy}</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {s.soon}
              </span>
            </Row>
            <Row onClick={() => toast(s.terms, { description: s.soon })}>
              <span className="flex items-center gap-3">
                <ScrollText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{s.terms}</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {s.soon}
              </span>
            </Row>
          </div>
        </SectionCard>

        <p className="text-center text-[11px] text-muted-foreground py-2">
          ✦ Made with devotion ✦
        </p>
      </div>
    </main>
  );
};

export default Settings;
