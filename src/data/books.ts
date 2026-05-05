// Library data — books with sectioned content optimized for mobile reading.
// Each book has separate Hindi and English versions.
import gitaSimplifiedCover from "@/assets/book-gita-simplified-cover.png";

export interface BookSection {
  id: number;
  title: string;
  body: string;
  takeaway: string;
}

export type BookLanguage = "hi" | "en";

export type BookCategory = "bhagavad-gita" | "stories-epics" | "spiritual-guides" | "for-students" | "short-reads";

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  titleEn?: string;
  authorEn?: string;
  descriptionEn?: string;
  price: number; // INR. 0 = free.
  cover: string; // gradient class (fallback)
  coverImage?: string; // optional image URL
  category: BookCategory;
  hindiSections: BookSection[];
  englishSections: BookSection[];
}

export const CATEGORIES: { id: BookCategory; label: string }[] = [
  { id: "bhagavad-gita", label: "भगवद्गीता" },
  { id: "stories-epics", label: "कथाएँ और महाकाव्य" },
  { id: "spiritual-guides", label: "आध्यात्मिक मार्गदर्शिका" },
  { id: "for-students", label: "विद्यार्थियों के लिए" },
  { id: "short-reads", label: "लघु पठन" },
];

const gitaSimplifiedHindi: BookSection[] = [
  {
    id: 1,
    title: "गीता क्या है?",
    body: "भगवद्गीता महाभारत के युद्ध से पहले श्रीकृष्ण और अर्जुन के बीच हुआ संवाद है। इसमें 18 अध्याय और 700 श्लोक हैं। यह सिर्फ एक धार्मिक ग्रंथ नहीं, बल्कि जीवन जीने की कला सिखाने वाली पुस्तक है। जब अर्जुन युद्धभूमि में अपने ही परिवार को देखकर हार मान बैठे, तब कृष्ण ने उन्हें कर्तव्य, ज्ञान, भक्ति और मन के नियंत्रण की शिक्षा दी। आज भी ये शिक्षाएँ हमारे रोज़मर्रा के तनाव, निर्णय और रिश्तों के लिए उतनी ही उपयोगी हैं जितनी हज़ारों साल पहले थीं। गीता हमें यह नहीं बताती कि क्या करें — वह सिखाती है कि कैसे सोचें।",
    takeaway: "गीता जीवन जीने की एक व्यावहारिक मार्गदर्शिका है, न कि सिर्फ धार्मिक ग्रंथ।",
  },
  {
    id: 2,
    title: "अर्जुन का संकट",
    body: 'युद्ध शुरू होने से पहले अर्जुन ने दोनों सेनाओं के बीच अपना रथ खड़ा किया। सामने उसके गुरु, चाचा, भाई और मित्र खड़े थे। यह देखकर उसके हाथ काँपने लगे, गांडीव धनुष गिर गया और मन में गहरी निराशा छा गई। उसने कृष्ण से कहा — "मैं नहीं लड़ूँगा।" यह वही स्थिति है जो हमारे जीवन में भी आती है — जब सही और ग़लत के बीच चुनाव करना हो, जब अपनों के विरुद्ध खड़ा होना पड़े, या जब कर्तव्य भारी लगे। अर्जुन का संकट दरअसल हर इंसान का संकट है। गीता यहीं से शुरू होती है — हमारी कमज़ोरी से।',
    takeaway: "जीवन में संकट और दुविधा सबको आती है — यही आत्म-खोज की शुरुआत है।",
  },
  {
    id: 3,
    title: "आत्मा अमर है",
    body: "कृष्ण ने अर्जुन को सबसे पहले आत्मा का सत्य समझाया। उन्होंने कहा कि शरीर नश्वर है, पर आत्मा अमर है। जैसे हम पुराने कपड़े उतारकर नए पहनते हैं, वैसे ही आत्मा एक शरीर छोड़कर दूसरा धारण करती है। न आत्मा को कोई शस्त्र काट सकता है, न आग जला सकती है, न पानी भिगो सकता है। यह समझ हमें मृत्यु के डर से मुक्त करती है। जब हम जानते हैं कि हमारा असली स्वरूप शरीर नहीं, चेतना है, तो छोटी-छोटी चिंताएँ अपने आप कम हो जाती हैं। यह ज्ञान शोक को मिटाता है।",
    takeaway: "आप शरीर नहीं, अमर आत्मा हैं — यही समझ डर को कम करती है।",
  },
  {
    id: 4,
    title: "कर्म करो, फल की चिंता मत करो",
    body: 'गीता का सबसे प्रसिद्ध संदेश है — "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।" यानी अपना काम करने का अधिकार तुम्हारा है, पर फल पर नहीं। इसका मतलब आलसी होना नहीं, बल्कि पूरी मेहनत करके परिणाम के तनाव से मुक्त रहना है। जब हम हर पल सोचते हैं — क्या मिलेगा, क्या नहीं मिलेगा — तो काम पर ध्यान नहीं रहता। पर जब हम केवल कर्म पर ध्यान देते हैं, तो काम बेहतर होता है और मन भी शांत रहता है। परीक्षा, नौकरी, रिश्ते — हर जगह यह सूत्र काम करता है। प्रयास आपका, परिणाम ईश्वर का।',
    takeaway: "मेहनत पूरी करो, फल की चिंता छोड़ दो — यही असली सफलता का सूत्र है।",
  },
  {
    id: 5,
    title: "अपना धर्म पहचानो",
    body: "धर्म का अर्थ केवल पूजा-पाठ नहीं है। धर्म का मतलब है — आपका कर्तव्य, आपकी भूमिका, आपका स्वभाव। एक छात्र का धर्म पढ़ाई है, माता-पिता का धर्म बच्चों का पालन है, डॉक्टर का धर्म इलाज है। कृष्ण कहते हैं कि दूसरे के धर्म से अपना धर्म कठिन भले हो, पर उसी में कल्याण है। दूसरों की नकल करने से ज़्यादा ज़रूरी है अपनी पहचान को समझना। जब आप वही करते हैं जो आपके स्वभाव और परिस्थिति के अनुकूल है, तो जीवन सहज हो जाता है। पहले खुद को जानो, फिर रास्ता अपने आप दिखेगा।",
    takeaway: "अपनी भूमिका को पहचानो — दूसरों की नकल में अपनी असली ताकत मत खोओ।",
  },
  {
    id: 6,
    title: "मन सबसे बड़ा शत्रु, सबसे बड़ा मित्र",
    body: 'कृष्ण कहते हैं — "उद्धरेदात्मनात्मानम्।" अपने आप का उद्धार स्वयं करो। मन ही हमारा सबसे बड़ा मित्र है और सबसे बड़ा शत्रु भी। जब मन काबू में हो, तो वह हमें ऊँचाइयों तक ले जाता है। जब मन भटका हुआ हो, तो वह हमें गहरे गड्ढे में गिरा देता है। बाहर के दुश्मन से लड़ना आसान है, पर अपने भीतर के क्रोध, लोभ, ईर्ष्या से लड़ना कठिन है। अर्जुन ने पूछा — मन तो हवा से भी चंचल है, कैसे रोकें? कृष्ण बोले — अभ्यास और वैराग्य से। यानी रोज़ अभ्यास और इच्छाओं पर थोड़ा नियंत्रण।',
    takeaway: "अपने मन पर विजय ही सबसे बड़ी जीत है।",
  },
  {
    id: 7,
    title: "तीन गुण — सत्व, रज, तम",
    body: "गीता बताती है कि प्रकृति के तीन गुण हैं — सत्व (शुद्धता), रज (सक्रियता), और तम (आलस्य)। हर इंसान में तीनों होते हैं, बस मात्रा अलग होती है। सत्वगुण से ज्ञान और शांति आती है। रजगुण से कर्म और महत्वाकांक्षा आती है। तमगुण से आलस्य और भ्रम आता है। हमारा भोजन, संगति, विचार और काम — सब इन गुणों को बढ़ाते या घटाते हैं। ताज़ा भोजन, अच्छी संगति, सकारात्मक विचार सत्व बढ़ाते हैं। बासी खाना, बेकार बहसें, टालमटोल तम बढ़ाते हैं। अपने जीवन को सत्व की ओर ले जाना ही प्रगति है।",
    takeaway: "अपने भोजन, संगति और विचारों से अपने गुणों को सात्विक बनाओ।",
  },
  {
    id: 8,
    title: "ध्यान का महत्व",
    body: "छठे अध्याय में कृष्ण ने ध्यान की विधि बताई। शांत स्थान चुनो, सीधे बैठो, आँखें मूंदकर एक बिंदु पर मन लगाओ। न ज़्यादा खाओ, न बिल्कुल भूखे रहो; न बहुत सोओ, न बिल्कुल जागते रहो — हर चीज़ में संतुलन। ध्यान कोई जादू नहीं, यह मन का व्यायाम है। जैसे शरीर के लिए दौड़ना ज़रूरी है, वैसे मन के लिए ध्यान। शुरू में मन भागेगा, बार-बार भटकेगा। हर बार धैर्य से उसे वापस लाओ। दिन में सिर्फ़ 10 मिनट का ध्यान भी तनाव कम करता है, नींद बेहतर करता है, और निर्णय की क्षमता बढ़ाता है।",
    takeaway: "रोज़ 10 मिनट का ध्यान आपके जीवन को बदल सकता है।",
  },
  {
    id: 9,
    title: "भक्ति का सरल मार्ग",
    body: 'कृष्ण ने कहा कि ईश्वर तक पहुँचने का सबसे सरल रास्ता भक्ति है। भक्ति यानी प्रेम — बिना शर्त, बिना डर। आपको कोई कठिन योग या शास्त्र पढ़ने की ज़रूरत नहीं। कृष्ण कहते हैं — "पत्र, पुष्प, फल, जल" — जो भी प्रेम से मुझे अर्पित करोगे, मैं स्वीकार करूँगा। महंगी पूजा से ज़्यादा भाव की कीमत है। भक्ति का मतलब केवल मंदिर जाना नहीं — हर काम को ईश्वर के लिए समर्पित करना भी भक्ति है। माँ का बच्चे को खाना खिलाना, शिक्षक का पढ़ाना, किसान का खेती करना — जब प्रेम से किया जाए, सब भक्ति है।',
    takeaway: "प्रेम से किया हर काम भक्ति है — विधि से ज़्यादा भाव की कीमत है।",
  },
  {
    id: 10,
    title: "क्रोध का चक्र",
    body: "दूसरे अध्याय में कृष्ण ने क्रोध का खतरनाक चक्र बताया। पहले विषयों के बारे में सोचने से आसक्ति होती है, आसक्ति से इच्छा, इच्छा पूरी न हो तो क्रोध, क्रोध से बुद्धि का नाश, और बुद्धि के नाश से इंसान का पूरा पतन हो जाता है। यह श्रृंखला हम रोज़ देखते हैं — ट्रैफ़िक में, ऑफिस में, घर में। क्रोध को रोकने का तरीक़ा है — शुरू में ही पकड़ लेना। जब विचार आए, तब रुक जाओ। गहरी साँस लो, 10 तक गिनो, थोड़ी देर मौन रहो। क्रोध जितना बढ़ने दोगे, उतना ही नुक़सान करेगा। पहले क़दम पर ही उसे रोको।",
    takeaway: "क्रोध को शुरू में ही पकड़ लो — एक बार बढ़ गया तो बुद्धि भी डूब जाती है।",
  },
  {
    id: 11,
    title: "स्थितप्रज्ञ — संतुलित व्यक्ति",
    body: "गीता एक आदर्श व्यक्ति का चित्र खींचती है — स्थितप्रज्ञ, यानी जिसकी बुद्धि स्थिर है। ऐसा व्यक्ति सुख में फूलता नहीं, दुख में मुरझाता नहीं। प्रशंसा में अहंकार नहीं, निंदा में पीड़ा नहीं। वह सफलता-असफलता दोनों को एक समान देखता है। यह कोई निर्जीव होने की बात नहीं, बल्कि आंतरिक स्थिरता की बात है। ऐसा व्यक्ति निर्णय भावनाओं में बहकर नहीं लेता। आज की दुनिया में, जहाँ हर पाँच मिनट में मूड बदलता है, यह स्थिरता ही असली शक्ति है। यह एक दिन में नहीं आती — रोज़ के अभ्यास से बनती है।",
    takeaway: "सुख-दुख, सफलता-असफलता में संतुलित रहना ही असली ताक़त है।",
  },
  {
    id: 12,
    title: "अहंकार का त्याग",
    body: 'कृष्ण बार-बार कहते हैं कि असली बाधा अहंकार है — यह सोच कि "मैंने किया"। हम जो भी करते हैं, उसमें प्रकृति, परिस्थिति, दूसरों का सहयोग, और ईश्वर की कृपा शामिल होती है। फिर भी हम सब श्रेय खुद ले लेते हैं। यही अहंकार दुख का मूल है। जब हम सोचते हैं — "मैं कर्ता हूँ" — तो विफलता पर टूट जाते हैं और सफलता पर घमंड हो जाता है। पर जब हम जानते हैं कि हम केवल माध्यम हैं, तो दोनों स्थितियों में शांत रहते हैं। यह विनम्रता कमज़ोरी नहीं, सबसे बड़ी ताक़त है।',
    takeaway: "अहंकार छोड़ो — आप कर्ता नहीं, ईश्वर के माध्यम हैं।",
  },
  {
    id: 13,
    title: "संगति का प्रभाव",
    body: "गीता बार-बार बताती है कि हम जिनके साथ रहते हैं, वैसे ही बनते जाते हैं। बुरी संगति धीरे-धीरे अच्छे संस्कारों को भी मिटा देती है, और अच्छी संगति कमज़ोर इंसान को भी मज़बूत बनाती है। आज के समय में संगति केवल लोग नहीं — आप क्या देखते हैं, क्या पढ़ते हैं, सोशल मीडिया पर किसे फॉलो करते हैं — यह सब आपकी संगति है। नकारात्मक खबरें, झगड़े वाले वीडियो, और निंदा करने वाले लोग आपकी ऊर्जा खींच लेते हैं। सकारात्मक लोग, अच्छी किताबें, प्रेरक विचार आपको ऊपर उठाते हैं। संगति बहुत सोच-समझकर चुनें।",
    takeaway: "जिनके साथ समय बिताते हो, वैसे ही बन जाते हो — संगति सोच-समझकर चुनो।",
  },
  {
    id: 14,
    title: "भोजन और स्वभाव",
    body: "गीता कहती है कि हम जो खाते हैं, वैसे ही बनते हैं। सात्विक भोजन — ताज़ा फल, सब्ज़ी, दूध, अनाज — मन को शांत और शरीर को स्वस्थ रखता है। राजसिक भोजन — बहुत तीखा, खट्टा, नमकीन — उत्तेजना और बेचैनी बढ़ाता है। तामसिक भोजन — बासी, ज़्यादा तला, अधिक मीठा — आलस्य और सुस्ती लाता है। केवल स्वाद देखकर खाना खाने वाले अपने मूड को समझ नहीं पाते कि क्यों चिड़चिड़ापन है। भोजन केवल पेट की चीज़ नहीं, मन की भी है। समय पर, संतुलित, ताज़ा भोजन आपके स्वभाव को सकारात्मक रखेगा।",
    takeaway: "जैसा खाओगे, वैसा मन बनेगा — भोजन को दवा की तरह चुनो।",
  },
  {
    id: 15,
    title: "त्याग असली नहीं, राग का त्याग असली है",
    body: "बहुत लोग सोचते हैं कि वैराग्य का मतलब घर-परिवार छोड़कर जंगल में जाना है। गीता इसे ग़लत बताती है। असली त्याग बाहरी नहीं, भीतरी है। आप घर में रहकर भी संन्यासी हो सकते हैं, और जंगल में बैठकर भी इच्छाओं से जल सकते हैं। राग यानी आसक्ति का त्याग करो — चीज़ों का नहीं। पैसा कमाओ, परिवार पालो, सुख भोगो — पर इन पर निर्भर मत हो जाओ। आज सब है, कल नहीं भी रह सकता। जो भीतर से मुक्त है, वही सच्चा संन्यासी है। यह बहुत व्यावहारिक शिक्षा है — गृहस्थ भी आध्यात्मिक हो सकता है।",
    takeaway: "त्याग चीज़ों का नहीं, उन पर निर्भरता का करो।",
  },
  {
    id: 16,
    title: "विश्वरूप — सबमें ईश्वर",
    body: "ग्यारहवें अध्याय में कृष्ण ने अर्जुन को अपना विश्वरूप दिखाया। उन्होंने बताया कि पूरा ब्रह्मांड उन्हीं में है — सूर्य, चंद्र, तारे, पर्वत, नदी, हर जीव। यह दर्शन हमें सिखाता है कि ईश्वर किसी एक मूर्ति या मंदिर में सीमित नहीं — वह हर जगह, हर इंसान में है। जब हम यह समझते हैं, तो दूसरों के साथ हमारा व्यवहार बदलता है। हम किसी के साथ कठोर नहीं हो सकते क्योंकि उसमें भी वही चेतना है। यही दृष्टि एकता और करुणा लाती है। यह सिर्फ धार्मिक बात नहीं — यह जीवन का सबसे सुंदर सत्य है।",
    takeaway: "हर इंसान में वही चेतना है — सबसे प्रेम और सम्मान से व्यवहार करो।",
  },
  {
    id: 17,
    title: "श्रद्धा के तीन प्रकार",
    body: "सत्रहवें अध्याय में कृष्ण ने श्रद्धा के तीन प्रकार बताए। सात्विक श्रद्धा — शुद्ध, निःस्वार्थ, ज्ञान पर आधारित। राजसिक श्रद्धा — फल पाने के लिए, दिखावे के लिए। तामसिक श्रद्धा — डर से, अंधविश्वास से, बिना समझे। आज भी हम देख सकते हैं — कोई भगवान को मनोकामना के लिए मानता है, कोई दिखावे के लिए मंदिर जाता है, और कोई बिना सोचे रिवाज़ निभाता है। सच्ची भक्ति वही है जो प्रेम और समझ से हो। श्रद्धा हमारे सोचने, खाने, दान करने, बोलने — हर चीज़ में दिखती है। अपनी श्रद्धा को सात्विक बनाओ।",
    takeaway: "सच्ची श्रद्धा डर या लालच से नहीं, समझ और प्रेम से आती है।",
  },
  {
    id: 18,
    title: "वाणी का तप",
    body: "गीता कहती है कि वाणी भी एक तपस्या है। ऐसी बात कहो जो सच हो, प्रिय हो, हितकारी हो, और सुनने वाले को कष्ट न दे। केवल सच बोलना काफी नहीं — कैसे बोला जाए, यह भी ज़रूरी है। कठोर सत्य भी प्रेम से कहा जा सकता है। आज की डिजिटल दुनिया में हम घंटों बातें करते हैं, मैसेज भेजते हैं, कमेंट करते हैं — पर सोचते नहीं। एक कठोर शब्द रिश्ता बिगाड़ सकता है, एक मीठा शब्द दिल जीत सकता है। बोलने से पहले रुको, सोचो, फिर बोलो। मौन भी एक बहुत बड़ी तपस्या है।",
    takeaway: "बोलने से पहले सोचो — शब्द रिश्ते बना भी सकते हैं, बिगाड़ भी सकते हैं।",
  },
  {
    id: 19,
    title: "दान का सही तरीक़ा",
    body: "कृष्ण कहते हैं कि दान भी तीन प्रकार का होता है। सात्विक दान — सही समय पर, सही व्यक्ति को, बिना बदले की उम्मीद के दिया गया। राजसिक दान — कुछ पाने की आशा से, या बेमन से दिया गया। तामसिक दान — ग़लत समय पर, ग़लत व्यक्ति को, बिना सम्मान के। दान केवल पैसे का नहीं — समय, ज्ञान, मुस्कान, सहायता — सब दान है। एक थका हुआ इंसान जब आपसे रास्ता पूछे और आप ध्यान से बताएँ — यह भी दान है। दान करते समय सामने वाले की गरिमा का ध्यान रखो। दिखावे का दान फल नहीं देता।",
    takeaway: "बिना दिखावे, बिना अपेक्षा का दान ही असली दान है।",
  },
  {
    id: 20,
    title: "मृत्यु का सत्य",
    body: "गीता मृत्यु के डर को पूरी तरह मिटा देती है। कृष्ण कहते हैं — जो जन्मा है, उसकी मृत्यु निश्चित है; और जो मरा है, उसका फिर जन्म निश्चित है। फिर इसमें शोक कैसा? मृत्यु अंत नहीं, एक पड़ाव है — जैसे कपड़े बदलना। पर इसका मतलब लापरवाह जीना नहीं। हर पल मूल्यवान है, इसलिए उसे पूरी तरह जियो। मृत्यु को याद रखने से जीवन और सुंदर लगता है — हम छोटी बातों पर लड़ना बंद कर देते हैं, माफ़ करना सीख जाते हैं। जो आज है, वह हमेशा नहीं रहेगा — यही सोच जीवन को गहरा बनाती है।",
    takeaway: "मृत्यु का डर छोड़ो — यह अंत नहीं, एक नया पड़ाव है।",
  },
  {
    id: 21,
    title: "भगवान का वादा",
    body: 'कृष्ण कहते हैं — "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।" जब-जब धर्म की हानि होती है और अधर्म बढ़ता है, तब-तब मैं प्रकट होता हूँ। यह वादा केवल अवतारों का नहीं, हम सबके लिए है। जब आपके जीवन में अंधेरा हो, हार लगे, रास्ता न दिखे — तब भीतर का प्रकाश ज़रूर आता है, अगर आप विश्वास रखें। इतिहास गवाह है कि सबसे कठिन समय में ही सबसे बड़ी प्रेरणा मिलती है। ईश्वर हमेशा आपके साथ है — मंदिर में नहीं, आपके भीतर। बस उसकी आवाज़ सुनने के लिए मन को थोड़ा शांत करना पड़ता है।',
    takeaway: "अंधेरे में कभी अकेले मत समझो — भीतर का प्रकाश हमेशा साथ है।",
  },
  {
    id: 22,
    title: "गीता का सार — एक वाक्य में",
    body: 'अठारहवें अध्याय के अंत में कृष्ण ने पूरी गीता का सार दिया — "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।" सब चिंताएँ छोड़कर मेरी शरण में आ जाओ। यह कोई धार्मिक आदेश नहीं — यह जीवन की सबसे बड़ी राहत है। हम सबने अनुभव किया है कि कितनी भी योजना बनाएँ, कुछ चीज़ें हमारे हाथ में नहीं होतीं। तो अपना सर्वोत्तम करो, फिर परिणाम परमात्मा पर छोड़ दो। यह समर्पण कमज़ोरी नहीं, सबसे गहरी समझ है। गीता का सार यही है — कर्म करो, प्रेम करो, संतुलन रखो, और बाकी ईश्वर पर छोड़ दो। बस इतना ही जीवन का रहस्य है।',
    takeaway: "अपना सर्वोत्तम करो, बाकी ईश्वर पर छोड़ दो — यही गीता का सार है।",
  },
];

