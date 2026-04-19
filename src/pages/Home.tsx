import { useNavigate } from "react-router-dom";
import { BookOpen, Languages, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LANGUAGES } from "@/i18n/translations";


const Home = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const currentLang = LANGUAGES.find((l) => l.code === language);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col px-6 pt-6 pb-8 animate-fade-in-slow">
      {/* Top bar */}
      <div className="flex justify-end mb-2">
        <button
          onClick={() => navigate("/settings/language")}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur text-secondary-foreground active:scale-95 transition-all hover:bg-secondary border border-border/50"
          aria-label={t("changeLanguage")}
        >
          <Languages className="w-5 h-5 text-primary" />
          <span className="text-base font-medium">{currentLang?.native}</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Glowing emblem */}
        <div className="relative mb-8 animate-scale-in">
          <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-40" />
          <div className="relative w-32 h-32 rounded-full bg-gradient-header flex items-center justify-center shadow-elegant">
            <BookOpen className="w-16 h-16 text-primary-foreground" strokeWidth={1.5} />
          </div>
          <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-gold animate-soft-pulse" />
        </div>

        <h1 className="font-display text-5xl font-semibold text-foreground mb-3 leading-tight tracking-tight">
          {t("appTitle")}
        </h1>

        <div className="ornament-divider w-48 mb-4">
          <span className="px-3 text-gold text-sm">✦</span>
        </div>

        <p className="text-muted-foreground text-xl mb-6 italic">{t("appSubtitle")}</p>

        <p className="text-foreground/80 text-lg max-w-sm mb-12 leading-relaxed">
          {t("intro")}
        </p>

        <Button
          size="lg"
          className="text-lg px-10 py-7 rounded-full w-full max-w-xs bg-gradient-primary hover:opacity-95 shadow-elegant border-0 font-semibold tracking-wide"
          onClick={() => navigate("/chapters")}
        >
          {t("viewChapters")}
        </Button>

        <div className="w-full max-w-md mt-10">
          <VerseOfTheDay />
        </div>
      </div>
    </div>
  );
};

export default Home;
