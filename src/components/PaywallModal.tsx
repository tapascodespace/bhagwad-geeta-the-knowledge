import { X, Crown, BookOpen, Sparkles, Headphones, Loader2 } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { isNativePlatform } from "@/lib/native-purchases";
import { toast } from "sonner";

interface PaywallModalProps {
  open: boolean;
  onClose: () => void;
}

const STRINGS = {
  hi: {
    title: "पूर्ण गीता अनलॉक करें",
    subtitle: "700 श्लोकों, 18 अध्यायों और पूरी व्याख्या तक पहुँचें",
    price: "₹99",
    period: "/वर्ष",
    feature1: "सभी 18 अध्यायों के सभी श्लोक",
    feature2: "हिन्दी, बंगाली और अंग्रेज़ी अनुवाद",
    feature3: "सरल व्याख्या एवं ऑडियो",
    feature4: "बुकमार्क, Verse Studio और अन्य",
    subscribe: "₹99/वर्ष में सदस्यता लें",
    restore: "पिछली सदस्यता पुनर्स्थापित करें",
    freeNote: "अध्याय 1, श्लोक 1 और 2 निःशुल्क हैं",
    processing: "भुगतान तैयार हो रहा है…",
    webOnly: "सदस्यता केवल ऐप में उपलब्ध है।",
    success: "सदस्यता सक्रिय!",
    successDesc: "अब आप सभी श्लोक पढ़ सकते हैं।",
    error: "सदस्यता विफल रही। कृपया पुनः प्रयास करें।",
    restoreSuccess: "सदस्यता पुनर्स्थापित!",
    restoreFail: "कोई सक्रिय सदस्यता नहीं मिली।",
    libraryNote: "पुस्तकालय की पुस्तकें अलग से ख़रीदी जा सकती हैं।",
  },
  en: {
    title: "Unlock the Full Gita",
    subtitle: "Access all 700 verses, 18 chapters, and complete explanations",
    price: "₹99",
    period: "/year",
    feature1: "All verses across 18 chapters",
    feature2: "Hindi, Bengali & English translations",
    feature3: "Simple explanations & audio",
    feature4: "Bookmarks, Verse Studio & more",
    subscribe: "Subscribe for ₹99/year",
    restore: "Restore previous subscription",
    freeNote: "Chapter 1, Verses 1 & 2 are free",
    processing: "Preparing purchase…",
    webOnly: "Subscription is only available in the app.",
    success: "Subscription active!",
    successDesc: "You now have access to all verses.",
    error: "Subscription failed. Please try again.",
    restoreSuccess: "Subscription restored!",
    restoreFail: "No active subscription found.",
    libraryNote: "Library books can be purchased separately.",
  },
  bn: {
    title: "সম্পূর্ণ গীতা আনলক করুন",
    subtitle: "৭০০ শ্লোক, ১৮ অধ্যায় এবং সম্পূর্ণ ব্যাখ্যা পড়ুন",
    price: "₹৯৯",
    period: "/বছর",
    feature1: "সমস্ত ১৮ অধ্যায়ের সমস্ত শ্লোক",
    feature2: "হিন্দি, বাংলা ও ইংরেজি অনুবাদ",
    feature3: "সরল ব্যাখ্যা ও অডিও",
    feature4: "বুকমার্ক, Verse Studio এবং আরও",
    subscribe: "₹৯৯/বছরে সদস্যতা নিন",
    restore: "আগের সদস্যতা পুনরুদ্ধার করুন",
    freeNote: "অধ্যায় ১, শ্লোক ১ ও ২ বিনামূল্যে",
    processing: "পেমেন্ট প্রস্তুত হচ্ছে…",
    webOnly: "সদস্যতা শুধুমাত্র অ্যাপে পাওয়া যায়।",
    success: "সদস্যতা সক্রিয়!",
    successDesc: "আপনি এখন সমস্ত শ্লোক পড়তে পারবেন।",
    error: "সদস্যতা ব্যর্থ। আবার চেষ্টা করুন।",
    restoreSuccess: "সদস্যতা পুনরুদ্ধার হয়েছে!",
    restoreFail: "কোনো সক্রিয় সদস্যতা পাওয়া যায়নি।",
    libraryNote: "পুস্তকালয়ের বই আলাদাভাবে কেনা যায়।",
  },
} as const;

const PaywallModal = ({ open, onClose }: PaywallModalProps) => {
  const { subscribe, restore, loading } = useSubscription();
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.en;

  if (!open) return null;

  const handleSubscribe = async () => {
    if (!isNativePlatform()) {
      toast.info(s.webOnly);
      return;
    }
    const success = await subscribe();
    if (success) {
      toast.success(s.success, { description: s.successDesc });
      onClose();
    } else {
      toast.error(s.error);
    }
  };

  const handleRestore = async () => {
    if (!isNativePlatform()) {
      toast.info(s.webOnly);
      return;
    }
    const success = await restore();
    if (success) {
      toast.success(s.restoreSuccess);
      onClose();
    } else {
      toast.info(s.restoreFail);
    }
  };

  const features = [
    { icon: BookOpen, text: s.feature1 },
    { icon: Sparkles, text: s.feature2 },
    { icon: Headphones, text: s.feature3 },
    { icon: Crown, text: s.feature4 },
  ];

  return (
    <div className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 mb-4 sm:mb-0 rounded-3xl bg-card border border-border/60 shadow-elegant overflow-hidden animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        {/* Header */}
        <div className="bg-gradient-primary px-6 pt-8 pb-6 text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
            <Crown className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-display text-2xl font-bold text-primary-foreground">{s.title}</h2>
          <p className="text-sm text-primary-foreground/80 mt-2 leading-relaxed">{s.subtitle}</p>
        </div>

        {/* Price */}
        <div className="text-center py-4 border-b border-border/40">
          <span className="text-4xl font-bold text-primary">{s.price}</span>
          <span className="text-lg text-muted-foreground">{s.period}</span>
        </div>

        {/* Features */}
        <div className="px-6 py-4 space-y-3">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-foreground">{f.text}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 space-y-3">
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold text-base shadow-elegant active:scale-[0.98] transition-all disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> {s.processing}
              </span>
            ) : (
              s.subscribe
            )}
          </button>

          <button
            onClick={handleRestore}
            disabled={loading}
            className="w-full py-2.5 text-sm text-primary font-medium active:opacity-70 transition-opacity"
          >
            {s.restore}
          </button>

          <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
            {s.freeNote}
            <br />
            {s.libraryNote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaywallModal;