const gitaSimplifiedEnglish: BookSection[] = [
  {
    id: 1,
    title: "What Is the Gita?",
    body: "The Bhagavad Gita is a conversation between Krishna and Arjuna held just before the great Mahabharata war. It has 18 chapters and 700 verses. But it is not only a religious text — it is a guide to the art of living. When Arjuna froze on the battlefield, looking at his own family on the other side, Krishna taught him about duty, knowledge, devotion, and mastery of the mind. Those teachings still apply to our daily stress, decisions, and relationships, just as they did thousands of years ago. The Gita does not tell you exactly what to do — it teaches you how to think.",
    takeaway: "The Gita is a practical guide to living, not just a religious book.",
  },
  {
    id: 2,
    title: "Arjuna's Crisis",
    body: "Just before the war, Arjuna placed his chariot between the two armies. Standing across from him were his teachers, uncles, brothers, and friends. His hands trembled, his bow slipped, and a deep despair filled him. He told Krishna, \"I will not fight.\" We meet the same moment in our own lives — when we must choose between right and wrong, when we must stand against people we love, or when our duty feels too heavy. Arjuna's crisis is really every human being's crisis. The Gita begins exactly here — with our weakness.",
    takeaway: "Everyone faces moments of crisis and doubt — that is where self-discovery begins.",
  },
  {
    id: 3,
    title: "The Soul Is Eternal",
    body: "The first truth Krishna gave Arjuna was about the soul. The body is temporary, but the soul is eternal. Just as we take off old clothes and put on new ones, the soul leaves one body and takes another. No weapon can cut it, no fire can burn it, no water can wet it. Understanding this frees us from the fear of death. When we know that our true self is not the body but consciousness, small worries naturally lose their weight. This knowledge ends sorrow.",
    takeaway: "You are not the body — you are the eternal soul. This understanding reduces fear.",
  },
  {
    id: 4,
    title: "Act Without Worrying About the Result",
    body: 'The most famous line in the Gita says: "You have the right to act, but never to the fruits of your action." This does not mean being lazy. It means working with full effort while staying free from the stress of outcomes. When we keep thinking, "What will I get? What will I lose?", our attention leaves the work. But when we focus only on the action itself, the work becomes better and the mind stays calm. Exam, job, relationships — this principle works everywhere. The effort is yours; the result belongs to the divine.',
    takeaway: "Give your full effort, drop the worry about results — that is the real formula for success.",
  },
  {
    id: 5,
    title: "Know Your Own Dharma",
    body: "Dharma does not just mean rituals. Dharma means your duty, your role, your nature. A student's dharma is to study; a parent's dharma is to care for their children; a doctor's dharma is to heal. Krishna says it is better to follow your own dharma imperfectly than to copy someone else's perfectly. Understanding who you are matters more than imitating others. When you do the work that fits your nature and situation, life flows easily. First know yourself; then the path will reveal itself.",
    takeaway: "Know your role — don't lose your real strength trying to be someone else.",
  },
  {
    id: 6,
    title: "The Mind: Greatest Friend, Greatest Enemy",
    body: 'Krishna says: "Lift yourself by yourself." The mind is both our closest friend and our worst enemy. When the mind is under control, it lifts us to great heights. When the mind is scattered, it drops us into deep holes. Fighting outer enemies is easy; fighting our own anger, greed, and jealousy is much harder. Arjuna asked, "The mind is more restless than the wind — how can I control it?" Krishna replied: through practice and detachment. A little practice every day, and a little check on desires.',
    takeaway: "Conquering your own mind is the greatest victory.",
  },
  {
    id: 7,
    title: "The Three Qualities — Sattva, Rajas, Tamas",
    body: "The Gita says nature has three qualities: sattva (purity), rajas (activity), and tamas (inertia). Each person has all three; only the proportions differ. Sattva brings clarity and peace. Rajas brings drive and ambition. Tamas brings laziness and confusion. Our food, company, thoughts, and work either increase or decrease these qualities. Fresh food, good company, and positive thoughts strengthen sattva. Stale food, useless arguments, and procrastination strengthen tamas. Moving your life toward sattva is real progress.",
    takeaway: "Use your food, company, and thoughts to make your inner nature more sattvic.",
  },
  {
    id: 8,
    title: "Why Meditation Matters",
    body: "In the sixth chapter, Krishna explains how to meditate. Choose a quiet place, sit upright, close your eyes, and rest the mind on a single point. Don't eat too much or too little; don't sleep too much or stay awake too long — keep balance in everything. Meditation is not magic. It is exercise for the mind. Just as the body needs walking, the mind needs meditation. At first the mind will run; bring it back, again and again, with patience. Even ten minutes a day reduces stress, improves sleep, and sharpens decision-making.",
    takeaway: "Ten minutes of meditation a day can change your life.",
  },
  {
    id: 9,
    title: "The Simple Path of Devotion",
    body: 'Krishna said the simplest way to reach the Divine is through devotion. Devotion means love — without conditions and without fear. You don\'t need a difficult yoga or deep scripture. Krishna says, "A leaf, a flower, a fruit, water — whatever you offer me with love, I accept." A heart full of feeling is worth more than expensive rituals. Devotion is not only going to a temple — offering every action to the Divine is also devotion. A mother feeding her child, a teacher teaching, a farmer working in the field — when done with love, all of it becomes devotion.',
    takeaway: "Any action done with love is devotion — feeling matters more than ritual.",
  },
  {
    id: 10,
    title: "The Cycle of Anger",
    body: "In the second chapter, Krishna describes the dangerous chain of anger. First, thinking about an object creates attachment; from attachment comes desire; when desire is blocked, anger arises; from anger comes loss of judgment; and from lost judgment, the person falls completely. We see this every day — in traffic, at the office, at home. The way to stop anger is to catch it early. The moment the thought arises, pause. Take a deep breath, count to ten, stay silent for a while. The longer anger grows, the more damage it does. Stop it at the first step.",
    takeaway: "Catch anger at the first step — once it grows, even your judgment goes under.",
  },
  {
    id: 11,
    title: "Sthitaprajna — The Steady Person",
    body: "The Gita paints a picture of the ideal person: sthitaprajna — one whose mind is steady. Such a person does not get carried away in pleasure or crushed in pain. They feel no pride in praise and no pain in criticism. Success and failure look the same to them. This is not coldness; it is inner steadiness. They do not make decisions in waves of emotion. In a world where moods change every five minutes, this steadiness is real strength. It does not come in a day — it is built through daily practice.",
    takeaway: "Staying steady through joy, sorrow, success, and failure is real strength.",
  },
  {
    id: 12,
    title: "Letting Go of Ego",
    body: 'Krishna says again and again that the real obstacle is ego — the thought "I did it." Anything we accomplish involves nature, circumstance, the help of others, and grace. Yet we take all the credit ourselves. This ego is the root of suffering. When we believe "I am the doer," failure breaks us and success makes us proud. But when we know we are only an instrument, both situations leave us calm. This humility is not weakness — it is the deepest strength.',
    takeaway: "Let go of ego — you are not the doer, you are an instrument.",
  },
  {
    id: 13,
    title: "The Power of Company",
    body: "The Gita reminds us again and again that we slowly become like the people we spend time with. Bad company quietly erases good habits, and good company can make even a weak person strong. Today, your company is not just people — what you watch, what you read, who you follow on social media is also your company. Negative news, angry videos, and gossiping people drain your energy. Positive people, good books, and uplifting ideas raise you up. Choose your company very carefully.",
    takeaway: "You become like the people you spend time with — choose your company wisely.",
  },
  {
    id: 14,
    title: "Food and Inner Nature",
    body: "The Gita says we become what we eat. Sattvic food — fresh fruits, vegetables, milk, grains — keeps the mind calm and the body healthy. Rajasic food — very spicy, sour, or salty — increases agitation and restlessness. Tamasic food — stale, deep-fried, or overly sweet — brings dullness and lethargy. People who eat only for taste rarely understand why they feel irritable. Food is not only for the stomach; it shapes the mind. Eating fresh, balanced meals on time keeps your inner nature positive.",
    takeaway: "How you eat shapes how you feel — choose food like medicine.",
  },
  {
    id: 15,
    title: "Renounce Attachment, Not Things",
    body: "Many people think renunciation means leaving home and family for the forest. The Gita disagrees. Real renunciation is inner, not outer. You can be a sannyasi while living at home, and you can sit in a forest while burning with desire. Renounce attachment, not things. Earn money, raise a family, enjoy life — but do not depend on these for your peace. What is here today may be gone tomorrow. Whoever is free inside is the true sannyasi. This is a very practical teaching — even a householder can be deeply spiritual.",
    takeaway: "Don't renounce things — renounce your dependence on them.",
  },
  {
    id: 16,
    title: "Vishvarupa — God in Everything",
    body: "In the eleventh chapter, Krishna shows Arjuna his cosmic form. He reveals that the entire universe is within him — sun, moon, stars, mountains, rivers, every living being. This vision teaches us that God is not limited to one statue or one temple — God is everywhere, in every person. When we truly understand this, the way we treat others changes. We cannot be cruel to anyone, because the same consciousness lives in them too. This vision brings unity and compassion. It is not just religion — it is one of the most beautiful truths of life.",
    takeaway: "The same consciousness lives in every person — treat everyone with love and respect.",
  },
  {
    id: 17,
    title: "Three Kinds of Faith",
    body: "In the seventeenth chapter, Krishna describes three kinds of faith. Sattvic faith is pure, selfless, and rooted in understanding. Rajasic faith chases results or seeks show. Tamasic faith comes from fear, superstition, or blind habit. We see all three today — some pray only to get something, some go to temples for show, and some follow rituals without thinking. True devotion comes from love and clarity. Your faith shows up in how you think, eat, give, and speak. Make your faith sattvic.",
    takeaway: "True faith is born from understanding and love, not fear or greed.",
  },
  {
    id: 18,
    title: "The Discipline of Speech",
    body: "The Gita says speech itself is a kind of discipline. Speak words that are true, kind, helpful, and never hurtful to the listener. Just speaking the truth is not enough — how you say it also matters. Even hard truths can be spoken with love. In today's digital world, we talk for hours, send messages, leave comments — but rarely pause to think. One harsh word can break a relationship; one kind word can win a heart. Pause before you speak, think, then speak. Silence too is a great discipline.",
    takeaway: "Think before you speak — words can build relationships or break them.",
  },
  {
    id: 19,
    title: "The Right Way to Give",
    body: "Krishna says giving also has three forms. Sattvic giving is given at the right time, to the right person, without expecting anything in return. Rajasic giving expects something back, or is given reluctantly. Tamasic giving is given at the wrong time, to the wrong person, or without respect. Giving is not only money — your time, knowledge, smile, and help are also gifts. When a tired person asks you for directions and you explain patiently — that is giving too. Always protect the dignity of the receiver. Show-off giving brings no real reward.",
    takeaway: "Giving without show or expectation is the only real giving.",
  },
  {
    id: 20,
    title: "The Truth About Death",
    body: "The Gita removes the fear of death completely. Krishna says: whoever is born must die, and whoever has died must be born again. So why grieve? Death is not the end — it is a passing, like changing clothes. But this does not mean living carelessly. Every moment is precious, so live it fully. Remembering death actually makes life more beautiful — we stop fighting over small things, and we learn to forgive. What is here today will not always remain — this very thought makes life deeper.",
    takeaway: "Let go of the fear of death — it is not the end, only a passage.",
  },
  {
    id: 21,
    title: "God's Promise",
    body: 'Krishna says: "Whenever dharma declines and adharma rises, I appear." This promise is not only about avatars — it is for all of us. When your life is dark, when defeat presses on you, when no path is visible — an inner light always rises, if you trust. History shows that the greatest inspiration comes in the hardest times. The Divine is always with you — not in a temple, but inside you. You only need to quiet the mind a little to hear that voice.',
    takeaway: "Never feel alone in the dark — the inner light is always with you.",
  },
  {
    id: 22,
    title: "The Essence of the Gita — In One Line",
    body: 'At the end of the eighteenth chapter, Krishna gives the essence of the entire Gita: "Let go of all worries and take refuge in me." This is not a religious order — it is the deepest relief life can offer. We have all seen that no matter how much we plan, some things are simply not in our hands. So do your very best, and leave the result to the Divine. This surrender is not weakness — it is the deepest understanding. The essence of the Gita is this: act, love, stay balanced, and leave the rest to God. That is the whole secret of life.',
    takeaway: "Do your best, leave the rest to the Divine — that is the essence of the Gita.",
  },
];

