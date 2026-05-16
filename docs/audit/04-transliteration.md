# Step 4 - Transliteration Check

Checked stored `transliteration` values in `src/data/gita-data.json`. The repo does not include an installed deterministic Devanagari-to-IAST transliteration library, so this audit compares against vedabase.io's canonical `Verse text` transliteration block without adding a new dependency.

## Method

- Reused the vedabase source slug discovery pattern from Step 3, including combined verse pages.
- Extracted all HTML `av-verse_text` text blocks from each source page.
- Mapped each extracted source block to its corresponding verse within combined pages.
- Compared normalized stored transliteration against the canonical source text.

## Summary

| Result | Count |
| --- | ---: |
| Verse records expected | 701 |
| Verse records compared | 700 |
| Missing/extraction/splitting failures | 1 |
| Exact transliteration matches | 1 |
| Transliteration differences | 699 |
| MEDIUM severity differences | 667 |
| LOW severity differences | 32 |

## Interpretation

The stored transliteration style differs substantially from vedabase. For example, the app often uses forms like `śh`, `ch`, and joined compounds where vedabase uses standard diacritics such as `ṣṭ`, `ca`, explicit word spacing, and different hyphenation. This is a transliteration-style mismatch report, not an automatic fix list.

## Missing Or Unchecked Items

