export const CARD_WIDTH = 1080;
export const CARD_HEIGHT = 1920;

export type VerseCardContent = {
  backgroundUrl: string;
  sanskrit: string;
  translation: string;
  meta: string;
  brand: string;
};

let fontsReady: Promise<void> | null = null;

const ensureFonts = () => {
  if (!fontsReady) {
    fontsReady = Promise.all([
      document.fonts.load('700 52px "Noto Serif Devanagari"'),
      document.fonts.load('600 40px "Cormorant Garamond"'),
      document.fonts.load('500 32px "Inter"'),
    ]).then(() => undefined);
  }
  return fontsReady;
};

const loadImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });

const drawCover = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number,
) => {
  const scale = Math.max(w / img.width, h / img.height);
  const sw = img.width * scale;
  const sh = img.height * scale;
  const sx = (w - sw) / 2;
  const sy = (h - sh) / 2;
  ctx.drawImage(img, sx, sy, sw, sh);
};

const wrapLines = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number,
) => {
  const paragraphs = text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  const lines: string[] = [];

  for (const paragraph of paragraphs) {
    const words = paragraph.split(/\s+/);
    let current = "";
    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      if (ctx.measureText(next).width <= maxWidth) {
        current = next;
      } else {
        if (current) lines.push(current);
        current = word;
      }
      if (lines.length >= maxLines) return lines;
    }
    if (current) lines.push(current);
    if (lines.length >= maxLines) return lines;
  }

  if (lines.length > maxLines) {
    const trimmed = lines.slice(0, maxLines);
    const last = trimmed[maxLines - 1];
    trimmed[maxLines - 1] = last.length > 3 ? `${last.slice(0, -1)}…` : last;
    return trimmed;
  }
  return lines;
};

export const renderVerseCardImage = async (content: VerseCardContent): Promise<Blob> => {
  await ensureFonts();

  const canvas = document.createElement("canvas");
  canvas.width = CARD_WIDTH;
  canvas.height = CARD_HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");

  const img = await loadImage(content.backgroundUrl);
  drawCover(ctx, img, CARD_WIDTH, CARD_HEIGHT);

  const veil = ctx.createLinearGradient(0, 0, 0, CARD_HEIGHT);
  veil.addColorStop(0, "rgba(8, 4, 2, 0.35)");
  veil.addColorStop(0.45, "rgba(12, 6, 3, 0.55)");
  veil.addColorStop(1, "rgba(6, 2, 1, 0.88)");
  ctx.fillStyle = veil;
  ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

  const glow = ctx.createRadialGradient(
    CARD_WIDTH / 2,
    CARD_HEIGHT * 0.38,
    40,
    CARD_WIDTH / 2,
    CARD_HEIGHT * 0.42,
    CARD_WIDTH * 0.7,
  );
  glow.addColorStop(0, "rgba(255, 196, 120, 0.12)");
  glow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

  const padX = 88;
  const maxWidth = CARD_WIDTH - padX * 2;
  let y = CARD_HEIGHT * 0.52;

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255, 220, 160, 0.95)";
  ctx.font = '700 52px "Noto Serif Devanagari", serif';
  const sanskritLines = wrapLines(ctx, content.sanskrit.replace(/\n+/g, " "), maxWidth, 4);
  for (const line of sanskritLines) {
    ctx.fillText(line, CARD_WIDTH / 2, y);
    y += 72;
  }

  y += 24;
  ctx.fillStyle = "rgba(255, 248, 235, 0.92)";
  ctx.font = '600 40px "Cormorant Garamond", serif';
  const translationLines = wrapLines(ctx, content.translation, maxWidth, 5);
  for (const line of translationLines) {
    ctx.fillText(line, CARD_WIDTH / 2, y);
    y += 54;
  }

  ctx.fillStyle = "rgba(255, 210, 140, 0.85)";
  ctx.font = '600 28px "Inter", sans-serif';
  ctx.fillText(content.meta.toUpperCase(), CARD_WIDTH / 2, CARD_HEIGHT - 168);

  ctx.fillStyle = "rgba(255, 235, 210, 0.7)";
  ctx.font = '500 26px "Inter", sans-serif';
  ctx.fillText(content.brand, CARD_WIDTH / 2, CARD_HEIGHT - 118);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Failed to export image"))),
      "image/png",
      0.92,
    );
  });
};