const gitaEssenceHindi: BookSection[] = [
  {
    id: 1,
    title: "जीवन का संघर्ष",
    body: "हर इंसान अपने जीवन में किसी न किसी संघर्ष से गुजरता है। अर्जुन का युद्ध केवल बाहरी नहीं था, वह अंदर का भी संघर्ष था। जब हम कठिन फैसलों के सामने होते हैं, हम भी डर जाते हैं, भ्रमित हो जाते हैं। गीता हमें सिखाती है कि संघर्ष से भागना नहीं चाहिए। यही संघर्ष हमें मजबूत बनाता है और सही रास्ता दिखाता है। जीवन में हर समस्या एक अवसर है — खुद को समझने का और आगे बढ़ने का।",
    takeaway: "संघर्ष से भागो मत — वही तुम्हें मजबूत बनाता है।",
  },
  {
    id: 2,
    title: "कर्तव्य का महत्व",
    body: "गीता का मुख्य संदेश है कि हमें अपना कर्तव्य निभाना चाहिए। कर्तव्य का मतलब है वह काम जो हमारी जिम्मेदारी है। चाहे मन करे या न करे, हमें अपने काम को ईमानदारी से करना चाहिए। जब हम कर्तव्य पर ध्यान देते हैं, तो जीवन सरल हो जाता है। परिणाम की चिंता हमें कमजोर बनाती है, लेकिन कर्म हमें मजबूत बनाता है।",
    takeaway: "कर्तव्य पर ध्यान दो, परिणाम अपने आप आएगा।",
  },
  {
    id: 3,
    title: "मन का नियंत्रण",
    body: "मन बहुत चंचल होता है। कभी खुश, कभी दुखी, कभी शांत, कभी बेचैन। गीता सिखाती है कि मन को नियंत्रित करना जरूरी है। अगर मन हमारे नियंत्रण में है, तो जीवन आसान हो जाता है। लेकिन अगर मन हमें नियंत्रित करता है, तो हम परेशान रहते हैं। ध्यान, अनुशासन और अभ्यास से मन को शांत किया जा सकता है।",
    takeaway: "मन को नियंत्रित करो, वरना वही तुम्हें नियंत्रित करेगा।",
  },
  {
    id: 4,
    title: "फल की चिंता छोड़ो",
    body: "हम अक्सर सोचते हैं कि हमें क्या मिलेगा। यही सोच हमें तनाव देती है। गीता कहती है कि हमें केवल अपने कर्म पर ध्यान देना चाहिए। जब हम पूरी मेहनत करते हैं और परिणाम की चिंता छोड़ देते हैं, तो मन शांत रहता है। यही असली स्वतंत्रता है।",
    takeaway: "मेहनत करो, फल की चिंता मत करो।",
  },
  {
    id: 5,
    title: "संतुलन का जीवन",
    body: "जीवन में संतुलन बहुत जरूरी है। ज्यादा काम भी नुकसानदायक है और आलस्य भी। गीता हमें सिखाती है कि हर चीज में संतुलन होना चाहिए — भोजन, नींद, काम और विचार। जब जीवन संतुलित होता है, तो हम ज्यादा खुश और शांत रहते हैं।",
    takeaway: "संतुलन ही सुखी जीवन की कुंजी है।",
  },
  {
    id: 6,
    title: "डर से मुक्ति",
    body: "डर हमें आगे बढ़ने से रोकता है। गीता सिखाती है कि हमें डर को समझना चाहिए और उसका सामना करना चाहिए। जब हम आत्मा के सत्य को समझते हैं, तो डर कम हो जाता है। हम समझते हैं कि असली हम अजर-अमर हैं।",
    takeaway: "डर का सामना करो, तभी वह खत्म होगा।",
  },
  {
    id: 7,
    title: "सही सोच",
    body: "हमारी सोच ही हमारी दुनिया बनाती है। अगर सोच सकारात्मक है, तो जीवन आसान लगता है। गीता हमें सिखाती है कि हमें अपने विचारों को शुद्ध रखना चाहिए। नकारात्मक सोच हमें कमजोर बनाती है।",
    takeaway: "जैसी सोच, वैसा जीवन।",
  },
  {
    id: 8,
    title: "अहंकार का त्याग",
    body: "अहंकार हमें दूसरों से दूर कर देता है। हम सोचते हैं कि सब कुछ हमने किया है। लेकिन गीता सिखाती है कि हम केवल एक माध्यम हैं। जब हम अहंकार छोड़ते हैं, तो जीवन हल्का और शांत हो जाता है।",
    takeaway: "अहंकार छोड़ो, जीवन आसान होगा।",
  },
  {
    id: 9,
    title: "प्रेम और भक्ति",
    body: "भक्ति का मतलब है प्रेम। बिना किसी शर्त के प्रेम करना ही सच्ची भक्ति है। गीता सिखाती है कि जब हम अपने काम को प्रेम से करते हैं, तो वही पूजा बन जाता है।",
    takeaway: "प्रेम से किया हर काम भक्ति है।",
  },
  {
    id: 10,
    title: "जीवन का सार",
    body: "गीता का सार बहुत सरल है — अपना कर्तव्य करो, मन को शांत रखो, और जीवन को संतुलन के साथ जियो। ज्यादा सोचने की जरूरत नहीं, बस सही दिशा में छोटे कदम उठाते रहो।",
    takeaway: "सरल जीवन, शांत मन — यही गीता का सार है।",
  },
];

