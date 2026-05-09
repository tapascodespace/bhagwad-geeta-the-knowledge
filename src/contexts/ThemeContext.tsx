import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

export type Theme = "light" | "dark" | "amoled";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const STORAGE_KEY = "gita.theme";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("dark", "amoled");
  if (theme === "dark") root.classList.add("dark");
  else if (theme === "amoled") root.classList.add("dark", "amoled");
  root.style.colorScheme = theme === "light" ? "light" : "dark";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "dark" || saved === "light" || saved === "amoled") return saved;
    } catch { /* ignore */ }
    return "light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      document.documentElement.classList.add("theme-ready");
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try { localStorage.setItem(STORAGE_KEY, t); } catch { /* ignore */ }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
