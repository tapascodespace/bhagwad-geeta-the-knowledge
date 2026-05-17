import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const STRINGS = {
  hi: {
    title: "नियम और शर्तें",
    back: "वापस",
    lastUpdated: "अंतिम अपडेट: मई 2025",
    sections: [
      {
        heading: "स्वीकृति",
        body: "भगवद् गीता द नॉलेज ऐप का उपयोग करके, आप इन नियमों और शर्तों से सहमत होते हैं। यदि आप सहमत नहीं हैं, तो कृपया ऐप का उपयोग न करें।",
      },
      {
        heading: "ऐप का उपयोग",
        body: "यह ऐप भगवद्गीता और संबंधित आध्यात्मिक ग्रंथों को पढ़ने और सुनने के लिए है। सामग्री केवल व्यक्तिगत, गैर-व्यावसायिक उपयोग के लिए है। आप बिना अनुमति के सामग्री को पुनर्वितरित या पुनर्प्रकाशित नहीं कर सकते।",
      },
      {
        heading: "इन-ऐप खरीदारी",
        body: "पुस्तकें Google Play बिलिंग के माध्यम से खरीदी जाती हैं। सभी खरीदारी अंतिम हैं। रिफंड Google Play की नीति के अनुसार होगा। कीमतें बिना पूर्व सूचना के बदल सकती हैं।",
      },
      {
        heading: "बौद्धिक संपदा",
        body: "ऐप की सामग्री, डिज़ाइन, कोड और ब्रांडिंग कॉपीराइट द्वारा संरक्षित हैं। भगवद्गीता के मूल श्लोक सार्वजनिक डोमेन में हैं। अनुवाद और व्याख्याएँ हमारी बौद्धिक संपदा हैं।",
      },
      {
        heading: "दायित्व की सीमा",
        body: "ऐप \"जैसी है\" के आधार पर प्रदान की जाती है। हम सामग्री की पूर्ण सटीकता की गारंटी नहीं देते। ऐप के उपयोग से उत्पन्न किसी भी प्रत्यक्ष या अप्रत्यक्ष क्षति के लिए हम उत्तरदायी नहीं हैं।",
      },
      {
        heading: "संपर्क",
        body: "किसी भी प्रश्न के लिए support@bhagwad-geeta.app पर संपर्क करें।",
      },
    ],
  },
  en: {
    title: "Terms & Conditions",
    back: "Back",
    lastUpdated: "Last updated: May 2025",
    sections: [
      {
        heading: "Acceptance",
        body: "By using Bhagwad Geeta The Knowledge, you agree to these terms and conditions. If you do not agree, please do not use the app.",
      },
      {
        heading: "Use of the App",
        body: "This app is intended for reading and listening to the Bhagavad Gita and related spiritual texts. Content is for personal, non-commercial use only. You may not redistribute or republish content without permission.",
      },
      {
        heading: "In-App Purchases",
        body: "Books are purchased through Google Play Billing. All purchases are final. Refunds are subject to Google Play's refund policy. Prices may change without prior notice.",
      },
      {
        heading: "Intellectual Property",
        body: "The app's content, design, code, and branding are protected by copyright. The original Bhagavad Gita shlokas are in the public domain. Translations and explanations are our intellectual property.",
      },
      {
        heading: "Limitation of Liability",
        body: "The app is provided \"as is\". We do not guarantee complete accuracy of content. We are not liable for any direct or indirect damages arising from use of the app.",
      },
      {
        heading: "Contact",
        body: "For any questions, contact us at support@bhagwad-geeta.app.",
      },
    ],
  },
  bn: {
    title: "নিয়ম ও শর্ত",
    back: "ফিরে যান",
    lastUpdated: "সর্বশেষ আপডেট: মে ২০২৫",
    sections: [
      {
        heading: "স্বীকৃতি",
        body: "ভগবদ্ গীতা দ নলেজ অ্যাপ ব্যবহার করে, আপনি এই নিয়ম ও শর্তে সম্মত হচ্ছেন। সম্মত না হলে, অনুগ্রহ করে অ্যাপটি ব্যবহার করবেন না।",
      },
      {
        heading: "অ্যাপের ব্যবহার",
        body: "এই অ্যাপটি ভগবদ্গীতা এবং সম্পর্কিত আধ্যাত্মিক গ্রন্থ পড়া ও শোনার জন্য। বিষয়বস্তু শুধুমাত্র ব্যক্তিগত, অ-বাণিজ্যিক ব্যবহারের জন্য। অনুমতি ছাড়া বিষয়বস্তু পুনরায় বিতরণ বা প্রকাশ করা যাবে না।",
      },
      {
        heading: "ইন-অ্যাপ ক্রয়",
        body: "বই Google Play বিলিং-এর মাধ্যমে কেনা হয়। সমস্ত ক্রয় চূড়ান্ত। রিফান্ড Google Play-এর নীতি অনুসারে হবে। মূল্য পূর্ব বিজ্ঞপ্তি ছাড়াই পরিবর্তন হতে পারে।",
      },
      {
        heading: "বৌদ্ধিক সম্পত্তি",
        body: "অ্যাপের বিষয়বস্তু, ডিজাইন, কোড এবং ব্র্যান্ডিং কপিরাইট দ্বারা সুরক্ষিত। ভগবদ্গীতার মূল শ্লোকগুলি পাবলিক ডোমেইনে রয়েছে। অনুবাদ ও ব্যাখ্যা আমাদের বৌদ্ধিক সম্পত্তি।",
      },
      {
        heading: "দায়বদ্ধতার সীমাবদ্ধতা",
        body: "অ্যাপটি \"যেমন আছে\" ভিত্তিতে প্রদান করা হয়। আমরা বিষয়বস্তুর সম্পূর্ণ নির্ভুলতার গ্যারান্টি দিই না। অ্যাপ ব্যবহারের ফলে উদ্ভূত কোনো প্রত্যক্ষ বা পরোক্ষ ক্ষতির জন্য আমরা দায়ী নই।",
      },
      {
        heading: "যোগাযোগ",
        body: "যেকোনো প্রশ্নের জন্য support@bhagwad-geeta.app-এ যোগাযোগ করুন।",
      },
    ],
  },
} as const;

const TermsOfService = () => {
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

export default TermsOfService;
