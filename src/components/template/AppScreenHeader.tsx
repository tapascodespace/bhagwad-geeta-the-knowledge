import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LANGUAGES } from "@/i18n/translations";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type AppScreenHeaderProps = {
  title?: string;
  subtitle?: string;
  showAvatar?: boolean;
};

const AppScreenHeader = ({ title, subtitle, showAvatar = true }: AppScreenHeaderProps) => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const currentLang = LANGUAGES.find((l) => l.code === language);

  return (
    <header className="flex items-start justify-between gap-3 mb-5">
      <div className="min-w-0 flex-1">
        <h1 className="font-display text-[2.5rem] leading-[1.15] font-semibold text-foreground tracking-tight">
          {title ?? t("appTitle")}
        </h1>
        <p className="text-muted-foreground text-lg mt-0.5 font-medium">
          {subtitle ?? t("homeTagline")}
        </p>
      </div>
      {showAvatar && (
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => navigate("/settings/language")}
            className="rounded-full ring-2 ring-primary/20 shadow-soft overflow-hidden active:scale-95 transition-transform"
            aria-label={t("changeLanguage")}
          >
            <Avatar className="h-[60px] w-[60px] bg-gradient-primary">
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg font-semibold">
                {currentLang?.native.slice(0, 2) ?? "ॐ"}
              </AvatarFallback>
            </Avatar>
          </button>
          <button
            type="button"
            onClick={() => navigate("/settings")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 active:scale-95 transition-all shadow-soft"
            aria-label={t("settings")}
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>
      )}
    </header>
  );
};

export default AppScreenHeader;
