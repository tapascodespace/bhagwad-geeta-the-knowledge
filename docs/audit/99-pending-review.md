# Pending Human Review

Items accumulated through Step 10. Do not auto-fix these without source approval.

- [ ] BG 1.47 (HIGH, sanskrit/english): Stored chapter 1 has verse 47, while vedabase source index ends at 1.46; stored 1.47 appears to correspond to vedabase 1.46.
- [ ] BG 1.46 (HIGH, english): English translation appears one verse behind relative to vedabase 1.46.
- [ ] BG 1.37 (HIGH, english): Possible off-by-one against combined vedabase 1.37-38 source.
- [ ] BG 6.20-22 (HIGH, semantic): Adjacent duplicate Hindi/Bengali explanation risk from Step 2.
- [ ] Bengali column (HIGH, bengali): Marked UNVERIFIED_SOURCE; 1364 fields look like Hindi transliteration in Bengali script.
- [ ] Audio metadata (HIGH, audio): No generation metadata exists for voice id/source hash/transcript, so filename-to-content and voice consistency cannot be proven.
- [ ] Audio coverage (HIGH, audio): Only 267/701 Sanskrit and Hindi audio sets exist; English/Bengali only 20/701 each.
- [ ] BG 5.27 hi explanation audio (MEDIUM, audio): Estimated duration 1.41s, suspiciously short.
- [ ] BG 6.20-22 hi explanation audio (MEDIUM, audio): Estimated duration 1.41s on duplicate-risk explanation files.
- [ ] Sanskrit suffix convention (MEDIUM, sanskrit): 0 exact matches against vedabase due suffix/punctuation conventions; review before normalization.
- [ ] Transliteration style (MEDIUM, transliteration): 699/700 compared transliterations differ from vedabase style.
- [ ] Hindi source alignment (MEDIUM, hindi): 533 medium low-overlap findings against Hindi reference; no strong off-by-one detected.
- [ ] English source alignment (MEDIUM, english): 515 medium low-overlap findings against vedabase; likely style/source differences plus some true risks.
- [ ] Sanskrit pronunciation path (MEDIUM, audio): No Sanskrit phoneticization layer found for future TTS generation.
- [ ] Chapter 13 count (LOW, coverage): Dataset uses 35 verses, matching one accepted edition variant but should be kept explicit.
- [ ] Bengali Devanagari letter leakage (HIGH, bengali): 426 Bengali fields contain actual Devanagari letters beyond danda punctuation.
- [ ] Bengali source decision (HIGH, bengali): Need choose legal canonical Bengali source before semantic fixes or audio regeneration.
- [ ] Combined source verses (MEDIUM, source mapping): 73 verses come from combined vedabase pages; scripts must preserve mapping.
- [ ] Missing audio files (HIGH, audio): 4026 expected public MP3 files are missing.
- [ ] Existing audio short files (MEDIUM, audio): 5 existing files are suspiciously short by content-length estimate.
