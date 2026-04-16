import { useNavigate, useParams } from "react-router-dom";
import { chapters } from "@/data/gita";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const chapter = chapters.find((c) => c.id === Number(chapterId));

  if (!chapter) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">অধ্যায় পাওয়া যায়নি</p>
      </div>
    );
  }

  return (
    <div className="pb-24 px-4 pt-4">
      <Button variant="ghost" size="sm" className="mb-3 -ml-2" onClick={() => navigate("/chapters")}>
        <ArrowLeft className="w-4 h-4 mr-1" /> ফিরে যান
      </Button>

      <div className="mb-4">
        <p className="text-xs text-primary font-medium">অধ্যায় {chapter.id}</p>
        <h2
          className="text-xl font-bold text-foreground"
          style={{ fontFamily: "'Noto Serif Bengali', serif" }}
        >
          {chapter.nameBengali}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">{chapter.summary}</p>
      </div>

      <div className="space-y-2">
        {chapter.verses.map((verse) => (
          <button
            key={verse.id}
            onClick={() => navigate(`/chapters/${chapter.id}/verses/${verse.id}`)}
            className="w-full text-left rounded-xl border border-border bg-card p-4 shadow-sm active:scale-[0.98] transition-transform"
          >
            <p className="text-xs text-primary font-medium mb-1">শ্লোক {verse.id}</p>
            <p className="text-sm text-foreground line-clamp-2 leading-relaxed">
              {verse.bengaliTranslation}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChapterDetail;