const gitaEssenceEnglish: BookSection[] = [
  {
    id: 1,
    title: "The Struggle of Life",
    body: "Every person goes through some kind of struggle in life. Arjuna's battle was not only outside; it was also inside. When we face hard decisions, we too feel afraid and confused. The Gita teaches us not to run from struggle. Struggle is what makes us stronger and shows us the right path. Every problem in life is also an opportunity — to understand yourself and to grow.",
    takeaway: "Don't run from struggle — it is what makes you strong.",
  },
  {
    id: 2,
    title: "The Importance of Duty",
    body: "The main message of the Gita is to do your duty. Duty means the work that is your responsibility. Whether you feel like it or not, do your work with honesty. When we focus on duty, life becomes simpler. Worrying about results makes us weak; doing the work makes us strong.",
    takeaway: "Focus on your duty, and the results will follow.",
  },
  {
    id: 3,
    title: "Control of the Mind",
    body: "The mind is very restless. Sometimes happy, sometimes sad, sometimes calm, sometimes uneasy. The Gita teaches that controlling the mind is essential. If the mind is in our control, life becomes easy. If the mind controls us, we stay disturbed. With meditation, discipline, and daily practice, the mind can be calmed.",
    takeaway: "Control the mind, or it will control you.",
  },
  {
    id: 4,
    title: "Let Go of the Worry About Results",
    body: "We often worry about what we will get. This thought brings stress. The Gita says to focus only on the action. When we give our full effort and let go of the worry about results, the mind stays calm. This is real freedom.",
    takeaway: "Work hard, but don't worry about the result.",
  },
  {
    id: 5,
    title: "A Balanced Life",
    body: "Balance is essential in life. Too much work is harmful; so is laziness. The Gita teaches that everything needs balance — food, sleep, work, and thoughts. When life is balanced, we are happier and more peaceful.",
    takeaway: "Balance is the key to a happy life.",
  },
  {
    id: 6,
    title: "Freedom From Fear",
    body: "Fear stops us from moving forward. The Gita teaches us to understand our fear and face it. When we see the truth of the soul, fear gets smaller. We see that our true self never dies.",
    takeaway: "Face your fear — that is the only way it ends.",
  },
  {
    id: 7,
    title: "Right Thinking",
    body: "Our thoughts shape our world. If our thinking is positive, life feels easier. The Gita teaches us to keep our thoughts clean and clear. Negative thinking makes us weak.",
    takeaway: "As you think, so your life becomes.",
  },
  {
    id: 8,
    title: "Letting Go of Ego",
    body: "Ego pushes others away from us. We start thinking we did everything ourselves. But the Gita teaches that we are only an instrument. When we drop the ego, life becomes lighter and calmer.",
    takeaway: "Drop the ego, and life becomes easier.",
  },
  {
    id: 9,
    title: "Love and Devotion",
    body: "Devotion means love. Loving without conditions is true devotion. The Gita teaches that when we do our work with love, that work itself becomes worship.",
    takeaway: "Any action done with love is devotion.",
  },
  {
    id: 10,
    title: "The Essence of Life",
    body: "The essence of the Gita is simple — do your duty, keep the mind calm, and live with balance. You don't need to overthink. Just keep taking small steps in the right direction.",
    takeaway: "Simple living, calm mind — this is the essence of the Gita.",
  },
];

const krishnaLeelasHindi: BookSection[] = [
  {
    id: 1,
    title: "कृष्ण का जन्म",
    body: "भगवान कृष्ण का जन्म मथुरा में कंस के भय और अत्याचार के समय हुआ। एक तूफानी रात, कारागार के भीतर दिव्य घटनाएँ घटीं — बेड़ियाँ टूट गईं, पहरेदार सो गए और दरवाज़े अपने आप खुल गए। वसुदेव नवजात कृष्ण को यमुना पार कर गोकुल ले गए। यह घटना दिखाती है कि जब परिवर्तन का समय आता है, तो प्रकृति भी उसका साथ देती है।",
    takeaway: "सबसे अंधेरे समय में भी परिवर्तन चुपचाप शुरू हो जाता है।",
  },
  {
    id: 2,
    title: "गोकुल का जीवन",
    body: "गोकुल में कृष्ण का पालन-पोषण नंद और यशोदा ने एक साधारण गाँव में किया, जहाँ गायें, खेत और अपनापन था। अपनी दिव्यता के बावजूद, कृष्ण ने एक सामान्य बालक की तरह जीवन जिया और सबके साथ खेलते रहे। यह चरण हमें सिखाता है कि सच्चा सुख विलासिता में नहीं, बल्कि सरलता, रिश्तों और अपनत्व में मिलता है।",
    takeaway: "सुख भौतिक चीज़ों में नहीं, बल्कि सरलता में मिलता है।",
  },
  {
    id: 3,
    title: "माखन चोर",
    body: "वृंदावन में कृष्ण ‘माखन चोर’ के नाम से प्रसिद्ध हो गए। घर में पर्याप्त माखन होने के बावजूद, वे गोपियों के घरों में जाकर ताज़ा माखन चुरा लेते थे। अपने मित्रों के साथ वे छत से लटके मटकों तक पहुँचने के लिए अनोखे उपाय करते थे। यह केवल शरारत नहीं थी, बल्कि आनंद, हँसी और प्रेम फैलाने का माध्यम था।",
    takeaway: "कृष्ण की मासूमियत और आनंद ने हर क्रोध को मुस्कान में बदल दिया।",
  },
  {
    id: 4,
    title: "पूतना की कथा",
    body: "कंस द्वारा भेजी गई पूतना एक प्रेममयी स्त्री का रूप धारण करके कृष्ण को विष देने आई। उसने विषैले दूध से कृष्ण को मारने की कोशिश की, लेकिन कृष्ण ने न केवल उसका अंत किया बल्कि उसे मुक्ति भी प्रदान की। यह कथा बताती है कि बुरी नीयत कभी पवित्रता पर विजय नहीं पा सकती।",
    takeaway: "सत्य और पवित्रता सबसे बड़े छल को भी पराजित कर देते हैं।",
  },
  {
    id: 5,
    title: "कालिया नाग",
    body: "कालिया नाग ने यमुना नदी को विषैला बना दिया था, जिससे सभी का जीवन कठिन हो गया। कृष्ण निर्भीक होकर नदी में कूद पड़े, नाग को वश में किया और उसके फनों पर नृत्य किया। लेकिन उसे पूरी तरह नष्ट करने के बजाय उसे जाने का अवसर दिया। यह शक्ति के साथ करुणा का अद्भुत उदाहरण है।",
    takeaway: "समस्याओं का सामना साहस से करो, लेकिन संतुलन बनाए रखो।",
  },
  {
    id: 6,
    title: "गोवर्धन पर्वत उठाना",
    body: "जब गाँव वाले इंद्र की पूजा की तैयारी कर रहे थे, तब कृष्ण ने उन्हें प्रकृति का सम्मान करने की शिक्षा दी। क्रोधित होकर इंद्र ने भारी वर्षा की। तब कृष्ण ने अपनी छोटी उंगली पर गोवर्धन पर्वत उठाकर सभी की रक्षा की। यह घटना अहंकार को तोड़ने और सच्चे नेतृत्व का प्रतीक है।",
    takeaway: "सच्ची शक्ति दूसरों की रक्षा करती है, अहंकार नहीं बढ़ाती।",
  },
  {
    id: 7,
    title: "गोपियों का प्रेम",
    body: "गोपियाँ कृष्ण से बिना किसी स्वार्थ के प्रेम करती थीं। उनका प्रेम पाने की इच्छा पर आधारित नहीं था, बल्कि केवल समर्पण और आनंद पर आधारित था। वे कृष्ण की उपस्थिति में ही पूर्ण सुख अनुभव करती थीं। यह प्रेम पूर्ण विश्वास और निस्वार्थ भक्ति का प्रतीक है।",
    takeaway: "सबसे शुद्ध प्रेम वही है जिसमें कोई अपेक्षा न हो।",
  },
  {
    id: 8,
    title: "मिट्टी खाना",
    body: "एक दिन कृष्ण मिट्टी खाते हुए पकड़े गए। जब यशोदा ने उनसे मुँह खोलने को कहा, तो उन्होंने उसमें पूरा ब्रह्मांड देखा। यह दृश्य उनके भीतर छिपी दिव्यता का प्रमाण था। यह घटना सिखाती है कि साधारण दिखने वाले क्षणों में भी महान सत्य छिपे होते हैं।",
    takeaway: "महान सत्य अक्सर साधारण क्षणों में छिपे होते हैं।",
  },
  {
    id: 9,
    title: "ऊखल से बंधना",
    body: "शरारतों से परेशान होकर यशोदा ने कृष्ण को एक ऊखल से बाँध दिया। लेकिन कृष्ण ने उसे घसीटते हुए दो विशाल वृक्षों को उखाड़ दिया। यह घटना दिखाती है कि सच्ची शक्ति को बाहरी बंधनों से रोका नहीं जा सकता।",
    takeaway: "भीतरी शक्ति को बाहरी सीमाएँ बाँध नहीं सकतीं।",
  },
  {
    id: 10,
    title: "रास लीला",
    body: "रास लीला में कृष्ण प्रत्येक गोपी के साथ इस तरह नृत्य करते हैं कि हर गोपी को लगता है कि कृष्ण केवल उनके साथ हैं। यह आत्मा और परमात्मा के व्यक्तिगत संबंध का प्रतीक है। यह दिखाता है कि आध्यात्मिक जुड़ाव व्यक्तिगत होते हुए भी सार्वभौमिक होता है।",
    takeaway: "आध्यात्मिक जुड़ाव व्यक्तिगत और गहराई से संतोष देने वाला होता है।",
  },
  {
    id: 11,
    title: "कंस वध",
    body: "बड़े होने पर कृष्ण मथुरा लौटे और कंस को युद्ध में पराजित किया। इस विजय ने वर्षों के अत्याचार का अंत किया और लोगों को भय से मुक्त किया। यह धर्म की अधर्म पर विजय का प्रतीक है।",
    takeaway: "अन्याय के विरुद्ध खड़ा होना परिवर्तन के लिए आवश्यक है।",
  },
  {
    id: 12,
    title: "सुदामा की मित्रता",
    body: "कृष्ण के बालसखा सुदामा अत्यंत गरीब थे। जब वे द्वारका पहुँचे, तो कृष्ण ने उनका अत्यंत प्रेम से स्वागत किया। बिना कुछ माँगे ही सुदामा का जीवन बदल गया। यह सच्ची मित्रता का श्रेष्ठ उदाहरण है।",
    takeaway: "सच्ची मित्रता परिस्थितियों से कभी कमजोर नहीं होती।",
  },
  {
    id: 13,
    title: "द्रौपदी की रक्षा",
    body: "जब द्रौपदी का अपमान हो रहा था, तब उन्होंने कृष्ण को पुकारा। कृष्ण ने उनकी लाज की रक्षा की और उन्हें अपमान से बचाया। यह घटना संकट के समय श्रद्धा और समर्पण की शक्ति को दर्शाती है।",
    takeaway: "सच्ची आस्था कठिन समय में सुरक्षा देती है।",
  },
  {
    id: 14,
    title: "गीता का उपदेश",
    body: "कुरुक्षेत्र के युद्ध में अर्जुन भ्रमित और निराश थे। तब कृष्ण ने उन्हें भगवद्गीता का ज्ञान दिया, जिसमें कर्तव्य, आत्मा और जीवन का गहरा सत्य समझाया। यह शिक्षा आज भी मानव जीवन की सबसे बड़ी मार्गदर्शिका है।",
    takeaway: "सही मार्गदर्शन जीवन के निर्णय पूरी तरह बदल सकता है।",
  },
  {
    id: 15,
    title: "बुद्धि और रणनीति",
    body: "महाभारत युद्ध में कृष्ण ने शस्त्र नहीं उठाया, लेकिन अपनी बुद्धि और रणनीति से धर्म की विजय सुनिश्चित की। यह दिखाता है कि सफलता केवल शक्ति से नहीं, बल्कि समझदारी से भी मिलती है।",
    takeaway: "बुद्धिमत्ता भी शक्ति जितनी ही प्रभावशाली होती है।",
  },
  {
    id: 16,
    title: "महानता में विनम्रता",
    body: "दिव्य होने के बावजूद कृष्ण सदैव विनम्र और सहज रहे। उन्होंने कभी अपनी शक्ति को अहंकार का कारण नहीं बनने दिया। यही संतुलन उन्हें सच्चा महान बनाता है।",
    takeaway: "सच्ची महानता हमेशा विनम्रता के साथ आती है।",
  },
  {
    id: 17,
    title: "मित्र और मार्गदर्शक",
    body: "कृष्ण केवल अर्जुन के मार्गदर्शक ही नहीं, बल्कि सच्चे मित्र भी थे। उन्होंने अर्जुन को भावनात्मक और बौद्धिक दोनों रूपों में सहारा दिया। यह दिखाता है कि जीवन में सही मार्गदर्शक कितना महत्वपूर्ण होता है।",
    takeaway: "सच्चा मार्गदर्शक केवल सलाह नहीं देता, आपको समझता भी है।",
  },
  {
    id: 18,
    title: "हर भूमिका को जीना",
    body: "कृष्ण ने जीवन के हर रूप को जिया — चंचल बालक, सच्चे मित्र, बुद्धिमान मार्गदर्शक और शक्तिशाली नेता के रूप में। उन्होंने हर परिस्थिति में संतुलन बनाए रखा।",
    takeaway: "जीवन को पूरी तरह जीना हर भूमिका को अपनाने में है।",
  },
  {
    id: 19,
    title: "जीवन में संतुलन",
    body: "कृष्ण ने दिखाया कि जीवन केवल कर्तव्य या केवल आनंद नहीं है। उन्होंने जिम्मेदारियों और खुशी दोनों को संतुलित किया। यही संतुलन जीवन को पूर्ण बनाता है।",
    takeaway: "काम और आनंद का संतुलन ही पूर्ण जीवन देता है।",
  },
  {
    id: 20,
    title: "कृष्ण का संदेश",
    body: "कृष्ण का जीवन केवल पौराणिक कथा नहीं, बल्कि व्यावहारिक ज्ञान का स्रोत है। उनके कार्य हमें साहस, प्रेम, संतुलन और बुद्धिमत्ता सिखाते हैं। ये शिक्षाएँ आज भी उतनी ही प्रासंगिक हैं।",
    takeaway: "कृष्ण की शिक्षाएँ आधुनिक जीवन के लिए व्यावहारिक मार्गदर्शक हैं।",
  },
];

