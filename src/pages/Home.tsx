import { useNavigate } from "react-router-dom";
import { BookOpen, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LANGUAGES } from "@/i18n/translations";

const Home = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const currentLang = LANGUAGES.find((l) => l.code === language);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col px-6 pt-6 pb-8">
      {/* Top bar with language switcher */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/settings/language")}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground active:scale-95 transition-transform"
          aria-label={t("changeLanguage")}
        >
          <Languages className="w-5 h-5" />
          <span className="text-base font-medium">{currentLang?.native}</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <BookOpen className="w-14 h-14 text-primary" />
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-3 leading-tight">
          {t("appTitle")}
        </h1>

        <p className="text-muted-foreground text-xl mb-6">{t("appSubtitle")}</p>

        <p className="text-foreground/80 text-lg max-w-sm mb-10 leading-relaxed">
          {t("intro")}
        </p>

        <Button
          size="lg"
          className="text-xl px-10 py-7 rounded-2xl w-full max-w-xs"
          onClick={() => navigate("/chapters")}
        >
          {t("viewChapters")}
        </Button>
      </div>
    </div>
  );
};

export default Home;
