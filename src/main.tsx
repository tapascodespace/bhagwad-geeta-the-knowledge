import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { initAppearance } from "./hooks/useAppearance";

// Apply persisted theme synchronously to avoid initial flicker
try {
  const saved = localStorage.getItem("gita.theme");
  if (saved === "dark" || saved === "amoled") document.documentElement.classList.add("dark");
  if (saved === "amoled") document.documentElement.classList.add("amoled");
  document.documentElement.style.colorScheme = saved === "light" || !saved ? "light" : "dark";
} catch { /* ignore */ }

initAppearance();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);
