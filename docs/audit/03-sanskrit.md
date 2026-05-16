# Step 3 - Sanskrit Verification

Compared stored `sanskrit` values in `src/data/gita-data.json` against vedabase.io Devanagari pages. This report does not change Sanskrit text.

## Method

- Discovered verse source slugs from each vedabase chapter index page.
- Source URL pattern: `https://vedabase.io/en/library/bg/{chapter}/{slug}/`, where `slug` may be a single verse like `2` or a combined range like `16-18`.
- Extracted the HTML `av-devanagari` block from each source page.
- Split combined source pages by Devanagari verse suffixes like `॥ १६ ॥`; the splitter also tolerates mixed digit typos such as `३3` found on vedabase.
- Compared normalized line content exactly.
- Also compared the core shloka after removing trailing verse-number suffixes to separate content drift from suffix/punctuation convention differences.

## Summary

| Result | Count |
| --- | ---: |
| Verse records expected | 701 |
| Verse records compared | 700 |
| Fetch/extraction/splitting failures | 1 |
| Verses sourced from combined vedabase pages | 73 |
| Exact Sanskrit matches | 0 |
| Character-level differences | 700 |
| HIGH severity differences | 230 |
| MEDIUM severity differences | 313 |
| LOW severity differences | 157 |

## Severity Meaning

- LOW: compact core shloka matches after removing the trailing verse-number suffix; difference is formatting/suffix convention.
- MEDIUM: core shloka matches after additionally normalizing colon/visarga and zero-width joiner variants; review before changing.
- HIGH: core Devanagari sequence differs beyond those normalizations; needs closer source review.

## Interpretation

The dominant difference is formatting and verse-number suffix convention. The stored dataset generally uses a suffix like `।।1.1।।`, while vedabase uses Devanagari numbering like `॥ १ ॥`. Many entries also differ in visarga representation: the app data often uses Devanagari `ः`, while vedabase pages often display ASCII `:`. Some vedabase entries include zero-width joiners in conjuncts. These are reported because Step 3 is a character-level audit, not because every item should automatically be rewritten.

## Fetch Or Extraction Failures

- BG 1.47: no_source_slug_found_in_chapter_index - vedabase chapter index ends at BG 1.46; stored BG 1.47 appears to correspond to vedabase BG 1.46 closing shloka (https://vedabase.io/en/library/bg/1/47/)

## Defects

### [BG 1.1] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/1/

current:
```text
धृतराष्ट्र उवाच
धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।
मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।1.1।।
```

expected:
```text
धृतराष्ट्र उवाच
धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सव: ।
मामका: पाण्डवाश्चैव किमकुर्वत सञ्जय ॥ १ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.2] severity: LOW

source: https://vedabase.io/en/library/bg/1/2/

current:
```text
सञ्जय उवाच
दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।
आचार्यमुपसङ्गम्य राजा वचनमब्रवीत्।।1.2।।
```

expected:
```text
सञ्जय उवाच
दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा ।
आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ॥ २ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.3] severity: LOW

source: https://vedabase.io/en/library/bg/1/3/

current:
```text
पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्।
व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता।।1.3।।
```

expected:
```text
पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् ।
व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ॥ ३ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.4] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/4/

current:
```text
अत्र शूरा महेष्वासा भीमार्जुनसमा युधि।
युयुधानो विराटश्च द्रुपदश्च महारथः।।1.4।।
```

expected:
```text
अत्र श‍ूरा महेष्वासा भीमार्जुनसमा युधि ।
युयुधानो विराटश्च द्रुपदश्च महारथः ॥ ४ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.5] severity: LOW

source: https://vedabase.io/en/library/bg/1/5/

current:
```text
धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्।
पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः।।1.5।।
```

expected:
```text
धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् ।
पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ॥ ५ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.6] severity: LOW

source: https://vedabase.io/en/library/bg/1/6/

current:
```text
युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान्।
सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः।।1.6।।
```

expected:
```text
युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् ।
सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ॥ ६ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.7] severity: HIGH

source: https://vedabase.io/en/library/bg/1/7/

current:
```text
अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम।
नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते।।1.7।।
```

expected:
```text
अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम ।
नायका मम सैन्यस्य संज्ञार्थ तान्ब्रवीमि ते ॥ ७ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.8] severity: HIGH

source: https://vedabase.io/en/library/bg/1/8/

current:
```text
भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः।
अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च।।1.8।।
```

expected:
```text
भवान्भीष्मश्च कर्णश्च कृपश्च समितिंजयः ।
अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ॥ ८ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.9] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/9/

current:
```text
अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः।
नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः।।1.9।।
```

expected:
```text
अन्ये च बहवः श‍ूरा मदर्थे त्यक्तजीविताः ।
नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ॥ ९ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.10] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/10/

current:
```text
अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम्।
पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम्।।1.10।।
```

expected:
```text
अपर्याप्त‍ं तदस्माकं बलं भीष्माभिरक्षितम् ।
पर्याप्त‍ं त्विदमेतेषां बलं भीमाभिरक्षितम् ॥ १० ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.11] severity: HIGH

source: https://vedabase.io/en/library/bg/1/11/

current:
```text
अयनेषु च सर्वेषु यथाभागमवस्थिताः।
भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि।।1.11।।
```

expected:
```text
अयनेषु च सर्वेषु यथाभागवमस्थिताः ।
भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ॥ ११ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.12] severity: HIGH

source: https://vedabase.io/en/library/bg/1/12/

current:
```text
तस्य संजनयन्हर्षं कुरुवृद्धः पितामहः।
सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान्।।1.12।।
```

expected:
```text
तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः ।
सिंहनादं विनद्योच्च‍ैः शङ्खं दध्मौ प्रतापवान् ॥ १२ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.13] severity: LOW

source: https://vedabase.io/en/library/bg/1/13/

current:
```text
ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः।
सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत्।।1.13।।
```

