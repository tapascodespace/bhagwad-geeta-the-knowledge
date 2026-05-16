# Step 5 - Hindi Translation Accuracy

Compared stored Hindi translations in `src/data/gita-data.json` against an accessible Hindi reference. Vedabase Hindi chapter/verse pages were not available at `/hi/library/bg/...` during this run, so this step used `https://bhagavadgita.io/chapter/{chapter}/verse/{verse}/hi` as the Hindi reference and recorded the source URL for each finding.

## Method

- Extracted each page's Hindi `translation` block.
- Compared stored `translation.hi` to the reference translation using normalized Hindi token trigram overlap.
- Checked whether low-overlap translations were closer to the previous or next verse, as an off-by-one heuristic.
- Checked that stored Hindi explanations are non-empty, but did not attempt full commentary equivalence because reference commentaries are much longer than app explanations.

## Summary

| Result | Count |
| --- | ---: |
| Verse records expected | 701 |
| Reference pages parsed | 701 |
| Fetch/extraction failures | 0 |
| Findings | 689 |
| HIGH possible off-by-one findings | 0 |
| MEDIUM low-overlap findings | 533 |
| LOW low-overlap findings | 156 |

## Source Failures

None.

## Findings

### [BG 1.1] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/1/hi

current translation:
```text
धृतराष्ट्र ने कहा -- हे संजय ! धर्मभूमि कुरुक्षेत्र में एकत्र हुए युद्ध के इच्छुक (युयुत्सव:) मेरे और पाण्डु के पुत्रों ने क्या किया?
```

reference translation snippet:
```text
।।1.1।। धृतराष्ट्र बोले (टिप्पणी प0 1.2) - हे संजय! (टिप्पणी प0 1.3) धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से इकट्ठे हुए मेरेे और पाण्डु के पुत्रों ने भी क्या किया?
```

notes: low lexical overlap with Hindi reference: score=0.30

### [BG 1.2] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/2/hi

current translation:
```text
संजय ने कहा -- पाण्डव-सैन्य की व्यूह रचना देखकर राजा दुर्योधन ने आचार्य द्रोण के पास जाकर ये वचन कहे।
```

reference translation snippet:
```text
।।1.2।। संजय बोले - उस समय वज्रव्यूह-से खड़ी हुई पाण्डव-सेना को देखकर राजा दुर्योधन द्रोणाचार्य के पास जाकर यह वचन बोला।
```

notes: low lexical overlap with Hindi reference: score=0.11

### [BG 1.3] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/3/hi

current translation:
```text
हे आचार्य ! आपके बुद्धिमान शिष्य द्रुपदपुत्र (धृष्टद्द्युम्न) द्वारा व्यूहाकार खड़ी की गयी पाण्डु पुत्रों की इस महती सेना को देखिये।
```

reference translation snippet:
```text
।।1.3।। हे आचार्य! आपके बुद्धिमान् शिष्य द्रुपदपुत्र धृष्टद्युम्न के द्वारा व्यूहरचना से खड़ी की हुई पाण्डवों की इस बड़ी भारी सेना को देखिये
```

notes: low lexical overlap with Hindi reference: score=0.11

### [BG 1.4] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/4/hi

current translation:
```text
इस सेना में महान् धनुर्धारी शूर योद्धा है ,  जो युद्ध में भीम और अर्जुन के समान हैं , जैसे --  युयुधान, विराट तथा महारथी राजा द्रुपद।
```

reference translation snippet:
```text
।।1.4 -- 1.6।। यहाँ (पाण्डवों की सेना में) बड़े-बड़े शूरवीर हैं, जिनके बहुत बड़े-बड़े धनुष हैं तथा जो युद्ध में भीम और अर्जुनके समान हैं। उनमें युयुधान (सात्यकि), राजा विराट और महारथी द्रुपद भी हैं। धृष्टकेतु और चेकितान तथा पराक्रमी काशिराज भी हैं। पुरुजित् और कुन्तिभोज--ये दोनों भाई तथा मनुष्योंमें श्रेष्ठ शैब्य भी हैं। पराक्रमी युधामन्यु और पराक्रमी उत्तमौजा भी हैं। सुभद्रापुत्र अभिमन्यु और द्रौपदी के पाँचों पुत्र भी हैं। ये सब-के-सब महारथी हैं।
।।1.4 -- 1.6।। यहाँ (पाण्डवों की सेना में) बड़े-
```

notes: low lexical overlap with Hindi reference: score=0.06

### [BG 1.5] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/5/hi

current translation:
```text
धृष्टकेतु, चेकितान, बलवान काशिराज,  पुरुजित्, कुन्तिभोज और मनुष्यों में श्रेष्ठ शैब्य।
```

reference translation snippet:
```text
।।1.4 -- 1.6।। यहाँ (पाण्डवों की सेना में) बड़े-बड़े शूरवीर हैं, जिनके बहुत बड़े-बड़े धनुष हैं तथा जो युद्ध में भीम और अर्जुनके समान हैं। उनमें युयुधान (सात्यकि), राजा विराट और महारथी द्रुपद भी हैं। धृष्टकेतु और चेकितान तथा पराक्रमी काशिराज भी हैं। पुरुजित् और कुन्तिभोज--ये दोनों भाई तथा मनुष्योंमें श्रेष्ठ शैब्य भी हैं। पराक्रमी युधामन्यु और पराक्रमी उत्तमौजा भी हैं। सुभद्रापुत्र अभिमन्यु और द्रौपदी के पाँचों पुत्र भी हैं। ये सब-के-सब महारथी हैं।
।।1.4 -- 1.6।। यहाँ (पाण्डवों की सेना में) बड़े-
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.6] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/6/hi

current translation:
```text
पराक्रमी युधामन्यु,  बलवान् उत्तमौजा,  सुभद्रापुत्र (अभिमन्यु) और द्रोपदी के पुत्र -- ये सब महारथी हैं।
```

reference translation snippet:
```text
।।1.4 -- 1.6।। यहाँ (पाण्डवों की सेना में) बड़े-बड़े शूरवीर हैं, जिनके बहुत बड़े-बड़े धनुष हैं तथा जो युद्ध में भीम और अर्जुनके समान हैं। उनमें युयुधान (सात्यकि), राजा विराट और महारथी द्रुपद भी हैं। धृष्टकेतु और चेकितान तथा पराक्रमी काशिराज भी हैं। पुरुजित् और कुन्तिभोज--ये दोनों भाई तथा मनुष्योंमें श्रेष्ठ शैब्य भी हैं। पराक्रमी युधामन्यु और पराक्रमी उत्तमौजा भी हैं। सुभद्रापुत्र अभिमन्यु और द्रौपदी के पाँचों पुत्र भी हैं। ये सब-के-सब महारथी हैं।
।।1.4 -- 1.6।। यहाँ (पाण्डवों की सेना में) बड़े-
```

notes: low lexical overlap with Hindi reference: score=0.04

### [BG 1.7] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/7/hi

current translation:
```text
हे द्विजोत्तम ! हमारे पक्ष में भी जो विशिष्ट योद्धागण हैं , उनको आप जान लीजिये; आपकी जानकारी के लिये अपनी सेना के नायकों के नाम मैं आपको बताता हूँ।
```

reference translation snippet:
```text
।।1.7।। हे द्विजोत्तम! हमारे पक्ष में भी जो मुख्य हैं, उनपर भी आप ध्यान दीजिये। आपको याद दिलाने के लिये मेरी सेना के जो नायक हैं, उनको मैं कहता हूँ।
```

notes: low lexical overlap with Hindi reference: score=0.19

### [BG 1.8] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/8/hi

current translation:
```text
एक तो स्वयं आप, भीष्म, कर्ण, और युद्ध विजयी कृपाचार्य तथा अश्वत्थामा, विकर्ण और सोमदत्त का पुत्र है।
```

reference translation snippet:
```text
।।1.8।। आप (द्रोणाचार्य) और पितामह भीष्म तथा कर्ण और संग्रामविजयी कृपाचार्य तथा वैसे ही अश्वत्थामा, विकर्ण और सोमदत्त का पुत्र भूरिश्रवा।
```

notes: low lexical overlap with Hindi reference: score=0.24

### [BG 1.9] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/9/hi

current translation:
```text
मेरे लिए प्राण त्याग करने के लिए तैयार, अनेक प्रकार के शस्त्रास्त्रों से सुसज्जित तथा युद्ध में कुशल और भी अनेक शूर वीर हैं।
```

reference translation snippet:
```text
।।1.9।। इनके अतिरिक्त बहुत-से शूरवीर हैं, जिन्होंने मेरे लिये अपने जीने की इच्छा का भी त्याग कर दिया है और जो अनेक प्रकार के शस्त्र-अस्त्रों को चलानेवाले हैं तथा जो सब-के-सब युद्धकला में अत्यन्त चतुर हैं।
```

notes: low lexical overlap with Hindi reference: score=0.03

### [BG 1.10] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/10/hi

current translation:
```text
भीष्म के द्वारा हमारी रक्षित सेना अपर्याप्त है; किन्तु भीम द्वारा रक्षित उनकी सेना पर्याप्त है अथवा, भीष्म के द्वारा रक्षित हमारी सेना अपरिमित है किन्तु भीम के द्वारा रक्षित उनकी सेना परिमित ही है।
```

reference translation snippet:
```text
।।1.10।। वह हमारी सेना पाण्डवों पर विजय करने में अपर्याप्त है, असमर्थ है; क्योंकि उसके संरक्षक (उभयपक्षपाती) भीष्म हैं। परन्तु इन पाण्डवों की सेना हमारे पर विजय करने में पर्याप्त है, समर्थ है; क्योंकि इसके संरक्षक (निजसेनापक्षपाती) भीमसेन हैं।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.11] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/11/hi

current translation:
```text
विभिन्न मोर्चों पर अपने-अपने स्थान पर स्थित रहते हुए आप सब लोग भीष्म पितामह की ही सब ओर से रक्षा करें।
```

reference translation snippet:
```text
।।1.11।। आप सब-के-सब लोग सभी मोर्चों पर अपनी-अपनी जगह दृढ़ता से स्थित रहते हुए ही पितामह भीष्म की चारों ओर से रक्षा करें।
```

notes: low lexical overlap with Hindi reference: score=0.14

### [BG 1.12] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/12/hi

current translation:
```text
उस समय कौरवों में वृद्ध, प्रतापी पितामह भीष्म ने उस (दुर्योधन) के हृदय में हर्ष उत्पन्न करते हुये उच्च स्वर में गरज कर शंखध्वनि की।
```

reference translation snippet:
```text
।।1.12।। दुर्योधन के हृदय में हर्ष उत्पन्न करते हुए कुरुवृद्ध प्रभावशाली पितामह भीष्म ने सिंह के समान गरज कर जोर से शंख बजाया।
```

notes: low lexical overlap with Hindi reference: score=0.28

### [BG 1.13] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/13/hi

current translation:
```text
तत्पश्चात् शंख, नगारे, ढोल व शृंगी आदि वाद्य एक साथ ही बज उठे, जिनका बड़ा भयंकर शब्द हुआ।
```