const krishnaLeelasEnglish: BookSection[] = [
  {
    id: 1,
    title: "The Birth of Krishna",
    body: "Krishna was born in Mathura during a time of fear under King Kansa’s rule. On a stormy night, inside a prison, divine events unfolded — chains broke, guards fell asleep, and doors opened. Vasudeva carried the newborn Krishna across the flooded Yamuna to Gokul. This moment shows that when the time for change arrives, even nature supports it.",
    takeaway: "Even in the darkest times, change begins silently.",
  },
  {
    id: 2,
    title: "Life in Gokul",
    body: "In Gokul, Krishna was raised by Nanda and Yashoda in a simple village filled with cows, fields, and warmth. Despite his divine nature, he lived like an ordinary child, playing freely with others. This phase reminds us that true happiness is not found in luxury, but in simplicity, relationships, and a sense of belonging.",
    takeaway: "Happiness comes from simplicity, not material things.",
  },
  {
    id: 3,
    title: "The Butter Thief",
    body: "Krishna became famous as ‘Makhan Chor’ in Vrindavan. Even though he had plenty at home, he would sneak into the houses of Gopis to steal freshly churned butter. With his friends, he created clever ways to reach pots hung high from ceilings. This playful act was not theft, but a way to spread joy, bonding, and laughter.",
    takeaway: "Krisna's innocence and joy ultimately melted everyone’s anger and replaced it with a smile.",
  },
  {
    id: 4,
    title: "The Story of Putana",
    body: "Putana, sent by Kansa, came disguised as a loving woman to poison Krishna. She tried to feed him deadly milk, but Krishna not only survived — he ended her life and granted her liberation. This story shows that evil intentions cannot defeat purity, and truth has the power to transform even negativity.",
    takeaway: "Truth and purity overcome even the most deceptive evil.",
  },
  {
    id: 5,
    title: "Kaliya the Serpent",
    body: "The Yamuna river was poisoned by the serpent Kaliya, making life difficult for everyone. Krishna fearlessly jumped into the river, subdued the serpent, and danced on its heads. Instead of destroying him completely, he gave him a chance to leave. This shows strength combined with control and compassion.",
    takeaway: "Face problems boldly, but handle them with balance.",
  },
  {
    id: 6,
    title: "Lifting Govardhan Hill",
    body: "When villagers prepared to worship Indra, Krishna guided them to respect nature instead. Angered, Indra caused heavy rains. Krishna lifted Govardhan Hill on his little finger, protecting everyone beneath it. This act broke pride and protected the innocent, showing that true leadership means standing for others.",
    takeaway: "Real strength protects others, not ego.",
  },
  {
    id: 7,
    title: "The Love of the Gopis",
    body: "The Gopis loved Krishna deeply without expecting anything in return. Their devotion was not based on gain, but pure connection. They found joy simply in his presence. This kind of love represents complete trust and emotional purity, something rare in the modern world.",
    takeaway: "The purest love expects nothing in return.",
  },
  {
    id: 8,
    title: "Eating Mud",
    body: "One day, Krishna was caught eating mud. When Yashoda asked him to open his mouth, she saw the entire universe inside it. This moment revealed his divine nature hidden within a child. It teaches us that reality is often deeper than what we see on the surface.",
    takeaway: "Great truths are often hidden in simple moments.",
  },
  {
    id: 9,
    title: "Bound to the Mortar",
    body: "Yashoda tied Krishna to a wooden mortar as punishment for his mischief. However, Krishna dragged it and uprooted two large trees. This event shows that true power cannot be restricted by physical limitations.",
    takeaway: "Inner strength cannot be confined by outer limits.",
  },
  {
    id: 10,
    title: "The Raas Leela",
    body: "In the Raas Leela, Krishna danced with each Gopi in a way that made every one of them feel uniquely connected to him. This symbolizes the personal bond between the soul and the divine. It reflects how spiritual connection is deeply individual yet universal.",
    takeaway: "Spiritual connection is personal and deeply fulfilling.",
  },
  {
    id: 11,
    title: "Defeating Kansa",
    body: "As Krishna grew older, he returned to Mathura and challenged King Kansa. In a powerful battle, he defeated him and ended years of tyranny. This act restored justice and freed the people from fear.",
    takeaway: "Standing up against injustice is necessary for change.",
  },
  {
    id: 12,
    title: "Sudama’s Friendship",
    body: "Sudama, Krishna’s childhood friend, lived in poverty. When he visited Krishna in Dwarka, Krishna welcomed him with great love and respect. Without being asked, Krishna changed his life. This story shows that true friendship goes beyond status and wealth.",
    takeaway: "Real friendships stay strong regardless of circumstances.",
  },
  {
    id: 13,
    title: "Saving Draupadi",
    body: "During a moment of great humiliation, Draupadi called out to Krishna for help. He protected her by ensuring her dignity was never taken away. This moment shows the power of faith and surrender during helpless situations.",
    takeaway: "True faith brings protection in difficult times.",
  },
  {
    id: 14,
    title: "Teaching the Gita",
    body: "On the battlefield of Kurukshetra, Arjuna was confused and unwilling to fight. Krishna guided him with the wisdom of the Bhagavad Gita, explaining duty, life, and the soul. This teaching remains one of the greatest guides for human life.",
    takeaway: "Right guidance can completely transform your decisions.",
  },
  {
    id: 15,
    title: "Wisdom and Strategy",
    body: "Krishna played a key role in the Mahabharata war, not through weapons, but through intelligence and strategy. His decisions ensured the victory of righteousness. This highlights that success depends not just on strength, but on smart thinking.",
    takeaway: "Wisdom is as powerful as strength.",
  },
  {
    id: 16,
    title: "Humility in Greatness",
    body: "Despite being divine, Krishna always remained approachable and humble. He never let power create distance between him and others. This balance of greatness and humility made him truly respected.",
    takeaway: "True greatness always comes with humility.",
  },
  {
    id: 17,
    title: "Friend and Guide",
    body: "Krishna was not just a guide to Arjuna, but also a true friend who understood him deeply. He supported him emotionally and intellectually. This shows the importance of having someone who can guide you through confusion.",
    takeaway: "A true guide understands you, not just advises you.",
  },
  {
    id: 18,
    title: "Living Every Role",
    body: "Krishna lived life fully — as a playful child, a loyal friend, a wise guide, and a strong leader. He adapted to every situation with balance and awareness.",
    takeaway: "Living fully means embracing every role in life.",
  },
  {
    id: 19,
    title: "Balance in Life",
    body: "Krishna showed that life is not about choosing between duty and joy, but balancing both. He handled responsibilities while also embracing happiness and relationships.",
    takeaway: "Balance between work and joy leads to a fulfilling life.",
  },
  {
    id: 20,
    title: "The Message of Krishna",
    body: "Krishna’s life is not just mythology, but a guide filled with practical wisdom. His actions teach courage, love, balance, and intelligence. These lessons are timeless and apply to everyday life.",
    takeaway: "Krishna’s teachings are practical guides for modern life.",
  },
];

const meditationBasicsHindi: BookSection[] = [
  {
    id: 1,
    title: "ध्यान(मेडिटेशन) क्या है?",
    body: "ध्यान का मतलब मन को पूरी तरह खाली करना नहीं है। इसका अर्थ है अपने विचारों को बिना उलझे देखना। जैसे आसमान में बादल आते-जाते हैं, वैसे ही विचार आते हैं। अभ्यास से आप अपने विचारों से दूरी बना पाते हैं और शांत रहना सीखते हैं।",
    takeaway: "ध्यान आपको विचारों को देखने की क्षमता देता है।",
  },
  {
    id: 2,
    title: "ध्यान(मेडिटेशन) क्यों जरूरी है?",
    body: "आज की दुनिया में हमारा मन लगातार व्यस्त रहता है। ध्यान एक रीसेट बटन की तरह काम करता है। यह मन को शांत करता है और सोचने की क्षमता को बेहतर बनाता है।",
    takeaway: "ध्यान मन को आराम देता है।",
  },
  {
    id: 3,
    title: "छोटे से शुरुआत",
    body: "ध्यान के लिए घंटों बैठना जरूरी नहीं है। आप रोज़ 5 मिनट से शुरुआत कर सकते हैं। धीरे-धीरे इसे बढ़ा सकते हैं।",
    takeaway: "छोटे कदम से शुरुआत करें।",
  },
  {
    id: 4,
    title: "सांस पर ध्यान",
    body: "सांस पर ध्यान देना सबसे आसान तरीका है। हर सांस को महसूस करें और ध्यान भटकने पर वापस सांस पर लाएं।",
    takeaway: "सांस आपको वर्तमान में रखती है।",
  },
  {
    id: 5,
    title: "ध्यान(मेडिटेशन) भटकना",
    body: "ध्यान के दौरान मन का भटकना सामान्य है। इसे असफलता न समझें। हर बार ध्यान वापस लाना ही अभ्यास है।",
    takeaway: "हर बार ध्यान लौटाना ही प्रगति है।",
  },
  {
    id: 6,
    title: "सही मुद्रा",
    body: "आरामदायक और सीधी मुद्रा में बैठें। इससे आप लंबे समय तक ध्यान में रह सकते हैं।",
    takeaway: "सही मुद्रा ध्यान को आसान बनाती है।",
  },
  {
    id: 7,
    title: "नियमितता",
    body: "हर दिन ध्यान करना सबसे महत्वपूर्ण है। भले ही समय कम हो, नियमितता बनाए रखें।",
    takeaway: "नियमित अभ्यास ही सफलता है।",
  },
  {
    id: 8,
    title: "समय का चयन",
    body: "सुबह ध्यान करने से दिन अच्छा शुरू होता है, और रात को करने से तनाव कम होता है।",
    takeaway: "एक निश्चित समय चुनें।",
  },
  {
    id: 9,
    title: "बेचैनी से निपटना",
    body: "ध्यान के दौरान बेचैनी महसूस होना सामान्य है। इसे महसूस करें और धीरे-धीरे शांत होने दें।",
    takeaway: "बेचैनी को देखें, उससे लड़ें नहीं।",
  },
  {
    id: 10,
    title: "मौन की शक्ति",
    body: "मौन में मन को शांति मिलती है। ध्यान आपको मौन को स्वीकार करना सिखाता है।",
    takeaway: "मौन में स्पष्टता मिलती है।",
  },
  {
    id: 11,
    title: "भावनाओं को समझना",
    body: "ध्यान आपको अपनी भावनाओं को समझने में मदद करता है। इससे आप तुरंत प्रतिक्रिया देने के बजाय सोचकर निर्णय लेते हैं।",
    takeaway: "ध्यान भावनाओं पर नियंत्रण देता है।",
  },
  {
    id: 12,
    title: "नियंत्रण छोड़ना",
    body: "हर विचार को नियंत्रित करने की कोशिश न करें। उन्हें आने-जाने दें।",
    takeaway: "विचारों को जाने दें।",
  },
  {
    id: 13,
    title: "गाइडेड ध्यान",
    body: "शुरुआत में गाइडेड ध्यान मदद कर सकता है। इससे ध्यान लगाना आसान होता है।",
    takeaway: "शुरुआत में मार्गदर्शन सहायक है।",
  },
  {
    id: 14,
    title: "धैर्य रखें",
    body: "ध्यान का असर धीरे-धीरे दिखता है। इसलिए धैर्य रखें और अभ्यास जारी रखें।",
    takeaway: "धैर्य से ही परिणाम मिलते हैं।",
  },
  {
    id: 15,
    title: "तनाव कम करना",
    body: "ध्यान तनाव को कम करता है और मन को शांत करता है।",
    takeaway: "ध्यान तनाव कम करता है।",
  },
  {
    id: 16,
    title: "दैनिक जीवन में ध्यान",
    body: "चलते-फिरते, खाते समय भी ध्यान किया जा सकता है। बस पूरी तरह उपस्थित रहें।",
    takeaway: "हर काम में ध्यान संभव है।",
  },
  {
    id: 17,
    title: "अपेक्षा छोड़ें",
    body: "ध्यान से तुरंत परिणाम की उम्मीद न करें। धीरे-धीरे बदलाव आएगा।",
    takeaway: "अपेक्षा छोड़ें, अभ्यास करें।",
  },
  {
    id: 18,
    title: "स्थान बनाएं",
    body: "ध्यान के लिए एक शांत जगह चुनें, जहां ध्यान लगाना आसान हो।",
    takeaway: "एक निश्चित स्थान मदद करता है।",
  },
  {
    id: 19,
    title: "लंबे समय के लाभ",
    body: "नियमित ध्यान से ध्यान क्षमता, शांति और संतुलन बढ़ता है।",
    takeaway: "ध्यान मन को मजबूत बनाता है।",
  },
  {
    id: 20,
    title: "अंदर की यात्रा",
    body: "ध्यान खुद को समझने की यात्रा है। यह आपको आपके अंदर से जोड़ता है।",
    takeaway: "ध्यान आत्म-समझ की यात्रा है।",
  },
];

