import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useTutorial } from "@/contexts/TutorialContext";
import { useLanguage } from "@/contexts/LanguageContext";

/* ------------------------------------------------------------------ */
/*  Geometry helpers                                                   */
/* ------------------------------------------------------------------ */
interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

const PADDING = 8;

const getTargetRect = (targetId: string): Rect | null => {
  const el = document.querySelector(`[data-tutorial-id="${targetId}"]`);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return {
    top: r.top - PADDING,
    left: r.left - PADDING,
    width: r.width + PADDING * 2,
    height: r.height + PADDING * 2,
  };
};

/* ------------------------------------------------------------------ */
/*  Tooltip positioning                                                */
/* ------------------------------------------------------------------ */
const TOOLTIP_GAP = 12;

interface TooltipPos {
  top: number;
  left: number;
  maxWidth: number;
}

const computeTooltipPos = (
  rect: Rect,
  placement: "top" | "bottom" | "left" | "right",
  tooltipWidth: number,
  tooltipHeight: number,
): TooltipPos => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxW = Math.min(320, vw - 32);

  let top = 0;
  let left = 0;

  switch (placement) {
    case "bottom":
      top = rect.top + rect.height + TOOLTIP_GAP;
      left = rect.left + rect.width / 2 - tooltipWidth / 2;
      break;
    case "top":
      top = rect.top - tooltipHeight - TOOLTIP_GAP;
      left = rect.left + rect.width / 2 - tooltipWidth / 2;
      break;
    case "left":
      top = rect.top + rect.height / 2 - tooltipHeight / 2;
      left = rect.left - tooltipWidth - TOOLTIP_GAP;
      break;
    case "right":
      top = rect.top + rect.height / 2 - tooltipHeight / 2;
      left = rect.left + rect.width + TOOLTIP_GAP;
      break;
  }

  // Clamp inside viewport
  if (left < 16) left = 16;
  if (left + maxW > vw - 16) left = vw - 16 - maxW;
  if (top < 16) top = 16;
  if (top + tooltipHeight > vh - 16) top = vh - 16 - tooltipHeight;

  return { top, left, maxWidth: maxW };
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
const TutorialOverlay = () => {
  const { active, stepIndex, currentStep, totalSteps, next, back, skip } = useTutorial();
  const { t } = useLanguage();

  const [rect, setRect] = useState<Rect | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipPos, setTooltipPos] = useState<TooltipPos>({ top: 0, left: 0, maxWidth: 320 });
  const [ready, setReady] = useState(false);

  // Measure the target element.
  const measure = useCallback(() => {
    if (!currentStep) return;
    const r = getTargetRect(currentStep.targetId);
    setRect(r);
  }, [currentStep]);

  // Re-measure whenever step changes or the screen resizes/scrolls.
  useLayoutEffect(() => {
    if (!active) {
      setReady(false);
      return;
    }
    // Wait a tick for navigation to settle, then measure.
    const id = setTimeout(() => {
      measure();
      setReady(true);
    }, 350);
    return () => clearTimeout(id);
  }, [active, stepIndex, measure]);

  useEffect(() => {
    if (!active) return;
    const handler = () => measure();
    window.addEventListener("resize", handler);
    window.addEventListener("scroll", handler, true);
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("scroll", handler, true);
    };
  }, [active, measure]);

  // Compute tooltip position after rect + tooltip DOM are both available.
  useLayoutEffect(() => {
    if (!rect || !tooltipRef.current || !currentStep) return;
    const { offsetWidth, offsetHeight } = tooltipRef.current;
    setTooltipPos(computeTooltipPos(rect, currentStep.placement, offsetWidth, offsetHeight));
  }, [rect, currentStep, stepIndex]);

  // Scroll the target into view if needed.
  useEffect(() => {
    if (!active || !currentStep) return;
    const el = document.querySelector(`[data-tutorial-id="${currentStep.targetId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      // Re-measure after scroll settles.
      const id = setTimeout(measure, 400);
      return () => clearTimeout(id);
    }
  }, [active, currentStep, measure]);

  if (!active || !ready) return null;

  const isLast = stepIndex === totalSteps - 1;
  const isFirst = stepIndex === 0;
  const instructionText = currentStep ? t(currentStep.textKey as Parameters<typeof t>[0]) : "";

  return (
    <div className="fixed inset-0 z-[9999]" aria-modal="true" role="dialog">
      {/* Dark overlay with a transparent cutout via CSS clip-path */}
      <div
        className="absolute inset-0 bg-black/70 transition-all duration-300"
        style={
          rect
            ? {
                clipPath: `polygon(
                  0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%,
                  ${rect.left}px ${rect.top}px,
                  ${rect.left}px ${rect.top + rect.height}px,
                  ${rect.left + rect.width}px ${rect.top + rect.height}px,
                  ${rect.left + rect.width}px ${rect.top}px,
                  ${rect.left}px ${rect.top}px
                )`,
              }
            : undefined
        }
        onClick={skip}
      />

      {/* Pulsing ring around the spotlight */}
      {rect && (
        <div
          className="absolute rounded-2xl pointer-events-none animate-tutorial-pulse"
          style={{
            top: rect.top - 4,
            left: rect.left - 4,
            width: rect.width + 8,
            height: rect.height + 8,
          }}
        />
      )}

      {/* Allow interaction with the highlighted element itself */}
      {rect && (
        <div
          className="absolute"
          style={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }}
          onClick={next}
          aria-hidden
        />
      )}

      {/* Tooltip / callout */}
      <div
        ref={tooltipRef}
        className="absolute z-[10000] rounded-2xl bg-card border border-border shadow-elegant p-4 transition-all duration-300 animate-fade-in"
        style={{ top: tooltipPos.top, left: tooltipPos.left, width: tooltipPos.maxWidth }}
      >
        {/* Close / Skip */}
        <button
          onClick={skip}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-secondary/60 transition-colors"
          aria-label="Skip tutorial"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Step counter */}
        <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1">
          {stepIndex + 1} / {totalSteps}
        </p>

        {/* Instruction */}
        <p className="text-sm text-foreground leading-relaxed pr-5 mb-4">{instructionText}</p>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={skip}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("tutorialSkip" as Parameters<typeof t>[0])}
          </button>
          <div className="flex items-center gap-2">
            {!isFirst && (
              <button
                onClick={back}
                className="flex items-center gap-1 text-xs font-medium text-foreground/80 hover:text-foreground rounded-full px-3 py-1.5 border border-border hover:bg-secondary/60 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> {t("previous")}
              </button>
            )}
            <button
              onClick={next}
              className="flex items-center gap-1 text-xs font-medium text-primary-foreground bg-gradient-primary rounded-full px-4 py-1.5 shadow-soft hover:opacity-90 transition-all active:scale-95"
            >
              {isLast ? t("tutorialDone" as Parameters<typeof t>[0]) : t("next")}
              {!isLast && <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialOverlay;
