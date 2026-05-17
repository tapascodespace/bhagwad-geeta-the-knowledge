import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, BookOpen, Heart, Library as LibraryIcon, Sparkles } from "lucide-react";
import { chapters } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";

const getDailyVersePath = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const seed = dayOfYear + now.getFullYear() * 7;
  let total = 0;
  chapters.forEach((c) => {
    total += c.verses.length;
  });
  const idx = seed % total;
  let acc = 0;
  for (const c of chapters) {
    if (idx < acc + c.verses.length) {
      return `/chapters/${c.id}/verses/${idx - acc + 1}`;
    }
    acc += c.verses.length;
  }
  return "/chapters";
};

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const dailyVersePath = useMemo(getDailyVersePath, []);

  const leftTabs = [
    { path: "/", label: t("home"), icon: Home },
    { path: "/chapters", label: t("chapters"), icon: BookOpen },
  ];
  const rightTabs = [
    { path: "/library", label: t("library"), icon: LibraryIcon },
    { path: "/bookmarks", label: t("bookmarks"), icon: Heart },
  ];

  if (location.pathname === "/welcome" || location.pathname === "/settings/language") {
    return null;
  }

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const hideOnVerse = /^\/chapters\/\d+\/verses\/\d+$/.test(location.pathname);

  const TabButton = ({ path, label, icon: Icon }: { path: string; label: string; icon: typeof Home }) => {
    const active = isActive(path);
    return (
      <button
        type="button"
        onClick={() => navigate(path)}
        className="flex flex-col items-center gap-0.5 justify-end min-h-[44px]"
        aria-label={label}
        aria-current={active ? "page" : undefined}
      >
        <Icon
          className={`h-6 w-6 ${active ? "text-primary-foreground" : "text-primary-foreground/65"}`}
          strokeWidth={active ? 2.4 : 1.8}
        />
        {active && <span className="h-1 w-1 rounded-full bg-primary-foreground mt-0.5" aria-hidden />}
      </button>
    );
  };

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 max-w-lg mx-auto pointer-events-none ${
        hideOnVerse ? "opacity-0 translate-y-4" : ""
      } transition-all duration-300`}
      aria-hidden={hideOnVerse}
    >
      <div className="relative h-[88px] pointer-events-auto">
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[90px] text-primary"
          viewBox="0 0 430 90"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0 20 Q0 0 20 0 H165 Q215 0 215 50 Q215 0 265 0 H410 Q430 0 430 20 V90 H0 Z"
          />
        </svg>

        <button
          type="button"
          onClick={() => navigate(dailyVersePath)}
          className="absolute left-1/2 -translate-x-1/2 -top-1 z-10 h-[72px] w-[72px] rounded-full bg-gradient-primary text-primary-foreground shadow-elegant border-4 border-background flex items-center justify-center active:scale-95 transition-transform"
          aria-label={t("verseOfTheDay")}
        >
          <Sparkles className="h-8 w-8" strokeWidth={2} />
        </button>

        <div className="absolute inset-x-0 bottom-0 h-[72px] grid grid-cols-5 items-end px-4 pb-3">
          {leftTabs.map((tab) => (
            <TabButton key={tab.path} {...tab} />
          ))}
          <div aria-hidden />
          {rightTabs.map((tab) => (
            <TabButton key={tab.path} {...tab} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
