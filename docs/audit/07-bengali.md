# Step 7 - Bengali Translation Accuracy

## Source Status

No freely accessible ISKCON Bengali Bhagavad-gita source was available through vedabase.io or wired into this repository during this audit. Per the audit protocol, the Bengali column is marked `UNVERIFIED_SOURCE`; no Bengali fixes should be attempted until a legal canonical source is selected.

Physical/commerce listings for ISKCON Bengali editions exist, but they are not usable as an automated verse-by-verse source.

## Structural Checks Performed

Because semantic verification is blocked, this step only checks stored Bengali fields for coverage and script-level issues. It does not validate meaning. Danda punctuation `।`/`॥` is not counted as Devanagari leakage.

| Check | Count |
| --- | ---: |
| Verse records | 701 |
| Bengali fields checked (translation + explanation) | 1402 |
| Missing Bengali fields | 0 |
| Fields without Bengali script | 28 |
| Fields with Devanagari letter leakage | 426 |
| Fields with Assamese ৰ/ৱ characters | 0 |
| Fields with possible Hindi transliteration patterns in Bengali script | 1364 |

## Structural Finding Counts

- possible_hindi_transliteration_in_bengali_script: 1364
- devanagari_letter_leakage: 426
- no_bengali_script: 28

## Findings

- BG 1.1 translation.bn: possible_hindi_transliteration_in_bengali_script — ধৃতরাষ্ট্র বললেন: সঞ্জয়, ধর্মক্ষেত্র কুরুক্ষেত্রে যখন আমার পুত্রেরা ও পাণ্ডুর পুত্রেরা যুদ্ধ করার জন্য সমবেত হল, তখন তারা কী করল?
- BG 1.1 explanation.bn: possible_hindi_transliteration_in_bengali_script — দৃষ্টিহীন রাজা ধৃতরাষ্ট্র তাঁর মন্ত্রী সঞ্জয়কে জিজ্ঞাসা করছেন যে যুদ্ধক্ষেত্রে কী ঘটছে। তিনি জানতে চান যে তাঁর পুত্ররা এবং পাণ্ডুর পুত্ররা সেখানে যুদ্ধ করার জন্য একত্রিত হয়ে কী ক
- BG 1.2 explanation.bn: possible_hindi_transliteration_in_bengali_script — সঞ্জয় তাঁর বিবরণ শুরু করলেন। পাণ্ডবদের সেনাবাহিনীকে যুদ্ধের জন্য প্রস্তুত দেখে, রাজকুমার দুর্যোধন তাঁর গুরু দ্রোণের কাছে গিয়ে কথা বলতে লাগলেন। তিনি অস্থির এবং তাঁর উদ্বেগ প্রকাশ 
- BG 1.3 translation.bn: devanagari_letter_leakage — হে আচার্য ! আপকে বুদ্ধিমান শিষ্য দ্রুপদপুত্র (ধৃষ্টদ্দ্যুম্ন) দ্বারা ব্যূহাকার খড़ী কী গযী পাণ্ডু পুত্রোং কী ইস মহতী সেনা কো দেখিযে।
- BG 1.3 translation.bn: possible_hindi_transliteration_in_bengali_script — হে আচার্য ! আপকে বুদ্ধিমান শিষ্য দ্রুপদপুত্র (ধৃষ্টদ্দ্যুম্ন) দ্বারা ব্যূহাকার খড़ী কী গযী পাণ্ডু পুত্রোং কী ইস মহতী সেনা কো দেখিযে।
- BG 1.3 explanation.bn: possible_hindi_transliteration_in_bengali_script — বাস্তব মেং দুর্যোধন কী যহ মূর্খতা হৈ কি বহ দ্রোণাচার্য কো পাণ্ডবোং কী সৈন্য রচনা কে বিষয মেং বিস্তার সে বতাযে। আগে হম দেখেংগে কি বহ আবশ্যকতা সে অধিক বাতেং করতা হৈ জো যুদ্ধ কে পরিণা
- BG 1.4 translation.bn: possible_hindi_transliteration_in_bengali_script — ইস সেনা মেং মহান্ ধনুর্ধারী শূর যোদ্ধা হৈ , জো যুদ্ধ মেং ভীম ঔর অর্জুন কে সমান হৈং , জৈসে -- যুযুধান, বিরাট তথা মহারথী রাজা দ্রুপদ।
- BG 1.5 translation.bn: possible_hindi_transliteration_in_bengali_script — ধৃষ্টকেতু, চেকিতান, বলবান কাশিরাজ, পুরুজিত্, কুন্তিভোজ ঔর মনুষ্যোং মেং শ্রেষ্ঠ শৈব্য।
- BG 1.5 explanation.bn: possible_hindi_transliteration_in_bengali_script — তিনি পাণ্ডবপক্ষের আরও বীর রাজা ও সেনাপতির নাম বলেন। প্রতিটি নাম তাঁকে মনে করিয়ে দেয় বিপক্ষের সেনা দক্ষ ও প্রসিদ্ধ যোদ্ধায় পূর্ণ। এই তালিকা দেখায় আগামী যুদ্ধ কতটা কঠিন হবে।
- BG 1.6 translation.bn: possible_hindi_transliteration_in_bengali_script — পরাক্রমী যুধামন্যু, বলবান্ উত্তমৌজা, সুভদ্রাপুত্র (অভিমন্যু) ঔর দ্রোপদী কে পুত্র -- যে সব মহারথী হৈং।
- BG 1.6 explanation.bn: possible_hindi_transliteration_in_bengali_script — ইন তীন শ্লোকোং মেং পাণ্ডবসৈন্য কে প্রমুখ এবং প্রসিদ্ধ যোদ্ধাওং কী নামাবলী হৈ। পাণ্ডবোং কী সেনা কা নিরীক্ষণ করতে সময দুর্যোধন উনমেং অনেক মহারথিযোং কো পহচানতা হৈ। প্রাচীন হিন্দূ সেনা
- BG 1.7 translation.bn: possible_hindi_transliteration_in_bengali_script — হে দ্বিজোত্তম ! হমারে পক্ষ মেং ভী জো বিশিষ্ট যোদ্ধাগণ হৈং , উনকো আপ জান লীজিযে; আপকী জানকারী কে লিযে অপনী সেনা কে নাযকোং কে নাম মৈং আপকো বতাতা হূঁ।
- BG 1.7 explanation.bn: devanagari_letter_leakage — দ্রোণাচার্য কো দ্বিজোত্তম কহকর সম্বোধিত করতে হুযে দুর্যোধন অপনী সেনা কে প্রমুখ বীর যোদ্ধাওং কে নাম সুনাতা হৈ। এক কাযর মনুষ্য অংধেরে মেং অনুভব হোনে বালে ভয কো দূর করনে কে লিযে সীটী 
- BG 1.7 explanation.bn: possible_hindi_transliteration_in_bengali_script — দ্রোণাচার্য কো দ্বিজোত্তম কহকর সম্বোধিত করতে হুযে দুর্যোধন অপনী সেনা কে প্রমুখ বীর যোদ্ধাওং কে নাম সুনাতা হৈ। এক কাযর মনুষ্য অংধেরে মেং অনুভব হোনে বালে ভয কো দূর করনে কে লিযে সীটী 
- BG 1.8 translation.bn: possible_hindi_transliteration_in_bengali_script — এক তো স্বযং আপ, ভীষ্ম, কর্ণ, ঔর যুদ্ধ বিজযী কৃপাচার্য তথা অশ্বত্থামা, বিকর্ণ ঔর সোমদত্ত কা পুত্র হৈ।
- BG 1.8 explanation.bn: possible_hindi_transliteration_in_bengali_script — যদ্যপি কুছ ক্ষণোং কে লিযে অপরাধ কী ভাবনা এবং মানসিক উতেংজনা কে কারণ দুর্যোধন কা বিবেক লুপ্ত হো গযা থা কিন্তু এক তানাশাহ কী ভাঁতি উসনে শীঘ্র হী অপনে আপ কো সংযমিত কর লিযা। সম্ভবত দ্র
- BG 1.9 translation.bn: possible_hindi_transliteration_in_bengali_script — মেরে লিএ প্রাণ ত্যাগ করনে কে লিএ তৈযার, অনেক প্রকার কে শস্ত্রাস্ত্রোং সে সুসজ্জিত তথা যুদ্ধ মেং কুশল ঔর ভী অনেক শূর বীর হৈং।
- BG 1.9 explanation.bn: possible_hindi_transliteration_in_bengali_script — এক অত্যাচারী তানাশাহ কা গর্ব ঔর দম্ভ দেখো কিতনা হৈ কি বহ কহতা হৈ কি ইতনী বিশাল সেনা ঔর উসকে প্রমুখ বীর মেরে লিযে প্রাণোত্সর্গ করনে কে লিযে তৈযার হৈং। মহাভারত কে সজগ অধ্যেতা জানতে হ
- BG 1.10 translation.bn: possible_hindi_transliteration_in_bengali_script — ভীষ্ম কে দ্বারা হমারী রক্ষিত সেনা অপর্যাপ্ত হৈ; কিন্তু ভীম দ্বারা রক্ষিত উনকী সেনা পর্যাপ্ত হৈ অথবা, ভীষ্ম কে দ্বারা রক্ষিত হমারী সেনা অপরিমিত হৈ কিন্তু ভীম কে দ্বারা রক্ষিত উনকী স
- BG 1.10 explanation.bn: possible_hindi_transliteration_in_bengali_script — হিন্দুওং কী প্রাচীন যুদ্ধ পদ্ধতি মেং কিসী সেনা কে সেনাপতি কে সাথসাথ কোঈ যোদ্ধা সেনা কা রক্ষক ভী হোতা থা জিসমেং শৌর্য সাহস ঔর বুদ্ধিমত্তা জৈসে গুণ আবশ্যক হোতে থে। কৌরব ঔর পাণ্ডব পক্
- BG 1.11 translation.bn: possible_hindi_transliteration_in_bengali_script — বিভিন্ন মোর্চোং পর অপনে-অপনে স্থান পর স্থিত রহতে হুএ আপ সব লোগ ভীষ্ম পিতামহ কী হী সব ওর সে রক্ষা করেং।
- BG 1.11 explanation.bn: possible_hindi_transliteration_in_bengali_script — ইতনে সময নিরন্তর অকেলে হী বোলনে ঔর উভয পক্ষ কী সার্মথ্য কো তৌলনে কে পশ্চাত যুদ্ধতত্পর দুর্যোধন মেং স্থিত রাজা অপনে মন কী সঘন নিরাশা কে মেঘখণ্ডোং কো ভেদকর সেনা কো আদেশ দেনা প্রারম্ভ
- BG 1.12 translation.bn: possible_hindi_transliteration_in_bengali_script — উস সময কৌরবোং মেং বৃদ্ধ, প্রতাপী পিতামহ ভীষ্ম নে উস (দুর্যোধন) কে হৃদয মেং হর্ষ উত্পন্ন করতে হুযে উচ্চ স্বর মেং গরজ কর শংখধ্বনি কী।
- BG 1.12 explanation.bn: devanagari_letter_leakage — দুর্যোধন কী মূর্খতাপূর্ণ বাচালতা কে কারণ উসকী সেনা কে যোদ্ধাওং কী স্থিতি বড़ী বিচিত্র সী হো রহী থী। উন পর ভী উদাসী কা প্রভাব প্রকট হোনে লগা জিসে ভীষ্ম বহীং নিকট খড़ে দেখ রহে থে। ভী
- BG 1.12 explanation.bn: possible_hindi_transliteration_in_bengali_script — দুর্যোধন কী মূর্খতাপূর্ণ বাচালতা কে কারণ উসকী সেনা কে যোদ্ধাওং কী স্থিতি বড़ী বিচিত্র সী হো রহী থী। উন পর ভী উদাসী কা প্রভাব প্রকট হোনে লগা জিসে ভীষ্ম বহীং নিকট খড़ে দেখ রহে থে। ভী
- BG 1.13 translation.bn: devanagari_letter_leakage — তত্পশ্চাত্ শংখ, নগারে, ঢোল ব শৃংগী আদি বাদ্য এক সাথ হী বজ উঠে, জিনকা বড़া ভযংকর শব্দ হুআ।
- BG 1.13 explanation.bn: devanagari_letter_leakage — নিসংদেহ সভী যোদ্ধাগণ অত্যধিক তনাব মেং থে পরন্তু জৈসে হী উন্হোংনে শংখনাদ সুনা সবনে অপনাঅপনা শংখ উঠাকর শংখধ্বনি কী। উসকে বাদ যুদ্ধ কে বাদ্য শংখ ভেরী নগাড़ে আদি যুদ্ধ কী ঘোষণা কে রূপ 
- BG 1.13 explanation.bn: possible_hindi_transliteration_in_bengali_script — নিসংদেহ সভী যোদ্ধাগণ অত্যধিক তনাব মেং থে পরন্তু জৈসে হী উন্হোংনে শংখনাদ সুনা সবনে অপনাঅপনা শংখ উঠাকর শংখধ্বনি কী। উসকে বাদ যুদ্ধ কে বাদ্য শংখ ভেরী নগাড़ে আদি যুদ্ধ কী ঘোষণা কে রূপ 
- BG 1.14 translation.bn: possible_hindi_transliteration_in_bengali_script — ইসকে উপরান্ত শ্বেত অশ্বোং সে যুক্ত ভব্য রথ মেং বৈঠে হুযে মাধব (শ্রীকৃষ্ণ) ঔর পাণ্ডুপুত্র অর্জুন নে ভী অপনে দিব্য শংখ বজাযে।
- BG 1.14 explanation.bn: possible_hindi_transliteration_in_bengali_script — তথ্য অত্যন্ত সাধারণ হৈ কি কৌরবোং কী শংখধ্বনি কা উত্তর ভগবান্ শ্রীকৃষ্ণ ঔর অর্জুন নে শংখনাদ করকে দিযা পরন্তু সংজয নে জিস সুন্দরতা ঔর উদারতা কে সাথ ইসকা বর্ণন কিযা হৈ বহ ইস বাত কা স্
- BG 1.15 translation.bn: possible_hindi_transliteration_in_bengali_script — ভগবান্ হৃষীকেশ নে পাংচজন্য, ধনংজয (অর্জুন) নে দেবদত্ত তথা ভযংকর কর্ম করনে বালে ভীম নে পৌণ্ডূ নামক মহাশংখ বজাযা।
- BG 1.15 explanation.bn: possible_hindi_transliteration_in_bengali_script — পাণ্ডবসৈন্য কা বর্ণন করতে হুযে সংজয বিশেষ রূপ সে প্রত্যেক যোদ্ধা কে শংখ কা নাম ভী বতাতা হৈ। ভগবান্ শ্রীকৃষ্ণ কে শংখ কা নাম পাংচজন্য থা। হৃষীকেশ যহ ভগবান্ কা এক নাম হৈ জিসকা অর্থ হৈ
- BG 1.16 translation.bn: possible_hindi_transliteration_in_bengali_script — কুন্তীপুত্র রাজা যুধিষ্ঠির নে অনন্ত বিজয নামক শংখ ঔর নকুল ব সহদেব নে ক্রমশ: সুঘোষ ঔর মণিপুষ্পক নামক শংখ বজাযে।
- BG 1.17 translation.bn: possible_hindi_transliteration_in_bengali_script — শ্রেষ্ঠ ধনুষবালে কাশিরাজ, মহারথী শিখণ্ডী, ধৃষ্টদ্যুম্ন, রাজা বিরাট ঔর অজেয সাত্যকি।
- BG 1.18 translation.bn: possible_hindi_transliteration_in_bengali_script — হে রাজন্ ! রাজা দ্রুপদ, দ্রৌপদী কে পুত্র ঔর মহাবাহু সৌভদ্র (অভিমন্যু) ইন সব নে অলগ-অলগ শংখ বজাযে।
- BG 1.18 explanation.bn: possible_hindi_transliteration_in_bengali_script — ইন শ্লোকোং মেং উন মহারথিযোং কে নাম হৈং জিন্হোংনে অত্যন্ত উত্সাহ কে সাথ বারংবার প্রচণ্ড ধ্বনি সে শংখনাদ কিযা। ভীষ্ম পিতামহ কে ধরাশাযী হোনে মেং শিখণ্ডী কারণ থা। সাত্যকি ভী পাণ্ডব সেন
- BG 1.19 translation.bn: possible_hindi_transliteration_in_bengali_script — বহ ভযংকর ঘোষ আকাশ ঔর পৃথ্বী পর গূঁজনে লগা ঔর উসনে ধৃতরাষ্ট্র কে পুত্রোং কে হৃদয বিদীর্ণ কর দিযে।
- BG 1.19 explanation.bn: possible_hindi_transliteration_in_bengali_script — 14বেং শ্লোক সে সংজয পাণ্ডবোং কী সেনা কা বিস্তৃত বর্ণন করতা হৈ। উসকা যহ বিশেষ প্রযাস হৈ কি কিসী প্রকার ধৃতরাষ্ট্র পাণ্ডব সেনা কী শ্রেষ্ঠতা সমঝ সকেং ঔর যুদ্ধ কে বিনাশকারী পরিণামোং কো
- BG 1.20 translation.bn: possible_hindi_transliteration_in_bengali_script — হে মহীপতে ! ইস প্রকার জব যুদ্ধ প্রারম্ভ হোনে বালা হী থা কি কপিধ্বজ অর্জুন নে ধৃতরাষ্ট্র কে পুত্রোং কো স্থিত দেখকর ধনুষ উঠাকর ভগবান্ হৃষীকেশ সে যে শব্দ কহে।
- BG 1.20 explanation.bn: devanagari_letter_leakage — ইন ডেঢ़ শ্লোকোং মেং মহাভারত যুদ্ধ কে নাযক অর্জুন কা যুদ্ধক্ষেত্র মেং প্রবেশবর্ণন মিলতা হৈ। উসকে প্রবেশ কা ঠীক সময ঔর ঢংগ ভী ইসমেং অংকিত কিযা গযা হৈ। অভী বাণ যুদ্ধ প্রারম্ভ নহীং হুআ
- BG 1.20 explanation.bn: possible_hindi_transliteration_in_bengali_script — ইন ডেঢ़ শ্লোকোং মেং মহাভারত যুদ্ধ কে নাযক অর্জুন কা যুদ্ধক্ষেত্র মেং প্রবেশবর্ণন মিলতা হৈ। উসকে প্রবেশ কা ঠীক সময ঔর ঢংগ ভী ইসমেং অংকিত কিযা গযা হৈ। অভী বাণ যুদ্ধ প্রারম্ভ নহীং হুআ
- BG 1.21 translation.bn: devanagari_letter_leakage — অর্জুন নে কহা -- হে! অচ্যুত মেরে রথ কো দোনোং সেনাওং কে মধ্য খড़া কীজিযে।
- BG 1.21 translation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন নে কহা -- হে! অচ্যুত মেরে রথ কো দোনোং সেনাওং কে মধ্য খড़া কীজিযে।
- BG 1.21 explanation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন কৃষ্ণকে বলেন রথটি দুই সেনার মাঝখানে নিয়ে যেতে। যুদ্ধ শুরুর আগে কিছুক্ষণ সেখানে দাঁড়াতে চান তিনি। তাঁকে মন দিয়ে দেখতে হবে যুদ্ধে কারা এসেছে।
- BG 1.22 translation.bn: devanagari_letter_leakage — জিসসে মৈং যুদ্ধ কী ইচ্ছা সে খড़ে ইন লোগোং কা নিরীক্ষণ কর সকূঁ কি ইস যুদ্ধ মেং মুঝে কিনকে সাথ যুদ্ধ করনা হৈ।
- BG 1.22 translation.bn: possible_hindi_transliteration_in_bengali_script — জিসসে মৈং যুদ্ধ কী ইচ্ছা সে খড़ে ইন লোগোং কা নিরীক্ষণ কর সকূঁ কি ইস যুদ্ধ মেং মুঝে কিনকে সাথ যুদ্ধ করনা হৈ।
- BG 1.22 explanation.bn: devanagari_letter_leakage — যহাঁ হম অর্জুন কো এক সেনা নাযক কে সমান রথসারথি কো আদেশ দেতে হুএ দেখতে হৈং কি উসকা রথ দোনোং সেনাওং কে মধ্য খড़া কর দিযা জায জিসসে বহ বিভিন্ন যোদ্ধাওং কো দেখ ঔর পহচান সকে জিনকে সাথ উ
- BG 1.22 explanation.bn: possible_hindi_transliteration_in_bengali_script — যহাঁ হম অর্জুন কো এক সেনা নাযক কে সমান রথসারথি কো আদেশ দেতে হুএ দেখতে হৈং কি উসকা রথ দোনোং সেনাওং কে মধ্য খড़া কর দিযা জায জিসসে বহ বিভিন্ন যোদ্ধাওং কো দেখ ঔর পহচান সকে জিনকে সাথ উ
- BG 1.23 translation.bn: possible_hindi_transliteration_in_bengali_script — দুর্বুদ্ধি ধার্তরাষ্ট্র (দুর্যোধন) কা যুদ্ধ মেং প্রিয চাহনে বালে জো যে রাজা লোগ যহাঁ একত্র হুএ হৈং, উন যুদ্ধ করনে বালোং কো মৈং দেখূঁগা।
- BG 1.23 explanation.bn: devanagari_letter_leakage — পূর্ব শ্লোক মেং কহী গযী বাত কো হী অর্জুন ইস শ্লোক মেং বল দেকর কহ রহা হৈ। শত্রু সৈন্য কে নিরীক্ষণ কে কারণ কো ভী বহ যহাঁ স্পষ্ট করতা হৈ। এক কর্মশীল ব্যক্তি হোনে কে কারণ বহ কোঈ অনাবশ্
- BG 1.23 explanation.bn: possible_hindi_transliteration_in_bengali_script — পূর্ব শ্লোক মেং কহী গযী বাত কো হী অর্জুন ইস শ্লোক মেং বল দেকর কহ রহা হৈ। শত্রু সৈন্য কে নিরীক্ষণ কে কারণ কো ভী বহ যহাঁ স্পষ্ট করতা হৈ। এক কর্মশীল ব্যক্তি হোনে কে কারণ বহ কোঈ অনাবশ্
- BG 1.24 translation.bn: devanagari_letter_leakage — সংজয নে কহা -- হে ভারত (ধৃতরাষ্ট্র) ! অর্জুন কে ইস প্রকার কহনে পর ভগবান্ হৃষীকেশ নে দোনোং সেনাওং কে মধ্য উত্তম রথ কো খড़া করকে।
- BG 1.24 translation.bn: possible_hindi_transliteration_in_bengali_script — সংজয নে কহা -- হে ভারত (ধৃতরাষ্ট্র) ! অর্জুন কে ইস প্রকার কহনে পর ভগবান্ হৃষীকেশ নে দোনোং সেনাওং কে মধ্য উত্তম রথ কো খড़া করকে।
- BG 1.24 explanation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুনের কথা শুনে কৃষ্ণ সেই শ্রেষ্ঠ রথটি সামনে নিয়ে যান। তিনি ঠিক দুই সেনার মাঝখানে, সবার চোখের সামনে রথটি থামান। এখন দুপক্ষের লোকেরা রথটি স্পষ্ট দেখতে পাচ্ছে।
- BG 1.25 translation.bn: possible_hindi_transliteration_in_bengali_script — ভীষ্ম, দ্রোণ তথা পৃথ্বী কে সমস্ত শাসকোং কে সমক্ষ উন্হোংনে কহা, "হে পার্থ যহাঁ একত্র হুযে কৌরবোং কো দেখো"।
- BG 1.25 explanation.bn: devanagari_letter_leakage — ভগবান্ শ্রীকৃষ্ণ নে উস ভব্য রথ কো ভীষ্ম ঔর দ্রোণ দোনোং কে সম্মুখ এক স্থান পর লাকর খড़া কর দিযা। এক কর্তব্যনিষ্ঠ সারথি কে সমান বে অর্জুন সে কহতে হৈং হে পার্থ যহাঁ একত্র হুএ ইন কৌরব
- BG 1.25 explanation.bn: possible_hindi_transliteration_in_bengali_script — ভগবান্ শ্রীকৃষ্ণ নে উস ভব্য রথ কো ভীষ্ম ঔর দ্রোণ দোনোং কে সম্মুখ এক স্থান পর লাকর খড़া কর দিযা। এক কর্তব্যনিষ্ঠ সারথি কে সমান বে অর্জুন সে কহতে হৈং হে পার্থ যহাঁ একত্র হুএ ইন কৌরব
- BG 1.26 translation.bn: devanagari_letter_leakage — বহাঁ অর্জুন নে উন দোনোং সেনাওং মেং খড़ে পিতা কে ভাইযোং, পিতামহোং, আচার্যোং, মামোং, ভাইযোং, পুত্রোং, পৌত্রোং, মিত্রোং, শ্বসুরোং ঔর সুহৃদোং কো ভী দেখা।
- BG 1.26 translation.bn: possible_hindi_transliteration_in_bengali_script — বহাঁ অর্জুন নে উন দোনোং সেনাওং মেং খড़ে পিতা কে ভাইযোং, পিতামহোং, আচার্যোং, মামোং, ভাইযোং, পুত্রোং, পৌত্রোং, মিত্রোং, শ্বসুরোং ঔর সুহৃদোং কো ভী দেখা।
- BG 1.26 explanation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন যুদ্ধক্ষেত্রের দিকে তাকিয়ে দুই সেনায় নিজের গুরুজন, শিক্ষক, কাকা, ভাই, পুত্র, পৌত্র, বন্ধু ও শুভাকাঙ্ক্ষীদের দেখেন। এই মুখগুলি অপরিচিত নয়, নিজের পরিবারেরই। হঠাৎ এই যুদ্ধ আ
- BG 1.27 translation.bn: devanagari_letter_leakage — ইস প্রকার উন সব বন্ধু-বান্ধবোং কো খড़ে দেখকর কুন্তী পুত্র অর্জুন কা মন করুণা সে ভর গযা ঔর বিষাদযুক্ত হোকর উসনে যহ কহা।
- BG 1.27 translation.bn: possible_hindi_transliteration_in_bengali_script — ইস প্রকার উন সব বন্ধু-বান্ধবোং কো খড़ে দেখকর কুন্তী পুত্র অর্জুন কা মন করুণা সে ভর গযা ঔর বিষাদযুক্ত হোকর উসনে যহ কহা।
- BG 1.27 explanation.bn: devanagari_letter_leakage — ইস প্রকার ভগবান্ শ্রীকৃষ্ণ দ্বারা সেনা কে দিখাযে জানে পর অর্জুন নে শত্রুপক্ষ মেং খড़ে অপনে সগেসম্বন্ধিযোং কো দেখা পরিবার কে হী প্রিয সদস্যোং কো পহচানা জিনমেং ভাঈভতীজে গুরুজন পিতামহ
- BG 1.27 explanation.bn: possible_hindi_transliteration_in_bengali_script — ইস প্রকার ভগবান্ শ্রীকৃষ্ণ দ্বারা সেনা কে দিখাযে জানে পর অর্জুন নে শত্রুপক্ষ মেং খড़ে অপনে সগেসম্বন্ধিযোং কো দেখা পরিবার কে হী প্রিয সদস্যোং কো পহচানা জিনমেং ভাঈভতীজে গুরুজন পিতামহ
- BG 1.28 translation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন নে কহা -- হে কৃষ্ণ ! যুদ্ধ কী ইচ্ছা রখকর উপস্থিত হুএ ইন স্বজনোং কো দেখকর মেরে অংগ শিথিল হুযে জাতে হৈং, মুখ ভী সূখ রহা হৈ ঔর মেরে শরীর মেং কম্প তথা রোমাংচ হো রহা হৈ।।
- BG 1.28 explanation.bn: possible_hindi_transliteration_in_bengali_script — মনসংভ্রম কে কারণ মানসিক রোগী কে শরীর মেং উত্পন্ন হোনে বালে লক্ষণোং কো যহাঁ বিস্তার সে বতাযা গযা হৈ। জিসে সংজয নে করুণা কহা থাউসকী বাস্তবিকতা স্বযং অর্জুন কে শব্দোং সে স্পষ্ট জ্ঞাত 
- BG 1.29 translation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন নে কহা -- হে কৃষ্ণ ! যুদ্ধ কী ইচ্ছা রখকর উপস্থিত হুএ ইন স্বজনোং কো দেখকর মেরে অংগ শিথিল হুযে জাতে হৈং, মুখ ভী সূখ রহা হৈ ঔর মেরে শরীর মেং কম্প তথা রোমাংচ হো রহা হৈ।
- BG 1.29 explanation.bn: possible_hindi_transliteration_in_bengali_script — মনসংভ্রম কে কারণ মানসিক রোগী কে শরীর মেং উত্পন্ন হোনে বালে লক্ষণোং কো যহাঁ বিস্তার সে বতাযা গযা হৈ। জিসে সংজয নে করুণা কহা থাউসকী বাস্তবিকতা স্বযং অর্জুন কে শব্দোং সে স্পষ্ট জ্ঞাত 
- BG 1.30 translation.bn: devanagari_letter_leakage — মেরে হাথ সে গাণ্ডীব (ধনুষ) গির রহা হৈ ঔর ত্বচা জল রহী হৈ। মেরা মন ভ্রমিত সা হো রহা হৈ, ঔর মৈং খড़ে রহনে মেং অসমর্থ হূঁ।
- BG 1.30 translation.bn: possible_hindi_transliteration_in_bengali_script — মেরে হাথ সে গাণ্ডীব (ধনুষ) গির রহা হৈ ঔর ত্বচা জল রহী হৈ। মেরা মন ভ্রমিত সা হো রহা হৈ, ঔর মৈং খড़ে রহনে মেং অসমর্থ হূঁ।
- BG 1.30 explanation.bn: possible_hindi_transliteration_in_bengali_script — যহাঁ অর্জুন অপনে রোগ কে কুছ ঔর লক্ষণ বতাতা হৈ। ইসকে পহলে উসনে অপনে স্থূল শরীর মেং ব্যক্ত হোনে বালে লক্ষণ বতাযে থে ঔর অব বহ অপনী মন কী অসংতুলিত স্থিতি কা ভী বর্ণন করতা হৈ।উসকা মন অস
- BG 1.31 translation.bn: possible_hindi_transliteration_in_bengali_script — হে কেশব ! মৈং শকুনোং কো ভী বিপরীত হী দেখ রহা হূঁ ঔর যুদ্ধ মেং (আহবে) অপনে স্বজনোং কো মারকর কোঈ কল্যাণ ভী নহীং দেখতা হূঁ।
- BG 1.31 explanation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন চারদিকে অশুভ লক্ষণ দেখেন এবং মনে হয় এই যুদ্ধ থেকে ভালো কিছু হবে না। তিনি বলেন আপনজনদের মেরে কোনো সুখ পাওয়া যাবে না। এমন মূল্যে তিনি জয়, রাজ্য বা সুখ কিছুই চান না।
- BG 1.32 translation.bn: possible_hindi_transliteration_in_bengali_script — হে কৃষ্ণ ! মৈং ন বিজয চাহতা হূঁ, ন রাজ্য ঔর ন সুখোং কো হী চাহতা হূঁ। হে গোবিন্দ ! হমেং রাজ্য সে অথবা ভোগোং সে ঔর জীনে সে ভী ক্যা প্রযোজন হৈ?।
- BG 1.32 explanation.bn: devanagari_letter_leakage — বুদ্ধি সে পূর্ণতযা বিলগ হোকর উসকা ভ্রমিত মন এক পাগল কে সমান ইধরউধর দৌড़তা হৈ ঔর মূর্খতাপূর্ণ নিষ্কর্ষোং পর পহুঁচতা হৈ। বহ কহতা হৈ মৈং ন বিজয চাহতা হূঁ ন রাজ্য ঔর ন সুখ। যহ সুবিদিত 
- BG 1.32 explanation.bn: possible_hindi_transliteration_in_bengali_script — বুদ্ধি সে পূর্ণতযা বিলগ হোকর উসকা ভ্রমিত মন এক পাগল কে সমান ইধরউধর দৌড़তা হৈ ঔর মূর্খতাপূর্ণ নিষ্কর্ষোং পর পহুঁচতা হৈ। বহ কহতা হৈ মৈং ন বিজয চাহতা হূঁ ন রাজ্য ঔর ন সুখ। যহ সুবিদিত 
- BG 1.33 translation.bn: devanagari_letter_leakage — হমেং জিনকে লিযে রাজ্য, ভোগ ঔর সুখাদি কী ইচ্ছা হৈ, বে হী লোগ ধন ঔর জীবন কী আশা কো ত্যাগকর যুদ্ধ মেং খড़ে হৈং।
- BG 1.33 translation.bn: possible_hindi_transliteration_in_bengali_script — হমেং জিনকে লিযে রাজ্য, ভোগ ঔর সুখাদি কী ইচ্ছা হৈ, বে হী লোগ ধন ঔর জীবন কী আশা কো ত্যাগকর যুদ্ধ মেং খড़ে হৈং।
- BG 1.33 explanation.bn: possible_hindi_transliteration_in_bengali_script — যাঁদের জন্য রাজ্য ও সুখ চাই, তাঁরাই এখানে নিজেদের প্রাণ দিতে প্রস্তুত। তাঁদের ছাড়া এসবের কী লাভ? এই চিন্তা অর্জুনের যুদ্ধ করার সংকল্প ভেঙে দেয়।
- BG 1.34 translation.bn: possible_hindi_transliteration_in_bengali_script — বে লোগ গুরুজন, তাঊ, চাচা, পুত্র, পিতামহ, শ্বসুর, পোতে, শ্যালক তথা অন্য সম্বন্ধী হৈং।
- BG 1.34 explanation.bn: devanagari_letter_leakage — এক হী ক্ষত্রিয পরিবার কে লোগোং কে বীচ হোনে জা রহে ইস গৃহযুদ্ধ কে বিরুদ্ধ অর্জুন ভগবান্ শ্রীকৃষ্ণ কো অন্য তর্ক ভী দেতা হৈ। ভাবাবিষ্ট অর্জুন অপনে কাযরতাপূর্ণ পলাযন কে লিযে অনেক তর্ক 
- BG 1.34 explanation.bn: possible_hindi_transliteration_in_bengali_script — এক হী ক্ষত্রিয পরিবার কে লোগোং কে বীচ হোনে জা রহে ইস গৃহযুদ্ধ কে বিরুদ্ধ অর্জুন ভগবান্ শ্রীকৃষ্ণ কো অন্য তর্ক ভী দেতা হৈ। ভাবাবিষ্ট অর্জুন অপনে কাযরতাপূর্ণ পলাযন কে লিযে অনেক তর্ক 
- BG 1.35 translation.bn: possible_hindi_transliteration_in_bengali_script — হে মধুসূদন ! ইনকে মুঝে মারনে পর অথবা ত্রৈলোক্য কে রাজ্য কে লিযে ভী মৈং ইনকো মারনা নহীং চাহতা, ফির পৃথ্বী কে লিএ কহনা হী ক্যা হৈ।
- BG 1.35 explanation.bn: devanagari_letter_leakage — যহ বিচার কর কি সংভবত উসনে অপনে পক্ষ কো শ্রীকৃষ্ণ কে সমক্ষ অচ্ছী প্রকার দৃঢ़তা সে প্রস্তুত নহীং কিযা হৈ জিসসে কি ভগবান্ উসকে মত কী পুষ্টি করেং অর্জুন ব্যর্থ মেং ত্যাগ কী বাতেং করতা 
- BG 1.35 explanation.bn: possible_hindi_transliteration_in_bengali_script — যহ বিচার কর কি সংভবত উসনে অপনে পক্ষ কো শ্রীকৃষ্ণ কে সমক্ষ অচ্ছী প্রকার দৃঢ़তা সে প্রস্তুত নহীং কিযা হৈ জিসসে কি ভগবান্ উসকে মত কী পুষ্টি করেং অর্জুন ব্যর্থ মেং ত্যাগ কী বাতেং করতা 
- BG 1.36 translation.bn: possible_hindi_transliteration_in_bengali_script — হে জনার্দন ! ধৃতরাষ্ট্র কে পুত্রোং কী হত্যা করকে হমেং ক্যা প্রসন্নতা হোগী? ইন আততাযিযোং কো মারকর তো হমেং কেবল পাপ হী লগেগা।
- BG 1.36 explanation.bn: devanagari_letter_leakage — অর্জুন কে ইতনা কুছ কহনে পর ভী ভগবান্ শ্রীকৃষ্ণ মূর্তিবত্ মৌন হী রহতে হৈং। ইসলিযে বহ পহলে কী ভাষা ছোড़কর মৃদুভাব সে কিসী মন্দ বুদ্ধি মিত্র কো কোঈ বাত সমঝানে কী শৈলী মেং ভাবুক তর্ক দ
- BG 1.36 explanation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন কে ইতনা কুছ কহনে পর ভী ভগবান্ শ্রীকৃষ্ণ মূর্তিবত্ মৌন হী রহতে হৈং। ইসলিযে বহ পহলে কী ভাষা ছোড़কর মৃদুভাব সে কিসী মন্দ বুদ্ধি মিত্র কো কোঈ বাত সমঝানে কী শৈলী মেং ভাবুক তর্ক দ
- BG 1.37 translation.bn: possible_hindi_transliteration_in_bengali_script — হে মাধব ! ইসলিযে অপনে বান্ধব ধৃতরাষ্ট্র কে পুত্রোং কো মারনা হমারে লিএ যোগ্য নহীং হৈ, ক্যোংকি স্বজনোং কো মারকর হম কৈসে সুখী হোংগে।
- BG 1.37 explanation.bn: devanagari_letter_leakage — ঐসা প্রতীত হোতা হৈ কি অর্জুন কে তর্ক শাস্ত্রসম্মত হৈং। জানে যা অনজানে শাস্ত্রোং কা বিপরীত অর্থ করনে বালে লোগোং কে কারণ দর্শনশাস্ত্র কী অত্যধিক হানি হোতী হৈ। অর্জুন অপনে দিযে হুযে ত
- BG 1.37 explanation.bn: possible_hindi_transliteration_in_bengali_script — ঐসা প্রতীত হোতা হৈ কি অর্জুন কে তর্ক শাস্ত্রসম্মত হৈং। জানে যা অনজানে শাস্ত্রোং কা বিপরীত অর্থ করনে বালে লোগোং কে কারণ দর্শনশাস্ত্র কী অত্যধিক হানি হোতী হৈ। অর্জুন অপনে দিযে হুযে ত
- BG 1.38 translation.bn: possible_hindi_transliteration_in_bengali_script — যদ্যপি লোভ সে ভ্রষ্টচিত্ত হুযে যে লোগ কুলনাশকৃত দোষ ঔর মিত্র দ্রোহ মেং পাপ নহীং দেখতে হৈং।
- BG 1.39 translation.bn: possible_hindi_transliteration_in_bengali_script — পরন্তু, হেে জনার্দন ! কুলক্ষয সে হোনে বালে দোষ কো জাননে বালে হম লোগোং কো ইস পাপ সে বিরত হোনে কে লিএ ক্যোং নহীং সোচনা চাহিযে।
- BG 1.39 explanation.bn: possible_hindi_transliteration_in_bengali_script — নিসংদেহ সত্তা ঔর ধন কে লালচ সে অন্ধে হুএ কৌরব যহ দেখনে মেং অসমর্থ থে কি ইস যুদ্ধ কে কারণ সম্পূর্ণ সামাজিক ঢাঁচে কা কিতনা বিনাশ হোনে বালা হৈ। উনকী মহত্ত্বাকাংক্ষা নে উনকে বিবেক ঔর ভ
- BG 1.40 translation.bn: possible_hindi_transliteration_in_bengali_script — কুল কে নষ্ট হোনে সে সনাতন ধর্ম নষ্ট হো জাতে হৈং। ধর্ম নষ্ট হোনে পর সম্পূর্ণ কুল কো অধর্ম (পাপ) দবা লেতা হৈ।
- BG 1.40 explanation.bn: devanagari_letter_leakage — জিস প্রকার কোঈ কথাবাচক হর বার পুরানী কথা সুনাতে হুএ কুছ নঈ বাতেং উসমেং জোড़তা জাতা হৈ ইসী প্রকার অর্জুন কী সর্জক বুদ্ধি অপনী গলত ধারণা কো পুষ্ট করনে কে লিএ নএনএ তর্ক নিকাল রহী হৈ। 
- BG 1.40 explanation.bn: possible_hindi_transliteration_in_bengali_script — জিস প্রকার কোঈ কথাবাচক হর বার পুরানী কথা সুনাতে হুএ কুছ নঈ বাতেং উসমেং জোড़তা জাতা হৈ ইসী প্রকার অর্জুন কী সর্জক বুদ্ধি অপনী গলত ধারণা কো পুষ্ট করনে কে লিএ নএনএ তর্ক নিকাল রহী হৈ। 
- BG 1.41 translation.bn: devanagari_letter_leakage — হে কৃষ্ণ ! পাপ কে অধিক বঢ़ জানে সে কুল কী স্ত্রিযাং দূষিত হো জাতী হৈং, ঔর হে বার্ষ্ণেয ! স্ত্রিযোং কে দূষিত হোনে পর বর্ণসংকর উত্পন্ন হোতা হৈ।
- BG 1.41 translation.bn: possible_hindi_transliteration_in_bengali_script — হে কৃষ্ণ ! পাপ কে অধিক বঢ़ জানে সে কুল কী স্ত্রিযাং দূষিত হো জাতী হৈং, ঔর হে বার্ষ্ণেয ! স্ত্রিযোং কে দূষিত হোনে পর বর্ণসংকর উত্পন্ন হোতা হৈ।
- BG 1.41 explanation.bn: devanagari_letter_leakage — অর্জুন অপনে পূর্বকথিত তর্ক কো আগে বঢ़াতে হুএ কহতা হৈ কি অধর্ম কে বঢ़নে পর সমাজ মেং ধীরধীরে নৈতিকতা কা পতন হো জাযেগা ঔর বর্ণসংকর জাতিযাঁ উত্পন্ন হোংগী।বর্ণ এক ঐসা শব্দ হৈ জিসকা অর্থ
- BG 1.41 explanation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন অপনে পূর্বকথিত তর্ক কো আগে বঢ़াতে হুএ কহতা হৈ কি অধর্ম কে বঢ़নে পর সমাজ মেং ধীরধীরে নৈতিকতা কা পতন হো জাযেগা ঔর বর্ণসংকর জাতিযাঁ উত্পন্ন হোংগী।বর্ণ এক ঐসা শব্দ হৈ জিসকা অর্থ
- BG 1.42 translation.bn: possible_hindi_transliteration_in_bengali_script — বহ বর্ণসংকর কুলঘাতিযোং কো ঔর কুল কো নরক মেং লে জানে কা কারণ বনতা হৈ। পিণ্ড ঔর জলদান কী ক্রিযা সে বংচিত ইনকে পিতর ভী নরক মেং গির জাতে হৈং।
- BG 1.42 explanation.bn: devanagari_letter_leakage — অব অর্জুন বর্ণসংকর কে দুষ্পরিণামোং কো বতাতা হৈ। জাতিযোং কে বর্ণসংকর হোনে সে অন্তর্বাহ্য জীবন মেং নৈতিক মূল্যোং কা হ্রাস হোতা হৈ ঔর ফলত পরিবারিক ব ধার্মিক পরম্পরাযেং নষ্ট হো জাতী হৈ
- BG 1.42 explanation.bn: possible_hindi_transliteration_in_bengali_script — অব অর্জুন বর্ণসংকর কে দুষ্পরিণামোং কো বতাতা হৈ। জাতিযোং কে বর্ণসংকর হোনে সে অন্তর্বাহ্য জীবন মেং নৈতিক মূল্যোং কা হ্রাস হোতা হৈ ঔর ফলত পরিবারিক ব ধার্মিক পরম্পরাযেং নষ্ট হো জাতী হৈ
- BG 1.43 translation.bn: possible_hindi_transliteration_in_bengali_script — ইন বর্ণসংকর কারক দোষোং সে কুলঘাতী দোষোং সে সনাতন কুলধর্ম ঔর জাতিধর্ম নষ্ট হো জাতে হৈং।
- BG 1.43 explanation.bn: devanagari_letter_leakage — পূর্ব শ্লোক কী টীকা কা অর্থ অর্জুন কে ইস বাক্য সে ঔর অধিক স্পষ্ট হো জাতা হৈ। জৈসা কি হমনে দেখা ধর্ম কা অর্থ হৈ ভারতীয আধ্যাত্মিক সংস্কৃতি জিসকা প্রশিক্ষণ প্রত্যেক ঘর মেং হী প্রারম্
- BG 1.43 explanation.bn: possible_hindi_transliteration_in_bengali_script — পূর্ব শ্লোক কী টীকা কা অর্থ অর্জুন কে ইস বাক্য সে ঔর অধিক স্পষ্ট হো জাতা হৈ। জৈসা কি হমনে দেখা ধর্ম কা অর্থ হৈ ভারতীয আধ্যাত্মিক সংস্কৃতি জিসকা প্রশিক্ষণ প্রত্যেক ঘর মেং হী প্রারম্
- BG 1.44 translation.bn: possible_hindi_transliteration_in_bengali_script — হে জনার্দন ! হমনে সুনা হৈ কি জিনকে যহাং কুল ধর্ম নষ্ট হো জাতা হৈ, উন মনুষ্যোং কা অনিযত কাল তক নরক মেং বাস হোতা হৈ।
- BG 1.44 explanation.bn: possible_hindi_transliteration_in_bengali_script — ইসকে উপরান্ত ভী ভগবান্ কুছ নহীং বোলে। অব অর্জুন কী স্থিতি ঐসী হো গযী থী কি বহ ন তো চুপ রহ সকতা থা ঔর ন উসকো নযে তর্ক হী সূঝ রহে থে। পরন্তু ভগবান্ কে মৌন কা প্রভাব ভী অনূঠা হী থা। ই
- BG 1.45 translation.bn: devanagari_letter_leakage — অহো ! শোক হৈ কি হম লোগ বড़া ভারী পাপ করনে কা নিশ্চয কর বৈঠে হৈং, জো কি ইস রাজ্যসুখ কে লোভ সে অপনে কুটুম্ব কা নাশ করনে কে লিযে তৈযার হো গযে হৈং।
- BG 1.45 translation.bn: possible_hindi_transliteration_in_bengali_script — অহো ! শোক হৈ কি হম লোগ বড़া ভারী পাপ করনে কা নিশ্চয কর বৈঠে হৈং, জো কি ইস রাজ্যসুখ কে লোভ সে অপনে কুটুম্ব কা নাশ করনে কে লিযে তৈযার হো গযে হৈং।
- BG 1.45 explanation.bn: devanagari_letter_leakage — ইস শ্লোক মেং অর্জুন কী বৌদ্ধিক নিরাশা ঔর মন কী থকান স্পষ্ট দিখাঈ পড़তী হৈ জো বাস্তব মেং বড़ী দযনীয হৈ। আত্মবিশ্বাস কো খোকর বহ কহতা হৈ অহো হম পাপ করনে কো প্রবৃত্ত হো রহে হৈং . ইত্য
- BG 1.45 explanation.bn: possible_hindi_transliteration_in_bengali_script — ইস শ্লোক মেং অর্জুন কী বৌদ্ধিক নিরাশা ঔর মন কী থকান স্পষ্ট দিখাঈ পড़তী হৈ জো বাস্তব মেং বড़ী দযনীয হৈ। আত্মবিশ্বাস কো খোকর বহ কহতা হৈ অহো হম পাপ করনে কো প্রবৃত্ত হো রহে হৈং . ইত্য
- BG 1.46 translation.bn: possible_hindi_transliteration_in_bengali_script — যদি মুঝ শস্ত্ররহিত ঔর প্রতিকার ন করনে বালে কো যে শস্ত্রধারী কৌরব রণ মেং মারেং, তো ভী বহ মেরে লিযে কল্যাণকারক হোগা।
- BG 1.46 explanation.bn: devanagari_letter_leakage — যহাঁ অর্জুন অপনে অন্তিম নির্ণয কী ঘোষণা করতা হৈ। সব প্রকার সে পরিস্থিতি পর বিচার করনে পর উসে যহী উচিত জান পড़তা হৈ কি রণভূমি মেং বহ কিসী প্রকার কা প্রতিকার ন করে চাহেং কৌরব উসে শস্
- BG 1.46 explanation.bn: possible_hindi_transliteration_in_bengali_script — যহাঁ অর্জুন অপনে অন্তিম নির্ণয কী ঘোষণা করতা হৈ। সব প্রকার সে পরিস্থিতি পর বিচার করনে পর উসে যহী উচিত জান পড़তা হৈ কি রণভূমি মেং বহ কিসী প্রকার কা প্রতিকার ন করে চাহেং কৌরব উসে শস্
- BG 1.47 translation.bn: possible_hindi_transliteration_in_bengali_script — সংজয নে কহা -- রণভূমি (সংখ্যে) মেং শোক সে উদ্বিগ্ন মনবালা অর্জুন ইস প্রকার কহকর বাণসহিত ধনুষ কো ত্যাগ কর রথ কে পিছলে ভাগ মেং বৈঠ গযা।
- BG 1.47 explanation.bn: devanagari_letter_leakage — রণভূমি মেং সংজয নে জো কুছ ভী দেখা উসকা বহ বর্ণন করতা হৈ। অপনে হী তর্কোং সে থকা ঔর শোক মেং ডূবা হুআ অর্জুন অপনে শস্ত্রাস্ত্রোং কো ফেংককর রথ মেং বৈঠ জাতা হৈ। গীতা কে প্রথম অধ্যায মেং
- BG 1.47 explanation.bn: possible_hindi_transliteration_in_bengali_script — রণভূমি মেং সংজয নে জো কুছ ভী দেখা উসকা বহ বর্ণন করতা হৈ। অপনে হী তর্কোং সে থকা ঔর শোক মেং ডূবা হুআ অর্জুন অপনে শস্ত্রাস্ত্রোং কো ফেংককর রথ মেং বৈঠ জাতা হৈ। গীতা কে প্রথম অধ্যায মেং
- BG 2.1 translation.bn: possible_hindi_transliteration_in_bengali_script — সংজয নে কহা -- ইস প্রকার করুণা ঔর বিষাদ সে অভিভূত, অশ্রুপূরিত নেত্রোং বালে আকুল অর্জুন সে মধুসূদন নে যহ বাক্য কহা।।
- BG 2.1 explanation.bn: devanagari_letter_leakage — দ্বিতীয অধ্যায কা প্রারম্ভ সংজয কে কথন সে হোতা হৈ জিসমেং বহ চুনে হুযে শব্দোং সে অর্জুন কী বিষাদমযী মানসিক স্থিতি কা স্পষ্ট চিত্রণ করতা হৈ। অর্জুন কা মন করুণা ঔর বিষাদ সে ভর গযা হৈ।
- BG 2.1 explanation.bn: possible_hindi_transliteration_in_bengali_script — দ্বিতীয অধ্যায কা প্রারম্ভ সংজয কে কথন সে হোতা হৈ জিসমেং বহ চুনে হুযে শব্দোং সে অর্জুন কী বিষাদমযী মানসিক স্থিতি কা স্পষ্ট চিত্রণ করতা হৈ। অর্জুন কা মন করুণা ঔর বিষাদ সে ভর গযা হৈ।
- BG 2.2 translation.bn: possible_hindi_transliteration_in_bengali_script — শ্রী ভগবান্ নে কহা -- হে অর্জুন ! তুমকো ইস বিষম স্থল মেং যহ মোহ কহাঁ সে উত্পন্ন হুআ? যহ আর্য আচরণ কে বিপরীত ন তো স্বর্গ প্রাপ্তি কা সাধন হী হৈ ঔর ন কীর্তি করানে বালা হী হৈ।।
- BG 2.2 explanation.bn: devanagari_letter_leakage — অপনে আপ কো আর্য কহলানে বালে এক রাজা কো যুদ্ধভূমি মেং ইস প্রকার হতবুদ্ধি দেখকর ভগবান্ কো আশ্চর্য হো রহা থা। এক সচ্চে আর্য অর্থাত্ শ্রেষ্ঠ পুরুষ কা স্বভাব তো যহ হোতা হৈ কি জীবন মেং আ
- BG 2.2 explanation.bn: possible_hindi_transliteration_in_bengali_script — অপনে আপ কো আর্য কহলানে বালে এক রাজা কো যুদ্ধভূমি মেং ইস প্রকার হতবুদ্ধি দেখকর ভগবান্ কো আশ্চর্য হো রহা থা। এক সচ্চে আর্য অর্থাত্ শ্রেষ্ঠ পুরুষ কা স্বভাব তো যহ হোতা হৈ কি জীবন মেং আ
- BG 2.3 translation.bn: devanagari_letter_leakage — হে পার্থ ক্লীব (কাযর) মত বনো। যহ তুম্হারে লিযে অশোভনীয হৈ, হে ! পরংতপ হৃদয কী ক্ষুদ্র দুর্বলতা কো ত্যাগকর খড़ে হো জাও।।
- BG 2.3 translation.bn: possible_hindi_transliteration_in_bengali_script — হে পার্থ ক্লীব (কাযর) মত বনো। যহ তুম্হারে লিযে অশোভনীয হৈ, হে ! পরংতপ হৃদয কী ক্ষুদ্র দুর্বলতা কো ত্যাগকর খড़ে হো জাও।।
- BG 2.3 explanation.bn: devanagari_letter_leakage — ভগবান্ শ্রীকৃষ্ণ জো অব তক মৌন খড़ে থে অব প্রভাবশালী শব্দোং দ্বারা শোকাকুল অর্জুন কী কটু র্ভত্সনা করতে হৈং। উনকে প্রত্যেক শব্দ কা আঘাত কৃপাণ কে সমান তীক্ষ্ণ হৈ জো কিসী ভী ব্যক্তি কো
- BG 2.3 explanation.bn: possible_hindi_transliteration_in_bengali_script — ভগবান্ শ্রীকৃষ্ণ জো অব তক মৌন খড़ে থে অব প্রভাবশালী শব্দোং দ্বারা শোকাকুল অর্জুন কী কটু র্ভত্সনা করতে হৈং। উনকে প্রত্যেক শব্দ কা আঘাত কৃপাণ কে সমান তীক্ষ্ণ হৈ জো কিসী ভী ব্যক্তি কো
- BG 2.4 translation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন নে কহা -- হে মধুসূদন ! মৈং রণভূমি মেং কিস প্রকার ভীষ্ম ঔর দ্রোণ কে সাথ বাণোং সে যুদ্ধ করূঁগা। হে অরিসূদন, বে দোনোং হী পূজনীয হৈং।।
- BG 2.4 explanation.bn: devanagari_letter_leakage — অর্জুন কা লক্ষ্য ভ্রষ্ট করনে বালা কাযরতাপূর্ণ তর্ক কিসী অবিবেকী কো হী উচিত প্রতীত হো সকতা হৈ। অর্জুন কে যে তর্ক উস ব্যক্তি কে লিযে অর্থশূন্য হৈং জো মন কে সংযম কো ন খোকর পরিস্থিতি ক
- BG 2.4 explanation.bn: possible_hindi_transliteration_in_bengali_script — অর্জুন কা লক্ষ্য ভ্রষ্ট করনে বালা কাযরতাপূর্ণ তর্ক কিসী অবিবেকী কো হী উচিত প্রতীত হো সকতা হৈ। অর্জুন কে যে তর্ক উস ব্যক্তি কে লিযে অর্থশূন্য হৈং জো মন কে সংযম কো ন খোকর পরিস্থিতি ক
- BG 2.5 translation.bn: possible_hindi_transliteration_in_bengali_script — ইন মহানুভাব গুরুজনোং কো মারনে সে ইস লোক মেং ভিক্ষা কা অন্ন ভী গ্রহণ করনা অধিক কল্যাণ কারক হৈ, ক্যোংকি গুরুজনোং কো মারকর মৈং ইস লোক মেং রক্তরংজিত অর্থ ঔর কাম রূপ ভোগোং কো হী ভোগূঁগা
- BG 2.5 explanation.bn: devanagari_letter_leakage — অত্যন্ত উচ্চ প্রতীত হোনে বালে পরন্তু বাস্তব মেং অর্থশূন্য তর্ক অর্জুন পুন প্রস্তুত করতা হৈ ক্যোংকি স্বযং কো ন সমঝনে কে কারণ বহ অপনী সমস্যা কো ভী নহীং সমঝ পাযা হৈ।যহাঁ উসনে অপনে গুর
- BG 2.5 explanation.bn: possible_hindi_transliteration_in_bengali_script — অত্যন্ত উচ্চ প্রতীত হোনে বালে পরন্তু বাস্তব মেং অর্থশূন্য তর্ক অর্জুন পুন প্রস্তুত করতা হৈ ক্যোংকি স্বযং কো ন সমঝনে কে কারণ বহ অপনী সমস্যা কো ভী নহীং সমঝ পাযা হৈ।যহাঁ উসনে অপনে গুর
- BG 2.6 translation.bn: devanagari_letter_leakage — হম নহীং জানতে কি হমেং ক্যা করনা উচিত হৈ। হম যহ ভী নহীং জানতে কি হম জীতেংগে, যা বে হমকো জীতেংগে, জিনকো মারকর হম জীবিত নহীং রহনা চাহতে বে হী ধৃতরাষ্ট্র কে পুত্র হমারে সামনে যুদ্ধ কে 
- BG 2.6 translation.bn: possible_hindi_transliteration_in_bengali_script — হম নহীং জানতে কি হমেং ক্যা করনা উচিত হৈ। হম যহ ভী নহীং জানতে কি হম জীতেংগে, যা বে হমকো জীতেংগে, জিনকো মারকর হম জীবিত নহীং রহনা চাহতে বে হী ধৃতরাষ্ট্র কে পুত্র হমারে সামনে যুদ্ধ কে 
- BG 2.6 explanation.bn: devanagari_letter_leakage — ইসকে পূর্ব কে দো শ্লোক নিসন্দেহ অর্জুন কে মন কী ব্যাকুলতা ঔর ভ্রমিত স্থিতি কা সংকেত করতে হৈং। ইস শ্লোক মেং বতাযা জা রহা হৈ কি অর্জুন কে মন কে সংভ্রম কা প্রভাব উসকী বিবেক বুদ্ধি পর 
- BG 2.6 explanation.bn: possible_hindi_transliteration_in_bengali_script — ইসকে পূর্ব কে দো শ্লোক নিসন্দেহ অর্জুন কে মন কী ব্যাকুলতা ঔর ভ্রমিত স্থিতি কা সংকেত করতে হৈং। ইস শ্লোক মেং বতাযা জা রহা হৈ কি অর্জুন কে মন কে সংভ্রম কা প্রভাব উসকী বিবেক বুদ্ধি পর 
- BG 2.7 translation.bn: possible_hindi_transliteration_in_bengali_script — করুণা কে কলুষ সে অভিভূত ঔর কর্তব্যপথ পর সংভ্রমিত হুআ মৈং আপসে পূছতা হূঁ, কি মেরে লিযে জো শ্রেযষ্কর হো, উসে আপ নিশ্চয করকে কহিযে, ক্যোংকি মৈং আপকা শিষ্য হূঁ; শরণ মেং আযে মুঝকো আপ উপ
- BG 2.7 explanation.bn: possible_hindi_transliteration_in_bengali_script — অপনে আপ কো অসহায অবস্থা তথা কোঈ নির্ণয লেনে সে সর্বথা অসমর্থ পাকর অর্জুন সম্পূর্ণ রূপ সে স্বযং কো ভগবান্ কী শরণ মেং সমর্পিত কর দেতা হৈ। বহ স্বীকার কর রহা হৈ কি উসকী মানসিক স্থিতি ন
- BG 2.8 translation.bn: possible_hindi_transliteration_in_bengali_script — পৃথ্বী পর নিষ্কণ্টক সমৃদ্ধ রাজ্য কো ঔর দেবতাওং কে স্বামিত্ব কো প্রাপ্ত হোকর ভী মৈং উস উপায কো নহীং দেখতা হূঁ, জো মেরী ইন্দ্রিযোং কো সুখানে বালে ইস শোক কো দূর কর সকে।।
- BG 2.8 explanation.bn: devanagari_letter_leakage — যহাঁ অর্জুন সংকেত করতা হৈ কি উসে তত্কাল হী মার্গদর্শন কী আবশ্যকতা হৈ জিসকে অভাব মেং উসে আন্তরিক পীড़া কো সহন করনা পড़ রহা হৈ। বহ পীড़া কে কারণ কো ব্যক্ত করনে মেং অসমর্থ অনুভব কর রহ
- BG 2.8 explanation.bn: possible_hindi_transliteration_in_bengali_script — যহাঁ অর্জুন সংকেত করতা হৈ কি উসে তত্কাল হী মার্গদর্শন কী আবশ্যকতা হৈ জিসকে অভাব মেং উসে আন্তরিক পীড़া কো সহন করনা পড़ রহা হৈ। বহ পীড़া কে কারণ কো ব্যক্ত করনে মেং অসমর্থ অনুভব কর রহ
- BG 2.9 translation.bn: possible_hindi_transliteration_in_bengali_script — সংজয নে কহা -- ইস প্রকার গুডাকেশ পরংতপ অর্জুন ভগবান্ হৃষীকেশ সে যহ কহকর কি হে গোবিন্দ "মৈং যুদ্ধ নহীং করূঁগা" চুপ হো গযা।।
- BG 2.9 explanation.bn: devanagari_letter_leakage — সংজয আগে বর্ণন করতে হুযে কহতা হৈ কি ভগবান্ কী শরণ মেং জাকর গুডাকেশনিদ্রাজিত এবং শত্রু প্রপীড़ক অর্জুন নে যহ কহা কি বহ যুদ্ধ নহীং করেগা ঔর ফির বহ মৌন হো গযা।কেবল এক অংধ ধৃতরাষ্ট্র 
- BG 2.9 explanation.bn: possible_hindi_transliteration_in_bengali_script — সংজয আগে বর্ণন করতে হুযে কহতা হৈ কি ভগবান্ কী শরণ মেং জাকর গুডাকেশনিদ্রাজিত এবং শত্রু প্রপীড़ক অর্জুন নে যহ কহা কি বহ যুদ্ধ নহীং করেগা ঔর ফির বহ মৌন হো গযা।কেবল এক অংধ ধৃতরাষ্ট্র 
- BG 2.10 translation.bn: possible_hindi_transliteration_in_bengali_script — হে ভারত (ধৃতরাষ্ট্র) ! দোনোং সেনাওং কে বীচ মেং উস শোকমগ্ন অর্জুন কো ভগবান্ হৃষীকেশ নে হঁসতে হুএ সে যহ বচন কহে।।
- BG 2.10 explanation.bn: possible_hindi_transliteration_in_bengali_script — ইস প্রকার ধর্ম ঔর অধর্ম শুভ ঔর অশুভ ইন দো সেনাওং কে সংব্যূহন কে মধ্য অর্জুন (জীব) পূর্ণ রূপ সে অপনে সারথী ভগবান্ শ্রীকৃষ্ণ (সূক্ষ্ম বিবেকবতী বুদ্ধি) কী শরণ মেং আত্মসমর্পণ করতা হৈ 
- BG 2.11 translation.bn: possible_hindi_transliteration_in_bengali_script — শ্রী ভগবান্ নে কহা -- (অশোচ্যান্) জিনকে লিযে শোক করনা উচিত নহীং হৈ, উনকে লিযে তুম শোক করতে হো ঔর জ্ঞানিযোং কে সে বচনোং কো কহতে হো, পরন্তু জ্ঞানী পুরুষ মৃত (গতাসূন্) ঔর জীবিত (অগতাস
- BG 2.11 explanation.bn: devanagari_letter_leakage — জব হম অর্জুন কে বিষাদ কো ঠীক সে সমঝনে কা প্রযত্ন করতে হৈং তব যহ পহচাননা কঠিন নহীং হোগা কি যদ্যপি উসকা তাত্কালিক কারণ যুদ্ধ কী চুনৌতী হৈ পরন্তু বাস্তব মেং মানসিক সংতাপ কে যহ লক্ষণ ক
- BG 2.11 explanation.bn: possible_hindi_transliteration_in_bengali_script — জব হম অর্জুন কে বিষাদ কো ঠীক সে সমঝনে কা প্রযত্ন করতে হৈং তব যহ পহচাননা কঠিন নহীং হোগা কি যদ্যপি উসকা তাত্কালিক কারণ যুদ্ধ কী চুনৌতী হৈ পরন্তু বাস্তব মেং মানসিক সংতাপ কে যহ লক্ষণ ক
- BG 2.12 translation.bn: possible_hindi_transliteration_in_bengali_script — বাস্তব মেং ন তো ঐসা হী হৈ কি মৈং কিসী কাল মেং নহীং থা অথবা তুম নহীং থে অথবা যে রাজালোগ নহীং থে ঔর ন ঐসা হী হৈ কি ইসসে আগে হম সব নহীং রহেংগে।।
- BG 2.12 explanation.bn: devanagari_letter_leakage — যহাঁ ভগবান্ স্পষ্ট ঘোষণা করতে হৈং কি দেহ কো ধারণ করনে বালী আত্মা এক মহান তীর্থযাত্রা কে লিযে নিকল পড़ী হৈ জো ইস যাত্রা কে মধ্য কুছ কাল কে লিযে বিভিন্ন শরীরোং কো গ্রহণ করতে হুযে উনক
- BG 2.12 explanation.bn: possible_hindi_transliteration_in_bengali_script — যহাঁ ভগবান্ স্পষ্ট ঘোষণা করতে হৈং কি দেহ কো ধারণ করনে বালী আত্মা এক মহান তীর্থযাত্রা কে লিযে নিকল পড़ী হৈ জো ইস যাত্রা কে মধ্য কুছ কাল কে লিযে বিভিন্ন শরীরোং কো গ্রহণ করতে হুযে উনক
- BG 2.13 translation.bn: possible_hindi_transliteration_in_bengali_script — জৈসে ইস দেহ মেং দেহী জীবাত্মা কী কুমার, যুবা ঔর বৃদ্ধাবস্থা হোতী হৈ, বৈসে হী উসকো অন্য শরীর কী প্রাপ্তি হোতী হৈ; ধীর পুরুষ ইসমেং মোহিত নহীং হোতা হৈ।।
- BG 2.13 explanation.bn: devanagari_letter_leakage — স্মৃতি কা যহ নিযম হৈ কি অনুভবকর্ত্তা তথা স্মরণকর্ত্তা এক হী ব্যক্তি হোনা চাহিযে তভী কিসী বস্তু কা স্মরণ করনা সংভব হৈ। মৈং আপকে অনুভবোং কা স্মরণ নহীং কর সকতা ঔর ন আপ মেরে অনুভবোং কা
- BG 2.13 explanation.bn: possible_hindi_transliteration_in_bengali_script — স্মৃতি কা যহ নিযম হৈ কি অনুভবকর্ত্তা তথা স্মরণকর্ত্তা এক হী ব্যক্তি হোনা চাহিযে তভী কিসী বস্তু কা স্মরণ করনা সংভব হৈ। মৈং আপকে অনুভবোং কা স্মরণ নহীং কর সকতা ঔর ন আপ মেরে অনুভবোং কা
- BG 2.14 translation.bn: possible_hindi_transliteration_in_bengali_script — হে কুন্তীপুত্র ! শীত ঔর উষ্ণ ঔর সুখ দুখ কো দেনে বালে ইন্দ্রিয ঔর বিষযোং কে সংযোগ কা প্রারম্ভ ঔর অন্ত হোতা হৈ; বে অনিত্য হৈং, ইসলিএ, হে ভারত ! উনকো তুম সহন করো।।
- BG 2.14 explanation.bn: possible_hindi_transliteration_in_bengali_script — বিষয গ্রহণ কী বেদান্ত কী প্রক্রিযা কে অনুসার বাহ্য বস্তুওং কা জ্ঞান ইন্দ্রিযোং কে দ্বারা হোতা হৈ। ইন্দ্রিযাঁ তো কেবল উপকরণ হৈং জিনকে দ্বারা জীব বিষয গ্রহণ করতা হৈ উনকো জানতা হৈ। জী

... 1658 additional structural findings omitted. Full details are in `07-bengali-structural-results.json`.

## Stop Point

No Bengali text was changed. Bengali semantic verification remains blocked pending a canonical source decision.