reference translation snippet:
```text
।।1.13।। उसके बाद शंख, भेरी (नगाड़े), ढोल, मृदङ्ग और नरसिंघे बाजे एक साथ बज उठे। उनका वह शब्द बड़ा भयंकर हुआ।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.14] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/14/hi

current translation:
```text
इसके उपरान्त श्वेत अश्वों से युक्त भव्य रथ में बैठे हुये माधव (श्रीकृष्ण) और पाण्डुपुत्र अर्जुन ने भी अपने दिव्य शंख बजाये।
```

reference translation snippet:
```text
।।1.14।। उसके बाद सफेद घोड़ों से युक्त महान् रथ पर बैठे हुए लक्ष्मीपति भगवान् श्रीकृष्ण और पाण्डुपुत्र अर्जुन ने दिव्य शंखों को बड़े जोर से बजाया।
```

notes: low lexical overlap with Hindi reference: score=0.14

### [BG 1.15] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/15/hi

current translation:
```text
भगवान् हृषीकेश ने पांचजन्य, धनंजय (अर्जुन) ने देवदत्त तथा भयंकर कर्म करने वाले भीम ने पौण्डू नामक महाशंख बजाया।
```

reference translation snippet:
```text
।।1.15।। अन्तर्यामी भगवान् श्रीकृष्ण ने पाञ्चजन्य नामक तथा धनञ्जय अर्जुन ने देवदत्त नामक शंख बजाया; और भयानक कर्म करनेवाले वृकोदर भीम ने पौण्ड्र नामक महाशंख बजाया।
```

notes: low lexical overlap with Hindi reference: score=0.10

### [BG 1.16] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/16/hi

current translation:
```text
कुन्तीपुत्र राजा युधिष्ठिर ने अनन्त विजय नामक शंख और नकुल व सहदेव ने क्रमश:  सुघोष और मणिपुष्पक नामक शंख बजाये।
```

reference translation snippet:
```text
।।1.16।। कुन्तीपुत्र राजा युधिष्ठिर ने अनन्तविजय नामक शंख बजाया तथा नकुल और सहदेव ने सुघोष और मणिपुष्पक नामक शंख बजाये।
।।1.17 -- 1.18।। हे राजन्! श्रेष्ठ धनुषवाले काशिराज और महारथी शिखण्डी तथा धृष्टद्युम्न एवं राजा विराट और अजेय सात्यकि, राजा द्रुपद और द्रौपदी के पाँचों पुत्र तथा लम्बी-लम्बी भुजाओंवाले सुभद्रा-पुत्र अभिमन्यु - इन सभी ने सब ओर से अलग-अलग (अपने-अपने) शंख बजाये।
।।1.17 -- 1.18।। हे राजन्! श्रेष्ठ धनुषवाले काशिराज और महारथी शिखण्डी तथा धृष्टद्युम्न एवं राजा विराट और अजेय सात्यकि, र
```

notes: low lexical overlap with Hindi reference: score=0.15

### [BG 1.17] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/17/hi

current translation:
```text
श्रेष्ठ धनुषवाले काशिराज, महारथी शिखण्डी, धृष्टद्युम्न,  राजा विराट और अजेय सात्यकि।
```

reference translation snippet:
```text
।।1.16।। कुन्तीपुत्र राजा युधिष्ठिर ने अनन्तविजय नामक शंख बजाया तथा नकुल और सहदेव ने सुघोष और मणिपुष्पक नामक शंख बजाये।
।।1.17 -- 1.18।। हे राजन्! श्रेष्ठ धनुषवाले काशिराज और महारथी शिखण्डी तथा धृष्टद्युम्न एवं राजा विराट और अजेय सात्यकि, राजा द्रुपद और द्रौपदी के पाँचों पुत्र तथा लम्बी-लम्बी भुजाओंवाले सुभद्रा-पुत्र अभिमन्यु - इन सभी ने सब ओर से अलग-अलग (अपने-अपने) शंख बजाये।
।।1.17 -- 1.18।। हे राजन्! श्रेष्ठ धनुषवाले काशिराज और महारथी शिखण्डी तथा धृष्टद्युम्न एवं राजा विराट और अजेय सात्यकि, र
```

notes: low lexical overlap with Hindi reference: score=0.11

### [BG 1.18] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/18/hi

current translation:
```text
हे राजन् ! राजा द्रुपद,  द्रौपदी के पुत्र और महाबाहु सौभद्र (अभिमन्यु) इन सब ने अलग-अलग शंख बजाये।
```

reference translation snippet:
```text
।।1.16।। कुन्तीपुत्र राजा युधिष्ठिर ने अनन्तविजय नामक शंख बजाया तथा नकुल और सहदेव ने सुघोष और मणिपुष्पक नामक शंख बजाये।
।।1.17 -- 1.18।। हे राजन्! श्रेष्ठ धनुषवाले काशिराज और महारथी शिखण्डी तथा धृष्टद्युम्न एवं राजा विराट और अजेय सात्यकि, राजा द्रुपद और द्रौपदी के पाँचों पुत्र तथा लम्बी-लम्बी भुजाओंवाले सुभद्रा-पुत्र अभिमन्यु - इन सभी ने सब ओर से अलग-अलग (अपने-अपने) शंख बजाये।
।।1.17 -- 1.18।। हे राजन्! श्रेष्ठ धनुषवाले काशिराज और महारथी शिखण्डी तथा धृष्टद्युम्न एवं राजा विराट और अजेय सात्यकि, र
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.19] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/19/hi

current translation:
```text
वह भयंकर घोष आकाश और पृथ्वी पर गूँजने लगा और उसने धृतराष्ट्र के पुत्रों के हृदय विदीर्ण कर दिये।
```

reference translation snippet:
```text
।।1.19।। पाण्डव-सेना के शंखों के उस भयंकर शब्द ने आकाश और पृथ्वी को भी गुँजाते हुए अन्यायपूर्वक राज्य हड़पनेवाले दुर्योधन आदि के हृदय विदीर्ण कर दिये।
```

notes: low lexical overlap with Hindi reference: score=0.20

### [BG 1.20] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/20/hi

current translation:
```text
हे महीपते ! इस प्रकार जब युद्ध प्रारम्भ होने वाला ही था कि कपिध्वज अर्जुन ने धृतराष्ट्र के पुत्रों को स्थित देखकर धनुष उठाकर भगवान् हृषीकेश से ये शब्द कहे।
```

reference translation snippet:
```text
।।1.20।। हे महीपते! धृतराष्ट्र! अब शस्त्रों के चलने की तैयारी हो ही रही थी कि उस समय अन्यायपूर्वक राज्य को धारण करनेवाले राजाओं और उनके साथियों को व्यवस्थितरूप से सामने खड़े हुए देखकर कपिध्वज पाण्डुपुत्र अर्जुन ने अपना गाण्डीव धनुष उठा लिया और अन्तर्यामी भगवान् श्रीकृष्ण से ये वचन बोले।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.21] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/21/hi

current translation:
```text
अर्जुन ने कहा -- हे! अच्युत मेरे रथ को दोनों सेनाओं के मध्य खड़ा कीजिये।
```

reference translation snippet:
```text
।।1.21 -- 1.22।। अर्जुन बोले - हे अच्युत! दोनों सेनाओं के मध्य में मेरे रथ को आप तब तक खड़ा कीजिये, जब तक मैं युद्धक्षेत्र में खड़े हुए इन युद्ध की इच्छावालों को देख न लूँ कि इस युद्धरूप उद्योग में मुझे किन-किन के साथ युद्ध करना योग्य है।
।।1.21 -- 1.22।। अर्जुन बोले - हे अच्युत! दोनों सेनाओं के मध्य में मेरे रथ को आप तब तक खड़ा कीजिये, जब तक मैं युद्धक्षेत्र में खड़े हुए इन युद्ध की इच्छावालों को देख न लूँ कि इस युद्धरूप उद्योग में मुझे किन-किनके साथ युद्ध करना योग्य है।
```

notes: low lexical overlap with Hindi reference: score=0.10

### [BG 1.22] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/22/hi

current translation:
```text
जिससे मैं युद्ध की इच्छा से खड़े इन लोगों का निरीक्षण कर सकूँ कि इस युद्ध में मुझे किनके साथ युद्ध करना है।
```

reference translation snippet:
```text
।।1.21 -- 1.22।। अर्जुन बोले - हे अच्युत! दोनों सेनाओं के मध्य में मेरे रथ को आप तब तक खड़ा कीजिये, जब तक मैं युद्धक्षेत्र में खड़े हुए इन युद्ध की इच्छावालों को देख न लूँ कि इस युद्धरूप उद्योग में मुझे किन-किन के साथ युद्ध करना योग्य है।
।।1.21 -- 1.22।। अर्जुन बोले - हे अच्युत! दोनों सेनाओं के मध्य में मेरे रथ को आप तब तक खड़ा कीजिये, जब तक मैं युद्धक्षेत्र में खड़े हुए इन युद्ध की इच्छावालों को देख न लूँ कि इस युद्धरूप उद्योग में मुझे किन-किनके साथ युद्ध करना योग्य है।
```

notes: low lexical overlap with Hindi reference: score=0.06

### [BG 1.23] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/23/hi

current translation:
```text
दुर्बुद्धि धार्तराष्ट्र (दुर्योधन) का युद्ध में प्रिय चाहने वाले जो ये राजा लोग यहाँ एकत्र हुए हैं, उन युद्ध करने वालों को मैं देखूँगा।
```

reference translation snippet:
```text
।।1.23।। दुष्टबुद्धि दुर्योधन का युद्ध में प्रिय करने की इच्छावाले जो ये राजालोग इस सेना में आये हुए हैं, युद्ध करने को उतावले हुए इन सबको मैं देख लूँ।
```

notes: low lexical overlap with Hindi reference: score=0.13

### [BG 1.24] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/24/hi

current translation:
```text
संजय ने कहा -- हे भारत (धृतराष्ट्र) ! अर्जुन के इस प्रकार कहने पर भगवान् हृषीकेश ने दोनों सेनाओं के मध्य उत्तम रथ को खड़ा करके।
```

reference translation snippet:
```text
।।1.24 -- 1.25।। संजय बोले - हे भरतवंशी राजन्! निद्राविजयी अर्जुन के द्वारा इस तरह कहने पर अन्तर्यामी भगवान् श्रीकृष्ण ने दोनों सेनाओं के मध्यभाग में पितामह भीष्म और आचार्य द्रोण के सामने तथा सम्पूर्ण राजाओं के सामने श्रेष्ठ रथ को खड़ा करके इस तरह कहा कि 'हे पार्थ! इन इकट्ठे हुए कुरुवंशियोंको देख'।
```

notes: low lexical overlap with Hindi reference: score=0.11

### [BG 1.25] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/25/hi

current translation:
```text
भीष्म, द्रोण तथा पृथ्वी के समस्त शासकों के समक्ष उन्होंने कहा, "हे पार्थ यहाँ एकत्र हुये कौरवों को देखो"।
```

reference translation snippet:
```text
।।1.24 -- 1.25।। संजय बोले - हे भरतवंशी राजन्! निद्राविजयी अर्जुन के द्वारा इस तरह कहने पर अन्तर्यामी भगवान् श्रीकृष्ण ने दोनों सेनाओं के मध्यभाग में पितामह भीष्म और आचार्य द्रोण के सामने तथा सम्पूर्ण राजाओं के सामने श्रेष्ठ रथको खड़ा करके इस तरह कहा कि 'हे पार्थ! इन इकट्ठे हुए कुरुवंशियोंको देख'।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.26] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/26/hi

current translation:
```text
वहाँ अर्जुन ने उन दोनों सेनाओं में खड़े पिता के भाइयों,  पितामहों,  आचार्यों,  मामों, भाइयों, पुत्रों,  पौत्रों,  मित्रों,  श्वसुरों और सुहृदों को भी देखा।
```

reference translation snippet:
```text
।।1.26।। उसके बाद पृथानन्दन अर्जुनने उन दोनों ही सेनाओंमें स्थित पिताओंको, पितामहोंको, आचार्योंको, मामाओंको, भाइयोंको, पुत्रोंको, पौत्रोंको तथा मित्रोंको, ससुरोंको और सुहृदोंको भी देखा।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.27] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/27/hi

current translation:
```text
इस प्रकार उन सब बन्धु-बान्धवों को खड़े देखकर कुन्ती पुत्र अर्जुन का मन करुणा से भर गया और विषादयुक्त होकर उसने यह कहा।
```

reference translation snippet:
```text
।।1.27।। अपनी-अपनी जगह पर स्थित उन सम्पूर्ण बान्धवों को देखकर वे कुन्तीनन्दन अर्जुन अत्यन्त कायरता से युक्त होकर विषाद करते हुए ये वचन बोले।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.28] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/28/hi

current translation:
```text
अर्जुन ने कहा -- हे कृष्ण ! युद्ध की इच्छा रखकर उपस्थित हुए इन स्वजनों को देखकर मेरे अंग शिथिल हुये जाते हैं, मुख भी सूख रहा है और मेरे शरीर में कम्प तथा रोमांच हो रहा है।।
```