const meditationBasicsEnglish: BookSection[] = [
  {
    id: 1,
    title: "What Is Meditation?",
    body: "Meditation is not about emptying your mind completely. It is about learning to observe your thoughts without getting lost in them. Just like watching clouds pass in the sky, you let thoughts come and go. With practice, this awareness creates space between you and your reactions, helping you stay calm in stressful situations.",
    takeaway: "Meditation helps you observe thoughts instead of being controlled by them.",
  },
  {
    id: 2,
    title: "Why Meditation Matters",
    body: "In today’s world, your mind is constantly overloaded with information — messages, videos, and stress. Meditation acts like a reset button. It allows your brain to slow down and recover. Over time, it improves focus, emotional control, and clarity in decision-making, making daily life smoother.",
    takeaway: "Meditation gives your mind the rest it rarely gets.",
  },
  {
    id: 3,
    title: "Starting Small",
    body: "Many people think meditation requires long hours, but even five minutes a day is enough to begin. Sit quietly, close your eyes, and focus on your breath. The goal is not perfection, but consistency. Starting small makes it easier to build a lasting habit.",
    takeaway: "Start small — consistency matters more than duration.",
  },
  {
    id: 4,
    title: "Focus on Breath",
    body: "Your breath is the simplest anchor for meditation. By paying attention to each inhale and exhale, your mind gradually settles. Whenever your thoughts wander, gently bring your focus back to breathing. This repeated return builds mental discipline.",
    takeaway: "Your breath is your anchor to the present moment.",
  },
  {
    id: 5,
    title: "Dealing with Distractions",
    body: "Distractions are not failures; they are part of the process. Your mind will wander — that is its nature. The real practice is noticing when it drifts and calmly bringing it back. Each return strengthens your focus, just like a muscle.",
    takeaway: "Every time you refocus, your mind becomes stronger.",
  },
  {
    id: 6,
    title: "Posture Matters",
    body: "You don’t need complicated positions to meditate. Simply sit comfortably with your back straight. A stable posture helps you stay alert without tension. Whether on a chair or floor, the key is to be relaxed yet attentive.",
    takeaway: "Comfortable posture keeps your mind alert and steady.",
  },
  {
    id: 7,
    title: "Consistency Over Perfection",
    body: "Many people quit meditation because they feel they are ‘not doing it right.’ But meditation is not about perfection. Showing up daily, even for a few minutes, matters more than having a perfect session.",
    takeaway: "Regular practice is more important than perfect practice.",
  },
  {
    id: 8,
    title: "Morning vs Night",
    body: "Meditating in the morning helps set a calm tone for the day, while evening meditation helps release stress. Choose a time that fits your routine. What matters most is making it a consistent part of your day.",
    takeaway: "Pick a time you can stick to every day.",
  },
  {
    id: 9,
    title: "Handling Restlessness",
    body: "Feeling restless during meditation is normal, especially in the beginning. Instead of fighting it, observe it. Notice how it feels in your body and mind. Over time, this awareness reduces its intensity.",
    takeaway: "Observe restlessness instead of resisting it.",
  },
  {
    id: 10,
    title: "The Power of Silence",
    body: "Silence can feel uncomfortable at first because we are used to constant noise. But within silence lies clarity. Meditation trains you to become comfortable with stillness, where deeper understanding emerges.",
    takeaway: "Silence is where clarity begins.",
  },
  {
    id: 11,
    title: "Emotional Awareness",
    body: "Meditation helps you notice emotions as they arise. Instead of reacting instantly, you learn to pause. This small gap allows you to respond thoughtfully rather than impulsively.",
    takeaway: "Awareness creates space between emotion and reaction.",
  },
  {
    id: 12,
    title: "Letting Go of Control",
    body: "Trying to control every thought during meditation leads to frustration. Instead, allow thoughts to flow naturally. The goal is not to stop thinking, but to stop being disturbed by thoughts.",
    takeaway: "Let thoughts pass without trying to control them.",
  },
  {
    id: 13,
    title: "Using Guided Meditation",
    body: "For beginners, guided meditation can be helpful. Listening to a calm voice can make it easier to stay focused. Over time, you can move to silent meditation.",
    takeaway: "Guidance can make starting meditation easier.",
  },
  {
    id: 14,
    title: "Building Patience",
    body: "Meditation is a slow process. You may not notice changes immediately, but over weeks, your reactions become calmer and your focus improves. Trust the process.",
    takeaway: "Real change comes with patience and time.",
  },
  {
    id: 15,
    title: "Meditation and Stress",
    body: "When stress builds up, your mind becomes scattered. Meditation helps bring it back to the present. Even a few minutes can reduce anxiety and bring clarity.",
    takeaway: "Meditation is a simple tool to manage stress.",
  },
  {
    id: 16,
    title: "Awareness in Daily Life",
    body: "Meditation is not limited to sitting quietly. You can practice it while walking, eating, or even talking. Being fully present in any activity is also meditation.",
    takeaway: "Meditation is awareness in every moment.",
  },
  {
    id: 17,
    title: "Avoiding Expectations",
    body: "Expecting instant results can lead to disappointment. Meditation works gradually. Let go of expectations and focus on the process.",
    takeaway: "Focus on practice, not results.",
  },
  {
    id: 18,
    title: "Creating a Space",
    body: "Having a fixed place for meditation helps build consistency. A quiet corner with minimal distractions can make it easier to focus.",
    takeaway: "A dedicated space supports your habit.",
  },
  {
    id: 19,
    title: "Long-Term Benefits",
    body: "With regular practice, meditation improves focus, emotional balance, and overall well-being. It helps you handle challenges with a clearer mind.",
    takeaway: "Meditation strengthens your mind over time.",
  },
  {
    id: 20,
    title: "The Journey Within",
    body: "Meditation is not about achieving something outside; it is about understanding yourself. The more you practice, the more you connect with your inner self.",
    takeaway: "Meditation is a journey toward self-understanding.",
  },
];

const beatingProcrastinationHindi: BookSection[] = [
  {
    id: 1,
    title: "टालमटोल क्या है?",
    body: "टालमटोल आलस नहीं है — यह महत्वपूर्ण काम को जानबूझकर टालना है, जबकि हमें पता होता है कि वह ज़रूरी है। छात्र अक्सर काम इसलिए टालते हैं क्योंकि वह कठिन, उबाऊ या भारी लगता है। हमारा दिमाग तुरंत आराम चुनता है। यह समझना पहला कदम है कि समस्या आपकी नहीं, आपकी आदत की है।",
    takeaway: "टालमटोल आलस नहीं, एक आदत है जिसे बदला जा सकता है।",
  },
  {
    id: 2,
    title: "हम काम क्यों टालते हैं?",
    body: "हम काम इसलिए नहीं टालते क्योंकि हम कमजोर हैं, बल्कि इसलिए क्योंकि काम भारी या तनावपूर्ण लगता है। दिमाग असहजता से बचने के लिए काम को टाल देता है। लेकिन इससे बाद में तनाव और बढ़ता है। असली समस्या काम नहीं, बल्कि उसे शुरू करने की भावना है।",
    takeaway: "आप काम से नहीं, उससे जुड़ी असहजता से बचते हैं।",
  },
  {
    id: 3,
    title: "5 मिनट का नियम",
    body: "खुद से कहो कि बस 5 मिनट काम करेंगे। पूरा करने का कोई दबाव नहीं। ज्यादातर समय, जैसे ही आप शुरू करते हैं, दिमाग काम में लग जाता है और आप जारी रखते हैं। शुरुआत ही सबसे मुश्किल हिस्सा होती है।",
    takeaway: "छोटा शुरू करो — शुरुआत ही सबसे बड़ी जीत है।",
  },
  {
    id: 4,
    title: "बड़े काम को छोटा करो",
    body: "बड़े काम डरावने लगते हैं, इसलिए हम उन्हें टालते हैं। “पूरी चैप्टर पढ़ो” की जगह “2 पेज पढ़ो” या “5 सवाल हल करो” जैसे छोटे हिस्से बनाओ। छोटे लक्ष्य आसान लगते हैं और पूरा करने का मन करता है।",
    takeaway: "छोटे काम आसान लगते हैं — और आसान काम पूरे होते हैं।",
  },
  {
    id: 5,
    title: "पहले ध्यान भटकाने वाली चीज़ें हटाओ",
    body: "शुरू करने से पहले मोबाइल, नोटिफिकेशन और बेकार टैब हटा दो। आपका वातावरण आपकी आदतों को प्रभावित करता है। अगर ध्यान भटकाने वाली चीज़ें पास होंगी, तो दिमाग वही चुनेगा।",
    takeaway: "अपने वातावरण को नियंत्रित करो, ध्यान अपने आप आएगा।",
  },
  {
    id: 6,
    title: "टाइम ब्लॉक का उपयोग करो",
    body: "बिना योजना के पढ़ने की बजाय 25 या 40 मिनट के समय ब्लॉक बनाओ। उस समय में सिर्फ एक काम करो, फिर छोटा ब्रेक लो। इससे दिमाग को एक सिस्टम मिलता है।",
    takeaway: "सिस्टम से पढ़ना, बिना प्लान पढ़ने से बेहतर है।",
  },
  {
    id: 7,
    title: "मोटिवेशन का इंतज़ार मत करो",
    body: "अधिकतर छात्र सोचते हैं कि पहले मन बने, फिर पढ़ेंगे। लेकिन मन अक्सर नहीं बनता। सच यह है कि काम शुरू करने से ही मोटिवेशन आता है। सफल लोग इंतज़ार नहीं करते, बस शुरू करते हैं।",
    takeaway: "काम शुरू करो — मोटिवेशन खुद आएगा।",
  },
  {
    id: 8,
    title: "काम को लिखो",
    body: "जो करना है उसे लिखो। दिमाग में रखने से काम भारी लगता है। एक सरल लिस्ट आपको स्पष्ट दिशा देती है। काम पूरा होने पर उसे काटना भी संतोष देता है।",
    takeaway: "लिखा हुआ काम आसान लगता है और जल्दी पूरा होता है।",
  },
  {
    id: 9,
    title: "‘खराब शुरू करो’ तरीका",
    body: "शुरुआत में परफेक्ट बनने की कोशिश मत करो। बस शुरू करो, चाहे थोड़ा गलत ही क्यों न हो। बाद में सुधार किया जा सकता है। बिना शुरू किए कुछ भी नहीं सुधरता।",
    takeaway: "पहले शुरू करो, बाद में सुधार करो।",
  },
  {
    id: 10,
    title: "खुद को इनाम दो",
    body: "काम पूरा करने के बाद खुद को छोटा इनाम दो — जैसे ब्रेक, स्नैक या पसंदीदा चीज़। इससे दिमाग काम को सकारात्मक अनुभव से जोड़ता है।",
    takeaway: "मेहनत को इनाम से जोड़ो, आदत बन जाएगी।",
  },
  {
    id: 11,
    title: "देरी की कीमत समझो",
    body: "हर बार जब आप काम टालते हैं, तनाव बढ़ता है। समय कम होता जाता है और दबाव बढ़ता है। जो अभी आराम लगता है, बाद में परेशानी बनता है।",
    takeaway: "आज की देरी, कल का तनाव बनती है।",
  },
  {
    id: 12,
    title: "अपना स्टडी स्पेस ठीक करो",
    body: "पढ़ने की जगह साफ और सरल होनी चाहिए। बिखरा हुआ वातावरण ध्यान भटकाता है। सिर्फ ज़रूरी चीज़ें ही सामने रखें।",
    takeaway: "साफ जगह, साफ दिमाग बनाती है।",
  },
  {
    id: 13,
    title: "प्रगति को ट्रैक करो",
    body: "हर दिन जो काम पूरा किया, उसे नोट करो। छोटी प्रगति भी मायने रखती है। इससे आत्मविश्वास बढ़ता है और आगे बढ़ने की प्रेरणा मिलती है।",
    takeaway: "प्रगति देखने से मोटिवेशन बढ़ता है।",
  },
  {
    id: 14,
    title: "एक समय में एक काम",
    body: "एक साथ कई काम करने से ध्यान बंटता है। दिमाग को हर बार बदलने में समय लगता है। एक समय में एक काम करने से परिणाम बेहतर होता है।",
    takeaway: "एक समय में एक काम सबसे प्रभावी होता है।",
  },
  {
    id: 15,
    title: "डेडलाइन का सही उपयोग",
    body: "खुद के लिए पहले से डेडलाइन बनाओ। इससे आखिरी समय का तनाव कम होता है और दोहराने का समय मिलता है।",
    takeaway: "जल्दी डेडलाइन, कम तनाव।",
  },
  {
    id: 16,
    title: "आसान काम से शुरू करो",
    body: "अगर शुरुआत मुश्किल लग रही है, तो आसान काम से शुरू करो। इससे गति बनती है और धीरे-धीरे कठिन काम भी आसान लगने लगते हैं।",
    takeaway: "आसान शुरुआत, मजबूत अंत देती है।",
  },
  {
    id: 17,
    title: "पहले से योजना बनाओ",
    body: "पहले से तय करो कि क्या पढ़ना है। बार-बार सोचने में समय और ऊर्जा दोनों बर्बाद होते हैं।",
    takeaway: "पहले योजना बनाओ, फिर काम आसान होगा।",
  },
  {
    id: 18,
    title: "परफेक्शन का इंतज़ार मत करो",
    body: "सही समय या सही मूड का इंतज़ार करना टालमटोल बढ़ाता है। ऐसा कोई परफेक्ट समय नहीं होता।",
    takeaway: "परफेक्ट नहीं, प्रगति ज़रूरी है।",
  },
  {
    id: 19,
    title: "नियमितता ज़्यादा ज़रूरी है",
    body: "हर दिन थोड़ा पढ़ना, कभी-कभी ज्यादा पढ़ने से बेहतर है। नियमितता आदत बनाती है और तनाव कम करती है।",
    takeaway: "छोटा लेकिन रोज़ का प्रयास सबसे प्रभावी है।",
  },
  {
    id: 20,
    title: "कोई बहाना नहीं",
    body: "बहाने उस समय सही लगते हैं, लेकिन आगे बढ़ने से रोकते हैं। खुद से पूछो — अगला छोटा कदम क्या है? उसी पर ध्यान दो और शुरू करो।",
    takeaway: "बहाने छोड़ो — अगला कदम उठाओ।",
  },
];

