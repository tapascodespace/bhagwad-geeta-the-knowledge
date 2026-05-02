import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import Home from "@/pages/Home";
import ChapterList from "@/pages/ChapterList";
import ChapterDetail from "@/pages/ChapterDetail";
import VerseView from "@/pages/VerseView";
import Bookmarks from "@/pages/Bookmarks";
import Library from "@/pages/Library";
import BookReader from "@/pages/BookReader";
import BookDetail from "@/pages/BookDetail";
import LanguageSelect from "@/pages/LanguageSelect";
import NotFound from "@/pages/NotFound";
import { useLanguage } from "@/contexts/LanguageContext";
import { backgroundMusic } from "@/lib/background-music";

// Wire background music to follow voice playback (verse audio + Play All).
backgroundMusic.wire();

const queryClient = new QueryClient();

const RequireLanguage = ({ children }: { children: JSX.Element }) => {
  const { hasChosen } = useLanguage();
  const location = useLocation();
  if (!hasChosen && location.pathname !== "/welcome") {
    return <Navigate to="/welcome" replace />;
  }
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="max-w-lg mx-auto min-h-screen">
          <Routes>
            <Route path="/welcome" element={<LanguageSelect initial />} />
            <Route path="/settings/language" element={<LanguageSelect />} />
            <Route path="/" element={<RequireLanguage><Home /></RequireLanguage>} />
            <Route path="/chapters" element={<RequireLanguage><ChapterList /></RequireLanguage>} />
            <Route path="/chapters/:chapterId" element={<RequireLanguage><ChapterDetail /></RequireLanguage>} />
            <Route path="/chapters/:chapterId/verses/:verseId" element={<RequireLanguage><VerseView /></RequireLanguage>} />
            <Route path="/bookmarks" element={<RequireLanguage><Bookmarks /></RequireLanguage>} />
            <Route path="/library" element={<RequireLanguage><Library /></RequireLanguage>} />
            <Route path="/library/:bookId" element={<RequireLanguage><BookDetail /></RequireLanguage>} />
            <Route path="/library/:bookId/read" element={<RequireLanguage><BookReader /></RequireLanguage>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
