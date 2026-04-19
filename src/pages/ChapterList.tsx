import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { chapters, getChapterName } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";
import VerseOfTheDay from "@/components/VerseOfTheDay";

const ChapterList = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  return (
    <div className="pb-28 px-4 pt-2 animate-fade-in">
      {/* Gradient header */}
      <div className="rounded-3xl bg-gradient-header p-6 mb-6 shadow-elegant">
        <p className="text-primary-foreground/80 text-sm uppercase tracking-widest font-medium mb-1">
          {t("appTitle")}
        </p>
        <h2 className="font-display text-3xl font-semibold text-primary-foreground leading-tight">
          {t("allChapters")}
        </h2>
      </div>

      <div className="space-y-3">
        {chapters.map((ch, i) => {
          const name = getChapterName(ch, language);
          return (
            <button
              key={ch.id}
              onClick={() => navigate(`/chapters/${ch.id}`)}
              style={{ animationDelay: `${i * 30}ms` }}
              className="w-full text-left rounded-2xl bg-gradient-card border border-border/60 p-5 shadow-card active:scale-[0.98] hover:border-primary/40 hover:shadow-elegant transition-all animate-slide-up"
            >
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary blur-md opacity-25" />
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                    <span className="font-display text-primary-foreground font-semibold text-2xl">
                      {ch.id}
                    </span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display font-semibold text-foreground text-xl leading-tight">
                    {name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1.5">
                    {ch.verseCount} {t("verses")}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gold shrink-0" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterList;
