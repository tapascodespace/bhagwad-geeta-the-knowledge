import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LANGUAGES, Language } from "@/i18n/translations";

interface Props {
  initial?: boolean;
}

const LanguageSelect = ({ initial = false }: Props) => {
  const { language, setLanguage } = useLanguage();
  const [selected, setSelected] = useState<Language>(language);
  const navigate = useNavigate();

  const handleContinue = () => {
    setLanguage(selected);
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-10 bg-background">
      <div className="flex flex-col items-center text-center mb-10 mt-6">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-5">
          <BookOpen className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          श्रीमद्भगवद्गीता
        </h1>
        <p className="text-muted-foreground text-lg">Bhagavad Gita</p>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Choose your language
        </h2>
        <p className="text-base text-muted-foreground text-center">
          आप इसे बाद में बदल सकते हैं · You can change this later
        </p>
      </div>

      <div className="space-y-4 mt-8 mb-8">
        {LANGUAGES.map((lang) => {
          const active = selected === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className={`w-full rounded-2xl border-2 p-5 flex items-center justify-between transition-all ${
                active
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card"
              }`}
            >
              <div className="text-left">
                <p className="text-2xl font-semibold text-foreground">
                  {lang.native}
                </p>
                <p className="text-base text-muted-foreground mt-1">
                  {lang.label}
                </p>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  active
                    ? "bg-primary border-primary"
                    : "border-muted-foreground/30"
                }`}
              >
                {active && <Check className="w-5 h-5 text-primary-foreground" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-auto">
        <Button
          size="lg"
          className="w-full text-xl py-7 rounded-2xl"
          onClick={handleContinue}
        >
          {selected === "bn" ? "এগিয়ে যান" : selected === "hi" ? "आगे बढ़ें" : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelect;
