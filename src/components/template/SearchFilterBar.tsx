import { Search, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type SearchFilterBarProps = {
  value: string;
  onChange: (value: string) => void;
  onFilterClick?: () => void;
  placeholder?: string;
};

const SearchFilterBar = ({ value, onChange, onFilterClick, placeholder }: SearchFilterBarProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-3 mb-5" role="search">
      <label className="relative flex-1 min-w-0">
        <span className="sr-only">{placeholder ?? t("search")}</span>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? t("search")}
          className="w-full h-[60px] pl-12 pr-4 rounded-[20px] bg-card text-foreground placeholder:text-muted-foreground text-lg font-medium border-0 shadow-search focus:outline-none focus:ring-2 focus:ring-primary/35"
        />
      </label>
      {onFilterClick && (
        <button
          type="button"
          onClick={onFilterClick}
          className="shrink-0 h-[60px] w-[60px] rounded-[20px] bg-primary text-primary-foreground flex items-center justify-center shadow-elegant active:scale-95 transition-transform"
          aria-label={t("filter")}
        >
          <SlidersHorizontal className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchFilterBar;
