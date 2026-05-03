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
    body: "Dharma does not just mean rituals. Dharma means your duty, your role, your nature. A student's dharma is to study; a parent's dharma is to care for their children; a doctor's dharma is to heal. Krishna says it is better to follow your own dharma imperfectly than to copy someone else's. Understanding who you are matters more than imitating others. When you do the work that fits your nature and situation, life flows easily. First know yourself; then the path will reveal itself.",
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

export const books: Book[] = [
  {
    id: "gita-simplified",
    title: "भगवद्गीता सरलीकृत",
    author: "शुरुआती संस्करण",
    description: "गीता की संपूर्ण शिक्षा सरल हिंदी में — 22 छोटे अध्यायों में।",
    price: 499,
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
    price: 99,
    cover: "from-sky-200 via-indigo-200 to-violet-200",
    category: "stories-epics",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "ramayana-tales",
    title: "रामायण की कहानियाँ",
    author: "महाकाव्य संग्रह",
    description: "श्रीराम के जीवन की प्रेरक कथाएँ, सरल हिंदी में।",
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
    price: 99,
    cover: "from-stone-300 via-amber-200 to-orange-300",
    category: "stories-epics",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "yoga-of-life",
    title: "जीवन का योग",
    author: "व्यावहारिक मार्गदर्शिका",
    description: "गीता के सिद्धांतों को आधुनिक जीवन में कैसे उतारें।",
    price: 199,
    cover: "from-emerald-200 via-teal-200 to-cyan-200",
    category: "spiritual-guides",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "meditation-basics",
    title: "ध्यान का अभ्यास",
    author: "शुरुआती गाइड",
    description: "रोज़ाना ध्यान शुरू करने की सरल विधियाँ।",
    price: 99,
    cover: "from-violet-200 via-purple-200 to-indigo-200",
    category: "spiritual-guides",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "students-focus",
    title: "विद्यार्थियों के लिए गीता",
    author: "अध्ययन सहायक",
    description: "एकाग्रता, परिश्रम और परीक्षा के तनाव पर गीता की शिक्षा।",
    price: 49,
    cover: "from-blue-200 via-sky-200 to-cyan-200",
    category: "for-students",
    hindiSections: [],
    englishSections: [],
  },
  {
    id: "students-discipline",
    title: "अनुशासन और सफलता",
    author: "युवाओं के लिए",
    description: "विद्यार्थी जीवन में संयम और लक्ष्य की शक्ति।",
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
