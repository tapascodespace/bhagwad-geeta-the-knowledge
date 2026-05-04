export type Language = "bn" | "hi" | "en";

export const LANGUAGES: { code: Language; label: string; native: string }[] = [
  { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "en", label: "English", native: "English" },
];

type Dict = Record<Language, string>;

export const t: Record<string, Dict> = {
  appTitle: {
    bn: "শ্রীমদ্ভগবদ্গীতা",
    hi: "श्रीमद्भगवद्गीता",
    en: "Srimad Bhagavad Gita",
  },
  appSubtitle: {
    bn: "সরল ভাষায় গীতার সম্পূর্ণ পাঠ",
    hi: "सरल भाषा में गीता का पूर्ण पाठ",
    en: "The complete Gita in simple language",
  },
  intro: {
    bn: "গীতার ১৮টি অধ্যায়ের সম্পূর্ণ অনুবাদ ও সরল ব্যাখ্যা সহ পড়ুন।",
    hi: "गीता के 18 अध्यायों का पूर्ण अनुवाद और सरल व्याख्या के साथ पढ़ें।",
    en: "Read all 18 chapters of the Gita with complete translation and simple explanations.",
  },
  viewChapters: {
    bn: "অধ্যায় দেখুন",
    hi: "अध्याय देखें",
    en: "View Chapters",
  },
  home: { bn: "হোম", hi: "होम", en: "Home" },
  chapters: { bn: "অধ্যায়", hi: "अध्याय", en: "Chapters" },
  bookmarks: { bn: "পছন্দ", hi: "पसंद", en: "Bookmarks" },
  library: { bn: "পুস্তকালয়", hi: "पुस्तकें", en: "Library" },
  settings: { bn: "সেটিংস", hi: "सेटिंग्स", en: "Settings" },
  chooseLanguage: {
    bn: "ভাষা নির্বাচন করুন",
    hi: "भाषा चुनें",
    en: "Choose your language",
  },
  chooseLanguageHint: {
    bn: "আপনি পরে এটি পরিবর্তন করতে পারবেন",
    hi: "आप इसे बाद में बदल सकते हैं",
    en: "You can change this later anytime",
  },
  continue: { bn: "এগিয়ে যান", hi: "आगे बढ़ें", en: "Continue" },
  changeLanguage: {
    bn: "ভাষা পরিবর্তন করুন",
    hi: "भाषा बदलें",
    en: "Change Language",
  },
  allChapters: { bn: "সমস্ত অধ্যায়", hi: "सभी अध्याय", en: "All Chapters" },
  verses: { bn: "শ্লোক", hi: "श्लोक", en: "verses" },
  verse: { bn: "শ্লোক", hi: "श्लोक", en: "Verse" },
  chapter: { bn: "অধ্যায়", hi: "अध्याय", en: "Chapter" },
  back: { bn: "ফিরে যান", hi: "वापस", en: "Back" },
  previous: { bn: "পূর্ববর্তী", hi: "पिछला", en: "Previous" },
  next: { bn: "পরবর্তী", hi: "अगला", en: "Next" },
  sanskrit: { bn: "সংস্কৃত শ্লোক", hi: "संस्कृत श्लोक", en: "Sanskrit Verse" },
  transliteration: {
    bn: "বাংলা উচ্চারণ",
    hi: "हिन्दी उच्चारण",
    en: "Pronunciation",
  },
  translation: { bn: "অনুবাদ", hi: "अनुवाद", en: "Translation" },
  explanation: { bn: "সরল ব্যাখ্যা", hi: "सरल व्याख्या", en: "Simple Explanation" },
  myBookmarks: {
    bn: "পছন্দের শ্লোক",
    hi: "पसंदीदा श्लोक",
    en: "Saved Verses",
  },
  noBookmarks: {
    bn: "এখনও কোনো শ্লোক পছন্দ করেননি।",
    hi: "अभी तक कोई श्लोक पसंद नहीं किया।",
    en: "You haven't saved any verses yet.",
  },
  noBookmarksHint: {
    bn: "শ্লোক পড়ার সময় ♥ বোতামে চাপ দিন।",
    hi: "श्लोक पढ़ते समय ♥ बटन दबाएँ।",
    en: "Tap the ♥ button while reading a verse.",
  },
  notFound: {
    bn: "পাওয়া যায়নি",
    hi: "नहीं मिला",
    en: "Not found",
  },
  save: { bn: "সংরক্ষণ করুন", hi: "सहेजें", en: "Save" },
  bookmark: { bn: "পছন্দ", hi: "पसंद", en: "Bookmark" },
  share: { bn: "শেয়ার", hi: "साझा करें", en: "Share" },
  copy: { bn: "কপি", hi: "कॉपी", en: "Copy" },
  copied: { bn: "কপি হয়েছে", hi: "कॉपी हो गया", en: "Copied" },
  copiedDesc: {
    bn: "শ্লোক ক্লিপবোর্ডে কপি হয়েছে",
    hi: "श्लोक क्लिपबोर्ड पर कॉपी हो गया",
    en: "Verse copied to clipboard",
  },
  copyFailed: { bn: "কপি ব্যর্থ", hi: "कॉपी विफल", en: "Copy failed" },
  playAll: { bn: "সব শুনুন", hi: "सब सुनें", en: "Play All" },
  stopAutoPlay: { bn: "অটো-প্লে বন্ধ", hi: "ऑटो-प्ले बंद करें", en: "Stop Auto-Play" },
  playAllHint: {
    bn: "শ্লোক, অনুবাদ ও ব্যাখ্যা ক্রমে শুনুন",
    hi: "श्लोक, अनुवाद और व्याख्या क्रम से सुनें",
    en: "Play Shloka, Translation & Explanation in order",
  },
  preparing: { bn: "প্রস্তুত হচ্ছে", hi: "तैयार हो रहा है", en: "Preparing" },
  playing: { bn: "চলছে", hi: "चल रहा है", en: "Playing" },
  partShloka: { bn: "শ্লোক", hi: "श्लोक", en: "Shloka" },
  partTranslation: { bn: "অনুবাদ", hi: "अनुवाद", en: "Translation" },
  partExplanation: { bn: "ব্যাখ্যা", hi: "व्याख्या", en: "Explanation" },
  listenToShloka: {
    bn: "শ্লোক শুনুন",
    hi: "श्लोक सुनें",
    en: "Listen to Shloka",
  },
  listenToTranslation: {
    bn: "অনুবাদ শুনুন",
    hi: "अनुवाद सुनें",
    en: "Listen to Translation",
  },
  listenToExplanation: {
    bn: "ব্যাখ্যা শুনুন",
    hi: "व्याख्या सुनें",
    en: "Listen to Explanation",
  },
  shlokaSubtitle: {
    bn: "ঐতিহ্যবাহী পাঠ • পবিত্র উচ্চারণ",
    hi: "पारंपरिक पाठ • पवित्र उच्चारण",
    en: "Traditional Chant • Sacred Recitation",
  },
  translationSubtitle: {
    bn: "স্পষ্ট বর্ণনা • উচ্চারিত কণ্ঠস্বর",
    hi: "स्पष्ट वर्णन • बोला गया स्वर",
    en: "Clear Narration • Spoken Voice",
  },
  explanationSubtitle: {
    bn: "সরল ব্যাখ্যা • বন্ধুত্বপূর্ণ কণ্ঠস্বর",
    hi: "सरल व्याख्या • मित्रवत स्वर",
    en: "Simple Explanation • Friendly Voice",
  },
  verseOfTheDay: {
    bn: "আজকের শ্লোক",
    hi: "आज का श्लोक",
    en: "Verse of the Day",
  },
  readFullVerse: {
    bn: "সম্পূর্ণ শ্লোক পড়ুন",
    hi: "पूरा श्लोक पढ़ें",
    en: "Read Full Verse",
  },
  libraryTitle: {
    bn: "পুস্তকালয়",
    hi: "पुस्तकालय",
    en: "Library",
  },
  librarySubtitle: {
    bn: "আধ্যাত্মিক জ্ঞানের নির্বাচিত ই-বুক",
    hi: "आध्यात्मिक ज्ञान की चुनिंदा ई-पुस्तकें",
    en: "A curated collection of spiritual e-books",
  },
  catBhagavadGita: {
    bn: "ভগবদ্গীতা",
    hi: "भगवद्गीता",
    en: "Bhagavad Gita",
  },
  catStoriesEpics: {
    bn: "কাহিনি ও মহাকাব্য",
    hi: "कथाएँ और महाकाव्य",
    en: "Stories & Epics",
  },
  catSpiritualGuides: {
    bn: "আধ্যাত্মিক নির্দেশিকা",
    hi: "आध्यात्मिक मार्गदर्शिका",
    en: "Spiritual Guides",
  },
  catForStudents: {
    bn: "শিক্ষার্থীদের জন্য",
    hi: "विद्यार्थियों के लिए",
    en: "For Students",
  },
  catShortReads: {
    bn: "ছোট পাঠ",
    hi: "लघु पठन",
    en: "Short Reads",
  },
  tabSlokas: { bn: "শ্লোক", hi: "श्लोक", en: "Slokas" },
  tabBookmarks: { bn: "বুকমার্ক", hi: "बुकमार्क", en: "Bookmarks" },
  noBookBookmarks: {
    bn: "এখনও কোনো অধ্যায় সংরক্ষিত হয়নি।",
    hi: "अभी तक कोई अध्याय सहेजा नहीं गया।",
    en: "You haven't saved any sections yet.",
  },
  noBookBookmarksHint: {
    bn: "পড়ার সময় বুকমার্ক আইকনে চাপ দিন।",
    hi: "पढ़ते समय बुकमार्क आइकन दबाएँ।",
    en: "Tap the bookmark icon while reading.",
  },
  section: { bn: "অধ্যায়", hi: "अध्याय", en: "Section" },
  progress: { bn: "অগ্রগতি", hi: "प्रगति", en: "Progress" },
  continueReading: { bn: "পড়া চালিয়ে যান", hi: "पढ़ना जारी रखें", en: "Continue reading" },
  bookmarkAdded: { bn: "বুকমার্ক করা হয়েছে", hi: "बुकमार्क जोड़ा गया", en: "Bookmark added" },
  bookmarkRemoved: { bn: "বুকমার্ক সরানো হয়েছে", hi: "बुकमार्क हटाया गया", en: "Bookmark removed" },
};