reference translation snippet:
```text
।।1.28 -- 1.30।। अर्जुन बोले - हे कृष्ण! युद्ध की इच्छावाले इस कुटुम्ब-समुदाय को अपने सामने उपस्थित देखकर मेरे अङ्ग शिथिल हो रहे हैं और मुख सूख रहा है तथा मेरे शरीर में कँपकँपी आ रही है एवं रोंगटे खड़े हो रहे हैं। हाथ से गाण्डीव धनुष गिर रहा है और त्वचा भी जल रही है। मेरा मन भ्रमित-सा हो रहा है और मैं खड़े रहने में भी असमर्थ हो रहा हूँ।
```

notes: low lexical overlap with Hindi reference: score=0.12

### [BG 1.29] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/29/hi

current translation:
```text
अर्जुन ने कहा -- हे कृष्ण !  युद्ध की इच्छा रखकर उपस्थित हुए इन स्वजनों को देखकर मेरे अंग शिथिल हुये जाते हैं,  मुख भी सूख रहा है और मेरे शरीर में कम्प तथा रोमांच हो रहा है।
```

reference translation snippet:
```text
।।1.28 -- 1.30।। अर्जुन बोले - हे कृष्ण! युद्ध की इच्छावाले इस कुटुम्ब-समुदाय को अपने सामने उपस्थित देखकर मेरे अङ्ग शिथिल हो रहे हैं और मुख सूख रहा है तथा मेरे शरीर में कँपकँपी आ रही है एवं रोंगटे खड़े हो रहे हैं। हाथ से गाण्डीव धनुष गिर रहा है और त्वचा भी जल रही है। मेरा मन भ्रमित-सा हो रहा है और मैं खड़े रहने में भी असमर्थ हो रहा हूँ।
।।1.28 -- 1.30।। अर्जुन बोले - हे कृष्ण! युद्ध की इच्छावाले इस कुटुम्ब-समुदाय को अपने सामने उपस्थित देखकर मेरे अङ्ग शिथिल हो रहे हैं और मुख सूख रहा है तथा मेरे श
```

notes: low lexical overlap with Hindi reference: score=0.10

### [BG 1.30] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/30/hi

current translation:
```text
मेरे हाथ से गाण्डीव (धनुष) गिर रहा है और त्वचा जल रही है। मेरा मन भ्रमित सा हो रहा है,  और मैं खड़े रहने में असमर्थ हूँ।
```

reference translation snippet:
```text
।।1.28 -- 1.30।। अर्जुन बोले - हे कृष्ण! युद्ध की इच्छावाले इस कुटुम्ब-समुदाय को अपने सामने उपस्थित देखकर मेरे अङ्ग शिथिल हो रहे हैं और मुख सूख रहा है तथा मेरे शरीर में कँपकँपी आ रही है एवं रोंगटे खड़े हो रहे हैं। हाथ से गाण्डीव धनुष गिर रहा है और त्वचा भी जल रही है। मेरा मन भ्रमित-सा हो रहा है और मैं खड़े रहने में भी असमर्थ हो रहा हूँ।
।।1.28 -- 1.30।। अर्जुन बोले - हे कृष्ण! युद्ध की इच्छावाले इस कुटुम्ब-समुदाय को अपने सामने उपस्थित देखकर मेरे अङ्ग शिथिल हो रहे हैं और मुख सूख रहा है तथा मेरे श
```

notes: low lexical overlap with Hindi reference: score=0.33

### [BG 1.31] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/31/hi

current translation:
```text
हे केशव ! मैं शकुनों को भी विपरीत ही देख रहा हूँ और युद्ध में (आहवे) अपने स्वजनों को मारकर कोई कल्याण भी नहीं देखता हूँ।
```

reference translation snippet:
```text
।।1.28 -- 1.30।। अर्जुन बोले - हे कृष्ण! युद्ध की इच्छावाले इस कुटुम्ब-समुदाय को अपने सामने उपस्थित देखकर मेरे अङ्ग शिथिल हो रहे हैं और मुख सूख रहा है तथा मेरे शरीर में कँपकँपी आ रही है एवं रोंगटे खड़े हो रहे हैं। हाथ से गाण्डीव धनुष गिर रहा है और त्वचा भी जल रही है। मेरा मन भ्रमित-सा हो रहा है और मैं खड़े रहने में भी असमर्थ हो रहा हूँ।
।।1.28 -- 1.30।। अर्जुन बोले - हे कृष्ण! युद्ध की इच्छावाले इस कुटुम्ब-समुदाय को अपने सामने उपस्थित देखकर मेरे अङ्ग शिथिल हो रहे हैं और मुख सूख रहा है तथा मेरे श
```

notes: low lexical overlap with Hindi reference: score=0.12

### [BG 1.32] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/32/hi

current translation:
```text
हे कृष्ण ! मैं न विजय चाहता हूँ, न राज्य और न सुखों को ही चाहता हूँ। हे गोविन्द ! हमें राज्य से अथवा भोगों से और जीने से भी क्या प्रयोजन है?।
```

reference translation snippet:
```text
।।1.32।। हे कृष्ण! मैं न तो विजय चाहता हूँ, न राज्य चाहता हूँ और न सुखों को ही चाहता हूँ। हे गोविन्द! हमलोगों को राज्य से क्या लाभ? भोगों से क्या लाभ? अथवा जीने से भी क्या लाभ?
।।1.33।। जिनके लिये हमारी राज्य, भोग और सुखकी इच्छा है, वे ही ये सब अपने प्राणों की और धन की आशा का त्याग करके युद्ध में खड़े हैं।
```

notes: low lexical overlap with Hindi reference: score=0.31

### [BG 1.33] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/33/hi

current translation:
```text
हमें जिनके लिये राज्य,  भोग और सुखादि की इच्छा है,  वे ही लोग धन और जीवन की आशा को त्यागकर युद्ध में खड़े हैं।
```

reference translation snippet:
```text
।।1.32।। हे कृष्ण! मैं न तो विजय चाहता हूँ, न राज्य चाहता हूँ और न सुखों को ही चाहता हूँ। हे गोविन्द! हमलोगों को राज्य से क्या लाभ? भोगों से क्या लाभ? अथवा जीने से भी क्या लाभ?
।।1.33।। जिनके लिये हमारी राज्य, भोग और सुखकी इच्छा है, वे ही ये सब अपने प्राणों की और धन की आशा का त्याग करके युद्ध में खड़े हैं।
```

notes: low lexical overlap with Hindi reference: score=0.12

### [BG 1.34] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/34/hi

current translation:
```text
वे लोग गुरुजन,  ताऊ,  चाचा,  पुत्र,  पितामह,   श्वसुर,  पोते,  श्यालक तथा अन्य सम्बन्धी हैं।
```

reference translation snippet:
```text
।।1.34 -- 1.35।। (टिप्पणी प0 24.1) आचार्य, पिता, पुत्र और उसी प्रकार पितामह, मामा, ससुर, पौत्र, साले तथा अन्य जितने भी सम्बन्धी हैं, मुझ पर प्रहार करने पर भी मैं इनको मारना नहीं चाहता, और हे मधुसूदन! मुझे त्रिलोकी का राज्य मिलता हो, तो भी मैं इनको मारना नहीं चाहता, फिर पृथ्वी के लिये तो (मैं इनको मारूँ ही) क्या?
।।1.34 -- 1.35।। (टिप्पणी प0 24.1) आचार्य, पिता, पुत्र और उसी प्रकार पितामह, मामा, ससुर, पौत्र, साले तथा अन्य जितने भी सम्बन्धी हैं, मुझपर प्रहार करने पर भी मैं इनको मारना नहीं चाहता, और
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.35] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/35/hi

current translation:
```text
हे मधुसूदन !  इनके मुझे मारने पर अथवा त्रैलोक्य के राज्य के लिये भी मैं इनको मारना नहीं चाहता,  फिर पृथ्वी के लिए कहना ही क्या है।
```

reference translation snippet:
```text
।।1.34 -- 1.35।। (टिप्पणी प0 24.1) आचार्य, पिता, पुत्र और उसी प्रकार पितामह, मामा, ससुर, पौत्र, साले तथा अन्य जितने भी सम्बन्धी हैं, मुझ पर प्रहार करने पर भी मैं इनको मारना नहीं चाहता, और हे मधुसूदन! मुझे त्रिलोकी का राज्य मिलता हो, तो भी मैं इनको मारना नहीं चाहता, फिर पृथ्वी के लिये तो (मैं इनको मारूँ ही) क्या?
।।1.34 -- 1.35।। (टिप्पणी प0 24.1) आचार्य, पिता, पुत्र और उसी प्रकार पितामह, मामा, ससुर, पौत्र, साले तथा अन्य जितने भी सम्बन्धी हैं, मुझपर प्रहार करने पर भी मैं इनको मारना नहीं चाहता, और
```

notes: low lexical overlap with Hindi reference: score=0.17

### [BG 1.36] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/36/hi

current translation:
```text
हे जनार्दन ! धृतराष्ट्र के पुत्रों की हत्या करके हमें क्या प्रसन्नता होगी?  इन आततायियों को मारकर तो हमें केवल पाप ही लगेगा।
```

reference translation snippet:
```text
।।1.36।। हे जनार्दन! इन धृतराष्ट्र-सम्बन्धियों को मारकर हमलोगों को क्या प्रसन्नता होगी? इन आततायियों को मारने से तो हमें पाप ही लगेगा।
।।1.37।। इसलिये अपने बान्धव इन धृतराष्ट्र-सम्बन्धियों को मारने के लिये हम योग्य नहीं हैं; क्योंकि हे माधव! अपने कुटुम्बियों को मारकर हम कैसे सुखी होंगे?
```

notes: low lexical overlap with Hindi reference: score=0.16

### [BG 1.37] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/37/hi

current translation:
```text
हे माधव  !  इसलिये अपने बान्धव धृतराष्ट्र के पुत्रों को मारना हमारे लिए योग्य नहीं है,  क्योंकि स्वजनों को मारकर हम कैसे सुखी होंगे।
```

reference translation snippet:
```text
।।1.36।। हे जनार्दन! इन धृतराष्ट्र-सम्बन्धियों को मारकर हमलोगों को क्या प्रसन्नता होगी? इन आततायियों को मारने से तो हमें पाप ही लगेगा।
।।1.37।। इसलिये अपने बान्धव इन धृतराष्ट्र-सम्बन्धियों को मारने के लिये हम योग्य नहीं हैं; क्योंकि हे माधव! अपने कुटुम्बियों को मारकर हम कैसे सुखी होंगे?
```

notes: low lexical overlap with Hindi reference: score=0.16

### [BG 1.38] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/38/hi

current translation:
```text
यद्यपि लोभ से भ्रष्टचित्त हुये ये लोग कुलनाशकृत दोष और मित्र द्रोह में पाप नहीं देखते हैं।
```

reference translation snippet:
```text
।।1.38 -- 1.39।। यद्यपि लोभ के कारण जिनका विवेक-विचार लुप्त हो गया है, ऐसे ये (दुर्योधन आदि) कुल का नाश करने से होनेवाले दोष को और मित्रों के साथ द्वेष करने से होनेवाले पाप को नहीं देखते, (तो भी) हे जनार्दन! कुल का नाश करने से होनेवाले दोष को ठीक-ठीक जाननेवाले हमलोग इस पाप से निवृत्त होने का विचार क्यों न करें?
।।1.38 -- 1.39।। यद्यपि लोभ के कारण जिनका विवेक-विचार लुप्त हो गया है, ऐसे ये (दुर्योधन आदि) कुल का नाश करने से होनेवाले दोष को और मित्रों के साथ द्वेष करने से होनेवाले पाप को नहीं देखते,
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 1.39] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/39/hi

current translation:
```text
परन्तु,  हेे जनार्दन !  कुलक्षय से होने वाले दोष को जानने वाले हम लोगों को इस पाप से विरत होने के लिए क्यों नहीं सोचना चाहिये।
```

