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
    <div className="pb-28 px-4 pt-4">
      <Button
        variant="ghost"
        size="lg"
        className="mb-4 -ml-2 text-base h-12"
        onClick={() => navigate("/chapters")}
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> {t("back")}
      </Button>

      <div className="mb-6 px-1">
        <p className="text-base text-primary font-semibold mb-1">
          {t("chapter")} {chapter.id}
        </p>
        <h2 className="text-3xl font-bold text-foreground leading-tight">
          {name}
        </h2>
        {summary && (
          <p className="text-base text-muted-foreground mt-3 leading-relaxed line-clamp-5">
            {summary}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {chapter.verses.map((verse) => {
          const preview = pickText(verse.translation, language);
          return (
            <button
              key={verse.id}
              onClick={() => navigate(`/chapters/${chapter.id}/verses/${verse.id}`)}
              className="w-full text-left rounded-2xl border-2 border-border bg-card p-5 shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-base text-primary font-semibold mb-2">
                    {t("verse")} {verse.id}
                  </p>
                  <p className="text-base text-foreground line-clamp-3 leading-relaxed">
                    {preview}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-muted-foreground shrink-0 mt-1" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterDetail;
