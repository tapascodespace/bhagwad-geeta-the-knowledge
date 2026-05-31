import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  Step definition                                                    */
/* ------------------------------------------------------------------ */
export interface TutorialStep {
  /** The data-tutorial-id value on the target element. */
  targetId: string;
  /** i18n key for the instruction text shown in the tooltip. */
  textKey: string;
  /** Route the element lives on — the tutorial navigates there first. */
  route: string;
  /** Preferred tooltip placement relative to the spotlight. */
  placement: "top" | "bottom" | "left" | "right";
}

/* ------------------------------------------------------------------ */
/*  Step config                                                        */
/* ------------------------------------------------------------------ */
export const TUTORIAL_STEPS: TutorialStep[] = [
  { targetId: "home-verse-of-day",   textKey: "tutorialVerseOfDay",   route: "/",         placement: "bottom" },
  { targetId: "home-quick-start",    textKey: "tutorialQuickStart",   route: "/",         placement: "top"    },
  { targetId: "nav-chapters",        textKey: "tutorialNavChapters",  route: "/",         placement: "top"    },
  { targetId: "nav-library",         textKey: "tutorialNavLibrary",   route: "/",         placement: "top"    },
  { targetId: "chapters-grid",       textKey: "tutorialChaptersGrid", route: "/chapters", placement: "top"    },
  { targetId: "library-first-row",   textKey: "tutorialLibraryBooks", route: "/library",  placement: "bottom" },
];

/* ------------------------------------------------------------------ */
/*  Persistence                                                        */
/* ------------------------------------------------------------------ */
const STORAGE_KEY = "gita.tutorialCompleted";

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */
interface TutorialContextValue {
  /** Whether the tutorial overlay is currently showing. */
  active: boolean;
  /** Current step index (0-based). */
  stepIndex: number;
  /** Current step definition. */
  currentStep: TutorialStep | null;
  /** Total number of steps. */
  totalSteps: number;
  /** Advance to the next step. */
  next: () => void;
  /** Go back to the previous step. */
  back: () => void;
  /** Skip / dismiss the tutorial entirely. */
  skip: () => void;
  /** Manually start the tutorial from the beginning. */
  restart: () => void;
}

const TutorialContext = createContext<TutorialContextValue | undefined>(undefined);

export const TutorialProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  // Auto-trigger on first launch (after language has been chosen).
  useEffect(() => {
    const completed = localStorage.getItem(STORAGE_KEY) === "true";
    const languageChosen = localStorage.getItem("gita.languageChosen") === "true";
    if (!completed && languageChosen && location.pathname === "/") {
      // Small delay so the Home screen renders its elements first.
      const id = setTimeout(() => {
        setActive(true);
        setStepIndex(0);
      }, 600);
      return () => clearTimeout(id);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const complete = useCallback(() => {
    setActive(false);
    localStorage.setItem(STORAGE_KEY, "true");
  }, []);

  const currentStep = active ? TUTORIAL_STEPS[stepIndex] ?? null : null;

  // Navigate to the step's route if we're not already there.
  useEffect(() => {
    if (!active || !currentStep) return;
    if (location.pathname !== currentStep.route) {
      navigate(currentStep.route, { replace: true });
    }
  }, [active, currentStep, location.pathname, navigate]);

  const next = useCallback(() => {
    if (stepIndex < TUTORIAL_STEPS.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      complete();
    }
  }, [stepIndex, complete]);

  const back = useCallback(() => {
    setStepIndex((i) => Math.max(0, i - 1));
  }, []);

  const skip = useCallback(() => {
    complete();
  }, [complete]);

  const restart = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setStepIndex(0);
    navigate("/", { replace: true });
    // Small delay so the Home screen mounts before the overlay tries to find elements.
    setTimeout(() => setActive(true), 300);
  }, [navigate]);

  return (
    <TutorialContext.Provider
      value={{
        active,
        stepIndex,
        currentStep,
        totalSteps: TUTORIAL_STEPS.length,
        next,
        back,
        skip,
        restart,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};

export const useTutorial = () => {
  const ctx = useContext(TutorialContext);
  if (!ctx) throw new Error("useTutorial must be used within TutorialProvider");
  return ctx;
};
