import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chapters, getChapterName, pickText } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const chapter = chapters.find((c) => c.id === Number(chapterId));

  if (!chapter) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground text-lg">{t("notFound")}</p>
      </div>
    );
  }

  const name = getChapterName(chapter, language);
  const summary = pickText(chapter.summary, language);

  return (
    <div className="pb-28 px-4 pt-4 animate-fade-in">
      <Button
        variant="ghost"
        size="lg"
        className="mb-4 -ml-2 text-base h-12 rounded-full"
        onClick={() => navigate("/chapters")}
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> {t("back")}
      </Button>

      {/* Chapter hero card */}
      <div className="rounded-3xl bg-gradient-header p-6 mb-6 shadow-elegant">
        <p className="text-primary-foreground/80 text-xs uppercase tracking-widest font-medium mb-2">
          {t("chapter")} {chapter.id}
        </p>
        <h2 className="font-display text-3xl font-semibold text-primary-foreground leading-tight">
          {name}
        </h2>
        {summary && (
          <p className="text-base text-primary-foreground/90 mt-3 leading-relaxed line-clamp-5">
            {summary}
          </p>
        )}
      </div>

      <div className="ornament-divider mb-5">
        <span className="px-3 text-gold bg-background relative text-sm">✦ {t("verses")} ✦</span>
      </div>

      <div className="space-y-3">
        {chapter.verses.map((verse, i) => {
          const preview = pickText(verse.translation, language);
          return (
            <button
              key={verse.id}
              onClick={() => navigate(`/chapters/${chapter.id}/verses/${verse.id}`)}
              style={{ animationDelay: `${i * 25}ms` }}
              className="w-full text-left rounded-2xl bg-gradient-card border border-border/60 p-5 shadow-card active:scale-[0.98] hover:border-primary/40 hover:shadow-elegant transition-all animate-slide-up"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="font-display text-primary font-semibold text-lg">
                    {verse.id}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1.5">
                    {t("verse")} {verse.id}
                  </p>
                  <p className="text-base text-foreground line-clamp-3 leading-relaxed">
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
