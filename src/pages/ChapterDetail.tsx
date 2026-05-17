import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { chapters, getChapterName, pickText } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const chapter = chapters.find((c) => c.id === Number(chapterId));

  if (!chapter) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-5">
        <p className="text-muted-foreground text-lg">{t("notFound")}</p>
      </div>
    );
  }

  const name = getChapterName(chapter, language);
  const summary = pickText(chapter.summary, language);

  return (
    <div className="pb-32 px-5 pt-5 animate-fade-in min-h-screen bg-background">
      <button
        type="button"
        onClick={() => navigate("/chapters")}
        className="flex items-center gap-2 text-foreground font-medium mb-4 -ml-1 active:opacity-70"
      >
        <ArrowLeft className="h-7 w-7" />
        <span className="text-lg">{t("back")}</span>
      </button>

      <div className="rounded-[24px] bg-gradient-header p-6 mb-6 shadow-elegant">
        <p className="text-primary-foreground/75 text-xs uppercase tracking-widest font-semibold mb-2">
          {t("chapter")} {chapter.id}
        </p>
        <h2 className="font-display text-3xl font-semibold text-primary-foreground leading-tight">
          {name}
        </h2>
        {summary && (
          <p className="text-base text-primary-foreground/90 mt-3 leading-relaxed line-clamp-4">
            {summary}
          </p>
        )}
        <p className="text-sm text-primary-foreground/80 mt-4 font-medium">
          {chapter.verseCount} {t("verses")}
        </p>
      </div>

      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 px-1">
        {t("verses")}
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {chapter.verses.map((verse, i) => {
          const preview = pickText(verse.translation, language);
          return (
            <button
              key={verse.id}
              type="button"
              onClick={() => navigate(`/chapters/${chapter.id}/verses/${verse.id}`)}
              style={{ animationDelay: `${i * 25}ms` }}
              className="w-full text-left rounded-[20px] bg-card shadow-product-card border border-border/40 p-5 active:scale-[0.98] hover:border-primary/30 transition-all animate-slide-up"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                  <span className="font-display text-primary-foreground font-semibold text-xl">
                    {verse.id}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1.5">
                    {t("verse")} {verse.id}
                  </p>
                  <p className="font-sanskrit text-sm text-muted-foreground line-clamp-1 mb-1">
                    {verse.sanskrit.split("\n")[0]}
                  </p>
                  <p className="text-base text-foreground line-clamp-2 leading-relaxed">
                    {preview}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-2" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterDetail;