reference translation snippet:
```text
।।1.38 -- 1.39।। यद्यपि लोभ के कारण जिनका विवेक-विचार लुप्त हो गया है, ऐसे ये (दुर्योधन आदि) कुल का नाश करने से होनेवाले दोष को और मित्रों के साथ द्वेष करने से होनेवाले पाप को नहीं देखते, (तो भी) हे जनार्दन! कुल का नाश करने से होनेवाले दोष को ठीक-ठीक जाननेवाले हमलोग इस पाप से निवृत्त होने का विचार क्यों न करें?
।।1.38 -- 1.39।। यद्यपि लोभ के कारण जिनका विवेक-विचार लुप्त हो गया है, ऐसे ये (दुर्योधन आदि) कुल का नाश करने से होनेवाले दोष को और मित्रों के साथ द्वेष करने से होनेवाले पाप को नहीं देखते,
```

notes: low lexical overlap with Hindi reference: score=0.02

### [BG 1.40] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/40/hi

current translation:
```text
कुल के नष्ट होने से सनातन धर्म नष्ट हो जाते हैं। धर्म नष्ट होने पर सम्पूर्ण कुल को अधर्म (पाप) दबा लेता है।
```

reference translation snippet:
```text
।।1.40।। कुल का क्षय होने पर सदा से चलते आये कुलधर्म नष्ट हो जाते हैं और धर्म का नाश होनेपर (बचे हुए) सम्पूर्ण कुल को अधर्म दबा लेता है।
```

notes: low lexical overlap with Hindi reference: score=0.21

### [BG 1.42] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/42/hi

current translation:
```text
वह वर्णसंकर कुलघातियों को और कुल को नरक में ले जाने का कारण बनता है। पिण्ड और जलदान की क्रिया से वंचित इनके पितर भी नरक में गिर जाते हैं।
```

reference translation snippet:
```text
।।1.42।। वर्णसंकर कुलघातियों को और कुल को नरक में ले जानेवाला ही होता है। श्राद्ध और तर्पण न मिलने से इन- (कुलघातियों-) के पितर भी अपने स्थान से गिर जाते हैं।
```

notes: low lexical overlap with Hindi reference: score=0.29

### [BG 1.43] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/43/hi

current translation:
```text
इन वर्णसंकर कारक दोषों से कुलघाती दोषों से सनातन कुलधर्म और जातिधर्म नष्ट हो जाते हैं।
```

reference translation snippet:
```text
।।1.43।। इन वर्णसंकर पैदा करनेवाले दोषोंसे कुलघातियों के सदा से चलते आये कुलधर्म और जातिधर्म नष्ट हो जाते हैं।
```

notes: low lexical overlap with Hindi reference: score=0.33

### [BG 1.44] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/44/hi

current translation:
```text
हे जनार्दन !  हमने सुना है कि जिनके यहां कुल धर्म नष्ट हो जाता है,  उन मनुष्यों का अनियत काल तक नरक में वास होता है।
```

reference translation snippet:
```text
।।1.44।। हे जनार्दन! जिनके कुलधर्म नष्ट हो जाते हैं, उन मनुष्यों का बहुत काल तक नरकों में वापस होता है, ऐसा हम सुनते आये हैं।
```

notes: low lexical overlap with Hindi reference: score=0.04

### [BG 1.45] severity: LOW

source: https://bhagavadgita.io/chapter/1/verse/45/hi

current translation:
```text
अहो  !  शोक है कि हम लोग बड़ा भारी पाप करने का निश्चय कर बैठे हैं,  जो कि इस राज्यसुख के लोभ से अपने कुटुम्ब का नाश करने के लिये तैयार हो गये हैं।
```

reference translation snippet:
```text
।।1.45।। यह बड़े आश्चर्य और खेद की बात है कि हमलोग बड़ा भारी पाप करने का निश्चय कर बैठे हैं, जो कि राज्य और सुख के लोभ से अपने स्वजनों को मारने के लिये तैयार हो गये हैं!
।।1.46।। अगर ये हाथों में शस्त्र-अस्त्र लिये हुए धृतराष्ट्र के पक्षपाती लोग युद्धभूमि में सामना न करनेवाले तथा शस्त्ररहित मुझ को मार भी दें, तो वह मेरे लिये बड़ा ही हितकारक होगा।
```

notes: low lexical overlap with Hindi reference: score=0.31

### [BG 1.46] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/46/hi

current translation:
```text
यदि मुझ शस्त्ररहित और प्रतिकार न करने वाले को ये शस्त्रधारी कौरव रण में मारें,  तो भी वह मेरे लिये कल्याणकारक होगा।
```

reference translation snippet:
```text
।।1.45।। यह बड़े आश्चर्य और खेद की बात है कि हमलोग बड़ा भारी पाप करने का निश्चय कर बैठे हैं, जो कि राज्य और सुख के लोभ से अपने स्वजनों को मारने के लिये तैयार हो गये हैं!
।।1.46।। अगर ये हाथों में शस्त्र-अस्त्र लिये हुए धृतराष्ट्र के पक्षपाती लोग युद्धभूमि में सामना न करनेवाले तथा शस्त्ररहित मुझ को मार भी दें, तो वह मेरे लिये बड़ा ही हितकारक होगा।
```

notes: low lexical overlap with Hindi reference: score=0.02

### [BG 1.47] severity: MEDIUM

source: https://bhagavadgita.io/chapter/1/verse/47/hi

current translation:
```text
संजय ने कहा  --  रणभूमि (संख्ये) में शोक से उद्विग्न मनवाला अर्जुन इस प्रकार कहकर बाणसहित धनुष को त्याग कर रथ के पिछले भाग में बैठ गया।
```

reference translation snippet:
```text
।।1.47।। संजय बोले - ऐसा कहकर शोकाकुल मनवाले अर्जुन बाणसहित धनुष का त्याग करके युद्धभूमि में रथके मध्यभाग में बैठ गये।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.1] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/1/hi

current translation:
```text
संजय ने कहा -- इस प्रकार करुणा और विषाद से अभिभूत,  अश्रुपूरित नेत्रों वाले आकुल अर्जुन से मधुसूदन ने यह वाक्य कहा।।
```

reference translation snippet:
```text
।।2.1।। संजय बोले - वैसी कायरता से आविष्ट उन अर्जुन के प्रति, जो कि विषाद कर रहे हैं और आँसुओं के कारण जिनके नेत्रों की देखने की शक्ति अवरुद्ध हो रही है, भगवान् मधुसूदन ये (आगे कहे जानेवाले) वचन बोले।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.2] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/2/hi

current translation:
```text
श्री भगवान् ने कहा -- हे अर्जुन ! तुमको इस विषम स्थल में यह मोह कहाँ से उत्पन्न हुआ?  यह आर्य आचरण के विपरीत न तो स्वर्ग प्राप्ति का साधन ही है और न कीर्ति कराने वाला ही है।।
```

reference translation snippet:
```text
।।2.2।। श्रीभगवान् बोले (टिप्पणी प0 38.1) - हे अर्जुन! इस विषम अवसरपर तुम्हें यह कायरता कहाँसे प्राप्त हुई, जिसका कि श्रेष्ठ पुरुष सेवन नहीं करते, जो स्वर्गको देनेवाली नहीं है और कीर्ति करनेवाली भी नहीं है।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.3] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/3/hi

current translation:
```text
हे पार्थ क्लीव (कायर) मत बनो। यह तुम्हारे लिये अशोभनीय है, हे ! परंतप हृदय की क्षुद्र दुर्बलता को त्यागकर खड़े हो जाओ।।
```

reference translation snippet:
```text
।।2.3।। हे पृथानन्दन अर्जुन ! इस नपुंसकताको मत प्राप्त हो; क्योंकि तुम्हारेमें यह उचित नहीं है। हे परंतप ! हृदयकी इस तुच्छ दुर्बलताका त्याग करके युद्धके लिये खड़े हो जाओ।
```

notes: low lexical overlap with Hindi reference: score=0.09

### [BG 2.4] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/4/hi

current translation:
```text
अर्जुन ने कहा -- हे मधुसूदन ! मैं रणभूमि में किस प्रकार भीष्म और द्रोण के साथ बाणों से युद्ध करूँगा। हे अरिसूदन, वे दोनों ही पूजनीय हैं।।
```

reference translation snippet:
```text
।।2.4।। अर्जुन बोले - हे मधुसूदन! मैं रणभूमिमें भीष्म और द्रोणके साथ बाणोंसे युद्ध कैसे करूँ? क्योंकि हे अरिसूदन! ये दोनों ही पूजाके योग्य हैं।
```

notes: low lexical overlap with Hindi reference: score=0.04

### [BG 2.5] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/5/hi

current translation:
```text
इन महानुभाव गुरुजनों को मारने से इस लोक में भिक्षा का अन्न भी ग्रहण करना अधिक कल्याण कारक है, क्योंकि गुरुजनों को मारकर मैं इस लोक में रक्तरंजित अर्थ और काम रूप भोगों को ही भोगूँगा।।
```

reference translation snippet:
```text
।।2.5।। महानुभाव गुरुजनोंको न मारकर इस लोकमें मैं भिक्षाका अन्न खाना भी श्रेष्ठ समझता हूँ।  क्योंकि गुरुजनोंको मारकर यहाँ रक्तसे सने हुए तथा धनकी कामनाकी मुख्यतावाले भोगोंको ही तो भोगूँगा!
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.6] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/6/hi

current translation:
```text
हम नहीं जानते कि हमें क्या करना उचित है। हम यह भी नहीं जानते कि हम जीतेंगे, या वे हमको जीतेंगे, जिनको मारकर हम जीवित नहीं रहना चाहते वे ही धृतराष्ट्र के पुत्र हमारे सामने युद्ध के लिए खड़े हैं।।
```

reference translation snippet:
```text
।।2.6।। हम यह भी नहीं जानते कि हमलोगोंके लिये युद्ध करना और न करना - इन दोनोंमेंसे कौन-सा अत्यन्त श्रेष्ठ है; और हमें इसका भी पता नहीं है कि हम उन्हें जीतेंगे अथवा वे हमें जीतेंगे। जिनको मारकर हम जीना भी नहीं चाहते, वे ही धृतराष्ट्रके सम्बन्धी हमारे सामने खड़े हैं।
```

notes: low lexical overlap with Hindi reference: score=0.16

### [BG 2.7] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/7/hi

current translation:
```text
करुणा के कलुष से अभिभूत और कर्तव्यपथ पर संभ्रमित हुआ मैं आपसे पूछता हूँ, कि मेरे लिये जो श्रेयष्कर हो, उसे आप निश्चय करके कहिये, क्योंकि मैं आपका शिष्य हूँ; शरण में आये मुझको आप उपदेश दीजिये।।
```

reference translation snippet:
```text
।।2.7।। कायरतारूप दोषसे तिरस्कृत स्वभाववाला और धर्मके विषयमें मोहित अन्तःकरणवाला मैं आपसे पूछता हूँ कि जो निश्चित कल्याण करनेवाली हो, वह मेरे लिये कहिये। मैं आपका शिष्य हूँ। आपके शरण हुए मुझे शिक्षा दीजिये।
```

notes: low lexical overlap with Hindi reference: score=0.15

### [BG 2.8] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/8/hi

current translation:
```text
पृथ्वी पर निष्कण्टक समृद्ध राज्य को और देवताओं के स्वामित्व को प्राप्त होकर भी मैं उस उपाय को नहीं देखता हूँ, जो मेरी इन्द्रियों को सुखाने वाले इस शोक को दूर कर सके।।
```

reference translation snippet:
```text
।।2.8।। पृथ्वीपर धन-धान्य-समृद्ध और शत्रुरहित राज्य तथा स्वर्गमें देवताओंका आधिपत्य मिल जाय तो भी इन्द्रियोंको सुखानेवाला मेरा जो शोक है, वह दूर हो जाय - ऐसा मैं नहीं देखता हूँ।
```

notes: low lexical overlap with Hindi reference: score=0.03

### [BG 2.9] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/9/hi

current translation:
```text
संजय ने कहा -- इस प्रकार गुडाकेश परंतप अर्जुन भगवान् हृषीकेश से यह कहकर कि हे गोविन्द "मैं युद्ध नहीं करूँगा" चुप हो गया।।
```

