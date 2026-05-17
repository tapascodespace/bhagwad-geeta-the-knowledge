import { useLanguage } from "@/contexts/LanguageContext";

export type FilterChip = {
  id: string;
  label: string;
};

type FilterChipsProps = {
  chips: FilterChip[];
  activeId: string;
  onChange: (id: string) => void;
};

const FilterChips = ({ chips, activeId, onChange }: FilterChipsProps) => {
  const { t } = useLanguage();

  return (
    <div
      className="flex gap-3.5 overflow-x-auto pb-1 -mx-1 px-1 mb-6 scrollbar-none"
      role="tablist"
      aria-label={t("filter")}
    >
      {chips.map((chip) => {
        const active = chip.id === activeId;
        return (
          <button
            key={chip.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(chip.id)}
            className={`shrink-0 h-[50px] px-6 rounded-[20px] text-base font-medium transition-all active:scale-[0.98] ${
              active
                ? "bg-primary text-primary-foreground shadow-chip-active"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;
