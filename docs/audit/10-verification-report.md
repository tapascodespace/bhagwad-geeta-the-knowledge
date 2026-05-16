# Bhagavad Gita PDF Audit Verification Report

This report verifies whether the issues from `Bhagavad_Gita_Audit_Report (1).pdf` still appear in the current app corpus and live Supabase-backed sources. It is verification only: no content fixes, migrations, deletions, or audio regeneration were performed.

## Artifacts Generated

- `docs/audit/10-pdf-findings.json`: structured extraction of the PDF findings.
- `docs/audit/10-repo-verification-results.json`: per-finding comparison against `src/data/gita-data.json`.
- `docs/audit/10-live-supabase-verification.json`: read-only Supabase REST/storage probes.
- `docs/audit/10-verification-report.md`: this summary report.

## Executive Summary

- The PDF contains 2,201 findings across 18 chapters.
- The current app-rendered corpus contains 18 chapters and 701 verse records in `src/data/gita-data.json`.
- Most PDF content issues still persist in the repo corpus. The strongest confirmed categories are unmatched English quotes, Hindi/Bengali truncation, and Bengali text that appears to be Hindi transliterated into Bengali script.
- Live Supabase REST probes found `profiles` and `purchases`, but no common verse/chapter/content table names accessible to the anon client. The app therefore appears to render the bundled JSON corpus rather than live SQL verse data.
- The live `verse-audio` bucket is listable and returned 975 objects. By current filename convention, listed coverage is partial: 267 shloka files, 267 Hindi translation files, 267 Hindi explanation files, 20 English translation files, 20 English explanation files, 20 Bengali translation files, 20 Bengali explanation files, and 94 other files.
- Public HEAD sampling found 6/28 expected audio objects for BG 1.1, 1.5, 10.10, and 18.78.

## Repo Corpus Verification

- Bengali explanation appears Hindi-transliterated: 661 PDF findings; 656 PERSISTS, 5 NOT_DETECTED_BY_HEURISTIC.
- Bengali explanation truncated: 415 PDF findings; 415 PERSISTS.
- Bengali translation appears Hindi-transliterated: 592 PDF findings; 590 PERSISTS, 2 NOT_DETECTED_BY_HEURISTIC.
- English translation unmatched quotes: 52 PDF findings; 52 PERSISTS.
- Hindi explanation truncated: 415 PDF findings; 415 PERSISTS.
- Transliteration possible merge / extra verse content: 66 PDF findings; 19 PERSISTS, 47 NEEDS_MANUAL_REVIEW.

Representative persistent findings:

- English translation unmatched quotes
  - BG 1.1: `translation.en` still matches the PDF finding. Evidence: Dhritarashtra said, "What did my people and the sons of Pandu do when they had assembled together, eager for battle, on the holy plain of Kurukshetra, O Sanjaya?
  - BG 1.25: `translation.en` still matches the PDF finding. Evidence: In front of Bhishma and Drona, and all the rulers of the earth, he said: "O Arjuna, son of Pritha, behold these Kurus gathered together.
  - BG 1.28: `translation.en` still matches the PDF finding. Evidence: Arjuna said, "O Krishna, seeing my kinsmen arrayed here, eager to fight,
- Bengali translation appears Hindi-transliterated
  - BG 1.14: `translation.bn` still matches the PDF finding. Evidence: ইসকে উপরান্ত শ্বেত অশ্বোং সে যুক্ত ভব্য রথ মেং বৈঠে হুযে মাধব (শ্রীকৃষ্ণ) ঔর পাণ্ডুপুত্র অর্জুন নে ভী অপনে দিব্য শংখ বজাযে।
  - BG 1.19: `translation.bn` still matches the PDF finding. Evidence: বহ ভযংকর ঘোষ আকাশ ঔর পৃথ্বী পর গূঁজনে লগা ঔর উসনে ধৃতরাষ্ট্র কে পুত্রোং কে হৃদয বিদীর্ণ কর দিযে।
  - BG 1.20: `translation.bn` still matches the PDF finding. Evidence: হে মহীপতে ! ইস প্রকার জব যুদ্ধ প্রারম্ভ হোনে বালা হী থা কি কপিধ্বজ অর্জুন নে ধৃতরাষ্ট্র কে পুত্রোং কো স্থিত দেখকর ধনুষ উঠাকর ভগবান্ হৃষীকেশ সে যে শব্দ কহে।
- Bengali explanation appears Hindi-transliterated
  - BG 1.10: `explanation.bn` still matches the PDF finding. Evidence: হিন্দুওং কী প্রাচীন যুদ্ধ পদ্ধতি মেং কিসী সেনা কে সেনাপতি কে সাথসাথ কোঈ যোদ্ধা সেনা কা রক্ষক ভী হোতা থা জিসমেং শৌর্য সাহস ঔর বুদ্ধিমত্তা জৈসে গুণ আবশ্যক হোতে থে। কৌরব ঔর পাণ্ডব পক?
  - BG 1.11: `explanation.bn` still matches the PDF finding. Evidence: ইতনে সময নিরন্তর অকেলে হী বোলনে ঔর উভয পক্ষ কী সার্মথ্য কো তৌলনে কে পশ্চাত যুদ্ধতত্পর দুর্যোধন মেং স্থিত রাজা অপনে মন কী সঘন নিরাশা কে মেঘখণ্ডোং কো ভেদকর সেনা কো আদেশ দেনা প্রারম্?
  - BG 1.12: `explanation.bn` still matches the PDF finding. Evidence: দুর্যোধন কী মূর্খতাপূর্ণ বাচালতা কে কারণ উসকী সেনা কে যোদ্ধাওং কী স্থিতি বড़ী বিচিত্র সী হো রহী থী। উন পর ভী উদাসী কা প্রভাব প্রকট হোনে লগা জিসে ভীষ্ম বহীং নিকট খড़ে দেখ রহে থে। ভ?