reference translation snippet:
```text
।।2.9।। संजय बोले - हे शत्रुतापन धृतराष्ट्र! ऐसा कहकर निद्राको जीतनेवाले अर्जुन अन्तर्यामी भगवान् गोविन्दसे 'मैं युद्ध नहीं करूँगा' ऐसा साफ-साफ कहकर चुप हो गये।
```

notes: low lexical overlap with Hindi reference: score=0.09

### [BG 2.10] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/10/hi

current translation:
```text
हे भारत (धृतराष्ट्र) ! दोनों सेनाओं के बीच में उस शोकमग्न अर्जुन को भगवान् हृषीकेश ने हँसते हुए से यह वचन कहे।।
```

reference translation snippet:
```text
।।2.10।। हे भरतवंशोद्भव धृतराष्ट्र! दोनों सेनाओंके मध्यभागमें विषाद करते हुए उस अर्जुनके प्रति हँसते हुए-से भगवान् हृषीकेश यह (आगे कहे जानेवाले) वचन बोले।
```

notes: low lexical overlap with Hindi reference: score=0.05

### [BG 2.11] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/11/hi

current translation:
```text
श्री भगवान् ने कहा -- (अशोच्यान्) जिनके लिये शोक करना उचित नहीं है, उनके लिये तुम शोक करते हो और ज्ञानियों के से वचनों को कहते हो, परन्तु ज्ञानी पुरुष मृत (गतासून्) और जीवित (अगतासून्) दोनों के लिये शोक नहीं करते हैं।।
```

reference translation snippet:
```text
।।2.11।। श्रीभगवान् बोले - तुमने शोक न करनेयोग्यका शोक किया है और  पण्डिताईकी बातें कह रहे हो; परन्तु जिनके प्राण चले गये हैं, उनके लिये और जिनके प्राण नहीं गये हैं, उनके लिये पण्डितलोग शोक नहीं करते।
```

notes: low lexical overlap with Hindi reference: score=0.03

### [BG 2.12] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/12/hi

current translation:
```text
वास्तव में न तो ऐसा ही है कि मैं किसी काल में नहीं था अथवा तुम नहीं थे अथवा ये राजालोग नहीं थे और न ऐसा ही है कि इससे आगे हम सब नहीं रहेंगे।।
```

reference translation snippet:
```text
।।2.12।। किसी कालमें मैं नहीं था और तू नहीं था तथा ये राजालोग नहीं थे, यह बात भी नहीं है; और इसके बाद (भविष्य में) मैं, तू और राजलोग - हम सभी नहीं रहेंगे, यह बात भी नहीं है।
```

notes: low lexical overlap with Hindi reference: score=0.06

### [BG 2.13] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/13/hi

current translation:
```text
जैसे इस देह में देही जीवात्मा की कुमार, युवा और वृद्धावस्था होती है, वैसे ही उसको अन्य शरीर की प्राप्ति होती है;  धीर पुरुष इसमें मोहित नहीं होता है।।
```

reference translation snippet:
```text
।।2.13।। देहधारीके इस मनुष्यशरीरमें जैसे बालकपन, जवानी और वृद्धावस्था होती है, ऐसे ही देहान्तरकी प्राप्ति होती है। उस विषयमें धीर मनुष्य मोहित नहीं होता।
```

notes: low lexical overlap with Hindi reference: score=0.17

### [BG 2.14] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/14/hi

current translation:
```text
हे कुन्तीपुत्र ! शीत और उष्ण और सुख दुख को देने वाले इन्द्रिय और विषयों के संयोग का प्रारम्भ और अन्त होता है;  वे अनित्य हैं,  इसलिए,  हे भारत ! उनको तुम सहन करो।।
```

reference translation snippet:
```text
।।2.14।। हे कुन्तीनन्दन! इन्द्रियोंके जो विषय (जड पदार्थ) हैं, वो तो शीत (अनुकूलता) और उष्ण (प्रतिकूलता) - के द्वारा सुख और दुःख देनेवाले हैं तथा आने-जानेवाले और अनित्य हैं। हे भरतवंशोद्भव अर्जुन! उनको तुम सहन करो।
```

notes: low lexical overlap with Hindi reference: score=0.06

### [BG 2.15] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/15/hi

current translation:
```text
हे पुरुषश्रेष्ठ ! दुख और सुख में समान भाव से रहने वाले जिस धीर पुरुष को ये व्यथित नहीं कर सकते हैं वह अमृतत्व (मोक्ष) का अधिकारी होता है।।
```

reference translation snippet:
```text
।।2.15।। कारण कि हे पुरुषोंमें श्रेष्ठ अर्जुन! सुख-दुःखमें सम रहनेवाले जिस धीर मनुष्यको ये मात्रास्पर्श (पदार्थ) व्यथित (सुखी-दुःखी) नहीं कर पाते, वह अमर होनेमें समर्थ हो जाता है अर्थात् वह अमर हो जाता है।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.16] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/16/hi

current translation:
```text
असत् वस्तु का तो अस्तित्व नहीं है और सत् का कभी अभाव नहीं है। इस प्रकार इन दोनों का ही तत्त्व,  तत्त्वदर्शी ज्ञानी पुरुषों के द्वारा देखा गया है।।
```

reference translation snippet:
```text
।।2.16।। (टिप्पणी प0 55) असत् का तो भाव (सत्ता) विद्यमान नहीं है और सत् का अभाव विद्यमान नहीं है, तत्त्वदर्शी महापुरुषोंने इन दोनोंका ही अन्त अर्थात् तत्त्व देखा है।
```

notes: low lexical overlap with Hindi reference: score=0.12

### [BG 2.17] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/17/hi

current translation:
```text
उस वस्तु को तुम अविनाशी जानों,  जिससे यह सम्पूर्ण जगत् व्याप्त है। इस अव्यय का नाश करने में कोई भी समर्थ नहीं है।।
```

reference translation snippet:
```text
।।2.17।। अविनाशी तो उसको जान, जिससे यह सम्पूर्ण संसार व्याप्त है। इस अविनाशीका विनाश कोई भी नहीं कर सकता।
```

notes: low lexical overlap with Hindi reference: score=0.11

### [BG 2.18] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/18/hi

current translation:
```text
इस नाशरहित अप्रमेय नित्य देही आत्मा के ये सब शरीर नाशवान् कहे गये हैं। इसलिये हे भारत ! तुम युद्ध करो।।
```

reference translation snippet:
```text
।।2.18।। अविनाशी, अप्रमेय और नित्य रहनेवाले इस शरीरी के ये देह अन्तवाले कहे गये हैं। इसलिये हे अर्जुन! तुम युद्ध करो।
```

notes: low lexical overlap with Hindi reference: score=0.22

### [BG 2.19] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/19/hi

current translation:
```text
जो इस आत्मा को मारने वाला समझता है और जो इसको मरा समझता है वे दोनों ही नहीं जानते हैं,  क्योंकि यह आत्मा न मरता है और न मारा जाता है।।
```

reference translation snippet:
```text
।।2.19।। जो मनुष्य इस अविनाशी शरीरीको मारनेवाला मानता है और जो मनुष्य इसको मरा मानता है, वे दोनों ही इसको नहीं जानते; क्योंकि यह न मारता है और न मारा जाता है।
```

notes: low lexical overlap with Hindi reference: score=0.24

### [BG 2.20] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/20/hi

current translation:
```text
यह आत्मा किसी काल में भी न जन्मता है और न मरता है और न यह एक बार होकर फिर अभावरूप होने वाला है। यह आत्मा अजन्मा, नित्य, शाश्वत और पुरातन है,  शरीर के नाश होने पर भी इसका नाश नहीं होता।।
```

reference translation snippet:
```text
।।2.20।। यह शरीरी न कभी जन्मता है और न मरता है तथा यह उत्पन्न होकर फिर होनेवाला नहीं है। यह जन्मरहित, नित्य-निरन्तर रहनेवाला, शाश्वत और पुराण (अनादि) है। शरीरके मारे जानेपर भी यह नहीं मारा जाता।
```

notes: low lexical overlap with Hindi reference: score=0.11

### [BG 2.21] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/21/hi

current translation:
```text
हे पार्थ ! जो पुरुष इस आत्मा को अविनाशी,  नित्य और अव्ययस्वरूप जानता है,  वह कैसे किसको मरवायेगा और कैसे किसको मारेगा?
```

reference translation snippet:
```text
।।2.21।। हे पृथानन्दन! जो मनुष्य इस शरीरीको अविनाशी, नित्य, जन्मरहित और अव्यय जानता है, वह कैसे किसको मारे और कैसे किसको मरवाये?
```

notes: low lexical overlap with Hindi reference: score=0.21

### [BG 2.22] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/22/hi

current translation:
```text
जैसे मनुष्य जीर्ण वस्त्रों को त्यागकर दूसरे नये वस्त्रों को धारण करता है, वैसे ही देही जीवात्मा पुराने शरीरों को त्याग कर दूसरे नए शरीरों को प्राप्त होता है।।
```

reference translation snippet:
```text
।।2.22।। मनुष्य जैसे पुराने कपड़ोंको छोड़कर दूसरे नये कपड़े धारण कर लेता है, ऐसे ही देही पुराने शरीरोंको छोड़कर दूसरे नये शरीरोंमें चला जाता है।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.23] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/23/hi

current translation:
```text
इस आत्मा को शस्त्र काट नहीं सकते और न अग्नि इसे जला सकती है ; जल इसे गीला नहीं कर सकता और वायु इसे सुखा नहीं सकती।।
```

reference translation snippet:
```text
।।2.23।। शस्त्र इस शरीरीको काट नहीं सकते, अग्नि इसको जला नहीं सकती, जल इसको गीला नहीं कर सकता और वायु इसको सुखा नहीं सकती।
```

notes: low lexical overlap with Hindi reference: score=0.27

### [BG 2.24] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/24/hi

current translation:
```text
क्योंकि यह आत्मा अच्छेद्य (काटी नहीं जा सकती),  अदाह्य (जलाई नहीं जा सकती),  अक्लेद्य (गीली नहीं हो सकती ) और अशोष्य (सुखाई नहीं जा सकती) है;  यह नित्य,  सर्वगत,  स्थाणु (स्थिर),  अचल और सनातन है।।
```

reference translation snippet:
```text
।।2.24।। यह शरीरी काटा नहीं जा सकता, यह जलाया नहीं जा सकता, यह गीला नहीं किया जा सकता और यह सुखाया भी नहीं जा सकता। कारण कि यह नित्य रहनेवाला सबमें परिपूर्ण, अचल, स्थिर स्वभाववाला और अनादि है।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.25] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/25/hi

current translation:
```text
यह आत्मा अव्यक्त,  अचिन्त्य और अविकारी कहा जाता है;  इसलिए इसको इस प्रकार जानकर तुमको शोक करना उचित नहीं है।।
```

reference translation snippet:
```text
।।2.25।। यह देही प्रत्यक्ष नहीं दीखता, यह चिन्तनका विषय नहीं है और यह निर्विकार कहा जाता है। अतः इस देहीको ऐसा जानकर शोक नहीं करना चाहिये।
```

notes: low lexical overlap with Hindi reference: score=0.05

### [BG 2.26] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/26/hi

current translation:
```text
और यदि तुम आत्मा को नित्य जन्मने और नित्य मरने वाला मानो तो भी,  हे महाबाहो !  इस प्रकार शोक करना तुम्हारे लिए उचित नहीं है।।
```

reference translation snippet:
```text
।।2.26।। हे महाबाहो ! अगर तुम इस देहीको नित्य पैदा होनेवाला अथवा नित्य मरनेवाला भी मानो, तो भी तुम्हें इस प्रकार शोक नहीं करना चाहिये।
```

notes: low lexical overlap with Hindi reference: score=0.09

### [BG 2.27] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/27/hi

current translation:
```text
जन्मने वाले की मृत्यु निश्चित है और मरने वाले का जन्म निश्चित है;  इसलिए जो अटल है अपरिहार्य - है उसके विषय में तुमको शोक नहीं करना चाहिये।।
```

reference translation snippet:
```text
।।2.27।। क्योंकि पैदा हुएकी जरूर मृत्यु होगी और मरे हुएका जरूर जन्म होगा। इस (जन्म-मरण-रूप परिवर्तन के प्रवाह) का परिहार अर्थात् निवारण नहीं हो सकता। अतः इस विषयमें तुम्हें शोक नहीं करना चाहिये।
```

notes: low lexical overlap with Hindi reference: score=0.07

### [BG 2.28] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/28/hi

current translation:
```text
हे भारत ! समस्त प्राणी जन्म से पूर्व और मृत्यु के बाद अव्यक्त अवस्था में रहते हैं और बीच में व्यक्त होते हैं। फिर उसमें चिन्ता या शोक की क्या बात है ?
```

reference translation snippet:
```text
।।2.28।। हे भारत ! सभी प्राणी जन्मसे पहले अप्रकट थे और मरनेके बाद अप्रकट हो जायँगे, केवल बीचमें ही प्रकट दीखते हैं। अतः इसमें शोक करनेकी बात ही क्या है?
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.29] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/29/hi