expected:
```text
ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः ।
सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् ॥ १३ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.14] severity: LOW

source: https://vedabase.io/en/library/bg/1/14/

current:
```text
ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ।
माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः।।1.14।।
```

expected:
```text
ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ ।
माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः ॥ १४ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.15] severity: HIGH

source: https://vedabase.io/en/library/bg/1/15/

current:
```text
पाञ्चजन्यं हृषीकेशो देवदत्तं धनंजयः।
पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः।।1.15।।
```

expected:
```text
पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः ।
पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः ॥ १५ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.16] severity: LOW

source: https://vedabase.io/en/library/bg/1/16-18/

current:
```text
अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः।
नकुलः सहदेवश्च सुघोषमणिपुष्पकौ।।1.16।।
```

expected:
```text
अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः ।
नकुलः सहदेवश्च सुघोषमणिपुष्पकौ ॥ १६ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 16-18

### [BG 1.17] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/16-18/

current:
```text
काश्यश्च परमेष्वासः शिखण्डी च महारथः।
धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः।।1.17।।
```

expected:
```text
काश्यश्च परमेष्वास: शिखण्डी च महारथ: ।
धृष्टद्युम्न‍ो विराटश्च सात्यकिश्‍चापराजित: ॥ १७ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 16-18

### [BG 1.18] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/16-18/

current:
```text
द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते।
सौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक्।।1.18।।
```

expected:
```text
द्रुपदो द्रौपदेयाश्च सर्वश: पृथिवीपते ।
सौभद्रश्च महाबाहु: शङ्खान्दध्मु: पृथक्पृथक् ॥ १८ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 16-18

### [BG 1.19] severity: HIGH

source: https://vedabase.io/en/library/bg/1/19/

current:
```text
स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत्।
नभश्च पृथिवीं चैव तुमुलो व्यनुनादयन्।।1.19।।
```

expected:
```text
स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत् ।
नभश्च पृथिवीं चैव तुमुलोऽभ्यनुनादयन् ॥ १९ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.20] severity: HIGH

source: https://vedabase.io/en/library/bg/1/20/

current:
```text
अथ व्यवस्थितान् दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः।
प्रवृत्ते शस्त्रसंपाते धनुरुद्यम्य पाण्डवः।।1.20।।
```

expected:
```text
अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः ।
प्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः ।
हृषीकेशं तदा वाक्यमिदमाह महीपते ॥ २० ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.21] severity: HIGH

source: https://vedabase.io/en/library/bg/1/21-22/

current:
```text
अर्जुन उवाच
हृषीकेशं तदा वाक्यमिदमाह महीपते।
सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत।।1.21।।
```

expected:
```text
अर्जुन उवाच
सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत ।
यावदेतान्निरीक्षेऽहं योद्‍धुकामानवस्थितान् ॥ २१ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 21-22

### [BG 1.22] severity: HIGH

source: https://vedabase.io/en/library/bg/1/21-22/

current:
```text
यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्।
कैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे।।1.22।।
```

expected:
```text
कैर्मया सह योद्धव्यमस्मिन्‍रणसमुद्यमे ॥ २२ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 21-22

### [BG 1.23] severity: LOW

source: https://vedabase.io/en/library/bg/1/23/

current:
```text
योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः।
धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः।।1.23।।
```

expected:
```text
योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः ।
धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः ॥ २३ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.24] severity: HIGH

source: https://vedabase.io/en/library/bg/1/24/

current:
```text
संजय उवाच
एवमुक्तो हृषीकेशो गुडाकेशेन भारत।
सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम्।।1.24।।
```

expected:
```text
सञ्जय उवाच
एवमुक्तो हृषीकेशो गुडाकेशेन भारत ।
सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् ॥ २४ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.25] severity: HIGH

source: https://vedabase.io/en/library/bg/1/25/

current:
```text
भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्।
उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति।।1.25।।
```

expected:
```text
भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्  ।
उवाच पार्थ पश्यैतान्समवेतान्कुरुनिति ॥ २५ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.26] severity: HIGH

source: https://vedabase.io/en/library/bg/1/26/

current:
```text
तत्रापश्यत्स्थितान्पार्थः पितृ़नथ पितामहान्।
आचार्यान्मातुलान्भ्रातृ़न्पुत्रान्पौत्रान्सखींस्तथा।।1.26।।
```

expected:
```text
तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान्।
आचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा।
श्वश‍ुरान्सुहृदश्चैव सेनयोरुभयोरपि ॥ २६ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.27] severity: HIGH

source: https://vedabase.io/en/library/bg/1/27/

current:
```text
श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि।
तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्।।1.27।।
```

expected:
```text
तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्  ।
कृपया परयाविष्टो विषीदन्निदमब्रवीत् ॥ २७ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.28] severity: HIGH

source: https://vedabase.io/en/library/bg/1/28/

current:
```text
अर्जुन उवाच
कृपया परयाऽऽविष्टो विषीदन्निदमब्रवीत्।
दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।।1.28।।
```

expected:
```text
अर्जुन उवाच
दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्  ।
सीदन्ति मम गात्राणि मुखं च परिश‍ुष्यति ॥ २८ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.29] severity: HIGH

source: https://vedabase.io/en/library/bg/1/29/

current:
```text
सीदन्ति मम गात्राणि मुखं च परिशुष्यति।
वेपथुश्च शरीरे मे रोमहर्षश्च जायते।।1.29।।
```

expected:
```text
वेपथुश्च शरीरे मे रोमहर्षश्च जायते ।
गाण्डीवं स्रंसते हस्तात्त्वक्च‍ैव परिदह्यते ॥ २९ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.30] severity: HIGH

source: https://vedabase.io/en/library/bg/1/30/

current:
```text
गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते।
न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः।।1.30।।
```

expected:
```text
न च शक्न‍ोम्यवस्थातुं भ्रमतीव च मे मनः ।
निमित्तानि च पश्यामि विपरीतानि केशव ॥ ३० ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.31] severity: HIGH

source: https://vedabase.io/en/library/bg/1/31/

