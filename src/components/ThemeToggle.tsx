import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface Props {
  className?: string;
  ariaLabel?: string;
}

const ThemeToggle = ({ className = "", ariaLabel = "Toggle theme" }: Props) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label={ariaLabel}
      aria-pressed={isDark}
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-secondary/80 backdrop-blur text-secondary-foreground border border-border/50 hover:bg-secondary active:scale-95 transition-all ${className}`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-gold" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