- Hindi explanation truncated
  - BG 1.27: `explanation.hi` still matches the PDF finding. Evidence: ा स्वभाव होता है कि वह अपनी दुर्बलताओं को कोई दैवी गुण बताकर महानता प्राप्त करना चाहता है जैसे कोई धनी व्यक्ति स्वयं के नाम पर मन्दिर निर्माण करता है तोे भी उसको दानी कहते हैं जबक?
  - BG 1.36: `explanation.hi` still matches the PDF finding. Evidence: शास्त्र को न समझने का परिणाम है और फिर अपनी समझ के अनुसार कर्म करना अपनी संस्कृति को ही नष्ट करना है।इसलिए भगवान् श्रीकृष्ण अर्जुन के तर्कों की न स्तुति करते हैं और न ही आलोचना। व?
  - BG 1.41: `explanation.hi` still matches the PDF finding. Evidence: र श्रम करना था। हमारे आज के समाजसेवक और अधिकारी वर्ग कृषक और औद्योगिक कार्यकर्त्ता आदि सभी उपर्युक्त वर्ण व्यवस्था में आ जाते हैं।वर्णव्यवस्था को जब हम उसके व्यापक अर्थ में समझते ?
- Bengali explanation truncated
  - BG 1.27: `explanation.bn` still matches the PDF finding. Evidence: া স্বভাব হোতা হৈ কি বহ অপনী দুর্বলতাওং কো কোঈ দৈবী গুণ বতাকর মহানতা প্রাপ্ত করনা চাহতা হৈ জৈসে কোঈ ধনী ব্যক্তি স্বযং কে নাম পর মন্দির নির্মাণ করতা হৈ তোে ভী উসকো দানী কহতে হৈং জবক?
  - BG 1.36: `explanation.bn` still matches the PDF finding. Evidence: শাস্ত্র কো ন সমঝনে কা পরিণাম হৈ ঔর ফির অপনী সমঝ কে অনুসার কর্ম করনা অপনী সংস্কৃতি কো হী নষ্ট করনা হৈ।ইসলিএ ভগবান্ শ্রীকৃষ্ণ অর্জুন কে তর্কোং কী ন স্তুতি করতে হৈং ঔর ন হী আলোচনা। ব?
  - BG 1.41: `explanation.bn` still matches the PDF finding. Evidence: র শ্রম করনা থা। হমারে আজ কে সমাজসেবক ঔর অধিকারী বর্গ কৃষক ঔর ঔদ্যোগিক কার্যকর্ত্তা আদি সভী উপর্যুক্ত বর্ণ ব্যবস্থা মেং আ জাতে হৈং।বর্ণব্যবস্থা কো জব হম উসকে ব্যাপক অর্থ মেং সমঝতে ?
- Transliteration possible merge / extra verse content
  - BG 1.5: `transliteration` still matches the PDF finding. Evidence: Transliteration has 3 non-empty lines vs 2 Sanskrit lines. dhṛiṣhṭaketuśhchekitānaḥ kāśhirājaśhcha vīryavān purujit kuntibhojaśhcha śhaibyaśhcha nara-puṅgavaḥ yudhāmanyuśhcha vikr?
  - BG 10.33: `transliteration` still matches the PDF finding. Evidence: Transliteration has 3 non-empty lines vs 2 Sanskrit lines. अहमेवाक्षय: कालो धाताहं विश्वतोमुख: || 33|| akṣharāṇām a-kāro ’smi dvandvaḥ sāmāsikasya cha aham evākṣhayaḥ kālo dhātāha?
  - BG 11.26: `transliteration` still matches the PDF finding. Evidence: Contains the opening words of the next verse transliteration. amī cha tvāṁ dhṛitarāśhtrasya putrāḥ sarve sahaivāvani-pāla-saṅghaiḥ bhīṣhmo droṇaḥ sūta-putras tathāsau sahāsmadīyai?

Manual review remains necessary for 47 transliteration findings where the PDF reported possible merged/extra content but the simple current checks did not prove it. These are marked `NEEDS_MANUAL_REVIEW` in `10-repo-verification-results.json`.

## Live Supabase Verification

- REST/OpenAPI schema listing requires a service role key on this project, so it returned 401 with the anon key. Direct read-only probes still succeeded for known local tables `profiles` and `purchases`.
- Direct probes for common content table names returned no accessible Gita content table: `verses`, `chapters`, `gita`, `gita_verses`, `bhagavad_gita`, `shlokas`, `slokas`, `translations`, `verse_translations`, `content`, and `gita_data`.
- Because no live content table was found, there is no evidence that the PDF text defects were fixed in live SQL while the repo JSON stayed stale. The app path points to the repo JSON as the active rendered corpus.
- The `verse-audio` bucket is live and listable, but audio coverage is incomplete under the runtime naming convention in `src/lib/audio-url.ts`. Storage verification only confirms existence/naming, not whether the spoken audio matches corrected text.

## Conclusion

The issues have not been broadly fixed in the current app-rendered corpus. The repo JSON still contains nearly all high-confidence PDF findings, and live Supabase does not expose a separate verse database that would override those values. Treat `src/data/gita-data.json` as the stale/current content source that needs correction, then audit or regenerate only the specific audio objects affected by approved text fixes.

## Recommended Next Step

Proceed with a chapter-by-chapter content fix plan against `src/data/gita-data.json`, starting with deterministic fixes that do not require translation judgment: unmatched English quotes, confirmed truncation markers, and exact transliteration next-verse merges. Bengali translation/explanation replacement should use an approved Bengali source before edits. Audio should remain untouched until corresponding text changes are approved.