const scienceDecisionHindi: BookSection[] = [
  {
    id: 1,
    title: "अंदर का निरीक्षक",
    body: "निर्णय लेने से पहले एक पल रुकें और स्थिति को बाहर से देखने की कोशिश करें, जैसे आप किसी और को सलाह दे रहे हों। इससे भावनाएं शांत होती हैं और सोच स्पष्ट होती है।",
    takeaway: "निर्णय से पहले रुककर सोचें।",
  },
  {
    id: 2,
    title: "भावना बनाम तर्क",
    body: "हर निर्णय में भावना और तर्क दोनों का असर होता है। भावना तेज होती है, लेकिन तर्क सही दिशा देता है। दोनों का संतुलन जरूरी है।",
    takeaway: "भावना को समझें, तर्क से निर्णय लें।",
  },
  {
    id: 3,
    title: "10 मिनट का नियम",
    body: "जल्दी निर्णय लेने से पहले कम से कम 10 मिनट का समय लें। इससे आप जल्दबाजी से बचते हैं।",
    takeaway: "रुककर सोचें, बेहतर निर्णय लें।",
  },
  {
    id: 4,
    title: "स्पष्ट लक्ष्य",
    body: "जब लक्ष्य साफ होता है, तो निर्णय आसान हो जाते हैं। बिना लक्ष्य के हर विकल्प कठिन लगता है।",
    takeaway: "स्पष्ट लक्ष्य, आसान निर्णय।",
  },
  {
    id: 5,
    title: "दबाव से बचना",
    body: "दूसरों के दबाव में लिए गए निर्णय अक्सर गलत होते हैं। खुद से पूछें — क्या मैं अकेला होता तो यही करता?",
    takeaway: "खुद के लिए सोचें।",
  },
  {
    id: 6,
    title: "छोटे निर्णय",
    body: "रोज़ के छोटे फैसले ही भविष्य बनाते हैं। छोटी आदतें ही बड़े परिणाम देती हैं।",
    takeaway: "छोटे फैसले, बड़े बदलाव।",
  },
  {
    id: 7,
    title: "डर का असर",
    body: "डर हमें रोकता है। यह समझना जरूरी है कि डर असली है या केवल मन का भ्रम।",
    takeaway: "डर को पहचानें।",
  },
  {
    id: 8,
    title: "ज्यादा सोच",
    body: "बहुत ज्यादा सोचने से भ्रम पैदा होता है। सोचने की सीमा तय करें और फिर निर्णय लें।",
    takeaway: "ज्यादा मत सोचो, निर्णय लो।",
  },
  {
    id: 9,
    title: "गलतियों से सीख",
    body: "हर निर्णय सही नहीं होगा। गलतियां सीखने का हिस्सा हैं।",
    takeaway: "गलती से सीखें।",
  },
  {
    id: 10,
    title: "ऊर्जा का महत्व",
    body: "थके हुए दिमाग से लिए गए निर्णय गलत हो सकते हैं। शांत मन से निर्णय लें।",
    takeaway: "साफ दिमाग से सोचें।",
  },
  {
    id: 11,
    title: "विकल्प कम करें",
    body: "बहुत सारे विकल्प दिमाग को उलझा देते हैं। विकल्प कम करें।",
    takeaway: "कम विकल्प, बेहतर निर्णय।",
  },
  {
    id: 12,
    title: "भविष्य की सोच",
    body: "निर्णय लेते समय उसके भविष्य के प्रभाव को जरूर सोचें।",
    takeaway: "आगे सोचें।",
  },
  {
    id: 13,
    title: "आदतें बनाएं",
    body: "अच्छी आदतें निर्णय लेना आसान बना देती हैं।",
    takeaway: "अच्छी आदतें बनाएं।",
  },
  {
    id: 14,
    title: "आत्मविश्वास",
    body: "परफेक्ट निर्णय का इंतजार करने से अच्छा है सही समय पर अच्छा निर्णय लेना।",
    takeaway: "आत्मविश्वास से निर्णय लें।",
  },
  {
    id: 15,
    title: "जानकारी सीमित रखें",
    body: "बहुत ज्यादा जानकारी भी भ्रम पैदा करती है। जरूरी चीज़ों पर ध्यान दें।",
    takeaway: "सही जानकारी चुनें।",
  },
  {
    id: 16,
    title: "इंट्यूशन",
    body: "कभी-कभी पहली सोच सही होती है। इसे पहचानना सीखें और तर्क के साथ संतुलन रखें।",
    takeaway: "अनुभव और तर्क का संतुलन रखें।",
  },
  {
    id: 17,
    title: "निर्णय थकान",
    body: "बहुत ज्यादा फैसले लेने से दिमाग थक जाता है। छोटे फैसलों को कम करें।",
    takeaway: "ऊर्जा बचाएं।",
  },
  {
    id: 18,
    title: "जिम्मेदारी",
    body: "अपने फैसलों की जिम्मेदारी लेना जरूरी है। यही परिपक्वता लाता है।",
    takeaway: "अपने निर्णय स्वीकार करें।",
  },
  {
    id: 19,
    title: "गति और सटीकता",
    body: "कुछ फैसले जल्दी लेने चाहिए, कुछ सोच-समझकर। स्थिति के अनुसार निर्णय लें।",
    takeaway: "स्थिति के अनुसार निर्णय लें।",
  },
  {
    id: 20,
    title: "अंतिम जांच",
    body: "खुद से पूछें — क्या मुझे बाद में पछतावा होगा? इससे सही निर्णय लेने में मदद मिलती है।",
    takeaway: "भविष्य सोचकर निर्णय लें।",
  },
];

const scienceDecisionEnglish: BookSection[] = [
  {
    id: 1,
    title: "The Inner Observer",
    body: "Before making a decision, pause for a moment and step back mentally. Try to observe the situation as if you were advising a friend instead of being inside the problem. This creates clarity and reduces emotional pressure, especially in stressful situations like exams or peer pressure.",
    takeaway: "Pause and observe before you decide.",
  },
  {
    id: 2,
    title: "Emotion vs Logic",
    body: "Every decision is influenced by both emotion and logic. Emotions are fast and powerful, while logic is slower but more accurate. The goal is to balance both instead of letting emotions take full control.",
    takeaway: "Feel your emotions, but let logic lead.",
  },
  {
    id: 3,
    title: "The 10-Minute Rule",
    body: "When faced with an urgent decision, give yourself at least 10 minutes before acting. This delay helps your brain shift from impulsive reactions to thoughtful reasoning.",
    takeaway: "Delay decisions to improve them.",
  },
  {
    id: 4,
    title: "Clarity of Goal",
    body: "Confusion often comes from unclear goals. When you know exactly what you want, decisions become easier and faster because your direction is already set.",
    takeaway: "Clear goals make decisions simple.",
  },
  {
    id: 5,
    title: "Avoiding Peer Pressure",
    body: "Many wrong decisions happen because of trying to fit in. Ask yourself honestly: 'Would I still choose this if no one was watching?' This separates your real choice from pressure.",
    takeaway: "Think for yourself, not for approval.",
  },
  {
    id: 6,
    title: "Small Decisions Matter",
    body: "Big results are built from small daily choices. Even simple decisions like studying for 20 minutes or wasting time repeatedly shape your future over time.",
    takeaway: "Small choices create big results.",
  },
  {
    id: 7,
    title: "Fear-Based Decisions",
    body: "Fear can stop you from taking necessary risks. Instead of avoiding decisions, ask whether the fear is real or just imagined in your mind.",
    takeaway: "Don’t let fear control your future.",
  },
  {
    id: 8,
    title: "Overthinking Trap",
    body: "Thinking deeply is helpful, but overthinking leads to confusion. Set a limit on how long you think, then take action instead of staying stuck.",
    takeaway: "Think, but don’t overthink.",
  },
  {
    id: 9,
    title: "Learning from Mistakes",
    body: "No decision is perfect. Mistakes are part of growth. Instead of fearing them, focus on what you learn and improve next time.",
    takeaway: "Every mistake improves future decisions.",
  },
  {
    id: 10,
    title: "Energy-Based Decisions",
    body: "Your mental state affects your decisions. When tired or stressed, you are more likely to choose easy options instead of correct ones.",
    takeaway: "Decide when your mind is clear.",
  },
  {
    id: 11,
    title: "Simplify Your Options",
    body: "Too many choices create confusion. Reduce your options to two or three main ones to make decision-making easier.",
    takeaway: "Simplify choices to decide faster.",
  },
  {
    id: 12,
    title: "Long-Term Thinking",
    body: "A good decision considers the future, not just the present. Think about how your choice will affect you in the coming days or years.",
    takeaway: "Think beyond the present moment.",
  },
  {
    id: 13,
    title: "Habit Decisions",
    body: "Many daily decisions become automatic habits. Building good habits reduces the need to think repeatedly and saves energy.",
    takeaway: "Build habits to reduce decisions.",
  },
  {
    id: 14,
    title: "Confidence Over Perfection",
    body: "Waiting for the perfect decision often leads to delay. A good decision taken at the right time is better than a perfect one taken too late.",
    takeaway: "Act with confidence, not perfection.",
  },
  {
    id: 15,
    title: "Information Overload",
    body: "Too much information can make decisions harder. Focus only on what is relevant instead of trying to know everything.",
    takeaway: "Filter information wisely.",
  },
  {
    id: 16,
    title: "Trusting Intuition",
    body: "Your intuition is based on past experiences. Sometimes your first instinct is right, but it should still be balanced with logic.",
    takeaway: "Balance intuition with logic.",
  },
  {
    id: 17,
    title: "Decision Fatigue",
    body: "Making too many decisions drains your brain. Reduce small unnecessary choices so you can focus on important ones.",
    takeaway: "Save energy for important decisions.",
  },
  {
    id: 18,
    title: "Responsibility of Choice",
    body: "Every decision has consequences. Taking responsibility for your choices builds maturity and confidence over time.",
    takeaway: "Own your decisions.",
  },
  {
    id: 19,
    title: "Speed vs Accuracy",
    body: "Some decisions need to be quick, while others need deep thinking. Understanding the situation helps you decide correctly.",
    takeaway: "Choose speed or accuracy wisely.",
  },
  {
    id: 20,
    title: "The Final Check",
    body: "Before making a decision, ask yourself one simple question: 'Will I regret this later?' This helps filter poor choices.",
    takeaway: "Think ahead before choosing.",
  },
];

