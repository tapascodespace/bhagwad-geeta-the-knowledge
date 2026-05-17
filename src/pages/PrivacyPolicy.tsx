import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const STRINGS = {
  hi: {
    title: "गोपनीयता नीति",
    back: "वापस",
    lastUpdated: "अंतिम अपडेट: मई 2025",
    sections: [
      {
        heading: "हम कौन-सी जानकारी एकत्र करते हैं",
        body: "भगवद् गीता द नॉलेज ऐप न्यूनतम डेटा एकत्र करती है। हम आपकी भाषा प्राथमिकता, थीम सेटिंग, पढ़ने की प्रगति और बुकमार्क आपके डिवाइस पर स्थानीय रूप से संग्रहीत करते हैं। यदि आप साइन इन करते हैं, तो हम आपका ईमेल पता प्रमाणीकरण के लिए संग्रहीत करते हैं।",
      },
      {
        heading: "डेटा का उपयोग",
        body: "आपका डेटा केवल ऐप अनुभव को बेहतर बनाने के लिए उपयोग किया जाता है — जैसे कि आपकी पढ़ने की प्रगति को सहेजना और आपकी पसंदीदा भाषा याद रखना। हम आपका डेटा तीसरे पक्ष को नहीं बेचते।",
      },
      {
        heading: "इन-ऐप खरीदारी",
        body: "पुस्तक की खरीदारी Google Play बिलिंग के माध्यम से संसाधित होती है। हम आपके भुगतान कार्ड की जानकारी कभी नहीं देखते या संग्रहीत नहीं करते। सभी भुगतान डेटा Google द्वारा सुरक्षित रूप से प्रबंधित किया जाता है।",
      },
      {
        heading: "ऑडियो और नेटवर्क",
        body: "श्लोक ऑडियो फ़ाइलें हमारे सर्वर से स्ट्रीम की जाती हैं। इसके लिए इंटरनेट कनेक्शन आवश्यक है। हम सर्वर लॉग में एक्सेस रिकॉर्ड रख सकते हैं, जो 30 दिनों के बाद स्वचालित रूप से हटा दिए जाते हैं।",
      },
      {
        heading: "बच्चों की गोपनीयता",
        body: "यह ऐप बच्चों के लिए सुरक्षित है। हम जानबूझकर 13 वर्ष से कम आयु के बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते।",
      },
      {
        heading: "संपर्क करें",
        body: "गोपनीयता से संबंधित किसी भी प्रश्न के लिए support@bhagwad-geeta.app पर संपर्क करें।",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    back: "Back",
    lastUpdated: "Last updated: May 2025",
    sections: [
      {
        heading: "Information We Collect",
        body: "Bhagwad Geeta The Knowledge collects minimal data. We store your language preference, theme setting, reading progress, and bookmarks locally on your device. If you sign in, we store your email address for authentication via Supabase Auth.",
      },
      {
        heading: "How We Use Your Data",
        body: "Your data is used solely to improve your app experience — such as saving your reading progress and remembering your preferred language. We do not sell your data to third parties.",
      },
      {
        heading: "In-App Purchases",
        body: "Book purchases are processed through Google Play Billing. We never see or store your payment card information. All payment data is handled securely by Google.",
      },
      {
        heading: "Audio & Network",
        body: "Verse audio files are streamed from our servers. This requires an internet connection. We may keep access records in server logs, which are automatically deleted after 30 days.",
      },
      {
        heading: "Children's Privacy",
        body: "This app is safe for children. We do not knowingly collect personal information from children under 13.",
      },
      {
        heading: "Contact Us",
        body: "For any privacy-related questions, contact us at support@bhagwad-geeta.app.",
      },
    ],
  },
  bn: {
    title: "গোপনীয়তা নীতি",
    back: "ফিরে যান",
    lastUpdated: "সর্বশেষ আপডেট: মে ২০২৫",
    sections: [
      {
        heading: "আমরা কোন তথ্য সংগ্রহ করি",
        body: "ভগবদ্ গীতা দ নলেজ অ্যাপ ন্যূনতম ডেটা সংগ্রহ করে। আমরা আপনার ভাষা পছন্দ, থিম সেটিং, পড়ার অগ্রগতি এবং বুকমার্ক আপনার ডিভাইসে স্থানীয়ভাবে সংরক্ষণ করি। আপনি সাইন ইন করলে, প্রমাণীকরণের জন্য আমরা আপনার ইমেল ঠিকানা সংরক্ষণ করি।",
      },
      {
        heading: "ডেটা ব্যবহার",
        body: "আপনার ডেটা শুধুমাত্র অ্যাপের অভিজ্ঞতা উন্নত করতে ব্যবহৃত হয় — যেমন আপনার পড়ার অগ্রগতি সংরক্ষণ এবং পছন্দের ভাষা মনে রাখা। আমরা আপনার ডেটা তৃতীয় পক্ষের কাছে বিক্রি করি না।",
      },
      {
        heading: "ইন-অ্যাপ ক্রয়",
        body: "বইয়ের ক্রয় Google Play বিলিং-এর মাধ্যমে প্রক্রিয়া করা হয়। আমরা কখনও আপনার পেমেন্ট কার্ডের তথ্য দেখি না বা সংরক্ষণ করি না। সমস্ত পেমেন্ট ডেটা Google দ্বারা নিরাপদে পরিচালিত হয়।",
      },
      {
        heading: "অডিও এবং নেটওয়ার্ক",
        body: "শ্লোক অডিও ফাইলগুলি আমাদের সার্ভার থেকে স্ট্রিম করা হয়। এর জন্য ইন্টারনেট সংযোগ প্রয়োজন। আমরা সার্ভার লগে অ্যাক্সেস রেকর্ড রাখতে পারি, যা ৩০ দিন পর স্বয়ংক্রিয়ভাবে মুছে ফেলা হয়।",
      },
      {
        heading: "শিশুদের গোপনীয়তা",
        body: "এই অ্যাপ শিশুদের জন্য নিরাপদ। আমরা জেনেশুনে ১৩ বছরের কম বয়সী শিশুদের কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না।",
      },
      {
        heading: "যোগাযোগ করুন",
        body: "গোপনীয়তা সম্পর্কিত যেকোনো প্রশ্নের জন্য support@bhagwad-geeta.app-এ যোগাযোগ করুন।",
      },
    ],
  },
} as const;

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.en;

  return (
    <main className="min-h-screen pb-28 pt-6 max-w-lg mx-auto px-5 animate-fade-in-slow">
      <header className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3"
          aria-label={s.back}
        >
          <ArrowLeft className="w-4 h-4" /> {s.back}
        </button>
        <h1 className="font-display text-3xl font-bold text-foreground">{s.title}</h1>
        <p className="text-xs text-muted-foreground mt-1">{s.lastUpdated}</p>
      </header>

      <div className="space-y-6">
        {s.sections.map((section, i) => (
          <section key={i} className="rounded-2xl border border-border/60 bg-card p-5 shadow-card">
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              {section.heading}
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
