import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle2, Loader2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { usePurchases } from "@/hooks/usePurchases";
import { getBook, getBookMeta } from "@/data/books";
import { useLanguage } from "@/contexts/LanguageContext";

const STRINGS = {
  hi: {
    verifying: "भुगतान सत्यापित किया जा रहा है…",
    success: "भुगतान सफल!",
    successSub: "आपकी पुस्तक अनलॉक हो गई है।",
    failed: "भुगतान सत्यापित नहीं हुआ",
    failedSub: "यदि राशि कट गई है तो हमसे संपर्क करें।",
    read: "अभी पढ़ें",
    library: "पुस्तकालय पर जाएँ",
  },
  en: {
    verifying: "Verifying your payment…",
    success: "Payment successful!",
    successSub: "Your book has been unlocked.",
    failed: "Payment could not be verified",
    failedSub: "If you were charged, please contact support.",
    read: "Read now",
    library: "Go to library",
  },
  bn: {
    verifying: "পেমেন্ট যাচাই করা হচ্ছে…",
    success: "পেমেন্ট সফল!",
    successSub: "আপনার বই আনলক হয়েছে।",
    failed: "পেমেন্ট যাচাই করা যায়নি",
    failedSub: "যদি টাকা কেটে নেওয়া হয়ে থাকে, আমাদের সাথে যোগাযোগ করুন।",
    read: "এখন পড়ুন",
    library: "পুস্তকালয়ে যান",
  },
} as const;

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { unlock } = useUnlockedBooks();
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.hi;
  const [state, setState] = useState<"loading" | "ok" | "fail">("loading");
  const [bookId, setBookId] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = params.get("session_id");
    if (!sessionId) {
      setState("fail");
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("verify-payment", {
          body: { sessionId },
        });
        if (cancelled) return;
        if (error || !data?.paid || !data?.bookId) {
          setState("fail");
          return;
        }
        unlock(data.bookId as string);
        const purchasedBook = getBook(data.bookId as string);
        if (purchasedBook) {
          recordPurchase({
            bookId: purchasedBook.id,
            price: typeof data.amount === "number" ? data.amount : purchasedBook.price,
            currency: typeof data.currency === "string" ? data.currency : "INR",
            purchasedAt: Date.now(),
          });
        }
        setBookId(data.bookId as string);
        setState("ok");
      } catch {
        if (!cancelled) setState("fail");
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const book = bookId ? getBook(bookId) : null;
  const meta = book ? getBookMeta(book, language) : null;

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
        {state === "loading" && (
          <>
            <Loader2 className="w-10 h-10 mx-auto animate-spin text-primary" />
            <p className="mt-4 text-sm text-muted-foreground">{s.verifying}</p>
          </>
        )}
        {state === "ok" && (
          <>
            <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-600" />
            <h1 className="font-display text-xl font-bold mt-3">{s.success}</h1>
            <p className="text-sm text-muted-foreground mt-1">{s.successSub}</p>
            {meta && (
              <p className="mt-3 font-medium text-foreground">{meta.title}</p>
            )}
            <div className="mt-6 space-y-2">
              {bookId && (
                <Button className="w-full" onClick={() => navigate(`/library/${bookId}/read`)}>
                  {s.read} <ArrowRight className="w-4 h-4" />
                </Button>
              )}
              <Button variant="outline" className="w-full" asChild>
                <Link to="/library">{s.library}</Link>
              </Button>
            </div>
          </>
        )}
        {state === "fail" && (
          <>
            <XCircle className="w-12 h-12 mx-auto text-destructive" />
            <h1 className="font-display text-xl font-bold mt-3">{s.failed}</h1>
            <p className="text-sm text-muted-foreground mt-1">{s.failedSub}</p>
            <Button variant="outline" className="w-full mt-6" asChild>
              <Link to="/library">{s.library}</Link>
            </Button>
          </>
        )}
      </div>
    </main>
  );
};

export default PaymentSuccess;
