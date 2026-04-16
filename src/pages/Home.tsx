import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <BookOpen className="w-10 h-10 text-primary" />
      </div>

      <h1
        className="text-3xl font-bold text-foreground mb-2"
        style={{ fontFamily: "'Noto Serif Bengali', serif" }}
      >
        শ্রীমদ্ভগবদ্গীতা
      </h1>

      <p className="text-muted-foreground text-lg mb-2">Srimad Bhagavad Gita</p>

      <p className="text-muted-foreground text-sm max-w-xs mb-8 leading-relaxed">
        গীতার ১৮টি অধ্যায়ের সম্পূর্ণ বাংলা অনুবাদ ও ব্যাখ্যা সহ পড়ুন।
        সরল ভাষায় শ্রীকৃষ্ণের অমূল্য উপদেশ।
      </p>

      <Button size="lg" className="text-base px-8" onClick={() => navigate("/chapters")}>
        অধ্যায় দেখুন
      </Button>
    </div>
  );
};

export default Home;
