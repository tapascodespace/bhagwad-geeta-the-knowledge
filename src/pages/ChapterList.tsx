import { useNavigate } from "react-router-dom";
import { chapters } from "@/data/gita";

const ChapterList = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 px-4 pt-4">
      <h2
        className="text-xl font-bold text-foreground mb-4"
        style={{ fontFamily: "'Noto Serif Bengali', serif" }}
      >
        অধ্যায় সমূহ
      </h2>

      <div className="space-y-3">
        {chapters.map((ch) => (
          <button
            key={ch.id}
            onClick={() => navigate(`/chapters/${ch.id}`)}
            className="w-full text-left rounded-xl border border-border bg-card p-4 shadow-sm active:scale-[0.98] transition-transform"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-sm">{ch.id}</span>
              </div>
              <div className="min-w-0">
                <p
                  className="font-semibold text-foreground text-base leading-tight"
                  style={{ fontFamily: "'Noto Serif Bengali', serif" }}
                >
                  {ch.nameBengali}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{ch.nameSanskrit}</p>
                <p className="text-xs text-muted-foreground mt-1">{ch.verseCount} টি শ্লোক</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