current translation:
```text
कोई इसे आश्चर्य के समान देखता है;  कोई इसके विषय में आश्चर्य के समान कहता है;  और कोई अन्य पुरुष इसे आश्चर्य के समान सुनता है;  और फिर कोई सुनकर भी नहीं जानता।।
```

reference translation snippet:
```text
।।2.29।। कोई इस शरीरीको आश्चर्यकी तरह देखता है और वैसे ही अन्य कोई इसका आश्चर्यकी तरह वर्णन करता है तथा अन्य कोई इसको आश्चर्यकी तरह सुनता है; और इसको सुनकर भी कोई नहीं जानता। अर्थात यह शरीरी दुर्विज्ञेय है।
```

notes: low lexical overlap with Hindi reference: score=0.03

### [BG 2.30] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/30/hi

current translation:
```text
हे भारत ! यह देही आत्मा सबके शरीर में सदा ही अवध्य है, इसलिए समस्त प्राणियों के लिए तुम्हें शोक करना उचित नहीं।।
```

reference translation snippet:
```text
।।2.30।। हे भरतवंशोद्भव अर्जुन! सबके देहमें यह देही नित्य ही अवध्य है। इसलिये सम्पूर्ण प्राणियोंके लिये अर्थात् किसी भी प्राणीके लिये तुम्हें शोक नहीं करना चाहिये।
```

notes: low lexical overlap with Hindi reference: score=0.05

### [BG 2.31] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/31/hi

current translation:
```text
और स्वधर्म को भी देखकर तुमको विचलित होना उचित नहीं है,  क्योंकि धर्मयुक्त युद्ध से बढ़कर दूसरा कोई कल्याणकारक कर्त्तव्य क्षत्रिय के लिये नहीं है।।
```

reference translation snippet:
```text
।।2.31।। अपने स्वधर्म (क्षात्रधर्म) को देखकर भी तुम्हें विकम्पित अर्थात् कर्तव्य-कर्मसे विचलित नहीं होना चाहिये; क्योंकि धर्ममय युद्धसे बढ़कर क्षत्रियके लिये दूसरा कोई कल्याणकारक कर्म नहीं है।
```

notes: low lexical overlap with Hindi reference: score=0.04

### [BG 2.32] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/32/hi

current translation:
```text
और हे पार्थ ! अपने आप प्राप्त हुए और स्वर्ग के लिए खुले हुए द्वाररूप इस प्रकार के युद्ध को भाग्यवान क्षत्रिय लोग ही पाते हैं।।
```

reference translation snippet:
```text
।।2.32।। अपने-आप प्राप्त हुआ युद्ध खुला हुआ स्वर्गका दरवाजा भी है। हे पृथानन्दन ! वे क्षत्रिय बड़े सुखी (भाग्यशाली) हैं, जिनको ऐसा युद्ध प्राप्त होता है।
```

notes: low lexical overlap with Hindi reference: score=0.04

### [BG 2.33] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/33/hi

current translation:
```text
और यदि तुम इस धर्मयुद्ध को स्वीकार नहीं करोगे,  तो स्वधर्म और कीर्ति को खोकर पाप को प्राप्त करोगे।।
```

reference translation snippet:
```text
।।2.33।। अब अगर तू यह धर्ममय युद्ध नहीं करेगा,  तो अपने धर्म और कीर्तिका त्याग करके पापको प्राप्त होगा।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.34] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/34/hi

current translation:
```text
और सब लोग तुम्हारी बहुत काल तक रहने वाली अपकीर्ति को भी कहते रहेंगे;  और सम्मानित पुरुष के लिए अपकीर्ति मरण से भी अधिक होती है।।
```

reference translation snippet:
```text
।।2.34।। और सब प्राणी भी तेरी सदा रहनेवाली अपकीर्तिका कथन अर्थात निंदा करेंगे। वह अपकीर्ति सम्मानित मनुष्यके लिये मृत्युसे भी बढ़कर दुःखदायी होती है।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.35] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/35/hi

current translation:
```text
और जिनके लिए तुम बहुत माननीय हो उनके लिए अब तुम तुच्छता को प्राप्त होओगे,  वे महारथी लोग तुम्हें भय के कारण युद्ध से निवृत्त हुआ मानेंगे।।
```

reference translation snippet:
```text
।।2.35।।  महारथीलोग तुझे भयके कारण युद्धसे उपरत (हटा) हुआ मानेंगे। जिनकी धारणामें तू बहुमान्य हो चुका है, उनकी दृष्टिमें तू लघुताको प्राप्त हो जायगा।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.36] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/36/hi

current translation:
```text
तुम्हारे शत्रु तुम्हारे सार्मथ्य की निन्दा करते हुए बहुत से अकथनीय वचनों को कहेंगे,  फिर उससे अधिक दु:ख क्या होगा ?
```

reference translation snippet:
```text
।।2.36।। तेरे शत्रुलोग तेरी सार्मथ्यकी निन्दा करते हुए न कहनेयोग्य बहुत-से वचन भी कहेंगे। उससे बढ़कर और दुःखकी बात क्या होगी?
```

notes: low lexical overlap with Hindi reference: score=0.05

### [BG 2.37] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/37/hi

current translation:
```text
युद्ध में मरकर तुम स्वर्ग प्राप्त करोगे या जीतकर पृथ्वी को भोगोगे;  इसलिय, हे कौन्तेय ! युद्ध का निश्चय कर तुम खड़े हो जाओ।।
```

reference translation snippet:
```text
।।2.37।। अगर युद्धमें तू मारा जायगा तो तुझे स्वर्गकी प्राप्ति होगी और अगर युद्धमें तू जीत जायगा तो पृथ्वीका राज्य भोगेगा। अतः हे कुन्तीनन्दन! तू युद्धके लिये निश्चय करके खड़ा हो जा।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.38] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/38/hi

current translation:
```text
सुख-दु:ख,  लाभ-हानि और जय-पराजय को समान करके युद्ध के लिये तैयार हो जाओ;  इस प्रकार तुमको पाप नहीं होगा।।
```

reference translation snippet:
```text
।।2.38।। जय-पराजय, लाभ-हानि और सुख-दुःखको समान करके फिर युद्धमें लग जा। इस प्रकार युद्ध करनेसे तू पापको प्राप्त नहीं होगा।
```

notes: low lexical overlap with Hindi reference: score=0.05

### [BG 2.39] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/39/hi

current translation:
```text
हे पार्थ ! तुम्हें सांख्य विषयक ज्ञान कहा गया और अब इस (कर्म) योग से सम्बन्धित ज्ञान को सुनो जिस ज्ञान से युक्त होकर तुम कर्मबन्ध का नाश कर सकोगे।।
```

reference translation snippet:
```text
।।2.39।। हे पार्थ! यह समबुद्धि तेरे लिए पहले सांख्ययोगमें कही गयी, अब तू इसको कर्मयोगके विषयमें सुन; जिस समबुद्धिसे युक्त हुआ तू कर्मबन्धनका त्याग कर देगा।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.40] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/40/hi

current translation:
```text
इसमें क्रमनाश और प्रत्यवाय दोष नहीं है। इस धर्म (योग) का अल्प अभ्यास भी महान् भय से रक्षण करता है।।
```

reference translation snippet:
```text
।।2.40।। मनुष्यलोकमें इस समबुद्धिरूप धर्मके आरम्भका नाश नहीं होता, इसके अनुष्ठानका उलटा फल भी नहीं होता और इसका थोड़ासा भी अनुष्ठान (जन्म-मरणरूप) महान् भयसे रक्षा कर लेता है।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.41] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/41/hi

current translation:
```text
हे कुरुनन्दन ! इस (विषय) में निश्चयात्मक बुद्धि एक ही है, अज्ञानी पुरुषों की बुद्धियां (संकल्प) बहुत भेदों वाली और अनन्त होती हैं।।
```

reference translation snippet:
```text
।।2.41।। हे कुरुनन्दन! इस समबुद्धिकी प्राप्तिके विषयमें व्यवसायात्मिका बुद्धि एक ही होती है। अव्यवसायी मनुष्योंकी बुद्धियाँ अनन्त और बहुशाखाओंवाली ही होती हैं।
```

notes: low lexical overlap with Hindi reference: score=0.10

### [BG 2.42] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/42/hi

current translation:
```text
हे पार्थ  अविवेकी पुरुष वेदवाद में रमते हुये जो यह पुष्पिता (दिखावटी शोभा की) वाणी बोलते हैं? इससे (स्वर्ग से) बढ़कर और कुछ नहीं है।।।
```

reference translation snippet:
```text
।।2.42 -- 2.43।। हे पृथानन्दन ! जो कामनाओंमें तन्मय हो रहे हैं, स्वर्गको ही श्रेष्ठ माननेवाले हैं, वेदोंमें कहे हुए सकाम कर्मोंमें प्रीति रखनेवाले हैं, भोगोंके सिवाय और कुछ है ही नहीं - ऐसा कहनेवाले हैं, वे अविवेकी मनुष्य इस प्रकारकी जिस पुष्पित (दिखाऊ शोभायुक्त) वाणीको कहा करते हैं, जो कि जन्मरूपी कर्मफलको देनेवाली है तथा भोग और ऐश्वर्यकी प्राप्तिके लिये बहुतसी क्रियाओंका वर्णन करनेवाली है।
।।2.42 -- 2.43।। हे पृथानन्दन ! जो कामनाओंमें तन्मय हो रहे हैं, स्वर्गको ही श्रेष्ठ माननेवाले हैं, वेदोंम
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.43] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/43/hi

current translation:
```text
कामनाओं से युक्त? स्वर्ग को ही श्रेष्ठ मानने वाले लोग भोग और ऐश्वर्य को प्राप्त कराने वाली अनेक क्रियाओं को बताते हैं जो (वास्तव में) जन्मरूप कर्मफल को देने वाली होती हैं।।
```

reference translation snippet:
```text
।।2.42 -- 2.43।। हे पृथानन्दन ! जो कामनाओंमें तन्मय हो रहे हैं, स्वर्गको ही श्रेष्ठ माननेवाले हैं, वेदोंमें कहे हुए सकाम कर्मोंमें प्रीति रखनेवाले हैं, भोगोंके सिवाय और कुछ है ही नहीं - ऐसा कहनेवाले हैं, वे अविवेकी मनुष्य इस प्रकारकी जिस पुष्पित (दिखाऊ शोभायुक्त) वाणीको कहा करते हैं, जो कि जन्मरूपी कर्मफलको देनेवाली है तथा भोग और ऐश्वर्यकी प्राप्तिके लिये बहुतसी क्रियाओंका वर्णन करनेवाली है।
।।2.42 -- 2.43।। हे पृथानन्दन ! जो कामनाओंमें तन्मय हो रहे हैं, स्वर्गको ही श्रेष्ठ माननेवाले हैं, वेदोंम
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.44] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/44/hi

current translation:
```text
उससे जिनका चित्त हर लिया गया है ऐसे भोग और एश्र्वर्य‌ मॆ आसक्ति रखने वाले पुरुषों के अन्तकरण मे निश्चयात्मक् बुद्धि नही हॊती अर्थात वे ध्यान का अभ्यास करने योग्य‌ नही होते।
```