// Chapter names per language
export const chapterNames: Record<number, Dict> = {
  1: { bn: "অর্জুনবিষাদযোগ", hi: "अर्जुनविषादयोग", en: "Arjuna's Sorrow" },
  2: { bn: "সাংখ্যযোগ", hi: "सांख्ययोग", en: "The Path of Knowledge" },
  3: { bn: "কর্মযোগ", hi: "कर्मयोग", en: "The Path of Action" },
  4: { bn: "জ্ঞানকর্মসন্ন্যাসযোগ", hi: "ज्ञानकर्मसंन्यासयोग", en: "Knowledge & Renunciation of Action" },
  5: { bn: "কর্মসন্ন্যাসযোগ", hi: "कर्मसंन्यासयोग", en: "The Path of Renunciation" },
  6: { bn: "আত্মসংযমযোগ", hi: "आत्मसंयमयोग", en: "The Path of Self-Control" },
  7: { bn: "জ্ঞানবিজ্ঞানযোগ", hi: "ज्ञानविज्ञानयोग", en: "Knowledge & Realization" },
  8: { bn: "অক্ষরব্রহ্মযোগ", hi: "अक्षरब्रह्मयोग", en: "The Imperishable Brahman" },
  9: { bn: "রাজবিদ্যারাজগুহ্যযোগ", hi: "राजविद्याराजगुह्ययोग", en: "The Royal Knowledge" },
  10: { bn: "বিভূতিযোগ", hi: "विभूतियोग", en: "Divine Glories" },
  11: { bn: "বিশ্বরূপদর্শনযোগ", hi: "विश्वरूपदर्शनयोग", en: "Vision of the Universal Form" },
  12: { bn: "ভক্তিযোগ", hi: "भक्तियोग", en: "The Path of Devotion" },
  13: { bn: "ক্ষেত্রক্ষেত্রজ্ঞবিভাগযোগ", hi: "क्षेत्रक्षेत्रज्ञविभागयोग", en: "Field & Knower of the Field" },
  14: { bn: "গুণত্রয়বিভাগযোগ", hi: "गुणत्रयविभागयोग", en: "The Three Modes of Nature" },
  15: { bn: "পুরুষোত্তমযোগ", hi: "पुरुषोत्तमयोग", en: "The Supreme Person" },
  16: { bn: "দৈবাসুরসম্পদ্বিভাগযোগ", hi: "दैवासुरसम्पद्विभागयोग", en: "Divine & Demonic Qualities" },
  17: { bn: "শ্রদ্ধাত্রয়বিভাগযোগ", hi: "श्रद्धात्रयविभागयोग", en: "The Three Kinds of Faith" },
  18: { bn: "মোক্ষসন্ন্যাসযোগ", hi: "मोक्षसंन्यासयोग", en: "The Path of Liberation" },
};

