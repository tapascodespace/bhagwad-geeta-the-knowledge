import { Link, useSearchParams } from "react-router-dom";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const STRINGS = {
  hi: {
    title: "भुगतान रद्द किया गया",
    sub: "कोई शुल्क नहीं लिया गया। आप कभी भी फिर से प्रयास कर सकते हैं।",
    back: "पुस्तक पर वापस जाएँ",
    library: "पुस्तकालय",
  },
  en: {
    title: "Payment cancelled",
    sub: "You were not charged. You can try again anytime.",
    back: "Back to book",
    library: "Library",
  },
  bn: {
    title: "পেমেন্ট বাতিল হয়েছে",
    sub: "কোনো টাকা কাটা হয়নি। আপনি আবার চেষ্টা করতে পারেন।",
    back: "বইতে ফিরে যান",
    library: "পুস্তকালয়",
  },
} as const;

const PaymentCancelled = () => {
  const [params] = useSearchParams();
  const bookId = params.get("book_id");
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.hi;

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
        <XCircle className="w-12 h-12 mx-auto text-amber-500" />
        <h1 className="font-display text-xl font-bold mt-3">{s.title}</h1>
        <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
        <div className="mt-6 space-y-2">
          {bookId && (
            <Button className="w-full" asChild>
              <Link to={`/library/${bookId}`}>{s.back}</Link>
            </Button>
          )}
          <Button variant="outline" className="w-full" asChild>
            <Link to="/library">{s.library}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PaymentCancelled;