reference translation snippet:
```text
।।2.44।। उस पुष्पित वाणीसे जिसका अन्तःकरण हर लिया गया है अर्थात् भोगोंकी तरफ खिंच गया है और जो भोग तथा ऐश्वर्यमें अत्यन्त आसक्त हैं, उन मनुष्योंकी परमात्मामें निश्चयात्मिका बुद्धि नहीं होती।
```

notes: low lexical overlap with Hindi reference: score=0.07

### [BG 2.45] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/45/hi

current translation:
```text
हे अर्जुन  वेदों का विषय तीन गुणों से सम्बन्धित (संसार से) है  तुम त्रिगुणातीत? निर्द्वन्द्व? नित्य सत्त्व (शुद्धता) में स्थित? योगक्षेम से रहित और आत्मवान् बनो।।
```

reference translation snippet:
```text
।।2.45।। वेद तीनों गुणोंके कार्यका ही वर्णन करनेवाले हैं; हे अर्जुन! तू तीनों गुणोंसे रहित हो जा, निर्द्वन्द्व हो जा, निरन्तर नित्य वस्तु परमात्मा में स्थित हो जा, योगक्षेमकी चाहना भी मत रख और परमात्मपरायण हो जा।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.46] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/46/hi

current translation:
```text
सब ओर से परिपूर्ण जलराशि के होने पर मनुष्य का छोटे जलाशय में जितना प्रयोजन रहता है? आत्मज्ञानी ब्राह्मण का सभी वेदों में उतना ही प्रयोजन रहता है।।
```

reference translation snippet:
```text
।।2.46।। सब तरफसे परिपूर्ण महान् जलाशयके प्राप्त होनेपर छोटे गड्ढों में भरे जल में मनुष्यका जितना प्रयोजन रहता है अर्थात् कुछ भी प्रयोजन नहीं रहता, वेदों और शास्त्रोंको तत्त्वसे जाननेवाले ब्रह्मज्ञानीका सम्पूर्ण वेदोंमें उतना ही प्रयोजन रहता है अर्थात् कुछ भी प्रयोजन नहीं रहता।
```

notes: low lexical overlap with Hindi reference: score=0.14

### [BG 2.47] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/47/hi

current translation:
```text
कर्म करने मात्र में तुम्हारा अधिकार है? फल में कभी नहीं। तुम कर्मफल के हेतु वाले मत होना और अकर्म में भी तुम्हारी आसक्ति न हो।।
```

reference translation snippet:
```text
।।2.47।। कर्तव्य-कर्म करनेमें ही तेरा अधिकार है, फलोंमें कभी नहीं। अतः तू कर्मफलका हेतु भी मत बन और तेरी अकर्मण्यतामें भी आसक्ति न हो।
```

notes: low lexical overlap with Hindi reference: score=0.04

### [BG 2.48] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/48/hi

current translation:
```text
हे धनंजय  आसक्ति को त्याग कर तथा सिद्धि और असिद्धि में समभाव होकर योग में स्थित हुये तुम कर्म करो। यह समभाव ही योग कहलाता है।।
```

reference translation snippet:
```text
।।2.48।। हे धनञ्जय ! तू आसक्तिका त्याग करके सिद्धि-असिद्धिमें सम होकर योगमें स्थित हुआ कर्मोंको कर; क्योंकि समत्व ही योग कहा जाता है।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.49] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/49/hi

current translation:
```text
इस बुद्धियोग की तुलना में(सकाम) कर्म अत्यन्त निकृष्ट हैं? इसलिये हे धनंजय  तुम बद्धि की शरण लो फल की इच्छा करनेवाले कृपण (दीन) हैं।।
```

reference translation snippet:
```text
।।2.49।। बुद्धियोग-(समता) की अपेक्षा सकामकर्म दूरसे (अत्यन्त) ही निकृष्ट है। अतः हे धनञ्जय ! तू बुद्धि (समता) का आश्रय ले; क्योंकि फलके हेतु बननेवाले अत्यन्त दीन हैं।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.50] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/50/hi

current translation:
```text
समत्वबुद्धि युक्त पुरुष यहां (इस जीवन में) पुण्य और पाप इन दोनों कर्मों को त्याग देता है? इसलिये तुम योग से युक्त हो जाओ। कर्मों में कुशलता योग है।।
```

reference translation snippet:
```text
।।2.50।। बुद्धि-(समता) से युक्त मनुष्य यहाँ जीवित अवस्थामें ही पुण्य और पाप दोनोंका त्याग कर देता है। अतः तू योग-(समता-) में लग जा, क्योंकि योग ही कर्मोंमें कुशलता है।
```

notes: low lexical overlap with Hindi reference: score=0.04

### [BG 2.51] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/51/hi

current translation:
```text
बुद्धियोग युक्त मनीषी लोग कर्मजन्य फलों को त्यागकर जन्मरूप बन्धन से मुक्त हुये अनामय अर्थात् निर्दोष पद को प्राप्त होते हैं।।
```

reference translation snippet:
```text
।।2.51।। समतायुक्त मनीषी साधक कर्मजन्य फलका त्याग करके जन्मरूप बन्धनसे मुक्त होकर निर्विकार पदको प्राप्त हो जाते हैं।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.52] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/52/hi

current translation:
```text
जब तुम्हारी बुद्धि मोहरूप दलदल (कलिल) को तर जायेगी तब तुम उन सब वस्तुओं से निर्वेद (वैराग्य) को प्राप्त हो जाओगे? जो सुनने योग्य और सुनी हुई हैं।।
```

reference translation snippet:
```text
।।2.52।। जिस समय तेरी बुद्धि मोहरूपी दलदलको तर जायगी, उसी समय तू सुने हुए और सुननेमें आनेवाले भोगोंसे वैराग्यको प्राप्त हो जायगा।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.53] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/53/hi

current translation:
```text
जब अनेक प्रकार के विषयों को सुनने से विचलित हुई तुम्हारी बुद्धि आत्मस्वरूप में अचल और स्थिर हो जायेगी तब तुम (परमार्थ) योग को प्राप्त करोगे।।
```

reference translation snippet:
```text
।।2.53।। जिस कालमें शास्त्रीय मतभेदोंसे विचलित हुई तेरी बुद्धि निश्चल हो जायगी और परमात्मामें अचल हो जायगी, उस कालमें तू योगको प्राप्त हो जायगा।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.54] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/54/hi

current translation:
```text
अर्जुन ने कहा -- हे केशव  समाधि में स्थित स्थिर बुद्धि वाले पुरुष का क्या लक्षण है स्थिर बुद्धि पुरुष कैसे बोलता है कैसे बैठता है  कैसे चलता है
```

reference translation snippet:
```text
।।2.54।। अर्जुन बोले - हे केशव ! परमात्मामें स्थित स्थिर बुद्धिवाले मनुष्यके क्या लक्षण होते हैं? वह स्थिर बुद्धिवाला मनुष्य कैसे बोलता है, कैसे बैठता है और कैसे चलता है?
```

notes: low lexical overlap with Hindi reference: score=0.20

### [BG 2.55] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/55/hi

current translation:
```text
श्री भगवान् ने कहा -- हे पार्थ? जिस समय पुरुष मन में स्थित सब कामनाओं को त्याग देता है और आत्मा से ही आत्मा में सन्तुष्ट रहता है? उस समय वह स्थितप्रज्ञ कहलाता है।।
```

reference translation snippet:
```text
।।2.55।। श्रीभगवान् बोले - हे पृथानन्दन ! जिस कालमें साधक मनोगत सम्पूर्ण कामनाओंका अच्छी तरह त्याग कर देता है और अपने-आपसे अपने-आपमें ही सन्तुष्ट रहता है, उस कालमें वह स्थितप्रज्ञ कहा जाता है।
```

notes: low lexical overlap with Hindi reference: score=0.10

### [BG 2.56] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/56/hi

current translation:
```text
दुख में जिसका मन उद्विग्न नहीं होता सुख में जिसकी स्पृहा निवृत्त हो गयी है? जिसके मन से राग? भय और क्रोध नष्ट हो गये हैं? वह मुनि स्थितप्रज्ञ कहलाता है।।
```

reference translation snippet:
```text
।।2.56।। दुःखोंकी प्राप्ति होनेपर जिसके मनमें उद्वेग नहीं होता और सुखोंकी प्राप्ति होनेपर जिसके मनमें स्पृहा नहीं होती तथा जो राग, भय और क्रोधसे सर्वथा रहित हो गया है, वह मननशील मनुष्य स्थिरबुद्धि कहा जाता है।
```

notes: low lexical overlap with Hindi reference: score=0.03

### [BG 2.57] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/57/hi

current translation:
```text
जो सर्वत्र अति स्नेह से रहित हुआ उन शुभ तथा अशुभ वस्तुओं को प्राप्त कर न प्रसन्न होता है और न द्वेष करता है? उसकी प्रज्ञा प्रतिष्ठित (स्थिर) है।।
```

reference translation snippet:
```text
।।2.57।। सब जगह आसक्तिरहित हुआ जो मनुष्य उस-उस शुभ-अशुभको प्राप्त करके न तो अभिनन्दित होता है और न द्वेष करता है, उसकी बुद्धि प्रतिष्ठित है।
```

notes: low lexical overlap with Hindi reference: score=0.24

### [BG 2.58] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/58/hi

current translation:
```text
कछुवा अपने अंगों को जैसे समेट लेता है वैसे ही यह पुरुष जब सब ओर से अपनी इन्द्रियों को इन्द्रियों के विषयों से परावृत्त कर लेता है? तब उसकी बुद्धि स्थिर होती है।।
```

reference translation snippet:
```text
।।2.58।। जिस तरह कछुआ अपने अङ्गोंको सब ओरसे समेट लेता है, ऐसे ही जिस कालमें यह कर्मयोगी इन्द्रियोंके विषयोंसे इन्द्रियोंको सब प्रकारसे समेट लेता (हटा लेता) है, तब उसकी बुद्धि प्रतिष्ठित हो जाती है।
```

notes: low lexical overlap with Hindi reference: score=0.13

### [BG 2.59] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/59/hi

current translation:
```text
निराहारी देही पुरुष से विषय तो निवृत्त (दूर) हो जाते हैं? परन्तु (उनके प्रति) राग नहीं  परम तत्व को देखने पर इस (पुरुष) का राग भी निवृत्त हो जाता है।।
```

reference translation snippet:
```text
।।2.59।। निराहारी (इन्द्रियोंको विषयोंसे हटानेवाले) मनुष्यके भी विषय तो निवृत्त हो जाते हैं, पर रस निवृत्त नहीं होता। परन्तु इस स्थितप्रज्ञ मनुष्यका तो रस भी परमात्मतत्त्वका अनुभव होनेसे निवृत्त हो जाता है।
```

notes: low lexical overlap with Hindi reference: score=0.14

### [BG 2.60] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/60/hi

current translation:
```text
हे कौन्तेय  (संयम का) प्रयत्न करते हुए बुद्धिमान (विपश्चित) पुरुष के भी मन को ये इन्द्रियां बलपूर्वक हर लेती हैं।।
```

reference translation snippet:
```text
।।2.60।। हे कुन्तीनन्दन! (रसबुद्धि रहनेसे) यत्न करते हुए विद्वान् मनुष्यकी भी प्रमथनशील इन्द्रियाँ उसके मनको बलपूर्वक हर लेती हैं।
```

notes: low lexical overlap with Hindi reference: score=0.12

### [BG 2.61] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/61/hi

current translation:
```text
उन सब इन्द्रियों को संयमित कर युक्त और मत्पर होवे। जिस पुरुष की इन्द्रियां वश में होती हैं? उसकी प्रज्ञा प्रतिष्ठित होती है।।
```