- BG 1.47: no_source_slug_found_in_chapter_index - vedabase chapter index ends at BG 1.46; stored verse numbering differs from source (https://vedabase.io/en/library/bg/1/47/)

## Differences

### [BG 1.1] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/1/

current:
```text
dhṛitarāśhtra uvācha
dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ
māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya
```

expected:
```text
dhṛtarāṣṭra uvāca
dharma-kṣetre kuru-kṣetre
samavetā yuyutsavaḥ
māmakāḥ pāṇḍavāś caiva
kim akurvata sañjaya
```

diff: canonical transliteration differs

### [BG 1.2] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/2/

current:
```text
sañjaya uvācha
dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā
āchāryamupasaṅgamya rājā vachanamabravīt
```

expected:
```text
sañjaya uvāca
dṛṣṭvā tu pāṇḍavānīkaṁ
vyūḍhaṁ duryodhanas tadā
ācāryam upasaṅgamya
rājā vacanam abravīt
```

diff: canonical transliteration differs

### [BG 1.3] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/3/

current:
```text
paśhyaitāṁ pāṇḍu-putrāṇām āchārya mahatīṁ chamūm
vyūḍhāṁ drupada-putreṇa tava śhiṣhyeṇa dhīmatā
```

expected:
```text
paśyaitāṁ pāṇḍu-putrāṇām
ācārya mahatīṁ camūm
vyūḍhāṁ drupada-putreṇa
tava śiṣyeṇa dhīmatā
```

diff: canonical transliteration differs

### [BG 1.4] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/4/

current:
```text
atra śhūrā maheṣhvāsā bhīmārjuna-samā yudhi
yuyudhāno virāṭaśhcha drupadaśhcha mahā-rathaḥ
```

expected:
```text
atra śūrā maheṣv-āsā
bhīmārjuna-samā yudhi
yuyudhāno virāṭaś ca
drupadaś ca mahā-rathaḥ
```

diff: canonical transliteration differs

### [BG 1.5] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/5/

current:
```text
dhṛiṣhṭaketuśhchekitānaḥ kāśhirājaśhcha vīryavān
purujit kuntibhojaśhcha śhaibyaśhcha nara-puṅgavaḥ
yudhāmanyuśhcha vikrānta uttamaujāśhcha vīryavān
```

expected:
```text
dhṛṣṭaketuś cekitānaḥ
kāśirājaś ca vīryavān
purujit kuntibhojaś ca
śaibyaś ca nara-puṅgavaḥ
```

diff: canonical transliteration differs

### [BG 1.6] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/6/

current:
```text
saubhadro draupadeyāśhcha sarva eva mahā-rathāḥ
```

expected:
```text
yudhāmanyuś ca vikrānta
uttamaujāś ca vīryavān
saubhadro draupadeyāś ca
sarva eva mahā-rathāḥ
```

diff: canonical transliteration differs

### [BG 1.7] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/7/

current:
```text
asmākaṁ tu viśhiṣhṭā ye tānnibodha dwijottama
nāyakā mama sainyasya sanjñārthaṁ tānbravīmi te
```

expected:
```text
asmākaṁ tu viśiṣṭā ye
tān nibodha dvijottama
nāyakā mama sainyasya
saṁjñārthaṁ tān bravīmi te
```

diff: canonical transliteration differs

### [BG 1.8] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/8/

current:
```text
bhavānbhīṣhmaśhcha karṇaśhcha kṛipaśhcha samitiñjayaḥ
aśhvatthāmā vikarṇaśhcha saumadattis tathaiva cha
```

expected:
```text
bhavān bhīṣmaś ca karṇaś ca
kṛpaś ca samitiṁ-jayaḥ
aśvatthāmā vikarṇaś ca
saumadattis tathaiva ca
```

diff: canonical transliteration differs

### [BG 1.9] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/9/

current:
```text
anye cha bahavaḥ śhūrā madarthe tyaktajīvitāḥ
nānā-śhastra-praharaṇāḥ sarve yuddha-viśhāradāḥ
```

expected:
```text
anye ca bahavaḥ śūrā
mad-arthe tyakta-jīvitāḥ
nānā-śastra-praharaṇāḥ
sarve yuddha-viśāradāḥ
```

diff: canonical transliteration differs

### [BG 1.10] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/10/

current:
```text
aparyāptaṁ tadasmākaṁ balaṁ bhīṣhmābhirakṣhitam
paryāptaṁ tvidameteṣhāṁ balaṁ bhīmābhirakṣhitam
```

expected:
```text
aparyāptaṁ tad asmākaṁ
balaṁ bhīṣmābhirakṣitam
paryāptaṁ tv idam eteṣāṁ
balaṁ bhīmābhirakṣitam
```

diff: canonical transliteration differs

### [BG 1.11] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/11/

current:
```text
ayaneṣhu cha sarveṣhu yathā-bhāgamavasthitāḥ
bhīṣhmamevābhirakṣhantu bhavantaḥ sarva eva hi
```

expected:
```text
ayaneṣu ca sarveṣu
yathā-bhāgam avasthitāḥ
bhīṣmam evābhirakṣantu
bhavantaḥ sarva eva hi
```

diff: canonical transliteration differs

### [BG 1.12] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/12/

current:
```text
tasya sañjanayan harṣhaṁ kuru-vṛiddhaḥ pitāmahaḥ
siṁha-nādaṁ vinadyochchaiḥ śhaṅkhaṁ dadhmau pratāpavān
```

expected:
```text
tasya sañjanayan harṣaṁ
kuru-vṛddhaḥ pitāmahaḥ
siṁha-nādaṁ vinadyoccaiḥ
śaṅkhaṁ dadhmau pratāpavān
```

diff: canonical transliteration differs

### [BG 1.13] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/13/

current:
```text
tataḥ śhaṅkhāśhcha bheryaśhcha paṇavānaka-gomukhāḥ
sahasaivābhyahanyanta sa śhabdastumulo ’bhavat
```

expected:
```text
tataḥ śaṅkhāś ca bheryaś ca
paṇavānaka-gomukhāḥ
sahasaivābhyahanyanta
sa śabdas tumulo ’bhavat
```

diff: canonical transliteration differs

### [BG 1.14] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/14/

current:
```text
tataḥ śhvetairhayairyukte mahati syandane sthitau
mādhavaḥ pāṇḍavaśhchaiva divyau śhaṅkhau pradadhmatuḥ
```

expected:
```text
tataḥ śvetair hayair yukte
mahati syandane sthitau
mādhavaḥ pāṇḍavaś caiva
divyau śaṅkhau pradadhmatuḥ
```

diff: canonical transliteration differs

### [BG 1.15] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/15/

current:
```text
pāñchajanyaṁ hṛiṣhīkeśho devadattaṁ dhanañjayaḥ
pauṇḍraṁ dadhmau mahā-śhaṅkhaṁ bhīma-karmā vṛikodaraḥ
```

expected:
```text
pāñcajanyaṁ hṛṣīkeśo
devadattaṁ dhanañ-jayaḥ
pauṇḍraṁ dadhmau mahā-śaṅkhaṁ
bhīma-karmā vṛkodaraḥ
```

diff: canonical transliteration differs

### [BG 1.16] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/16-18/

current:
```text
anantavijayaṁ rājā kuntī-putro yudhiṣhṭhiraḥ
nakulaḥ sahadevaśhcha sughoṣha-maṇipuṣhpakau
```

expected:
```text
anantavijayaṁ rājā
kuntī-putro yudhiṣṭhiraḥ
nakulaḥ sahadevaś ca
sughoṣa-maṇipuṣpakau
```

diff: canonical transliteration differs; vedabase source combines verses 16-18

### [BG 1.17] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/16-18/

current:
```text
kāśhyaśhcha parameṣhvāsaḥ śhikhaṇḍī cha mahā-rathaḥ
dhṛiṣhṭadyumno virāṭaśhcha sātyakiśh chāparājitaḥ
```

expected:
```text
kāśyaś ca parameṣv-āsaḥ
śikhaṇḍī ca mahā-rathaḥ
dhṛṣṭadyumno virāṭaś ca
sātyakiś cāparājitaḥ
```

diff: canonical transliteration differs; vedabase source combines verses 16-18

### [BG 1.18] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/16-18/

current:
```text
drupado draupadeyāśhcha sarvaśhaḥ pṛithivī-pate
saubhadraśhcha mahā-bāhuḥ śhaṅkhāndadhmuḥ pṛithak pṛithak
```

expected:
```text
drupado draupadeyāś ca
sarvaśaḥ pṛthivī-pate
saubhadraś ca mahā-bāhuḥ
śaṅkhān dadhmuḥ pṛthak pṛthak
```

diff: canonical transliteration differs; vedabase source combines verses 16-18

### [BG 1.19] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/19/

current:
```text
sa ghoṣho dhārtarāṣhṭrāṇāṁ hṛidayāni vyadārayat
nabhaśhcha pṛithivīṁ chaiva tumulo nunādayan
```

expected:
```text
sa ghoṣo dhārtarāṣṭrāṇāṁ
hṛdayāni vyadārayat
nabhaś ca pṛthivīṁ caiva
tumulo ’bhyanunādayan
```

diff: canonical transliteration differs

### [BG 1.20] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/20/

current:
```text
atha vyavasthitān dṛiṣhṭvā dhārtarāṣhṭrān kapi-dhwajaḥ
pravṛitte śhastra-sampāte dhanurudyamya pāṇḍavaḥ
hṛiṣhīkeśhaṁ tadā vākyam idam āha mahī-pate
```

expected:
```text
atha vyavasthitān dṛṣṭvā
dhārtarāṣṭrān kapi-dhvajaḥ
pravṛtte śastra-sampāte
dhanur udyamya pāṇḍavaḥ
hṛṣīkeśaṁ tadā vākyam
idam āha mahī-pate
```

diff: canonical transliteration differs

### [BG 1.21] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/21-22/

current:
```text
arjuna uvācha
senayor ubhayor madhye rathaṁ sthāpaya me ’chyuta
```

expected:
```text
arjuna uvāca
senayor ubhayor madhye
rathaṁ sthāpaya me ’cyuta
yāvad etān nirīkṣe ’haṁ
yoddhu-kāmān avasthitān
```

diff: canonical transliteration differs; vedabase source combines verses 21-22

### [BG 1.22] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/21-22/

current:
```text
yāvadetān nirīkṣhe ’haṁ yoddhu-kāmān avasthitān
kairmayā saha yoddhavyam asmin raṇa-samudyame
```

expected:
```text
kair mayā saha yoddhavyam
asmin raṇa-samudyame
```

diff: canonical transliteration differs; vedabase source combines verses 21-22

### [BG 1.23] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/23/

current:
```text
yotsyamānān avekṣhe ’haṁ ya ete ’tra samāgatāḥ
dhārtarāṣhṭrasya durbuddher yuddhe priya-chikīrṣhavaḥ
```

expected:
```text
yotsyamānān avekṣe ’haṁ
ya ete ’tra samāgatāḥ
dhārtarāṣṭrasya durbuddher
yuddhe priya-cikīrṣavaḥ
```

diff: canonical transliteration differs

### [BG 1.24] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/24/

current:
```text
sañjaya uvācha
evam ukto hṛiṣhīkeśho guḍākeśhena bhārata
senayor ubhayor madhye sthāpayitvā rathottamam
```

expected:
```text
sañjaya uvāca
evam ukto hṛṣīkeśo
guḍākeśena bhārata
senayor ubhayor madhye
sthāpayitvā rathottamam
```

diff: canonical transliteration differs

### [BG 1.25] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/25/

current:
```text
bhīṣhma-droṇa-pramukhataḥ sarveṣhāṁ cha mahī-kṣhitām
uvācha pārtha paśhyaitān samavetān kurūn iti
```

expected:
```text
bhīṣma-droṇa-pramukhataḥ
sarveṣāṁ ca mahī-kṣitām
uvāca pārtha paśyaitān
samavetān kurūn iti
```

diff: canonical transliteration differs

### [BG 1.26] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/26/

current:
```text
tatrāpaśhyat sthitān pārthaḥ pitṝīn atha pitāmahān
āchāryān mātulān bhrātṝīn putrān pautrān sakhīṁs tathā
śhvaśhurān suhṛidaśh chaiva senayor ubhayor api
```

expected:
```text
tatrāpaśyat sthitān pārthaḥ
pitṝn atha pitāmahān
ācāryān mātulān bhrātṝn
putrān pautrān sakhīṁs tathā
śvaśurān suhṛdaś caiva
senayor ubhayor api
```

diff: canonical transliteration differs

### [BG 1.27] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/27/

current:
```text
tān samīkṣhya sa kaunteyaḥ sarvān bandhūn avasthitān
kṛipayā parayāviṣhṭo viṣhīdann idam abravīt
```

expected:
```text
tān samīkṣya sa kaunteyaḥ
sarvān bandhūn avasthitān
kṛpayā parayāviṣṭo
viṣīdann idam abravīt
```

diff: canonical transliteration differs

### [BG 1.28] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/28/

current:
```text
arjuna uvācha
dṛiṣhṭvemaṁ sva-janaṁ kṛiṣhṇa yuyutsuṁ samupasthitam
```

expected:
```text
arjuna uvāca
dṛṣṭvemaṁ sva-janaṁ kṛṣṇa
yuyutsuṁ samupasthitam
sīdanti mama gātrāṇi
mukhaṁ ca pariśuṣyati
```

diff: canonical transliteration differs

### [BG 1.29] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/29/

current:
```text
sīdanti mama gātrāṇi mukhaṁ cha pariśhuṣhyati
vepathuśh cha śharīre me roma-harṣhaśh cha jāyate
```

expected:
```text
vepathuś ca śarīre me
roma-harṣaś ca jāyate
gāṇḍīvaṁ sraṁsate hastāt
tvak caiva paridahyate
```

diff: canonical transliteration differs

### [BG 1.30] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/30/

current:
```text
gāṇḍīvaṁ sraṁsate hastāt tvak chaiva paridahyate
na cha śhaknomy avasthātuṁ bhramatīva cha me manaḥ
```

expected:
```text
na ca śaknomy avasthātuṁ
bhramatīva ca me manaḥ
nimittāni ca paśyāmi
viparītāni keśava
```

diff: canonical transliteration differs

### [BG 1.31] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/31/

current:
```text
nimittāni cha paśhyāmi viparītāni keśhava
na cha śhreyo ’nupaśhyāmi hatvā sva-janam āhave
```

expected:
```text
na ca śreyo ’nupaśyāmi
hatvā sva-janam āhave
na kāṅkṣe vijayaṁ kṛṣṇa
na ca rājyaṁ sukhāni ca
```

diff: canonical transliteration differs

### [BG 1.32] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/32-35/

current:
```text
na kāṅkṣhe vijayaṁ kṛiṣhṇa na cha rājyaṁ sukhāni cha
kiṁ no rājyena govinda kiṁ bhogair jīvitena vā
```

expected:
```text
kiṁ no rājyena govinda
kiṁ bhogair jīvitena vā
yeṣām arthe kāṅkṣitaṁ no
rājyaṁ bhogāḥ sukhāni ca
```

diff: canonical transliteration differs; vedabase source combines verses 32-35

### [BG 1.33] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/32-35/

current:
```text
yeṣhām arthe kāṅkṣhitaṁ no rājyaṁ bhogāḥ sukhāni cha
ta ime ’vasthitā yuddhe prāṇāṁs tyaktvā dhanāni cha
```

expected:
```text
ta ime ’vasthitā yuddhe
prāṇāṁs tyaktvā dhanāni ca
ācāryāḥ pitaraḥ putrās
tathaiva ca pitāmahāḥ
```

diff: canonical transliteration differs; vedabase source combines verses 32-35

### [BG 1.34] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/32-35/

current:
```text
āchāryāḥ pitaraḥ putrās tathaiva cha pitāmahāḥ
mātulāḥ śhvaśhurāḥ pautrāḥ śhyālāḥ sambandhinas tathā
```

expected:
```text
mātulāḥ śvaśurāḥ pautrāḥ
śyālāḥ sambandhinas tathā
etān na hantum icchāmi
ghnato ’pi madhusūdana
```

diff: canonical transliteration differs; vedabase source combines verses 32-35

### [BG 1.35] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/32-35/

current:
```text
etān na hantum ichchhāmi ghnato ’pi madhusūdana
api trailokya-rājyasya hetoḥ kiṁ nu mahī-kṛite
```

expected:
```text
api trailokya-rājyasya
hetoḥ kiṁ nu mahī-kṛte
nihatya dhārtarāṣṭrān naḥ
kā prītiḥ syāj janārdana
```

diff: canonical transliteration differs; vedabase source combines verses 32-35

### [BG 1.36] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/36/

current:
```text
nihatya dhārtarāṣhṭrān naḥ kā prītiḥ syāj janārdana
pāpam evāśhrayed asmān hatvaitān ātatāyinaḥ
```

expected:
```text
pāpam evāśrayed asmān
hatvaitān ātatāyinaḥ
tasmān nārhā vayaṁ hantuṁ
dhārtarāṣṭrān sa-bāndhavān
sva-janaṁ hi kathaṁ hatvā
sukhinaḥ syāma mādhava
```

diff: canonical transliteration differs

### [BG 1.37] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/37-38/

current:
```text
tasmān nārhā vayaṁ hantuṁ dhārtarāṣhṭrān sa-bāndhavān
sva-janaṁ hi kathaṁ hatvā sukhinaḥ syāma mādhava
```

expected:
```text
yady apy ete na paśyanti
lobhopahata-cetasaḥ
kula-kṣaya-kṛtaṁ doṣaṁ
mitra-drohe ca pātakam
```

diff: canonical transliteration differs; vedabase source combines verses 37-38

### [BG 1.38] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/37-38/

current:
```text
yady apy ete na paśhyanti lobhopahata-chetasaḥ
kula-kṣhaya-kṛitaṁ doṣhaṁ mitra-drohe cha pātakam
```

expected:
```text
kathaṁ na jñeyam asmābhiḥ
pāpād asmān nivartitum
kula-kṣaya-kṛtaṁ doṣaṁ
prapaśyadbhir janārdana
```

diff: canonical transliteration differs; vedabase source combines verses 37-38

### [BG 1.39] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/39/

current:
```text
kathaṁ na jñeyam asmābhiḥ pāpād asmān nivartitum
kula-kṣhaya-kṛitaṁ doṣhaṁ prapaśhyadbhir janārdana
```

expected:
```text
kula-kṣaye praṇaśyanti
kula-dharmāḥ sanātanāḥ
dharme naṣṭe kulaṁ kṛtsnam
adharmo ’bhibhavaty uta
```

diff: canonical transliteration differs

### [BG 1.40] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/40/

current:
```text
kula-kṣhaye praṇaśhyanti kula-dharmāḥ sanātanāḥ
dharme naṣhṭe kulaṁ kṛitsnam adharmo ’bhibhavaty uta
```

expected:
```text
adharmābhibhavāt kṛṣṇa
praduṣyanti kula-striyaḥ
strīṣu duṣṭāsu vārṣṇeya
jāyate varṇa-saṅkaraḥ
```

diff: canonical transliteration differs

### [BG 1.41] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/41/

current:
```text
adharmābhibhavāt kṛiṣhṇa praduṣhyanti kula-striyaḥ
strīṣhu duṣhṭāsu vārṣhṇeya jāyate varṇa-saṅkaraḥ
```

expected:
```text
saṅkaro narakāyaiva
kula-ghnānāṁ kulasya ca
patanti pitaro hy eṣāṁ
lupta-piṇḍodaka-kriyāḥ
```

diff: canonical transliteration differs

### [BG 1.42] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/42/

current:
```text
saṅkaro narakāyaiva kula-ghnānāṁ kulasya cha
patanti pitaro hy eṣhāṁ lupta-piṇḍodaka-kriyāḥ
```

expected:
```text
doṣair etaiḥ kula-ghnānāṁ
varṇa-saṅkara-kārakaiḥ
utsādyante jāti-dharmāḥ
kula-dharmāś ca śāśvatāḥ
```

diff: canonical transliteration differs

### [BG 1.43] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/43/

current:
```text
doṣhair etaiḥ kula-ghnānāṁ varṇa-saṅkara-kārakaiḥ
utsādyante jāti-dharmāḥ kula-dharmāśh cha śhāśhvatāḥ
```

expected:
```text
utsanna-kula-dharmāṇāṁ
manuṣyāṇāṁ janārdana
narake niyataṁ vāso
bhavatīty anuśuśruma
```

diff: canonical transliteration differs

### [BG 1.44] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/44/

current:
```text
utsanna-kula-dharmāṇāṁ manuṣhyāṇāṁ janārdana
narake ‘niyataṁ vāso bhavatītyanuśhuśhruma
```

expected:
```text
aho bata mahat pāpaṁ
kartuṁ vyavasitā vayam
yad rājya-sukha-lobhena
hantuṁ sva-janam udyatāḥ
```

diff: canonical transliteration differs

### [BG 1.45] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/45/

current:
```text
aho bata mahat pāpaṁ kartuṁ vyavasitā vayam
yad rājya-sukha-lobhena hantuṁ sva-janam udyatāḥ
```

expected:
```text
yadi mām apratīkāram
aśastraṁ śastra-pāṇayaḥ
dhārtarāṣṭrā raṇe hanyus
tan me kṣema-taraṁ bhavet
```

diff: canonical transliteration differs

### [BG 1.46] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/46/

current:
```text
yadi mām apratīkāram aśhastraṁ śhastra-pāṇayaḥ
dhārtarāṣhṭrā raṇe hanyus tan me kṣhemataraṁ bhavet
```

expected:
```text
sañjaya uvāca
evam uktvārjunaḥ saṅkhye
rathopastha upāviśat
visṛjya sa-śaraṁ cāpaṁ
śoka-saṁvigna-mānasaḥ
```

diff: canonical transliteration differs

### [BG 2.1] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/1/

current:
```text
sañjaya uvācha
taṁ tathā kṛipayāviṣhṭamaśhru pūrṇākulekṣhaṇam
viṣhīdantamidaṁ vākyam uvācha madhusūdanaḥ
```

expected:
```text
sañjaya uvāca
taṁ tathā kṛpayāviṣṭam
aśru-pūrṇākulekṣaṇam
viṣīdantam idaṁ vākyam
uvāca madhusūdanaḥ
```

diff: canonical transliteration differs

### [BG 2.2] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/2/

current:
```text
śhrī bhagavān uvācha
kutastvā kaśhmalamidaṁ viṣhame samupasthitam
anārya-juṣhṭamaswargyam akīrti-karam arjuna
```

expected:
```text
śrī-bhagavān uvāca
kutas tvā kaśmalam idaṁ
viṣame samupasthitam
anārya-juṣṭam asvargyam
akīrti-karam arjuna
```

diff: canonical transliteration differs

### [BG 2.3] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/3/

current:
```text
klaibyaṁ mā sma gamaḥ pārtha naitat tvayyupapadyate
kṣhudraṁ hṛidaya-daurbalyaṁ tyaktvottiṣhṭha parantapa
```

expected:
```text
klaibyaṁ mā sma gamaḥ pārtha
naitat tvayy upapadyate
kṣudraṁ hṛdaya-daurbalyaṁ
tyaktvottiṣṭha paran-tapa
```

diff: canonical transliteration differs

### [BG 2.4] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/4/

current:
```text
arjuna uvācha
kathaṁ bhīṣhmam ahaṁ sankhye droṇaṁ cha madhusūdana
iṣhubhiḥ pratiyotsyāmi pūjārhāvari-sūdana
```

expected:
```text
arjuna uvāca
kathaṁ bhīṣmam ahaṁ saṅkhye
droṇaṁ ca madhusūdana
iṣubhiḥ pratiyotsyāmi
pūjārhāv ari-sūdana
```

diff: canonical transliteration differs

### [BG 2.5] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/5/

current:
```text
gurūnahatvā hi mahānubhāvān
śhreyo bhoktuṁ bhaikṣhyamapīha loke
hatvārtha-kāmāṁstu gurūnihaiva
bhuñjīya bhogān rudhira-pradigdhān
```

expected:
```text
gurūn ahatvā hi mahānubhāvān
śreyo bhoktuṁ bhaikṣyam apīha loke
hatvārtha-kāmāṁs tu gurūn ihaiva
bhuñjīya bhogān rudhira-pradigdhān
```

diff: canonical transliteration differs

### [BG 2.6] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/6/

current:
```text
na chaitadvidmaḥ kataranno garīyo
yadvā jayema yadi vā no jayeyuḥ
yāneva hatvā na jijīviṣhāmas
te ’vasthitāḥ pramukhe dhārtarāṣhṭrāḥ
```

expected:
```text
na caitad vidmaḥ kataran no garīyo
yad vā jayema yadi vā no jayeyuḥ
yān eva hatvā na jijīviṣāmas
te ’vasthitāḥ pramukhe dhārtarāṣṭrāḥ
```

diff: canonical transliteration differs

### [BG 2.7] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/7/

current:
```text
kārpaṇya-doṣhopahata-svabhāvaḥ
pṛichchhāmi tvāṁ dharma-sammūḍha-chetāḥ
yach-chhreyaḥ syānniśhchitaṁ brūhi tanme
śhiṣhyaste ’haṁ śhādhi māṁ tvāṁ prapannam
```

expected:
```text
kārpaṇya-doṣopahata-svabhāvaḥ
pṛcchāmi tvāṁ dharma-sammūḍha-cetāḥ
yac chreyaḥ syān niścitaṁ brūhi tan me
śiṣyas te ’haṁ śādhi māṁ tvāṁ prapannam
```

diff: canonical transliteration differs

### [BG 2.8] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/8/

current:
```text
na hi prapaśhyāmi mamāpanudyād
yach-chhokam uchchhoṣhaṇam-indriyāṇām
avāpya bhūmāv-asapatnamṛiddhaṁ
rājyaṁ surāṇāmapi chādhipatyam
```

expected:
```text
na hi prapaśyāmi mamāpanudyād
yac chokam ucchoṣaṇam indriyāṇām
avāpya bhūmāv asapatnam ṛddhaṁ
rājyaṁ surāṇām api cādhipatyam
```

diff: canonical transliteration differs

### [BG 2.9] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/9/

current:
```text
sañjaya uvācha
evam-uktvā hṛiṣhīkeśhaṁ guḍākeśhaḥ parantapa
na yotsya iti govindam uktvā tūṣhṇīṁ babhūva ha
```

expected:
```text
sañjaya uvāca
evam uktvā hṛṣīkeśaṁ
guḍākeśaḥ paran-tapaḥ
na yotsya iti govindam
uktvā tūṣṇīṁ babhūva ha
```

diff: canonical transliteration differs

### [BG 2.10] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/10/

current:
```text
tam-uvācha hṛiṣhīkeśhaḥ prahasanniva bhārata
senayorubhayor-madhye viṣhīdantam-idaṁ vachaḥ
```

expected:
```text
tam uvāca hṛṣīkeśaḥ
prahasann iva bhārata
senayor ubhayor madhye
viṣīdantam idaṁ vacaḥ
```

diff: canonical transliteration differs

### [BG 2.11] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/11/

current:
```text
śhrī bhagavān uvācha
aśhochyān-anvaśhochas-tvaṁ prajñā-vādānśh cha bhāṣhase
gatāsūn-agatāsūnśh-cha nānuśhochanti paṇḍitāḥ
```

expected:
```text
śrī-bhagavān uvāca
aśocyān anvaśocas tvaṁ
prajñā-vādāṁś ca bhāṣase
gatāsūn agatāsūṁś ca
nānuśocanti paṇḍitāḥ
```

diff: canonical transliteration differs

### [BG 2.12] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/12/

current:
```text
na tvevāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ
na chaiva na bhaviṣhyāmaḥ sarve vayamataḥ param
```

expected:
```text
na tv evāhaṁ jātu nāsaṁ
na tvaṁ neme janādhipāḥ
na caiva na bhaviṣyāmaḥ
sarve vayam ataḥ param
```

diff: canonical transliteration differs

### [BG 2.13] severity: LOW

source: https://vedabase.io/en/library/bg/2/13/

current:
```text
dehino ’smin yathā dehe kaumāraṁ yauvanaṁ jarā
tathā dehāntara-prāptir dhīras tatra na muhyati
```

expected:
```text
dehino ’smin yathā dehe
kaumāraṁ yauvanaṁ jarā
tathā dehāntara-prāptir
dhīras tatra na muhyati
```

diff: canonical transliteration differs; compact transliteration matches after punctuation/spacing normalization

### [BG 2.14] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/14/

current:
```text
mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ
āgamāpāyino ’nityās tans-titikṣhasva bhārata
```

expected:
```text
mātrā-sparśās tu kaunteya
śītoṣṇa-sukha-duḥkha-dāḥ
āgamāpāyino ’nityās
tāṁs titikṣasva bhārata
```

diff: canonical transliteration differs

### [BG 2.15] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/15/

current:
```text
yaṁ hi na vyathayantyete puruṣhaṁ puruṣharṣhabha
sama-duḥkha-sukhaṁ dhīraṁ so ’mṛitatvāya kalpate
```

expected:
```text
yaṁ hi na vyathayanty ete
puruṣaṁ puruṣarṣabha
sama-duḥkha-sukhaṁ dhīraṁ
so ’mṛtatvāya kalpate
```

diff: canonical transliteration differs

### [BG 2.16] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/16/

current:
```text
nāsato vidyate bhāvo nābhāvo vidyate sataḥ
ubhayorapi dṛiṣhṭo ’nta stvanayos tattva-darśhibhiḥ
```

expected:
```text
nāsato vidyate bhāvo
nābhāvo vidyate sataḥ
ubhayor api dṛṣṭo ’ntas
tv anayos tattva-darśibhiḥ
```

diff: canonical transliteration differs

### [BG 2.17] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/17/

current:
```text
avināśhi tu tadviddhi yena sarvam idaṁ tatam
vināśham avyayasyāsya na kaśhchit kartum arhati
```

expected:
```text
avināśi tu tad viddhi
yena sarvam idaṁ tatam
vināśam avyayasyāsya
na kaścit kartum arhati
```

diff: canonical transliteration differs

### [BG 2.18] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/18/

current:
```text
antavanta ime dehā nityasyoktāḥ śharīriṇaḥ
anāśhino ’prameyasya tasmād yudhyasva bhārata
```

expected:
```text
antavanta ime dehā
nityasyoktāḥ śarīriṇaḥ
anāśino ’prameyasya
tasmād yudhyasva bhārata
```

diff: canonical transliteration differs

### [BG 2.19] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/19/

current:
```text
ya enaṁ vetti hantāraṁ yaśh chainaṁ manyate hatam
ubhau tau na vijānīto nāyaṁ hanti na hanyate
```

expected:
```text
ya enaṁ vetti hantāraṁ
yaś cainaṁ manyate hatam
ubhau tau na vijānīto
nāyaṁ hanti na hanyate
```

diff: canonical transliteration differs

### [BG 2.20] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/20/

current:
```text
na jāyate mriyate vā kadāchin
nāyaṁ bhūtvā bhavitā vā na bhūyaḥ
ajo nityaḥ śhāśhvato ’yaṁ purāṇo
na hanyate hanyamāne śharīre
```

expected:
```text
na jāyate mriyate vā kadācin
nāyaṁ bhūtvā bhavitā vā na bhūyaḥ
ajo nityaḥ śāśvato ’yaṁ purāṇo
na hanyate hanyamāne śarīre
```

diff: canonical transliteration differs

### [BG 2.21] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/21/

current:
```text
vedāvināśhinaṁ nityaṁ ya enam ajam avyayam
kathaṁ sa puruṣhaḥ pārtha kaṁ ghātayati hanti kam
```

expected:
```text
vedāvināśinaṁ nityaṁ
ya enam ajam avyayam
kathaṁ sa puruṣaḥ pārtha
kaṁ ghātayati hanti kam
```

diff: canonical transliteration differs

### [BG 2.22] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/22/

current:
```text
vāsānsi jīrṇāni yathā vihāya
navāni gṛihṇāti naro ’parāṇi
tathā śharīrāṇi vihāya jīrṇānya
nyāni sanyāti navāni dehī
```

expected:
```text
vāsāṁsi jīrṇāni yathā vihāya
navāni gṛhṇāti naro ’parāṇi
tathā śarīrāṇi vihāya jīrṇāny
anyāni saṁyāti navāni dehī
```

diff: canonical transliteration differs

### [BG 2.23] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/23/

current:
```text
nainaṁ chhindanti śhastrāṇi nainaṁ dahati pāvakaḥ
na chainaṁ kledayantyāpo na śhoṣhayati mārutaḥ
```

expected:
```text
nainaṁ chindanti śastrāṇi
nainaṁ dahati pāvakaḥ
na cainaṁ kledayanty āpo
na śoṣayati mārutaḥ
```

diff: canonical transliteration differs

### [BG 2.24] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/24/

current:
```text
achchhedyo ’yam adāhyo ’yam akledyo ’śhoṣhya eva cha
nityaḥ sarva-gataḥ sthāṇur achalo ’yaṁ sanātanaḥ
```

expected:
```text
acchedyo ’yam adāhyo ’yam
akledyo ’śoṣya eva ca
nityaḥ sarva-gataḥ sthāṇur
acalo ’yaṁ sanātanaḥ
```

diff: canonical transliteration differs

### [BG 2.25] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/25/

current:
```text
avyakto ’yam achintyo ’yam avikāryo ’yam uchyate
tasmādevaṁ viditvainaṁ nānuśhochitum arhasi
```

expected:
```text
avyakto ’yam acintyo ’yam
avikāryo ’yam ucyate
tasmād evaṁ viditvainaṁ
nānuśocitum arhasi
```

diff: canonical transliteration differs

### [BG 2.26] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/26/

current:
```text
atha chainaṁ nitya-jātaṁ nityaṁ vā manyase mṛitam
tathāpi tvaṁ mahā-bāho naivaṁ śhochitum arhasi
```

expected:
```text
atha cainaṁ nitya-jātaṁ
nityaṁ vā manyase mṛtam
tathāpi tvaṁ mahā-bāho
nainaṁ śocitum arhasi
```

diff: canonical transliteration differs

### [BG 2.27] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/27/

current:
```text
jātasya hi dhruvo mṛityur dhruvaṁ janma mṛitasya cha
tasmād aparihārye ’rthe na tvaṁ śhochitum arhasi
```

expected:
```text
jātasya hi dhruvo mṛtyur
dhruvaṁ janma mṛtasya ca
tasmād aparihārye ’rthe
na tvaṁ śocitum arhasi
```

diff: canonical transliteration differs

### [BG 2.28] severity: LOW

source: https://vedabase.io/en/library/bg/2/28/

current:
```text
avyaktādīni bhūtāni vyakta-madhyāni bhārata
avyakta-nidhanānyeva tatra kā paridevanā
```

expected:
```text
avyaktādīni bhūtāni
vyakta-madhyāni bhārata
avyakta-nidhanāny eva
tatra kā paridevanā
```

diff: canonical transliteration differs; compact transliteration matches after punctuation/spacing normalization

### [BG 2.29] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/29/

current:
```text
āśhcharya-vat paśhyati kaśhchid enan
āśhcharya-vad vadati tathaiva chānyaḥ
āśhcharya-vach chainam anyaḥ śhṛiṇoti
śhrutvāpyenaṁ veda na chaiva kaśhchit
```

expected:
```text
āścarya-vat paśyati kaścid enam
āścarya-vad vadati tathaiva cānyaḥ
āścarya-vac cainam anyaḥ śṛṇoti
śrutvāpy enaṁ veda na caiva kaścit
```

diff: canonical transliteration differs

### [BG 2.30] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/30/

current:
```text
dehī nityam avadhyo ’yaṁ dehe sarvasya bhārata
tasmāt sarvāṇi bhūtāni na tvaṁ śhochitum arhasi
```

expected:
```text
dehī nityam avadhyo ’yaṁ
dehe sarvasya bhārata
tasmāt sarvāṇi bhūtāni
na tvaṁ śocitum arhasi
```

diff: canonical transliteration differs

### [BG 2.31] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/31/

current:
```text
swa-dharmam api chāvekṣhya na vikampitum arhasi
dharmyāddhi yuddhāch chhreyo ’nyat kṣhatriyasya na vidyate
```

expected:
```text
sva-dharmam api cāvekṣya
na vikampitum arhasi
dharmyād dhi yuddhāc chreyo ’nyat
kṣatriyasya na vidyate
```

diff: canonical transliteration differs

### [BG 2.32] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/32/

current:
```text
yadṛichchhayā chopapannaṁ swarga-dvāram apāvṛitam
sukhinaḥ kṣhatriyāḥ pārtha labhante yuddham īdṛiśham
```

expected:
```text
yadṛcchayā copapannaṁ
svarga-dvāram apāvṛtam
sukhinaḥ kṣatriyāḥ pārtha
labhante yuddham īdṛśam
```

diff: canonical transliteration differs

### [BG 2.33] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/33/

current:
```text
atha chet tvam imaṁ dharmyaṁ saṅgrāmaṁ na kariṣhyasi
tataḥ sva-dharmaṁ kīrtiṁ cha hitvā pāpam avāpsyasi
```

expected:
```text
atha cet tvam imaṁ dharmyaṁ
saṅgrāmaṁ na kariṣyasi
tataḥ sva-dharmaṁ kīrtiṁ ca
hitvā pāpam avāpsyasi
```

diff: canonical transliteration differs

### [BG 2.34] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/34/

current:
```text
akīrtiṁ chāpi bhūtāni
kathayiṣhyanti te ’vyayām
sambhāvitasya chākīrtir
maraṇād atirichyate
```

expected:
```text
akīrtiṁ cāpi bhūtāni
kathayiṣyanti te ’vyayām
sambhāvitasya cākīrtir
maraṇād atiricyate
```

diff: canonical transliteration differs

### [BG 2.35] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/35/

current:
```text
bhayād raṇād uparataṁ mansyante tvāṁ mahā-rathāḥ
yeṣhāṁ cha tvaṁ bahu-mato bhūtvā yāsyasi lāghavam
```

expected:
```text
bhayād raṇād uparataṁ
maṁsyante tvāṁ mahā-rathāḥ
yeṣāṁ ca tvaṁ bahu-mato
bhūtvā yāsyasi lāghavam
```

diff: canonical transliteration differs

### [BG 2.36] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/36/

current:
```text
avāchya-vādānśh cha bahūn vadiṣhyanti tavāhitāḥ
nindantastava sāmarthyaṁ tato duḥkhataraṁ nu kim
```

expected:
```text
avācya-vādāṁś ca bahūn
vadiṣyanti tavāhitāḥ
nindantas tava sāmarthyaṁ
tato duḥkha-taraṁ nu kim
```

diff: canonical transliteration differs

### [BG 2.37] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/37/

current:
```text
hato vā prāpsyasi swargaṁ jitvā vā bhokṣhyase mahīm
tasmād uttiṣhṭha kaunteya yuddhāya kṛita-niśhchayaḥ
```

expected:
```text
hato vā prāpsyasi svargaṁ
jitvā vā bhokṣyase mahīm
tasmād uttiṣṭha kaunteya
yuddhāya kṛta-niścayaḥ
```

diff: canonical transliteration differs

### [BG 2.38] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/38/

current:
```text
sukha-duḥkhe same kṛitvā lābhālābhau jayājayau
tato yuddhāya yujyasva naivaṁ pāpam avāpsyasi
```

expected:
```text
sukha-duḥkhe same kṛtvā
lābhālābhau jayājayau
tato yuddhāya yujyasva
naivaṁ pāpam avāpsyasi
```

diff: canonical transliteration differs

### [BG 2.39] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/39/

current:
```text
eṣhā te ’bhihitā sānkhye
buddhir yoge tvimāṁ śhṛiṇu
buddhyā yukto yayā pārtha
karma-bandhaṁ prahāsyasi
```

expected:
```text
eṣā te ’bhihitā sāṅkhye
buddhir yoge tv imāṁ śṛṇu
buddhyā yukto yayā pārtha
karma-bandhaṁ prahāsyasi
```

diff: canonical transliteration differs

### [BG 2.40] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/40/

current:
```text
nehābhikrama-nāśho ’sti pratyavāyo na vidyate
svalpam apyasya dharmasya trāyate mahato bhayāt
```

expected:
```text
nehābhikrama-nāśo ’sti
pratyavāyo na vidyate
sv-alpam apy asya dharmasya
trāyate mahato bhayāt
```

diff: canonical transliteration differs

### [BG 2.41] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/41/

current:
```text
vyavasāyātmikā buddhir ekeha kuru-nandana
bahu-śhākhā hyanantāśh cha buddhayo ’vyavasāyinām
```

expected:
```text
vyavasāyātmikā buddhir
ekeha kuru-nandana
bahu-śākhā hy anantāś ca
buddhayo ’vyavasāyinām
```

diff: canonical transliteration differs

### [BG 2.42] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/42-43/

current:
```text
yāmimāṁ puṣhpitāṁ vāchaṁ pravadanty-avipaśhchitaḥ
veda-vāda-ratāḥ pārtha nānyad astīti vādinaḥ
kāmātmānaḥ swarga-parā janma-karma-phala-pradām
kriyā-viśheṣha-bahulāṁ bhogaiśhwarya-gatiṁ prati
```

expected:
```text
yām imāṁ puṣpitāṁ vācaṁ
pravadanty avipaścitaḥ
veda-vāda-ratāḥ pārtha
nānyad astīti vādinaḥ
```

diff: canonical transliteration differs; vedabase source combines verses 42-43

### [BG 2.44] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/44/

current:
```text
bhogaiśwvarya-prasaktānāṁ tayāpahṛita-chetasām
vyavasāyātmikā buddhiḥ samādhau na vidhīyate
```

expected:
```text
bhogaiśvarya-prasaktānāṁ
tayāpahṛta-cetasām
vyavasāyātmikā buddhiḥ
samādhau na vidhīyate
```

diff: canonical transliteration differs

### [BG 2.45] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/45/

current:
```text
trai-guṇya-viṣhayā vedā nistrai-guṇyo bhavārjuna
nirdvandvo nitya-sattva-stho niryoga-kṣhema ātmavān
```

expected:
```text
trai-guṇya-viṣayā vedā
nistrai-guṇyo bhavārjuna
nirdvandvo nitya-sattva-stho
niryoga-kṣema ātmavān
```

diff: canonical transliteration differs

### [BG 2.46] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/46/

current:
```text
yāvān artha udapāne sarvataḥ samplutodake
tāvānsarveṣhu vedeṣhu brāhmaṇasya vijānataḥ
```

expected:
```text
yāvān artha uda-pāne
sarvataḥ samplutodake
tāvān sarveṣu vedeṣu
brāhmaṇasya vijānataḥ
```

diff: canonical transliteration differs

### [BG 2.47] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/47/

current:
```text
karmaṇy-evādhikāras te mā phaleṣhu kadāchana
mā karma-phala-hetur bhūr mā te saṅgo ’stvakarmaṇi
```

expected:
```text
karmaṇy evādhikāras te
mā phaleṣu kadācana
mā karma-phala-hetur bhūr
mā te saṅgo ’stv akarmaṇi
```

diff: canonical transliteration differs

### [BG 2.48] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/48/

current:
```text
yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya
siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga uchyate
```

expected:
```text
yoga-sthaḥ kuru karmāṇi
saṅgaṁ tyaktvā dhanañ-jaya
siddhy-asiddhyoḥ samo bhūtvā
samatvaṁ yoga ucyate
```

diff: canonical transliteration differs

### [BG 2.49] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/49/

current:
```text
dūreṇa hy-avaraṁ karma buddhi-yogād dhanañjaya
buddhau śharaṇam anvichchha kṛipaṇāḥ phala-hetavaḥ
```

expected:
```text
dūreṇa hy avaraṁ karma
buddhi-yogād dhanañ-jaya
buddhau śaraṇam anviccha
kṛpaṇāḥ phala-hetavaḥ
```

diff: canonical transliteration differs

### [BG 2.50] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/50/

current:
```text
buddhi-yukto jahātīha ubhe sukṛita-duṣhkṛite
tasmād yogāya yujyasva yogaḥ karmasu kauśhalam
```

expected:
```text
buddhi-yukto jahātīha
ubhe sukṛta-duṣkṛte
tasmād yogāya yujyasva
yogaḥ karmasu kauśalam
```

diff: canonical transliteration differs

### [BG 2.51] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/51/

current:
```text
karma-jaṁ buddhi-yuktā hi phalaṁ tyaktvā manīṣhiṇaḥ
janma-bandha-vinirmuktāḥ padaṁ gachchhanty-anāmayam
```

expected:
```text
karma-jaṁ buddhi-yuktā hi
phalaṁ tyaktvā manīṣiṇaḥ
janma-bandha-vinirmuktāḥ
padaṁ gacchanty anāmayam
```

diff: canonical transliteration differs

### [BG 2.52] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/52/

current:
```text
yadā te moha-kalilaṁ buddhir vyatitariṣhyati
tadā gantāsi nirvedaṁ śhrotavyasya śhrutasya cha
```

expected:
```text
yadā te moha-kalilaṁ
buddhir vyatitariṣyati
tadā gantāsi nirvedaṁ
śrotavyasya śrutasya ca
```

diff: canonical transliteration differs

### [BG 2.53] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/53/

current:
```text
śhruti-vipratipannā te yadā sthāsyati niśhchalā
samādhāv-achalā buddhis tadā yogam avāpsyasi
```

expected:
```text
śruti-vipratipannā te
yadā sthāsyati niścalā
samādhāv acalā buddhis
tadā yogam avāpsyasi
```

diff: canonical transliteration differs

### [BG 2.54] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/54/

current:
```text
arjuna uvācha
sthita-prajñasya kā bhāṣhā samādhi-sthasya keśhava
sthita-dhīḥ kiṁ prabhāṣheta kim āsīta vrajeta kim
```

expected:
```text
arjuna uvāca
sthita-prajñasya kā bhāṣā
samādhi-sthasya keśava
sthita-dhīḥ kiṁ prabhāṣeta
kim āsīta vrajeta kim
```

diff: canonical transliteration differs

### [BG 2.55] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/55/

current:
```text
śhrī bhagavān uvācha
prajahāti yadā kāmān sarvān pārtha mano-gatān
ātmany-evātmanā tuṣhṭaḥ sthita-prajñas tadochyate
```

expected:
```text
śrī-bhagavān uvāca
prajahāti yadā kāmān
sarvān pārtha mano-gatān
ātmany evātmanā tuṣṭaḥ
sthita-prajñas tadocyate
```

diff: canonical transliteration differs

### [BG 2.56] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/56/

current:
```text
duḥkheṣhv-anudvigna-manāḥ sukheṣhu vigata-spṛihaḥ
vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir uchyate
```

expected:
```text
duḥkheṣv anudvigna-manāḥ
sukheṣu vigata-spṛhaḥ
vīta-rāga-bhaya-krodhaḥ
sthita-dhīr munir ucyate
```

diff: canonical transliteration differs

### [BG 2.57] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/57/

current:
```text
yaḥ sarvatrānabhisnehas tat tat prāpya śhubhāśhubham
nābhinandati na dveṣhṭi tasya prajñā pratiṣhṭhitā
```

expected:
```text
yaḥ sarvatrānabhisnehas
tat tat prāpya śubhāśubham
nābhinandati na dveṣṭi
tasya prajñā pratiṣṭhitā
```

diff: canonical transliteration differs

### [BG 2.58] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/58/

current:
```text
yadā sanharate chāyaṁ kūrmo ’ṅgānīva sarvaśhaḥ
indriyāṇīndriyārthebhyas tasya prajñā pratiṣhṭhitā
```

expected:
```text
yadā saṁharate cāyaṁ
kūrmo ’ṅgānīva sarvaśaḥ
indriyāṇīndriyārthebhyas
tasya prajñā pratiṣṭhitā
```

diff: canonical transliteration differs

### [BG 2.59] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/59/

current:
```text
viṣhayā vinivartante nirāhārasya dehinaḥ
rasa-varjaṁ raso ’pyasya paraṁ dṛiṣhṭvā nivartate
```

expected:
```text
viṣayā vinivartante
nirāhārasya dehinaḥ
rasa-varjaṁ raso ’py asya
paraṁ dṛṣṭvā nivartate
```

diff: canonical transliteration differs

### [BG 2.60] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/60/

current:
```text
yatato hyapi kaunteya puruṣhasya vipaśhchitaḥ
indriyāṇi pramāthīni haranti prasabhaṁ manaḥ
```

expected:
```text
yatato hy api kaunteya
puruṣasya vipaścitaḥ
indriyāṇi pramāthīni
haranti prasabhaṁ manaḥ
```

diff: canonical transliteration differs

### [BG 2.61] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/61/

current:
```text
tāni sarvāṇi sanyamya yukta āsīta mat-paraḥ
vaśhe hi yasyendriyāṇi tasya prajñā pratiṣhṭhitā
```

expected:
```text
tāni sarvāṇi saṁyamya
yukta āsīta mat-paraḥ
vaśe hi yasyendriyāṇi
tasya prajñā pratiṣṭhitā
```

diff: canonical transliteration differs

### [BG 2.62] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/62/

current:
```text
dhyāyato viṣhayān puṁsaḥ saṅgas teṣhūpajāyate
saṅgāt sañjāyate kāmaḥ kāmāt krodho ’bhijāyate
```

expected:
```text
dhyāyato viṣayān puṁsaḥ
saṅgas teṣūpajāyate
saṅgāt sañjāyate kāmaḥ
kāmāt krodho ’bhijāyate
```

diff: canonical transliteration differs

### [BG 2.63] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/63/

current:
```text
krodhād bhavati sammohaḥ sammohāt smṛiti-vibhramaḥ
smṛiti-bhranśhād buddhi-nāśho buddhi-nāśhāt praṇaśhyati
```

expected:
```text
krodhād bhavati sammohaḥ
sammohāt smṛti-vibhramaḥ
smṛti-bhraṁśād buddhi-nāśo
buddhi-nāśāt praṇaśyati
```

diff: canonical transliteration differs

### [BG 2.64] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/64/

current:
```text
rāga-dveṣha-viyuktais tu viṣhayān indriyaiśh charan
ātma-vaśhyair-vidheyātmā prasādam adhigachchhati
```

expected:
```text
rāga-dveṣa-vimuktais tu
viṣayān indriyaiś caran
ātma-vaśyair vidheyātmā
prasādam adhigacchati
```

diff: canonical transliteration differs

### [BG 2.65] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/65/

current:
```text
prasāde sarva-duḥkhānāṁ hānir asyopajāyate
prasanna-chetaso hyāśhu buddhiḥ paryavatiṣhṭhate
```

expected:
```text
prasāde sarva-duḥkhānāṁ
hānir asyopajāyate
prasanna-cetaso hy āśu
buddhiḥ paryavatiṣṭhate
```

diff: canonical transliteration differs

### [BG 2.66] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/66/

current:
```text
nāsti buddhir-ayuktasya na chāyuktasya bhāvanā
na chābhāvayataḥ śhāntir aśhāntasya kutaḥ sukham
```

expected:
```text
nāsti buddhir ayuktasya
na cāyuktasya bhāvanā
na cābhāvayataḥ śāntir
aśāntasya kutaḥ sukham
```

diff: canonical transliteration differs

### [BG 2.67] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/67/

current:
```text
indriyāṇāṁ hi charatāṁ yan mano ’nuvidhīyate
tadasya harati prajñāṁ vāyur nāvam ivāmbhasi
```

expected:
```text
indriyāṇāṁ hi caratāṁ
yan mano ’nuvidhīyate
tad asya harati prajñāṁ
vāyur nāvam ivāmbhasi
```

diff: canonical transliteration differs

### [BG 2.68] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/68/

current:
```text
tasmād yasya mahā-bāho nigṛihītāni sarvaśhaḥ
indriyāṇīndriyārthebhyas tasya prajñā pratiṣhṭhitā
```

expected:
```text
tasmād yasya mahā-bāho
nigṛhītāni sarvaśaḥ
indriyāṇīndriyārthebhyas
tasya prajñā pratiṣṭhitā
```

diff: canonical transliteration differs

### [BG 2.69] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/69/

current:
```text
yā niśhā sarva-bhūtānāṁ tasyāṁ jāgarti sanyamī
yasyāṁ jāgrati bhūtāni sā niśhā paśhyato muneḥ
```

expected:
```text
yā niśā sarva-bhūtānāṁ
tasyāṁ jāgarti saṁyamī
yasyāṁ jāgrati bhūtāni
sā niśā paśyato muneḥ
```

diff: canonical transliteration differs

### [BG 2.70] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/70/

current:
```text
āpūryamāṇam achala-pratiṣhṭhaṁ
samudram āpaḥ praviśhanti yadvat
tadvat kāmā yaṁ praviśhanti sarve
sa śhāntim āpnoti na kāma-kāmī
```

expected:
```text
āpūryamāṇam acala-pratiṣṭhaṁ
samudram āpaḥ praviśanti yadvat
tadvat kāmā yaṁ praviśanti sarve
sa śāntim āpnoti na kāma-kāmī
```

diff: canonical transliteration differs

### [BG 2.71] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/71/

current:
```text
vihāya kāmān yaḥ sarvān pumānśh charati niḥspṛihaḥ
nirmamo nirahankāraḥ sa śhāntim adhigachchhati
```

expected:
```text
vihāya kāmān yaḥ sarvān
pumāṁś carati niḥspṛhaḥ
nirmamo nirahaṅkāraḥ
sa śāntim adhigacchati
```

diff: canonical transliteration differs

### [BG 2.72] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/72/

current:
```text
eṣhā brāhmī sthitiḥ pārtha naināṁ prāpya vimuhyati
sthitvāsyām anta-kāle ’pi brahma-nirvāṇam ṛichchhati
```

expected:
```text
eṣā brāhmī sthitiḥ pārtha
naināṁ prāpya vimuhyati
sthitvāsyām anta-kāle ’pi
brahma-nirvāṇam ṛcchati
```

diff: canonical transliteration differs

### [BG 3.1] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/1/

current:
```text
arjuna uvācha
jyāyasī chet karmaṇas te matā buddhir janārdana
tat kiṁ karmaṇi ghore māṁ niyojayasi keśhava
```

expected:
```text
arjuna uvāca
jyāyasī cet karmaṇas te
matā buddhir janārdana
tat kiṁ karmaṇi ghore māṁ
niyojayasi keśava
```

diff: canonical transliteration differs

### [BG 3.2] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/2/

current:
```text
vyāmiśhreṇeva vākyena buddhiṁ mohayasīva me
tad ekaṁ vada niśhchitya yena śhreyo ’ham āpnuyām
```

expected:
```text
vyāmiśreṇeva vākyena
buddhiṁ mohayasīva me
tad ekaṁ vada niścitya
yena śreyo ’ham āpnuyām
```

diff: canonical transliteration differs

### [BG 3.3] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/3/

current:
```text
śhrī bhagavān uvācha
loke’smin dvi-vidhā niṣhṭhā purā proktā mayānagha
jñāna-yogena sāṅkhyānāṁ karma-yogena yoginām
```

expected:
```text
śrī-bhagavān uvāca
loke ’smin dvi-vidhā niṣṭhā
purā proktā mayānagha
jñāna-yogena sāṅkhyānāṁ
karma-yogena yoginām
```

diff: canonical transliteration differs

### [BG 3.4] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/4/

current:
```text
na karmaṇām anārambhān naiṣhkarmyaṁ puruṣho ’śhnute
na cha sannyasanād eva siddhiṁ samadhigachchhati
```

expected:
```text
na karmaṇām anārambhān
naiṣkarmyaṁ puruṣo ’śnute
na ca sannyasanād eva
siddhiṁ samadhigacchati
```

diff: canonical transliteration differs

### [BG 3.5] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/5/

current:
```text
na hi kaśhchit kṣhaṇam api jātu tiṣhṭhatyakarma-kṛit
kāryate hyavaśhaḥ karma sarvaḥ prakṛiti-jair guṇaiḥ
```

expected:
```text
na hi kaścit kṣaṇam api
jātu tiṣṭhaty akarma-kṛt
kāryate hy avaśaḥ karma
sarvaḥ prakṛti-jair guṇaiḥ
```

diff: canonical transliteration differs

### [BG 3.6] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/6/

current:
```text
karmendriyāṇi sanyamya ya āste manasā smaran
indriyārthān vimūḍhātmā mithyāchāraḥ sa uchyate
```

expected:
```text
karmendriyāṇi saṁyamya
ya āste manasā smaran
indriyārthān vimūḍhātmā
mithyācāraḥ sa ucyate
```

diff: canonical transliteration differs

### [BG 3.7] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/7/

current:
```text
yas tvindriyāṇi manasā niyamyārabhate ’rjuna
karmendriyaiḥ karma-yogam asaktaḥ sa viśhiṣhyate
```

expected:
```text
yas tv indriyāṇi manasā
niyamyārabhate ’rjuna
karmendriyaiḥ karma-yogam
asaktaḥ sa viśiṣyate
```

diff: canonical transliteration differs

### [BG 3.8] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/8/

current:
```text
niyataṁ kuru karma tvaṁ karma jyāyo hyakarmaṇaḥ
śharīra-yātrāpi cha te na prasiddhyed akarmaṇaḥ
```

expected:
```text
niyataṁ kuru karma tvaṁ
karma jyāyo hy akarmaṇaḥ
śarīra-yātrāpi ca te
na prasidhyed akarmaṇaḥ
```

diff: canonical transliteration differs

### [BG 3.9] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/9/

current:
```text
yajñārthāt karmaṇo ’nyatra loko ’yaṁ karma-bandhanaḥ
tad-arthaṁ karma kaunteya mukta-saṅgaḥ samāchara
```

expected:
```text
yajñārthāt karmaṇo ’nyatra
loko ’yaṁ karma-bandhanaḥ
tad-arthaṁ karma kaunteya
mukta-saṅgaḥ samācara
```

diff: canonical transliteration differs

### [BG 3.10] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/10/

current:
```text
saha-yajñāḥ prajāḥ sṛiṣhṭvā purovācha prajāpatiḥ
anena prasaviṣhyadhvam eṣha vo ’stviṣhṭa-kāma-dhuk
```

expected:
```text
saha-yajñāḥ prajāḥ sṛṣṭvā
purovāca prajāpatiḥ
anena prasaviṣyadhvam
eṣa vo ’stv iṣṭa-kāma-dhuk
```

diff: canonical transliteration differs

### [BG 3.11] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/11/

current:
```text
devān bhāvayatānena te devā bhāvayantu vaḥ
parasparaṁ bhāvayantaḥ śhreyaḥ param avāpsyatha
```

expected:
```text
devān bhāvayatānena
te devā bhāvayantu vaḥ
parasparaṁ bhāvayantaḥ
śreyaḥ param avāpsyatha
```

diff: canonical transliteration differs

### [BG 3.12] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/12/

current:
```text
iṣhṭān bhogān hi vo devā dāsyante yajña-bhāvitāḥ
tair dattān apradāyaibhyo yo bhuṅkte stena eva saḥ
```

expected:
```text
iṣṭān bhogān hi vo devā
dāsyante yajña-bhāvitāḥ
tair dattān apradāyaibhyo
yo bhuṅkte stena eva saḥ
```

diff: canonical transliteration differs

### [BG 3.13] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/13/

current:
```text
yajña-śhiṣhṭāśhinaḥ santo muchyante sarva-kilbiṣhaiḥ
bhuñjate te tvaghaṁ pāpā ye pachantyātma-kāraṇāt
```

expected:
```text
yajña-śiṣṭāśinaḥ santo
mucyante sarva-kilbiṣaiḥ
bhuñjate te tv aghaṁ pāpā
ye pacanty ātma-kāraṇāt
```

diff: canonical transliteration differs

### [BG 3.14] severity: LOW

source: https://vedabase.io/en/library/bg/3/14/

current:
```text
annād bhavanti bhūtāni parjanyād anna-sambhavaḥ
yajñād bhavati parjanyo yajñaḥ karma-samudbhavaḥ
```

expected:
```text
annād bhavanti bhūtāni
parjanyād anna-sambhavaḥ
yajñād bhavati parjanyo
yajñaḥ karma-samudbhavaḥ
```

diff: canonical transliteration differs; compact transliteration matches after punctuation/spacing normalization

### [BG 3.15] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/15/

current:
```text
karma brahmodbhavaṁ viddhi brahmākṣhara-samudbhavam
tasmāt sarva-gataṁ brahma nityaṁ yajñe pratiṣhṭhitam
```

expected:
```text
karma brahmodbhavaṁ viddhi
brahmākṣara-samudbhavam
tasmāt sarva-gataṁ brahma
nityaṁ yajñe pratiṣṭhitam
```

diff: canonical transliteration differs

### [BG 3.16] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/16/

current:
```text
evaṁ pravartitaṁ chakraṁ nānuvartayatīha yaḥ
aghāyur indriyārāmo moghaṁ pārtha sa jīvati
```

expected:
```text
evaṁ pravartitaṁ cakraṁ
nānuvartayatīha yaḥ
aghāyur indriyārāmo
moghaṁ pārtha sa jīvati
```

diff: canonical transliteration differs

### [BG 3.17] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/17/

current:
```text
yas tvātma-ratir eva syād ātma-tṛiptaśh cha mānavaḥ
ātmanyeva cha santuṣhṭas tasya kāryaṁ na vidyate
```

expected:
```text
yas tv ātma-ratir eva syād
ātma-tṛptaś ca mānavaḥ
ātmany eva ca santuṣṭas
tasya kāryaṁ na vidyate
```

diff: canonical transliteration differs

### [BG 3.18] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/18/

current:
```text
naiva tasya kṛitenārtho nākṛiteneha kaśhchana
na chāsya sarva-bhūteṣhu kaśhchid artha-vyapāśhrayaḥ
```

expected:
```text
naiva tasya kṛtenārtho
nākṛteneha kaścana
na cāsya sarva-bhūteṣu
kaścid artha-vyapāśrayaḥ
```

diff: canonical transliteration differs

### [BG 3.19] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/19/

current:
```text
tasmād asaktaḥ satataṁ kāryaṁ karma samāchara
asakto hyācharan karma param āpnoti pūruṣhaḥ
```

expected:
```text
tasmād asaktaḥ satataṁ
kāryaṁ karma samācara
asakto hy ācaran karma
param āpnoti pūruṣaḥ
```

diff: canonical transliteration differs

### [BG 3.20] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/20/

current:
```text
karmaṇaiva hi sansiddhim āsthitā janakādayaḥ
loka-saṅgraham evāpi sampaśhyan kartum arhasi
```

expected:
```text
karmaṇaiva hi saṁsiddhim
āsthitā janakādayaḥ
loka-saṅgraham evāpi
sampaśyan kartum arhasi
```

diff: canonical transliteration differs

### [BG 3.21] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/21/

current:
```text
yad yad ācharati śhreṣhṭhas tat tad evetaro janaḥ
sa yat pramāṇaṁ kurute lokas tad anuvartate
```

expected:
```text
yad yad ācarati śreṣṭhas
tat tad evetaro janaḥ
sa yat pramāṇaṁ kurute
lokas tad anuvartate
```

diff: canonical transliteration differs

### [BG 3.22] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/22/

current:
```text
na me pārthāsti kartavyaṁ triṣhu lokeṣhu kiñchana
nānavāptam avāptavyaṁ varta eva cha karmaṇi
```

expected:
```text
na me pārthāsti kartavyaṁ
triṣu lokeṣu kiñcana
nānavāptam avāptavyaṁ
varta eva ca karmaṇi
```

diff: canonical transliteration differs

### [BG 3.23] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/23/

current:
```text
yadi hyahaṁ na varteyaṁ jātu karmaṇyatandritaḥ
mama vartmānuvartante manuṣhyāḥ pārtha sarvaśhaḥ
```

expected:
```text
yadi hy ahaṁ na varteyaṁ
jātu karmaṇy atandritaḥ
mama vartmānuvartante
manuṣyāḥ pārtha sarvaśaḥ
```

diff: canonical transliteration differs


559 additional transliteration differences are omitted from the expanded section. Full details are available in `04-transliteration-results.json`.


## Stop Point

No transliteration values were changed. Step 5 can proceed after review.
