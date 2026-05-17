import ChapterCatalog from "@/components/template/ChapterCatalog";
import { useLanguage } from "@/contexts/LanguageContext";

const ChapterList = () => {
  const { t } = useLanguage();

  return (
    <ChapterCatalog
      showVerseOfDay
      title={t("allChapters")}
      subtitle={t("homeTagline")}
    />
  );
};

export default ChapterList;
