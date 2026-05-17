import type { VerseCardContent } from "@/lib/render-verse-card";

type VerseSharePreviewProps = {
  content: VerseCardContent;
};

const VerseSharePreview = ({ content }: VerseSharePreviewProps) => (
  <div className="verse-card-preview" aria-hidden>
    <img src={content.backgroundUrl} alt="" className="verse-card-preview__image" />
    <div className="verse-card-preview__veil" />
    <div className="verse-card-preview__content">
      <p className="verse-card-preview__sanskrit font-sanskrit">{content.sanskrit}</p>
      <p className="verse-card-preview__translation">{content.translation}</p>
      <p className="verse-card-preview__meta">{content.meta}</p>
    </div>
  </div>
);

export default VerseSharePreview;
