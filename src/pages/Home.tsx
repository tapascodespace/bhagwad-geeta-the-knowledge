import { useNavigate } from "react-router-dom";
import { BookOpen, Heart, ImageIcon, Library as LibraryIcon, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AppScreenHeader from "@/components/template/AppScreenHeader";
import VerseOfTheDay from "@/components/VerseOfTheDay";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const quickLinks = [
    { path: "/verse-studio", label: t("verseStudio"), icon: ImageIcon, desc: t("verseStudioSubtitle") },
    { path: "/chapters", label: t("viewChapters"), icon: BookOpen, desc: t("allChapters") },
    { path: "/library", label: t("library"), icon: LibraryIcon, desc: t("librarySubtitle") },
    { path: "/bookmarks", label: t("bookmarks"), icon: Heart, desc: t("myBookmarks") },
    { path: "/settings", label: t("settings"), icon: Sparkles, desc: t("intro") },
  ];

  return (
    <div className="pb-32 px-5 pt-6 animate-fade-in-slow min-h-screen bg-background">
      <AppScreenHeader />

      <div className="mb-6">
        <VerseOfTheDay />
      </div>

      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
        {t("quickStart")}
      </p>

      <div className="grid grid-cols-2 gap-4">
        {quickLinks.map((item) => (
          <button
            key={item.path}
            type="button"
            onClick={() => navigate(item.path)}
            className="text-left rounded-[20px] bg-card shadow-product-card p-5 active:scale-[0.98] hover:border-primary/20 border border-transparent transition-all min-h-[140px] flex flex-col"
          >
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
              <item.icon className="h-6 w-6 text-primary" strokeWidth={2} />
            </div>
            <p className="font-semibold text-foreground text-base leading-snug">{item.label}</p>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