const beatingProcrastinationEnglish: BookSection[] = [
  {
    id: 1,
    title: "What Is Procrastination?",
    body: "Procrastination is not laziness — it’s delaying important work even when you know it matters. Students often avoid tasks because they feel boring, difficult, or overwhelming. The brain prefers instant comfort over long-term rewards. Understanding this is the first step. You’re not weak — your brain is just choosing the easier path by default.",
    takeaway: "Procrastination is avoidance, not laziness — and it can be trained.",
  },
  {
    id: 2,
    title: "Why We Delay Work",
    body: "We don’t procrastinate because we’re careless. We do it because tasks feel too big, confusing, or stressful. Your brain tries to protect you from discomfort by pushing work away. But this only increases stress later. The real problem isn’t the task — it’s how we feel about starting it.",
    takeaway: "You delay tasks because of discomfort, not because you’re incapable.",
  },
  {
    id: 3,
    title: "The 5-Minute Rule",
    body: "Tell yourself you’ll study for just five minutes. That’s it. No pressure to finish anything. Most of the time, once you start, your brain settles in and continues. Starting is the hardest part — not doing. This trick removes resistance and helps you break the cycle of delay.",
    takeaway: "Start small — action reduces resistance instantly.",
  },
  {
    id: 4,
    title: "Break Big Tasks Down",
    body: "Large tasks feel overwhelming, which leads to avoidance. Instead of “study science,” break it into smaller steps like “read 2 pages” or “solve 5 questions.” Small wins feel manageable and motivate you to continue. Clarity reduces fear.",
    takeaway: "Smaller tasks feel easier — and easier tasks get done.",
  },
  {
    id: 5,
    title: "Remove Distractions First",
    body: "Before starting, eliminate obvious distractions — phone, notifications, unnecessary tabs. Your environment shapes your behavior more than your motivation. If distractions are within reach, your brain will choose them automatically.",
    takeaway: "Control your environment to control your focus.",
  },
  {
    id: 6,
    title: "Use Time Blocks",
    body: "Instead of studying randomly, set fixed time blocks like 25 or 40 minutes. During that time, focus only on one task. After that, take a short break. This method trains your brain to work with structure instead of waiting for motivation.",
    takeaway: "Structured time beats random effort every time.",
  },
  {
    id: 7,
    title: "Stop Waiting for Motivation",
    body: "Most students wait to “feel like studying.” That feeling rarely comes. Motivation is not the starting point — action is. Once you begin, motivation follows. Successful students don’t wait; they start anyway.",
    takeaway: "Action creates motivation — not the other way around.",
  },
  {
    id: 8,
    title: "Make Tasks Visible",
    body: "Write down exactly what you need to do. Keeping tasks in your head makes them feel unclear and heavy. A simple checklist gives clarity and direction. Crossing off tasks also gives a sense of progress, which motivates you further.",
    takeaway: "Clear tasks lead to clear action.",
  },
  {
    id: 9,
    title: "Use the “Start Ugly” Method",
    body: "Don’t try to make your work perfect in the beginning. Just start roughly. Whether it’s writing answers or solving problems, imperfect action is better than no action. You can always improve later.",
    takeaway: "Start messy — perfection comes later.",
  },
  {
    id: 10,
    title: "Reward Yourself",
    body: "Give yourself small rewards after completing tasks — a snack, a short break, or something you enjoy. This trains your brain to associate work with positive outcomes instead of stress.",
    takeaway: "Link effort with reward to build consistency.",
  },
  {
    id: 11,
    title: "Understand the Cost of Delay",
    body: "Every time you delay work, stress increases. Deadlines get closer, and pressure builds up. What feels like relief now becomes panic later. Seeing this pattern clearly helps you take action earlier.",
    takeaway: "Short-term comfort creates long-term stress.",
  },
  {
    id: 12,
    title: "Fix Your Study Space",
    body: "Your study environment should be simple and clean. A cluttered desk leads to a cluttered mind. Keep only what you need for the task. A dedicated study space signals your brain that it’s time to focus.",
    takeaway: "A clean space creates a clear mind.",
  },
  {
    id: 13,
    title: "Track Your Progress",
    body: "Keep track of what you complete each day. Even small progress counts. Seeing your effort visually builds confidence and keeps you motivated to continue.",
    takeaway: "Progress builds momentum.",
  },
  {
    id: 14,
    title: "Avoid Multitasking",
    body: "Doing multiple things at once reduces efficiency. Your brain takes time to switch between tasks, which lowers focus. Work on one thing at a time for better results.",
    takeaway: "Single-tasking is more powerful than multitasking.",
  },
  {
    id: 15,
    title: "Use Deadlines Wisely",
    body: "Create your own deadlines before the actual ones. This reduces last-minute stress and gives you time to revise properly. Self-imposed deadlines build discipline.",
    takeaway: "Early deadlines reduce pressure later.",
  },
  {
    id: 16,
    title: "Start With the Easiest Task",
    body: "If you feel stuck, begin with something simple. This builds momentum and makes it easier to move to harder tasks. Starting easy removes the fear of beginning.",
    takeaway: "Easy starts lead to strong finishes.",
  },
  {
    id: 17,
    title: "Limit Decision Fatigue",
    body: "Decide your tasks in advance. If you keep thinking “what should I study?” you waste energy. Planning ahead removes hesitation and saves time.",
    takeaway: "Plan early, execute smoothly.",
  },
  {
    id: 18,
    title: "Accept Imperfection",
    body: "Waiting for the “perfect time” or “perfect mood” leads to delay. There is no perfect moment. Progress matters more than perfection.",
    takeaway: "Done is better than perfect.",
  },
  {
    id: 19,
    title: "Consistency Over Intensity",
    body: "Studying a little every day is more effective than long, irregular sessions. Consistency builds habits and reduces stress over time.",
    takeaway: "Small daily effort beats occasional bursts.",
  },
  {
    id: 20,
    title: "Build a No-Excuse Mindset",
    body: "Excuses feel valid in the moment, but they hold you back. Instead of asking “Do I feel like it?”, ask “What’s the next small step?” Taking action despite resistance is the key to overcoming procrastination.",
    takeaway: "Ignore excuses — take the next step.",
  },
];

export const books: Book[] = [
  {
    id: "gita-simplified",
    title: "भगवद्गीता सरलीकृत",
    author: "शुरुआती संस्करण",
    description: "गीता की संपूर्ण शिक्षा सरल हिंदी में — 22 छोटे अध्यायों में।",
    titleEn: "Bhagavad Gita Simplified",
    authorEn: "Beginner's Edition",
    descriptionEn: "The complete teachings of the Gita in simple English — across 22 short chapters.",
    price: 299,
    cover: "from-amber-200 via-orange-200 to-rose-200",
    coverImage: gitaSimplifiedCover,
    category: "bhagavad-gita",
    hindiSections: gitaSimplifiedHindi,
    englishSections: gitaSimplifiedEnglish,
  },
  {
    id: "gita-essence",
    title: "गीता का सार",
    author: "संक्षिप्त संस्करण",
    description: "गीता के मुख्य श्लोकों का सार — एक बैठक में पढ़ने योग्य।",
    titleEn: "The Essence of the Gita",
    authorEn: "Concise Edition",
    descriptionEn: "The essence of the Gita's key verses — readable in a single sitting.",
    price: 49,
    cover: "from-amber-300 via-yellow-200 to-orange-200",
    category: "bhagavad-gita",
    hindiSections: gitaEssenceHindi,
    englishSections: gitaEssenceEnglish,
  },
  {
    id: "krishna-leelas",
    title: "कृष्ण की अमर लीलाएँ",
    author: "बाल कथा संग्रह",
    description: "बाल-कृष्ण की प्रिय कहानियाँ — सरल भाषा में, हर उम्र के लिए।",
    titleEn: "The Timeless Lilas of Krishna",
    authorEn: "Children's Story Collection",
    descriptionEn: "Beloved stories of young Krishna — in simple language, for all ages.",
    price: 99,
    cover: "from-sky-200 via-indigo-200 to-violet-200",
    category: "stories-epics",
    hindiSections: krishnaLeelasHindi,
    englishSections: krishnaLeelasEnglish,
  },
  {
    id: "ramayana-tales",
    title: "रामायण की कहानियाँ",
    author: "महाकाव्य संग्रह",
    description: "श्रीराम के जीवन की प्रेरक कथाएँ, सरल हिंदी में।",
    titleEn: "Tales from the Ramayana",
    authorEn: "Epic Collection",
    descriptionEn: "Inspiring stories from the life of Lord Rama, in simple English.",
    price: 99,
    cover: "from-rose-200 via-pink-200 to-amber-200",
    category: "stories-epics",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "mahabharata-glimpses",
    title: "महाभारत की झलकियाँ",
    author: "चयनित प्रसंग",
    description: "महाभारत के सबसे महत्वपूर्ण प्रसंगों का संग्रह।",
    titleEn: "Glimpses of the Mahabharata",
    authorEn: "Selected Episodes",
    descriptionEn: "A collection of the most important episodes from the Mahabharata.",
    price: 99,
    cover: "from-stone-300 via-amber-200 to-orange-300",
    category: "stories-epics",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "meditation-basics",
    title: "ध्यान(मेडिटेशन) का अभ्यास",
    author: "शुरुआती गाइड",
    description: "रोज़ाना ध्यान शुरू करने की सरल विधियाँ।",
    titleEn: "Meditation Basics",
    authorEn: "Beginner's Guide",
    descriptionEn: "Simple methods to start a daily meditation practice.",
    price: 99,
    cover: "from-violet-200 via-purple-200 to-indigo-200",
    category: "spiritual-guides",
    hindiSections: meditationBasicsHindi,
    englishSections: meditationBasicsEnglish,
  },
  {
    id: "yoga-of-life",
    title: "जीवन का योग",
    author: "व्यावहारिक मार्गदर्शिका",
    description: "गीता के सिद्धांतों को आधुनिक जीवन में कैसे उतारें।",
    titleEn: "The Yoga of Life",
    authorEn: "A Practical Guide",
    descriptionEn: "How to apply the Gita's principles to modern life.",
    price: 199,
    cover: "from-emerald-200 via-teal-200 to-cyan-200",
    category: "spiritual-guides",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "beating-procrastination",
    title: "टालमटोल पर विजय",
    author: "विद्यार्थी मार्गदर्शिका",
    description:
      "टालमटोल की आदत को समझकर उसे हराने के आसान और प्रभावी तरीके — पढ़ाई और रोज़मर्रा के कामों में तुरंत लागू करें।",
    titleEn: "Beating Procrastination",
    authorEn: "Student Success Guide",
    descriptionEn: "Simple and practical ways to overcome procrastination and take action in studies and daily life.",
    price: 99,
    cover: "from-blue-200 via-sky-200 to-cyan-200",
    category: "for-students",
    hindiSections: beatingProcrastinationHindi,
    englishSections: beatingProcrastinationEnglish,
  },
  {
  id: "science-of-decision-making",
  title: "निर्णय लेने का विज्ञान",
  author: "छात्रों के लिए गाइड",
  description: "बेहतर फैसले लेने की कला — सोच, भावनाओं और आदतों को समझकर।",
  titleEn: "The Science of Decision-Making",
  authorEn: "Student Guide",
  descriptionEn: "Learn how to make better decisions by understanding thinking, emotions, and habits.",
  price: 99,
  cover: "from-indigo-200 via-purple-200 to-pink-200",
  category: "for-students",
  hindiSections: scienceDecisionHindi,
  englishSections: scienceDecisionEnglish,
}
  {
    id: "students-discipline",
    title: "अनुशासन और सफलता",
    author: "युवाओं के लिए",
    description: "विद्यार्थी जीवन में संयम और लक्ष्य की शक्ति।",
    titleEn: "Discipline and Success",
    authorEn: "For Young Readers",
    descriptionEn: "The power of discipline and goals in student life.",
    price: 49,
    cover: "from-teal-200 via-emerald-200 to-lime-200",
    category: "for-students",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "short-wisdom",
    title: "10 मिनट का ज्ञान",
    author: "लघु पाठ",
    description: "व्यस्त जीवन के लिए छोटे, गहरे विचार।",
    titleEn: "10-Minute Wisdom",
    authorEn: "Short Reads",
    descriptionEn: "Short, deep thoughts for a busy life.",
    price: 49,
    cover: "from-yellow-200 via-amber-200 to-orange-200",
    category: "short-reads",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "short-mantras",
    title: "दैनिक मंत्र",
    author: "त्वरित संदर्भ",
    description: "रोज़मर्रा के लिए शक्तिशाली मंत्र और उनके अर्थ।",
    titleEn: "Daily Mantras",
    authorEn: "Quick Reference",
    descriptionEn: "Powerful mantras for daily life and their meanings.",
    price: 49,
    cover: "from-orange-200 via-rose-200 to-pink-200",
    category: "short-reads",
    hindiSections: [],
    englishSections: [],
  },
];

export const getBook = (id: string) => books.find((b) => b.id === id);
export const getBooksByCategory = (cat: BookCategory) => books.filter((b) => b.category === cat);

/** Get sections for a book in the requested language. Falls back to the
 *  other language if the requested one has no content yet. */
export const getBookSections = (book: Book, lang: BookLanguage): BookSection[] => {
  if (lang === "en") {
    return book.englishSections.length > 0 ? book.englishSections : book.hindiSections;
  }
  return book.hindiSections.length > 0 ? book.hindiSections : book.englishSections;
};

/** True if the book has any readable content in either language. */
export const hasContent = (book: Book) => book.hindiSections.length > 0 || book.englishSections.length > 0;

/** Get localized title/author/description. 'en' uses English fields when available;
 *  any other language falls back to the default (Hindi) fields. */
export const getBookMeta = (book: Book, lang: string) => {
  const useEn = lang === "en";
  return {
    title: useEn && book.titleEn ? book.titleEn : book.title,
    author: useEn && book.authorEn ? book.authorEn : book.author,
    description: useEn && book.descriptionEn ? book.descriptionEn : book.description,
  };
};
