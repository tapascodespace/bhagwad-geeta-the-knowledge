import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// Apply persisted theme synchronously to avoid initial flicker
try {
  const saved = localStorage.getItem("gita.theme");
  if (saved === "dark") document.documentElement.classList.add("dark");
  document.documentElement.style.colorScheme = saved === "dark" ? "dark" : "light";
} catch { /* ignore */ }

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);
