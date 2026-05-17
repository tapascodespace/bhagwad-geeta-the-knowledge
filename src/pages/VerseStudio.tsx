import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  RefreshCw,
  Share2,
  Sparkles,
} from "lucide-react";
import { pickText, getChapterName } from "@/data/gita";
import { useLanguage } from "@/contexts/LanguageContext";
import { pickVerseBySeed } from "@/lib/verse-pick";
import { pickBackgroundBySeed } from "@/lib/share-backgrounds";
import { renderVerseCardImage } from "@/lib/render-verse-card";
import VerseSharePreview from "@/components/verse-studio/VerseSharePreview";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const initialSeed = () => `${Date.now()}`;

const VerseStudio = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [seed, setSeed] = useState(initialSeed);
  const [busy, setBusy] = useState(false);

  const { chapter, verse } = useMemo(() => pickVerseBySeed(seed), [seed]);
  const backgroundUrl = useMemo(() => pickBackgroundBySeed(seed), [seed]);

  const translation = pickText(verse.translation, language);
  const chapterName = getChapterName(chapter, language);
  const sanskrit = verse.sanskrit.split("\n").filter(Boolean).slice(0, 2).join("\n");

  const cardContent = useMemo(
    () => ({
      backgroundUrl,
      sanskrit,
      translation,
      meta: `${chapterName} • ${t("verse")} ${verse.id}`,
      brand: t("appTitle"),
    }),
    [backgroundUrl, sanskrit, translation, chapterName, verse.id, t],
  );

  const shuffle = () => setSeed(`${Date.now()}-${Math.random()}`);

  const buildImage = useCallback(async () => {
    const absoluteBg = new URL(backgroundUrl, window.location.origin).href;
    return renderVerseCardImage({ ...cardContent, backgroundUrl: absoluteBg });
  }, [backgroundUrl, cardContent]);

  const handleSave = async () => {
    setBusy(true);
    try {
      const blob = await buildImage();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `gita-${chapter.id}-${verse.id}.png`;
      link.click();
      URL.revokeObjectURL(url);
      toast({ title: t("imageSaved") });
    } catch {
      toast({ title: t("copyFailed"), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const handleShare = async () => {
    setBusy(true);
    try {
      const blob = await buildImage();
      const file = new File([blob], `gita-${chapter.id}-${verse.id}.png`, { type: "image/png" });
      const verseUrl = `${window.location.origin}/chapters/${chapter.id}/verses/${verse.id}`;
      const text = `${cardContent.meta}\n\n${sanskrit}\n\n${translation}`;

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: `Bhagavad Gita ${chapter.id}.${verse.id}`,
          text,
          files: [file],
          url: verseUrl,
        });
      } else if (navigator.share) {
        await navigator.share({
          title: `Bhagavad Gita ${chapter.id}.${verse.id}`,
          text: `${text}\n\n${verseUrl}`,
          url: verseUrl,
        });
      } else {
        await handleSave();
      }
    } catch {
      /* dismissed */
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="verse-studio min-h-screen pb-28">
      <header className="verse-studio__header">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="verse-studio__back"
          aria-label={t("back")}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-gold" />
            <h1 className="font-display text-xl font-semibold text-primary-foreground truncate">
              {t("verseStudio")}
            </h1>
          </div>
          <p className="text-sm text-primary-foreground/75 mt-0.5 line-clamp-1">
            {t("verseStudioSubtitle")}
          </p>
        </div>
      </header>

      <div className="px-4 pt-2">
        <div className="verse-studio__frame">
          <VerseSharePreview content={cardContent} />
        </div>

        <p className="text-center text-xs text-muted-foreground mt-3 font-medium tracking-wide">
          {chapter.id}.{verse.id} · {chapterName}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <Button
            type="button"
            variant="outline"
            className="h-12 rounded-2xl"
            onClick={shuffle}
            disabled={busy}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            {t("shuffleVerse")}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-12 rounded-2xl"
            onClick={() => navigate(`/chapters/${chapter.id}/verses/${verse.id}`)}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            {t("openVerse")}
          </Button>
          <Button
            type="button"
            className="h-12 rounded-2xl"
            onClick={handleShare}
            disabled={busy}
          >
            <Share2 className="h-4 w-4 mr-2" />
            {busy ? t("generatingImage") : t("shareImage")}
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="h-12 rounded-2xl"
            onClick={handleSave}
            disabled={busy}
          >
            <Download className="h-4 w-4 mr-2" />
            {t("saveImage")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerseStudio;