current:
```text
निमित्तानि च पश्यामि विपरीतानि केशव।
न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे।।1.31।।
```

expected:
```text
न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे ।
न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च ॥ ३१ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.32] severity: HIGH

source: https://vedabase.io/en/library/bg/1/32-35/

current:
```text
न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च।
किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा।।1.32।।
```

expected:
```text
किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा ।
येषामर्थे काङ्‍‍क्षितं नो राज्यं भोगाः सुखानि च ॥ ३२ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 32-35

### [BG 1.33] severity: HIGH

source: https://vedabase.io/en/library/bg/1/32-35/

current:
```text
येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च।
त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च।।1.33।।
```

expected:
```text
त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च ।
आचार्याः पितरः पुत्रास्तथैव च पितामहाः ॥ ३3 ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 32-35

### [BG 1.34] severity: HIGH

source: https://vedabase.io/en/library/bg/1/32-35/

current:
```text
आचार्याः पितरः पुत्रास्तथैव च पितामहाः।
मातुलाः श्चशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा।।1.34।।
```

expected:
```text
मातुलाः श्वश‍ुराः पौत्राः श्यालाः सम्बन्धिनस्तथा ।
एतान्न हन्तुमिच्छामि घ्न‍तोऽपि मधुसूदन ॥ ३४ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 32-35

### [BG 1.35] severity: HIGH

source: https://vedabase.io/en/library/bg/1/32-35/

current:
```text
एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन।
अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते।।1.35।।
```

expected:
```text
अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते ।
निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्ज‍नार्दन ॥ ३५ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 32-35

### [BG 1.36] severity: HIGH

source: https://vedabase.io/en/library/bg/1/36/

current:
```text
निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन।
पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः।।1.36।।
```

expected:
```text
पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः ।
तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्सबान्धवान् ।
स्वजनं हि कथं हत्वा सुखिनः स्याम माधव ॥ ३६ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.37] severity: HIGH

source: https://vedabase.io/en/library/bg/1/37-38/

current:
```text
तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान्।
स्वजनं हि कथं हत्वा सुखिनः स्याम माधव।।1.37।।
```

expected:
```text
यद्यप्येते न पश्यन्ति लोभोपहतचेतसः ।
कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् ॥ ३७ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 37-38

### [BG 1.38] severity: HIGH

source: https://vedabase.io/en/library/bg/1/37-38/

current:
```text
यद्यप्येते न पश्यन्ति लोभोपहतचेतसः।
कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम्।।1.38।।
```

expected:
```text
कथं न ज्ञेयमस्माभिः पापादस्मन्निवर्तितुम् ।
कुलक्षयकृतं दोषं प्रपश्यद्भ‍िर्जनार्दन ॥ ३८ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 37-38

### [BG 1.39] severity: HIGH

source: https://vedabase.io/en/library/bg/1/39/

current:
```text
कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम्।
कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन।।1.39।।
```

expected:
```text
कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः ।
धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ॥ ३९ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.40] severity: HIGH

source: https://vedabase.io/en/library/bg/1/40/

current:
```text
कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः।
धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत।।1.40।।
```

expected:
```text
अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः ।
स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः ॥ ४० ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.41] severity: HIGH

source: https://vedabase.io/en/library/bg/1/41/

current:
```text
अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः।
स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः।।1.41।।
```

expected:
```text
सङ्करो नरकायैव कुलघ्न‍ानां कुलस्य च ।
पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः ॥ ४१ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.42] severity: HIGH

source: https://vedabase.io/en/library/bg/1/42/

current:
```text
सङ्करो नरकायैव कुलघ्नानां कुलस्य च।
पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः।।1.42।।
```

expected:
```text
दोषैरेतैः कुलघ्न‍ानां वर्णसङ्करकारकैः ।
उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः ॥ ४२ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.43] severity: HIGH

source: https://vedabase.io/en/library/bg/1/43/

current:
```text
दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः।
उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः।।1.43।।
```

expected:
```text
उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन ।
नरके नियतं वासो भवतीत्यनुश‍ुश्रुम ॥ ४३ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.44] severity: HIGH

source: https://vedabase.io/en/library/bg/1/44/

current:
```text
उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन।
नरकेऽनियतं वासो भवतीत्यनुशुश्रुम।।1.44।।
```

expected:
```text
अहो बत महत्पापं कर्तुं व्यवसिता वयम् ।
यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः ॥ ४४ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.45] severity: HIGH

source: https://vedabase.io/en/library/bg/1/45/

current:
```text
अहो बत महत्पापं कर्तुं व्यवसिता वयम्।
यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः।।1.45।।
```

expected:
```text
यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः ।
धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् ॥ ४५ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 1.46] severity: HIGH

source: https://vedabase.io/en/library/bg/1/46/

current:
```text
यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः।
धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत्।।1.46।।
```

expected:
```text
सञ्जय उवाच
एवमुक्त्वार्जुनः संख्ये रथोपस्थ उपाविशत् ।
विसृज्य सशरं चापं शोकसंविग्न‍मानसः ॥ ४६ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.1] severity: HIGH

source: https://vedabase.io/en/library/bg/2/1/

current:
```text
सञ्जय उवाच
तं तथा कृपयाऽविष्टमश्रुपूर्णाकुलेक्षणम्।
विषीदन्तमिदं वाक्यमुवाच मधुसूदनः।।2.1।।
```

expected:
```text
सञ्जय उवाच
तं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम् ।
विषीदन्तमिदं वाक्यमुवाच मधुसूदनः ॥ १ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.2] severity: HIGH

source: https://vedabase.io/en/library/bg/2/2/

current:
```text
श्री भगवानुवाच
कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्।
अनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन।।2.2।।
```

expected:
```text
श्री भगवानुवाच
कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम् ।
अनार्यजुष्टमस्वर्ग्यकीर्तिकरमर्जुन ॥ २ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.3] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/3/

