import { useNavigate } from "react-router-dom";
import { chapters, getChapterName } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";
import { useChapterFilters, type ChapterRangeFilter } from "@/hooks/useChapterFilters";
import AppScreenHeader from "@/components/template/AppScreenHeader";
import SearchFilterBar from "@/components/template/SearchFilterBar";
import FilterChips from "@/components/template/FilterChips";
import ChapterGridCard from "@/components/template/ChapterGridCard";
import VerseOfTheDay from "@/components/VerseOfTheDay";

type ChapterCatalogProps = {
  showVerseOfDay?: boolean;
  title?: string;
  subtitle?: string;
};

const ChapterCatalog = ({ showVerseOfDay = true, title, subtitle }: ChapterCatalogProps) => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { query, setQuery, range, setRange, filtered } = useChapterFilters(language);

  const chips = [
    { id: "all" as ChapterRangeFilter, label: t("filterAll") },
    { id: "1-6" as ChapterRangeFilter, label: t("chaptersRange1") },
    { id: "7-12" as ChapterRangeFilter, label: t("chaptersRange2") },
    { id: "13-18" as ChapterRangeFilter, label: t("chaptersRange3") },
  ];

  return (
    <div className="pb-32 px-5 pt-6 animate-fade-in bg-background min-h-screen">
      <AppScreenHeader title={title} subtitle={subtitle} />

      <SearchFilterBar
        value={query}
        onChange={setQuery}
        placeholder={t("searchChapters")}
      />

      <FilterChips chips={chips} activeId={range} onChange={(id) => setRange(id as ChapterRangeFilter)} />

      {showVerseOfDay && (
        <div className="mb-6">
          <VerseOfTheDay />
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-12 text-lg">{t("noChaptersFound")}</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((ch, i) => (
            <ChapterGridCard
              key={ch.id}
              chapter={ch}
              name={getChapterName(ch, language)}
              onClick={() => navigate(`/chapters/${ch.id}`)}
              style={{ animationDelay: `${i * 40}ms` }}
            />
          ))}
        </div>
      )}

      {!showVerseOfDay && filtered.length > 0 && (
        <p className="text-center text-xs text-muted-foreground mt-6 pb-2">
          {filtered.length} / {chapters.length} {t("chapters")}
        </p>
      )}
    </div>
  );
};

export default ChapterCatalog;
