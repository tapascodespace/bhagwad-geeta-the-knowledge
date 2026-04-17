import { useLocation, useNavigate } from "react-router-dom";
import { Home, BookOpen, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const tabs = [
    { path: "/", label: t("home"), icon: Home },
    { path: "/chapters", label: t("chapters"), icon: BookOpen },
    { path: "/bookmarks", label: t("bookmarks"), icon: Heart },
  ];

  // Hide nav on language select screens
  if (location.pathname === "/welcome" || location.pathname === "/settings/language") {
    return null;
  }

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-border z-50 shadow-lg">
      <div className="flex items-center justify-around h-20 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center gap-1 px-6 py-2 transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
              aria-label={tab.label}
            >
              <tab.icon className={`w-7 h-7 ${active ? "stroke-[2.5]" : ""}`} />
              <span className={`text-sm ${active ? "font-bold" : "font-medium"}`}>
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