current:
```text
क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।
क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप।।2.3।।
```

expected:
```text
क्ल‍ैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते ।
क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ॥ ३ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.4] severity: LOW

source: https://vedabase.io/en/library/bg/2/4/

current:
```text
अर्जुन उवाच
कथं भीष्ममहं संख्ये द्रोणं च मधुसूदन।
इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन।।2.4।।
```

expected:
```text
अर्जुन उवाच
कथं भीष्ममहं संख्ये द्रोणं च मधुसूदन ।
इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन ॥ ४ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.5] severity: HIGH

source: https://vedabase.io/en/library/bg/2/5/

current:
```text
गुरूनहत्वा हि महानुभावान्
श्रेयो भोक्तुं भैक्ष्यमपीह लोके।
हत्वार्थकामांस्तु गुरूनिहैव
भुञ्जीय भोगान् रुधिरप्रदिग्धान्।।2.5।।
```

expected:
```text
गुरूनहत्वा हि महानुभावान्
श्रेयो भोक्तुं भैक्ष्यमपीह लोके ।
हत्वार्थकामांस्तु गुरूनिहैव
भुज्ज‍ीय भोगान्‍रुधिरप्रदिग्धान् ॥ ५ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.6] severity: HIGH

source: https://vedabase.io/en/library/bg/2/6/

current:
```text
न चैतद्विद्मः कतरन्नो गरीयो
यद्वा जयेम यदि वा नो जयेयुः।
यानेव हत्वा न जिजीविषाम
स्तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः।।2.6।।
```

expected:
```text
न चैतद्विद्मः कतरन्नो गरीयो
यद्वा जयेम यदि वा नो जयेयुः ।
यानेव हत्वा न जिजीविषाम-
स्तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः ॥ ६ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.7] severity: HIGH

source: https://vedabase.io/en/library/bg/2/7/

current:
```text
कार्पण्यदोषोपहतस्वभावः
पृच्छामि त्वां धर्मसंमूढचेताः।
यच्छ्रेयः स्यान्निश्िचतं ब्रूहि तन्मे
शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्।।2.7।।
```

expected:
```text
कार्पण्यदोषोपहतस्वभावः
पृच्छामि त्वां धर्मसम्मूढचेताः ।
यच्छ्रेयः स्यान्निश्‍चितं ब्रूहि तन्मे
शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ॥ ७ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.8] severity: HIGH

source: https://vedabase.io/en/library/bg/2/8/

current:
```text
न हि प्रपश्यामि ममापनुद्या
द्यच्छोकमुच्छोषणमिन्द्रियाणाम्।
अवाप्य भूमावसपत्नमृद्धम्
राज्यं सुराणामपि चाधिपत्यम्।।2.8।।
```

expected:
```text
न हि प्रपश्यामि ममापनुद्याद् -
यच्छोकमुच्छोषणमिन्द्रियाणाम् ।
अवाप्य भूभावसपत्‍नमृद्धं
राज्यं सुराणामपि चाधिपत्यम् ॥ ८ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.9] severity: HIGH

source: https://vedabase.io/en/library/bg/2/9/

current:
```text
सञ्जय उवाच
एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप।
न योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह।।2.9।।
```

expected:
```text
सञ्जय उवाच
एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तपः ।
न योत्स्य इति गोविन्दामुक्त्वा तूष्णीं बभूव ह ॥ ९ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.10] severity: HIGH

source: https://vedabase.io/en/library/bg/2/10/

current:
```text
तमुवाच हृषीकेशः प्रहसन्निव भारत।
सेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः।।2.10।।
```

expected:
```text
तमुवाच हृषीकेशः प्रहसन्निव भारत ।
सेनयोरूभयोर्मध्ये विषीदन्तमिदं वचः ॥ १० ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.11] severity: HIGH

source: https://vedabase.io/en/library/bg/2/11/

current:
```text
श्री भगवानुवाच
अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे।
गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः।।2.11।।
```

expected:
```text
श्री भगवानुवाच
अशोच्यनन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे ।
गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥ ११ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.12] severity: LOW

source: https://vedabase.io/en/library/bg/2/12/

current:
```text
न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।
न चैव न भविष्यामः सर्वे वयमतः परम्।।2.12।।
```

expected:
```text
न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः ।
न चैव नभविष्यामः सर्वे वयमतः परम् ॥ १२ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.13] severity: LOW

source: https://vedabase.io/en/library/bg/2/13/

current:
```text
देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।
तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति।।2.13।।
```

expected:
```text
देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा ।
तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ॥ १३ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.14] severity: LOW

source: https://vedabase.io/en/library/bg/2/14/

current:
```text
मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।
आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत।।2.14।।
```

expected:
```text
मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः ।
आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥ १४ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.15] severity: LOW

source: https://vedabase.io/en/library/bg/2/15/

current:
```text
यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ।
समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते।।2.15।।
```

expected:
```text
यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ ।
समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते ॥ १५ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.16] severity: LOW

source: https://vedabase.io/en/library/bg/2/16/

current:
```text
नासतो विद्यते भावो नाभावो विद्यते सतः।
उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः।।2.16।।
```

expected:
```text
नासतो विद्यते भावो नाभावो विद्यते सतः ।
उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ॥ १६ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.17] severity: LOW

source: https://vedabase.io/en/library/bg/2/17/

current:
```text
अविनाशि तु तद्विद्धि येन सर्वमिदं ततम्।
विनाशमव्ययस्यास्य न कश्चित् कर्तुमर्हति।।2.17।।
```

expected:
```text
अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् ।
विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति ॥ १७ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.18] severity: LOW

source: https://vedabase.io/en/library/bg/2/18/

current:
```text
अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः।
अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत।।2.18।।
```

expected:
```text
अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः ।
अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत ॥ १८ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.19] severity: LOW

source: https://vedabase.io/en/library/bg/2/19/

current:
```text
य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।
उभौ तौ न विजानीतो नायं हन्ति न हन्यते।।2.19।।
```

