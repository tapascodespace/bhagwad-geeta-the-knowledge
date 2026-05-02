import { useLocation, useNavigate } from "react-router-dom";
import { Home, BookOpen, Heart, Library as LibraryIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const tabs = [
    { path: "/", label: t("home"), icon: Home },
    { path: "/chapters", label: t("chapters"), icon: BookOpen },
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

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border/60 z-50 shadow-card">
      <div className="flex items-center justify-around h-20 max-w-lg mx-auto px-2">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-1 px-6 py-2 transition-all relative"
              aria-label={tab.label}
            >
              {active && (
                <span className="absolute -top-px left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-primary rounded-b-full" />
              )}
              <tab.icon
                className={`w-6 h-6 transition-all ${
                  active ? "text-primary scale-110" : "text-muted-foreground"
                }`}
                strokeWidth={active ? 2.4 : 1.8}
              />
              <span
                className={`text-xs transition-colors ${
                  active ? "text-primary font-semibold" : "text-muted-foreground font-medium"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