// Chapter summaries per language (short, simple)
export const chapterSummaries: Record<number, Dict> = {
  1: {
    bn: "কুরুক্ষেত্রে অর্জুন তাঁর আত্মীয়দের দেখে যুদ্ধ করতে অনিচ্ছুক হন।",
    hi: "कुरुक्षेत्र में अर्जुन अपने स्वजनों को देखकर युद्ध करने में अनिच्छुक हो जाते हैं।",
    en: "On the battlefield, Arjuna sees his relatives and refuses to fight.",
  },
  2: {
    bn: "শ্রীকৃষ্ণ আত্মার অমরত্ব ও কর্তব্যপালনের শিক্ষা দেন।",
    hi: "श्रीकृष्ण आत्मा की अमरता और कर्तव्य पालन की शिक्षा देते हैं।",
    en: "Krishna teaches about the immortal soul and one's duty.",
  },
  3: {
    bn: "নিষ্কাম কর্মের শিক্ষা — ফলের আশা না রেখে কর্ম করা।",
    hi: "निष्काम कर्म की शिक्षा — फल की आशा बिना कर्म करना।",
    en: "Selfless action — doing duty without desire for results.",
  },
  4: {
    bn: "জ্ঞান, কর্ম ও অবতারের রহস্য ব্যাখ্যা।",
    hi: "ज्ञान, कर्म और अवतार के रहस्य की व्याख्या।",
    en: "The mystery of knowledge, action, and divine incarnations.",
  },
  5: {
    bn: "প্রকৃত সন্ন্যাস এবং কর্মযোগের শ্রেষ্ঠত্ব।",
    hi: "वास्तविक संन्यास और कर्मयोग की श्रेष्ठता।",
    en: "True renunciation and the superiority of selfless action.",
  },
  6: {
    bn: "ধ্যান ও আত্মসংযমের মাধ্যমে মন নিয়ন্ত্রণ।",
    hi: "ध्यान और आत्मसंयम से मन का नियंत्रण।",
    en: "Controlling the mind through meditation and self-discipline.",
  },
  7: {
    bn: "পরমেশ্বরের স্বরূপ ও মায়ার রহস্য।",
    hi: "परमेश्वर का स्वरूप और माया का रहस्य।",
    en: "The nature of God and the mystery of illusion.",
  },
  8: {
    bn: "ব্রহ্ম, আত্মা ও মৃত্যুকালে ভগবৎ-স্মরণ।",
    hi: "ब्रह्म, आत्मा और मृत्यु के समय भगवद्-स्मरण।",
    en: "Brahman, the soul, and remembering God at death.",
  },
  9: {
    bn: "পরমেশ্বরের সর্বব্যাপী রূপ ও ভক্তির মহিমা।",
    hi: "परमेश्वर का सर्वव्यापी रूप और भक्ति की महिमा।",
    en: "God's all-pervading form and the glory of devotion.",
  },
  10: {
    bn: "শ্রীকৃষ্ণের ঐশ্বরিক বিভূতিসমূহ।",
    hi: "श्रीकृष्ण की दिव्य विभूतियाँ।",
    en: "The divine glories of Lord Krishna.",
  },
  11: {
    bn: "অর্জুন শ্রীকৃষ্ণের বিশ্বরূপ দর্শন করেন।",
    hi: "अर्जुन श्रीकृष्ण के विश्वरूप का दर्शन करते हैं।",
    en: "Arjuna sees Krishna's universal cosmic form.",
  },
  12: {
    bn: "ভক্তির পথ এবং প্রিয় ভক্তের লক্ষণ।",
    hi: "भक्ति का मार्ग और प्रिय भक्त के लक्षण।",
    en: "The path of devotion and qualities of a dear devotee.",
  },
  13: {
    bn: "শরীর (ক্ষেত্র) ও আত্মা (ক্ষেত্রজ্ঞ) — দুটির পার্থক্য।",
    hi: "शरीर (क्षेत्र) और आत्मा (क्षेत्रज्ञ) का भेद।",
    en: "The body as the field, and the soul as its knower.",
  },
  14: {
    bn: "প্রকৃতির তিন গুণ — সত্ত্ব, রজ ও তম।",
    hi: "प्रकृति के तीन गुण — सत्व, रज और तम।",
    en: "The three qualities of nature: goodness, passion, ignorance.",
  },
  15: {
    bn: "পরম পুরুষ পুরুষোত্তমের তত্ত্ব।",
    hi: "पुरुषोत्तम के तत्त्व का वर्णन।",
    en: "The truth about the Supreme Person.",
  },
  16: {
    bn: "দৈবী ও আসুরিক স্বভাবের পার্থক্য।",
    hi: "दैवी और आसुरी स्वभाव का भेद।",
    en: "The difference between divine and demonic natures.",
  },
  17: {
    bn: "শ্রদ্ধার তিন প্রকার — সাত্ত্বিক, রাজসিক, তামসিক।",
    hi: "श्रद्धा के तीन प्रकार — सात्विक, राजसिक, तामसिक।",
    en: "Three kinds of faith: pure, passionate, and dark.",
  },
  18: {
    bn: "মোক্ষের পথ এবং গীতার সারমর্ম।",
    hi: "मोक्ष का मार्ग और गीता का सार।",
    en: "The path to liberation and the essence of the Gita.",
  },
};