expected:
```text
य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् ।
उभौ तौ न विजानीतो नायं हन्ति न हन्यते ॥ १९ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.20] severity: HIGH

source: https://vedabase.io/en/library/bg/2/20/

current:
```text
न जायते म्रियते वा कदाचि
न्नायं भूत्वा भविता वा न भूयः।
अजो नित्यः शाश्वतोऽयं पुराणो
न हन्यते हन्यमाने शरीरे।।2.20।।
```

expected:
```text
न जायते म्रियते वा कदाचि-
न्नायं भूत्वा भविता वा न भूयः ।
अजो नित्यः शाश्वतोऽयं पुराणो
न हन्यते हन्यमाने शरीरे ॥ २० ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.21] severity: LOW

source: https://vedabase.io/en/library/bg/2/21/

current:
```text
वेदाविनाशिनं नित्यं य एनमजमव्ययम्।
कथं स पुरुषः पार्थ कं घातयति हन्ति कम्।।2.21।।
```

expected:
```text
वेदाविनाशिनं नित्यं य एनमजमव्ययम् ।
कथं स पुरुषः पार्थ कं घातयति हन्ति कम् ॥ २१ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.22] severity: HIGH

source: https://vedabase.io/en/library/bg/2/22/

current:
```text
वासांसि जीर्णानि यथा विहाय
नवानि गृह्णाति नरोऽपराणि।
तथा शरीराणि विहाय जीर्णा
न्यन्यानि संयाति नवानि देही।।2.22।।
```

expected:
```text
वासांसि जीर्णानि यथा विहाय
नवानि गृह्णाति नरोऽपराणि ।
तथा शरीराणि विहाय जीर्णा-
न्यन्यानि संयाति नवानि देही ॥ २२ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.23] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/23/

current:
```text
नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।
न चैनं क्लेदयन्त्यापो न शोषयति मारुतः।।2.23।।
```

expected:
```text
नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः ।
न चैनं क्ल‍ेदयन्त्यापो न शोषयति मारुतः ॥ २३ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.24] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/24/

current:
```text
अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च।
नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः।।2.24।।
```

expected:
```text
अच्छेद्योऽयमदाह्योऽयमक्ल‍ेद्योऽशोष्य एव च ।
नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः ॥ २४ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.25] severity: LOW

source: https://vedabase.io/en/library/bg/2/25/

current:
```text
अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते।
तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि।।2.25।।
```

expected:
```text
अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते ।
तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि ॥ २५ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.26] severity: HIGH

source: https://vedabase.io/en/library/bg/2/26/

current:
```text
अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम्।
तथापि त्वं महाबाहो नैवं शोचितुमर्हसि।।2.26।।
```

expected:
```text
अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम् ।
तथापि त्वं महाबाहो नैनं शोचितुमर्हसि ॥ २६ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.27] severity: LOW

source: https://vedabase.io/en/library/bg/2/27/

current:
```text
जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च।
तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि।।2.27।।
```

expected:
```text
जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च ।
तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि ॥ २७ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.28] severity: LOW

source: https://vedabase.io/en/library/bg/2/28/

current:
```text
अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत।
अव्यक्तनिधनान्येव तत्र का परिदेवना।।2.28।।
```

expected:
```text
अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत ।
अव्यक्तनिधनान्येव तत्र का परिदेवना ॥ २८ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.29] severity: HIGH

source: https://vedabase.io/en/library/bg/2/29/

current:
```text
आश्चर्यवत्पश्यति कश्चिदेन
माश्चर्यवद्वदति तथैव चान्यः।
आश्चर्यवच्चैनमन्यः श्रृणोति
श्रुत्वाप्येनं वेद न चैव कश्चित्।।2.29।।
```

expected:
```text
आश्चर्यवत्पश्यति कश्चिदेन -
माश्चर्यवद्वदति तथैव चान्यः ।
आश्चर्यवच्च‍ैनमन्यः श‍ृणोति
श्रुत्वाप्येनं वेद न चैव कश्चित् ॥ २९ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.30] severity: LOW

source: https://vedabase.io/en/library/bg/2/30/

current:
```text
देही नित्यमवध्योऽयं देहे सर्वस्य भारत।
तस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि।।2.30।।
```

expected:
```text
देही नित्यमवध्योऽयं देहे सर्वस्य भारत ।
तस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि ॥ ३० ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.31] severity: HIGH

source: https://vedabase.io/en/library/bg/2/31/

current:
```text
स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि।
धर्म्याद्धि युद्धाछ्रेयोऽन्यत्क्षत्रियस्य न विद्यते।।2.31।।
```

expected:
```text
स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि ।
धर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते ॥ ३१ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.32] severity: LOW

source: https://vedabase.io/en/library/bg/2/32/

current:
```text
यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम्।
सुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम्।।2.32।।
```

expected:
```text
यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम् ।
सुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम् ॥ ३२ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.33] severity: HIGH

source: https://vedabase.io/en/library/bg/2/33/

current:
```text
अथ चैत्त्वमिमं धर्म्यं संग्रामं न करिष्यसि।
ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि।।2.33।।
```

expected:
```text
अथ चेत्त्वमिमं धर्म्यं सङ्ग्रामं न करिष्यसि ।
ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि ॥ ३३ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.34] severity: HIGH

source: https://vedabase.io/en/library/bg/2/34/

current:
```text
अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम्।
संभावितस्य चाकीर्तिर्मरणादतिरिच्यते।।2.34।।
```

expected:
```text
अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम् ।
सम्भावितस्य चाकीर्तिर्मरणादतिरिच्यते ॥ ३४ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.35] severity: LOW

source: https://vedabase.io/en/library/bg/2/35/

current:
```text
भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः।
येषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम्।।2.35।।
```