reference translation snippet:
```text
।।2.61।। कर्मयोगी साधक उन सम्पूर्ण इन्द्रियोंको वशमें करके मेरे परायण होकर बैठे; क्योंकि जिसकी इन्द्रियाँ वशमें हैं, उसकी बुद्धि प्रतिष्ठित है।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.62] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/62/hi

current translation:
```text
विषयों का चिन्तन करने वाले पुरुष की उसमें आसक्ति हो जाती है? आसक्ति से इच्छा और इच्छा से क्रोध उत्पन्न होता है।।
```

reference translation snippet:
```text
।।2.62 -- 2.63।। विषयोंका चिन्तन करनेवाले मनुष्यकी उन विषयोंमें आसक्ति पैदा हो जाती है। आसक्तिसे कामना पैदा होती है। कामनासे क्रोध पैदा होता है। क्रोध होनेपर सम्मोह (मूढ़भाव) हो जाता है। सम्मोहसे स्मृति भ्रष्ट हो जाती है। स्मृति भ्रष्ट होनेपर बुद्धिका नाश हो जाता है। बुद्धिका नाश होनेपर मनुष्यका पतन हो जाता है।
```

notes: low lexical overlap with Hindi reference: score=0.03

### [BG 2.63] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/63/hi

current translation:
```text
क्रोध से उत्पन्न होता है मोह और मोह से स्मृति विभ्रम। स्मृति के भ्रमित होने पर बुद्धि का नाश होता है और बुद्धि के नाश होने से वह मनुष्य नष्ट हो जाता है।।
```

reference translation snippet:
```text
।।2.62 -- 2.63।। विषयोंका चिन्तन करनेवाले मनुष्यकी उन विषयोंमें आसक्ति पैदा हो जाती है। आसक्तिसे कामना पैदा होती है। कामनासे क्रोध पैदा होता है। क्रोध होनेपर सम्मोह (मूढ़भाव) हो जाता है। सम्मोहसे स्मृति भ्रष्ट हो जाती है। स्मृति भ्रष्ट होनेपर बुद्धिका नाश हो जाता है। बुद्धिका नाश होनेपर मनुष्यका पतन हो जाता है।
```

notes: low lexical overlap with Hindi reference: score=0.03

### [BG 2.64] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/64/hi

current translation:
```text
आत्मसंयमी (विधेयात्मा) पुरुष रागद्वेष से रहित अपने वश में की हुई (आत्मवश्यै) इन्द्रियों द्वारा विषयों को भोगता हुआ प्रसन्नता (प्रस्ेााद) प्राप्त करता है।।
```

reference translation snippet:
```text
।।2.64 -- 2.65।। वशीभूत अन्तःकरणवाला कर्मयोगी साधक रागद्वेषसे रहित अपने वशमें की हुई इन्द्रियोंके द्वारा विषयोंका सेवन करता हुआ अन्तःकरणकी निर्मलता को प्राप्त हो जाता है। निर्मलता प्राप्त होनेपर साधकके सम्पूर्ण दुःखोंका नाश हो जाता है और ऐसे शुद्ध चित्तवाले साधककी बुद्धि निःसन्देह बहुत जल्दी परमात्मामें स्थिर हो जाती है।
```

notes: low lexical overlap with Hindi reference: score=0.00

### [BG 2.65] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/65/hi

current translation:
```text
प्रसाद के होने पर सम्पूर्ण दुखों का अन्त हो जाता है और प्रसन्नचित्त पुरुष की बुद्धि ही शीघ्र ही स्थिर हो जाती है।।
```

reference translation snippet:
```text
।।2.64 -- 2.65।। वशीभूत अन्तःकरणवाला कर्मयोगी साधक रागद्वेषसे रहित अपने वशमें की हुई इन्द्रियोंके द्वारा विषयोंका सेवन करता हुआ अन्तःकरणकी निर्मलता को प्राप्त हो जाता है। निर्मलता प्राप्त होनेपर साधकके सम्पूर्ण दुःखोंका नाश हो जाता है और ऐसे शुद्ध चित्तवाले साधककी बुद्धि निःसन्देह बहुत जल्दी परमात्मामें स्थिर हो जाती है।
```

notes: low lexical overlap with Hindi reference: score=0.12

### [BG 2.66] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/66/hi

current translation:
```text
(संयमरहित) अयुक्त पुरुष को (आत्म) ज्ञान नहीं होता और अयुक्त को भावना और ध्यान की क्षमता नहीं होती भावना रहित पुरुष को शान्ति नहीं मिलती अशान्त पुरुष को सुख कहाँ
```

reference translation snippet:
```text
।।2.66।। जिसके मन-इन्द्रियाँ संयमित नहीं हैं, ऐसे मनुष्यकी व्यवसायात्मिका बुद्धि नहीं होती और व्यवसायात्मिका बुद्धि न होनेसे उसमें कर्तव्यपरायणताकी भावना नहीं होती। ऐसी भावना न होनेसे उसको शान्ति नहीं मिलती। फिर शान्तिरहित मनुष्यको सुख कैसे मिल सकता है?
```

notes: low lexical overlap with Hindi reference: score=0.03

### [BG 2.67] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/67/hi

current translation:
```text
जल में वायु जैसे नाव को हर लेता है वैसे ही विषयों में विरचती हुई इन्द्रियों के बीच में जिस इन्द्रिय का अनुकरण मन करता है? वह एक ही इन्द्रिय इसकी प्रज्ञा को हर लेती है।।
```

reference translation snippet:
```text
।।2.67।। अपने-अपने विषयोंमें विचरती हुई इन्द्रियोंमेंसे एक ही इन्द्रिय जिस मनको अपना अनुगामी बना लेती है, वह अकेला मन जलमें नौकाको वायुकी तरह इसकी बुद्धिको हर लेता है।
```

notes: low lexical overlap with Hindi reference: score=0.07

### [BG 2.68] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/68/hi

current translation:
```text
इसलिये? हे महाबाहो  जिस पुरुष की इन्द्रियाँ सब प्रकार इन्द्रियों के विषयों के वश में की हुई होती हैं? उसकी बुद्धि स्थिर होती है।।
```

reference translation snippet:
```text
।।2.68।। इसलिये हे महाबाहो ! जिस मनुष्यकी इन्द्रियाँ इन्द्रियोंके विषयोंसे सर्वथा निगृहीत (वशमें की हुई) हैं, उसकी बुद्धि स्थिर है।
```

notes: low lexical overlap with Hindi reference: score=0.21

### [BG 2.69] severity: LOW

source: https://bhagavadgita.io/chapter/2/verse/69/hi

current translation:
```text
सब प्रणियों के लिए जो रात्रि है? उसमें संयमी पुरुष जागता है और जहाँ सब प्राणी जागते हैं? वह (तत्त्व को) देखने वाले मुनि के लिए रात्रि है।।
```

reference translation snippet:
```text
।।2.69।। सम्पूर्ण प्राणियों की जो रात (परमात्मासे विमुखता) है, उसमें संयमी मनुष्य जागता है, और जिसमें सब प्राणी जागते हैं (भोग और संग्रहमें लगे रहते हैं), वह तत्त्वको जाननेवाले मुनिकी दृष्टिमें रात है।
```

notes: low lexical overlap with Hindi reference: score=0.14

### [BG 2.70] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/70/hi

current translation:
```text
जैसे सब ओर से परिपूर्ण अचल प्रतिष्ठा वाले समुद्र में (अनेक नदियों के) जल (उसे विचलित किये बिना) समा जाते हैं? वैसे ही जिस पुरुष के प्रति कामनाओं के विषय उसमें (विकार उत्पन्न किये बिना) समा जाते हैं? वह पुरुष शान्ति प्राप्त करता है? न कि भोगों की कामना करने वाला पुरुष।।
```

reference translation snippet:
```text
।।2.70।। जैसे सम्पूर्ण नदियोंका जल चारों ओरसे जलद्वारा परिपूर्ण समुद्रमें आकर मिलता है, पर समुद्र अपनी मर्यादामें अचल प्रतिष्ठित रहता है ऐसे ही सम्पूर्ण भोग-पदार्थ जिस संयमी मनुष्य को विकार उत्पन्न किये बिना ही उसको प्राप्त होते हैं, वही मनुष्य परमशान्तिको प्राप्त होता है, भोगोंकी कामनावाला नहीं।
```

notes: low lexical overlap with Hindi reference: score=0.04

### [BG 2.71] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/71/hi

current translation:
```text
जो पुरुष सब कामनाओं को त्यागकर स्पृहारहित? ममभाव रहित और निरहंकार हुआ विचरण करता है? वह शान्ति प्राप्त करता है।।
```

reference translation snippet:
```text
।।2.71।। जो मनुष्य सम्पूर्ण कामनाओंका त्याग करके स्पृहारहित, ममतारहित और अहंकाररहित होकर आचरण करता है, वह शान्तिको प्राप्त होता है।
```

notes: low lexical overlap with Hindi reference: score=0.06

### [BG 2.72] severity: MEDIUM

source: https://bhagavadgita.io/chapter/2/verse/72/hi

current translation:
```text
हे पार्थ  यह ब्राह्मी स्थिति है। इसे प्राप्त कर पुरुष मोहित नहीं होता। अन्तकाल में भी इस निष्ठा में स्थित होकर ब्रह्मनिर्वाण (ब्रह्म के साथ एकत्व) को प्राप्त होता है।।
```

reference translation snippet:
```text
।।2.72।। हे पृथानन्दन ! यह ब्राह्मी स्थिति है। इसको प्राप्त होकर कभी कोई मोहित नहीं होता। इस स्थितिमें यदि अन्तकालमें भी स्थित हो जाय, तो निर्वाण (शान्त) ब्रह्मकी प्राप्ति हो जाती है।
```

notes: low lexical overlap with Hindi reference: score=0.11

### [BG 3.1] severity: MEDIUM

source: https://bhagavadgita.io/chapter/3/verse/1/hi

current translation:
```text
हे जनार्दन  यदि आपको यह मान्य है कि कर्म से ज्ञान श्रेष्ठ है तो फिर हे केशव  आप मुझे इस भयंकर कर्म में क्यों प्रवृत्त करते हैं
```

reference translation snippet:
```text
।।3.1 -- 3.2।। अर्जुन बोले -- हे जनार्दन! अगर आप कर्मसे बुद्धि- (ज्ञान-) को श्रेष्ठ मानते हैं, तो फिर हे केशव ! मुझे घोर कर्ममें क्यों लगाते हैं ? आप अपने मिले हुए-से वचनोंसे मेरी बुद्धिको मोहित-सी कर रहे हैं। अतः आप निश्चय करके उस एक बात को कहिये, जिससे मैं कल्याणको प्राप्त हो जाऊँ।
।।3.1 -- 3.2।। अर्जुन बोले -- हे जनार्दन! अगर आप कर्मसे बुद्धि- (ज्ञान-) को श्रेष्ठ मानते हैं, तो फिर हे केशव! मुझे घोर कर्ममें क्यों लगाते हैं ? आप अपने मिले हुए-से वचनोंसे मेरी बुद्धिको मोहित-सी कर रहे हैं। अतः आप
```

notes: low lexical overlap with Hindi reference: score=0.05

### [BG 3.2] severity: MEDIUM

source: https://bhagavadgita.io/chapter/3/verse/2/hi

current translation:
```text
आप इस मिश्रित वाक्य से मेरी बुद्धि को मोहितसा करते हैं अत आप उस एक (मार्ग) को निश्चित रूप से कहिये जिससे मैं परम श्रेय को प्राप्त कर सकूँ।।
```

reference translation snippet:
```text
।।3.1 -- 3.2।। अर्जुन बोले -- हे जनार्दन! अगर आप कर्मसे बुद्धि- (ज्ञान-) को श्रेष्ठ मानते हैं, तो फिर हे केशव ! मुझे घोर कर्ममें क्यों लगाते हैं ? आप अपने मिले हुए-से वचनोंसे मेरी बुद्धिको मोहित-सी कर रहे हैं। अतः आप निश्चय करके उस एक बात को कहिये, जिससे मैं कल्याणको प्राप्त हो जाऊँ।
।।3.1 -- 3.2।। अर्जुन बोले -- हे जनार्दन! अगर आप कर्मसे बुद्धि- (ज्ञान-) को श्रेष्ठ मानते हैं, तो फिर हे केशव! मुझे घोर कर्ममें क्यों लगाते हैं ? आप अपने मिले हुए-से वचनोंसे मेरी बुद्धिको मोहित-सी कर रहे हैं। अतः आप
```

notes: low lexical overlap with Hindi reference: score=0.02


569 additional Hindi findings are omitted from the expanded section. Full details are available in `05-hindi-results.json`.


## Stop Point

No Hindi text was changed. Step 6 can proceed after review.
