import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { chapters } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";
import { chapterNames } from "@/i18n/translations";

const ChapterList = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  return (
    <div className="pb-28 px-4 pt-6">
      <h2 className="text-3xl font-bold text-foreground mb-6 px-2">
        {t("allChapters")}
      </h2>

      <div className="space-y-4">
        {chapters.map((ch) => {
          const name = chapterNames[ch.id]?.[language] ?? ch.nameBengali;
          return (
            <button
              key={ch.id}
              onClick={() => navigate(`/chapters/${ch.id}`)}
              className="w-full text-left rounded-2xl border-2 border-border bg-card p-5 shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-2xl">{ch.id}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground text-xl leading-tight">
                    {name}
                  </p>
                  <p className="text-base text-muted-foreground mt-1">
                    {ch.verseCount} {t("verses")}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-muted-foreground shrink-0" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterList;