expected:
```text
भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः ।
येषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम् ॥ ३५ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.36] severity: HIGH

source: https://vedabase.io/en/library/bg/2/36/

current:
```text
अवाच्यवादांश्च बहून् वदिष्यन्ति तवाहिताः।
निन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम्।।2.36।।
```

expected:
```text
अवाच्यवादांश्च बहून्वदिष्यन्ति तवाहिताः ।
निन्दन्तस्तव सामर्थ्य ततो दुःखतरं नु किम् ॥ ३६ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.37] severity: HIGH

source: https://vedabase.io/en/library/bg/2/37/

current:
```text
हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम्।
तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः।।2.37।।
```

expected:
```text
हतो वा प्राप्स्यसि स्वर्ग जित्वा वा भोक्ष्यसे महीम् ।
तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः ॥ ३७ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.38] severity: LOW

source: https://vedabase.io/en/library/bg/2/38/

current:
```text
सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।
ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि।।2.38।।
```

expected:
```text
सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ ।
ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि ॥ ३८ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.39] severity: HIGH

source: https://vedabase.io/en/library/bg/2/39/

current:
```text
एषा तेऽभिहिता सांख्ये बुद्धिर्योगे त्विमां श्रृणु।
बुद्ध्यायुक्तो यया पार्थ कर्मबन्धं प्रहास्यसि।।2.39।।
```

expected:
```text
एषा तेऽभिहिता सांख्ये बुद्धिर्योगे त्विमां श‍ृणु ।
बुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि ॥ ३९ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.40] severity: LOW

source: https://vedabase.io/en/library/bg/2/40/

current:
```text
नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।
स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्।।2.40।।
```

expected:
```text
नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते ।
स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात् ॥ ४० ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.41] severity: HIGH

source: https://vedabase.io/en/library/bg/2/41/

current:
```text
व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।
बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्।।2.41।।
```

expected:
```text
व्यवसायात्मिका बुद्धिरेकेह कुरूनन्दन ।
बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम् ॥ ४१ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.42] severity: LOW

source: https://vedabase.io/en/library/bg/2/42-43/

current:
```text
यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः।
वेदवादरताः पार्थ नान्यदस्तीति वादिनः।।2.42।।
```

expected:
```text
यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः ।
वेदवादरताः पार्थ नान्यदस्तीति वादिनः ॥ ४२ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 42-43

### [BG 2.43] severity: LOW

source: https://vedabase.io/en/library/bg/2/42-43/

current:
```text
कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम्।
क्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति।।2.43।।
```

expected:
```text
कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम् ।
क्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति ॥ ४३ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas; vedabase source combines verses 42-43

### [BG 2.44] severity: LOW

source: https://vedabase.io/en/library/bg/2/44/

current:
```text
भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम्।
व्यवसायात्मिका बुद्धिः समाधौ न विधीयते।।2.44।।
```

expected:
```text
भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम् ।
व्यवसायात्मिका बुद्धिः समाधौ न विधीयते ॥ ४४ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.45] severity: LOW

source: https://vedabase.io/en/library/bg/2/45/

current:
```text
त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन।
निर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान्।।2.45।।
```

expected:
```text
त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन ।
निर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान् ॥ ४५ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.46] severity: HIGH

source: https://vedabase.io/en/library/bg/2/46/

current:
```text
यावानर्थ उदपाने सर्वतः संप्लुतोदके।
तावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः।।2.46।।
```

expected:
```text
यावानर्थ उदपाने सर्वतः सम्प्लुतोदके ।
तावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः ॥ ४६ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.47] severity: LOW

source: https://vedabase.io/en/library/bg/2/47/

current:
```text
कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।2.47।।
```

expected:
```text
कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ ४७ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.48] severity: LOW

source: https://vedabase.io/en/library/bg/2/48/

current:
```text
योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।
सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते।।2.48।।
```

expected:
```text
योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।
सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥ ४८ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.49] severity: LOW

source: https://vedabase.io/en/library/bg/2/49/

current:
```text
दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय।
बुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः।।2.49।।
```

expected:
```text
दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय ।
बुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः ॥ ४९ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.50] severity: LOW

source: https://vedabase.io/en/library/bg/2/50/

current:
```text
बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।
तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्।।2.50।।
```

expected:
```text
बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते ।
तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ॥ ५० ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.51] severity: LOW

source: https://vedabase.io/en/library/bg/2/51/

current:
```text
कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः।
जन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम्।।2.51।।
```

expected:
```text
कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः ।
जन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम् ॥ ५१ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.52] severity: LOW

source: https://vedabase.io/en/library/bg/2/52/

current:
```text
यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति।
तदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च।।2.52।।
```

expected:
```text
यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति ।
तदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च ॥ ५२ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.53] severity: LOW

source: https://vedabase.io/en/library/bg/2/53/

current:
```text
श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला।
समाधावचला बुद्धिस्तदा योगमवाप्स्यसि।।2.53।।
```

expected:
```text
श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला ।
समाधावचला बुद्धिस्तदा योगमवाप्स्यसि ॥ ५३ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.54] severity: LOW

source: https://vedabase.io/en/library/bg/2/54/

current:
```text
अर्जुन उवाच
स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव।
स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम्।।2.54।।
```

expected:
```text
अर्जुन उवाच
स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव ।
स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् ॥ ५४ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.55] severity: LOW

source: https://vedabase.io/en/library/bg/2/55/

current:
```text
श्री भगवानुवाच
प्रजहाति यदा कामान् सर्वान् पार्थ मनोगतान्।
आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते।।2.55।।
```

expected:
```text
श्रीभगवानुवाच
प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान् ।
आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते ॥ ५५ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.56] severity: HIGH

source: https://vedabase.io/en/library/bg/2/56/

current:
```text
दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।
वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते।।2.56।।
```

expected:
```text
दुःखेष्वनुद्विग्न‍मनाः सुखेषु विगतस्पृहः ।
वीतरागभयक्रोधः स्थिधीर्मुनिरुच्यते ॥ ५६ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.57] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/57/

current:
```text
यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम्।
नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता।।2.57।।
```

expected:
```text
यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य श‍ुभाश‍ुभम् ।
नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता ॥ ५७ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.58] severity: LOW

source: https://vedabase.io/en/library/bg/2/58/

current:
```text
यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः।
इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता।।2.58।।
```

expected:
```text
यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः ।
इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ॥ ५८ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.59] severity: LOW

source: https://vedabase.io/en/library/bg/2/59/

current:
```text
विषया विनिवर्तन्ते निराहारस्य देहिनः।
रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते।।2.59।।
```

expected:
```text
विषया विनिवर्तन्ते निराहारस्य देहिनः ।
रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते ॥ ५९ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.60] severity: LOW

source: https://vedabase.io/en/library/bg/2/60/

current:
```text
यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः।
इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः।।2.60।।
```

expected:
```text
यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः ।
इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः ॥ ६० ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.61] severity: LOW

source: https://vedabase.io/en/library/bg/2/61/

current:
```text
तानि सर्वाणि संयम्य युक्त आसीत मत्परः।
वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता।।2.61।।
```

expected:
```text
तानि सर्वाणि संयम्य युक्त आसीत मत्परः ।
वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ॥ ६१ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.62] severity: HIGH

source: https://vedabase.io/en/library/bg/2/62/

current:
```text
ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।
सङ्गात् संजायते कामः कामात्क्रोधोऽभिजायते।।2.62।।
```

expected:
```text
ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते ।
सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ॥ ६२ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.63] severity: HIGH

source: https://vedabase.io/en/library/bg/2/63/

current:
```text
क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः।
स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति।।2.63।।
```

expected:
```text
क्रोधाद्भ‍वति सम्मोहः सम्मोहात्स्मृतिविभ्रमः ।
स्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ॥ ६३ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.64] severity: HIGH

source: https://vedabase.io/en/library/bg/2/64/

current:
```text
रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन्।
आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति।।2.64।।
```

expected:
```text
रागद्वेषविमुक्तैस्तु विषयनिन्द्रियैश्चरन् ।
आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति ॥ ६४ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.65] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/65/

current:
```text
प्रसादे सर्वदुःखानां हानिरस्योपजायते।
प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते।।2.65।।
```

expected:
```text
प्रसादे सर्वदुःखानां हानिरस्योपजायते ।
प्रसन्नचेतसो ह्याश‍ु बुद्धिः पर्यवतिष्ठते ॥ ६५ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.66] severity: LOW

source: https://vedabase.io/en/library/bg/2/66/

current:
```text
नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना।
न चाभावयतः शान्तिरशान्तस्य कुतः सुखम्।।2.66।।
```

expected:
```text
नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना ।
न चाभावयतः शान्तिरशान्तस्य कुतः सुखम् ॥ ६६ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.67] severity: LOW

source: https://vedabase.io/en/library/bg/2/67/

current:
```text
इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते।
तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि।।2.67।।
```

expected:
```text
इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते ।
तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि ॥ ६७ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.68] severity: LOW

source: https://vedabase.io/en/library/bg/2/68/

current:
```text
तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः।
इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता।।2.68।।
```

expected:
```text
तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः ।
इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ॥ ६८ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.69] severity: LOW

source: https://vedabase.io/en/library/bg/2/69/

current:
```text
या निशा सर्वभूतानां तस्यां जागर्ति संयमी।
यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः।।2.69।।
```

expected:
```text
या निशा सर्वभूतानां तस्यां जागर्ति संयमी ।
यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः ॥ ६९ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.70] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/70/

current:
```text
आपूर्यमाणमचलप्रतिष्ठं
समुद्रमापः प्रविशन्ति यद्वत्।
तद्वत्कामा यं प्रविशन्ति सर्वे
स शान्तिमाप्नोति न कामकामी।।2.70।।
```

expected:
```text
आपूर्यमाणमचलप्रतिष्ठं
समुद्रमापः प्रविशन्ति यद्वत् ।
तद्वत्कामा यं प्रविशन्ति सर्वे
स शान्तिमाप्‍नोति न कामकामी ॥ ७० ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.71] severity: HIGH

source: https://vedabase.io/en/library/bg/2/71/

current:
```text
विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः।
निर्ममो निरहंकारः स शांतिमधिगच्छति।।2.71।।
```

expected:
```text
विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः ।
निर्ममो निरहङ्कार स शान्तिमधिगच्छति ॥ ७१ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 2.72] severity: HIGH

source: https://vedabase.io/en/library/bg/2/72/

current:
```text
एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति।
स्थित्वाऽस्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति।।2.72।।
```

expected:
```text
एषा ब्राह्मी स्थितिःपार्थ नैनां प्राप्य विमुह्यति ।
स्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति ॥ ७२ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.1] severity: LOW

source: https://vedabase.io/en/library/bg/3/1/

current:
```text
अर्जुन उवाच
ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन।
तत्किं कर्मणि घोरे मां नियोजयसि केशव।।3.1।।
```

expected:
```text
अर्जुन उवाच
ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन ।
तत्किं कर्मणि घोरे मां नियोजयसि केशव ॥ १ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.2] severity: HIGH

source: https://vedabase.io/en/library/bg/3/2/

current:
```text
व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे।
तदेकं वद निश्िचत्य येन श्रेयोऽहमाप्नुयाम्।।3.2।।
```

expected:
```text
व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे ।
तदेकं वद निश्चित्य येन श्रेयोऽहमाप्‍नुयाम् ॥ २ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.3] severity: LOW

source: https://vedabase.io/en/library/bg/3/3/

current:
```text
श्री भगवानुवाच
लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ।
ज्ञानयोगेन सांख्यानां कर्मयोगेन योगिनाम्।।3.3।।
```

expected:
```text
श्रीभगवानुवाच
लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ ।
ज्ञानयोगेन सांख्यानां कर्मयोगेन योगिनाम् ॥ ३ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.4] severity: HIGH

source: https://vedabase.io/en/library/bg/3/4/

current:
```text
न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते।
न च संन्यसनादेव सिद्धिं समधिगच्छति।।3.4।।
```

expected:
```text
न कर्मणामनारम्भान्नैष्कर्म्य पुरुषोऽश्न‍ुते ।
न च सन्न्यसनादेव सिद्धिं समधिगच्छति ॥ ४ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.5] severity: HIGH

source: https://vedabase.io/en/library/bg/3/5/

current:
```text
न हि कश्िचत्क्षणमपि जातु तिष्ठत्यकर्मकृत्।
कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः।।3.5।।
```

expected:
```text
न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् ।
कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः ॥ ५ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.6] severity: LOW

source: https://vedabase.io/en/library/bg/3/6/

current:
```text
कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन्।
इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते।।3.6।।
```

expected:
```text
कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् ।
इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते ॥ ६ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.7] severity: LOW

source: https://vedabase.io/en/library/bg/3/7/

current:
```text
यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन।
कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते।।3.7।।
```

expected:
```text
यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन ।
कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ॥ ७ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.8] severity: LOW

source: https://vedabase.io/en/library/bg/3/8/

current:
```text
नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।
शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः।।3.8।।
```

expected:
```text
नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः ।
शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः ॥ ८ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.9] severity: HIGH

source: https://vedabase.io/en/library/bg/3/9/

current:
```text
यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः।
तदर्थं कर्म कौन्तेय मुक्तसंगः समाचर।।3.9।।
```

expected:
```text
यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः ।
तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर ॥ ९ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.10] severity: LOW

source: https://vedabase.io/en/library/bg/3/10/

current:
```text
सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः।
अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक्।।3.10।।
```

expected:
```text
सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः ।
अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् ॥ १० ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.11] severity: HIGH

source: https://vedabase.io/en/library/bg/3/11/

current:
```text
देवान्भावयतानेन ते देवा भावयन्तु वः।
परस्परं भावयन्तः श्रेयः परमवाप्स्यथ।।3.11।।
```

expected:
```text
देवान्भावयतातेन ते देवा भावयन्तु वः ।
परस्परं भावयन्तः श्रेयः परमवाप्स्यथ ॥ ११ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.12] severity: LOW

source: https://vedabase.io/en/library/bg/3/12/

current:
```text
इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः।
तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः।।3.12।।
```

expected:
```text
इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः ।
तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः ॥ १२ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.13] severity: HIGH

source: https://vedabase.io/en/library/bg/3/13/

current:
```text
यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः।
भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात्।।3.13।।
```

expected:
```text
यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषै ।
भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् ॥ १३ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.14] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/14/

current:
```text
अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः।
यज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः।।3.14।।
```

expected:
```text
अन्नाद्भ‍वन्ति भूतानि पर्जन्यादन्नसम्भवः ।
यज्ञा‍द्भ‍‍वति पर्जन्यो यज्ञः कर्मसमुद्भ‍वः ॥ १४ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.15] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/15/

current:
```text
कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम्।
तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम्।।3.15।।
```

expected:
```text
कर्म ब्रह्मोद्भ‍वं विद्धि ब्रह्माक्षरसमुद्भ‍वम् ।
तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम् ॥ १५ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.16] severity: LOW

source: https://vedabase.io/en/library/bg/3/16/

current:
```text
एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः।
अघायुरिन्द्रियारामो मोघं पार्थ स जीवति।।3.16।।
```

expected:
```text
एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः ।
अघायुरिन्द्रियारामो मोघं पार्थ स जीवति ॥ १६ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.17] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/17/

current:
```text
यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः।
आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते।।3.17।।
```

expected:
```text
यस्त्वात्मरतिरेव स्यादात्मतृप्त‍श्च मानवः ।
आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते ॥ १७ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.18] severity: HIGH

source: https://vedabase.io/en/library/bg/3/18/

current:
```text
नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन।
न चास्य सर्वभूतेषु कश्िचदर्थव्यपाश्रयः।।3.18।।
```

expected:
```text
नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन ।
न चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः ॥ १८ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.19] severity: HIGH

source: https://vedabase.io/en/library/bg/3/19/

current:
```text
तस्मादसक्तः सततं कार्यं कर्म समाचर।
असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः।।3.19।।
```

expected:
```text
तस्मादसक्तः सततं कार्यं कर्म समाचर ।
असक्तो ह्याचरन्कर्म परमाप्‍नोति पूरूषः ॥ १९ ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.20] severity: HIGH

source: https://vedabase.io/en/library/bg/3/20/

current:
```text
कर्मणैव हि संसिद्धिमास्थिता जनकादयः।
लोकसंग्रहमेवापि संपश्यन्कर्तुमर्हसि।।3.20।।
```

expected:
```text
कर्मणैव हि संसिद्धिमास्थिता जनकादयः ।
लोकसङ्ग्रहमेवापि सम्पश्यन्कर्तुमर्हसि ॥ २० ॥
```

diff: canonical formatting/text differs; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.21] severity: LOW

source: https://vedabase.io/en/library/bg/3/21/

current:
```text
यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।
स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते।।3.21।।
```

expected:
```text
यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः ।
स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥ २१ ॥
```

diff: canonical formatting/text differs; core shloka matches after removing verse-number suffix; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas

### [BG 3.22] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/22/

current:
```text
न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन।
नानवाप्तमवाप्तव्यं वर्त एव च कर्मणि।।3.22।।
```

expected:
```text
न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन ।
नानवाप्त‍मवाप्त‍व्यं वर्त एव च कर्मणि ॥ २२ ॥
```

diff: canonical formatting/text differs; core shloka differs only after normalizing colon/visarga or zero-width joiners; stored suffix uses Arabic/Latin numerals; stored text uses double danda characters as two single dandas


560 additional defects are omitted from the expanded section to keep this report reviewable. Full details are available in `03-sanskrit-results.json`.


## Stop Point

No Sanskrit values were changed. Step 4 can proceed after review.
