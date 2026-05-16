# Step 6 - English Translation Accuracy

Compared stored English translations in `src/data/gita-data.json` against vedabase.io English translation blocks. To respect copyright, this report quotes only short identifying phrases from the reference translation and records the source URL.

## Method

- Discovered vedabase source slugs from chapter indexes, including combined verse pages.
- Extracted the `av-translation` block from each source page.
- Compared stored `translation.en` with the reference using normalized English token trigram overlap.
- Checked whether low-overlap translations were closer to previous or next verse as an off-by-one heuristic.

## Summary

| Result | Count |
| --- | ---: |
| Verse records expected | 701 |
| Reference pages parsed | 700 |
| Fetch/extraction failures | 1 |
| Findings | 684 |
| HIGH possible off-by-one findings | 3 |
| MEDIUM low-overlap findings | 515 |
| LOW low-overlap findings | 166 |

## Source Failures

- BG 1.47: no_source_slug_found_in_chapter_index - vedabase chapter index ends at BG 1.46; stored verse numbering differs from source (https://vedabase.io/en/library/bg/1/47/)

## Findings

### [BG 1.1] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/1/

current translation:
```text
Dhritarashtra said, "What did my people and the sons of Pandu do when they had assembled together, eager for battle, on the holy plain of Kurukshetra, O Sanjaya?
```

reference identifying phrase:
```text
Dhṛtarāṣṭra said: O Sañjaya, after my sons and the sons of Pāṇḍu assembled in the place of pilgrimage at Kurukṣetra, desiring to fight, what did they do?
```

notes: low lexical overlap with vedabase translation: score=0.08

### [BG 1.2] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/2/

current translation:
```text
Sanjaya said: Having seen the army of the Pandavas drawn up in battle array, King Duryodhana approached his teacher, Drona, and spoke these words.
```

reference identifying phrase:
```text
Sañjaya said: O King, after looking over the army arranged in military formation by the sons of Pāṇḍu, King Duryodhana went to his teacher and spoke the following words.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.3] severity: LOW

source: https://vedabase.io/en/library/bg/1/3/

current translation:
```text
Behold, O Teacher! This mighty army of the sons of Pandu, arrayed by the son of Drupada, thy wise disciple.
```

reference identifying phrase:
```text
O my teacher, behold the great army of the sons of Pāṇḍu, so expertly arranged by your intelligent disciple the son of Drupada.
```

notes: low lexical overlap with vedabase translation: score=0.26

### [BG 1.4] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/4/

current translation:
```text
Here are heroes, mighty archers, equal in battle to Bhima and Arjuna, Yuyudhana (Satyaki), Virata, and Drupada—all mighty warriors.
```

reference identifying phrase:
```text
Here in this army are many heroic bowmen equal in fighting to Bhīma and Arjuna: great fighters like Yuyudhāna, Virāṭa and Drupada.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.5] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/5/

current translation:
```text
Dhrishtaketu, Chekitana, the valiant king of Kasi, Purujit, Kuntibhoja, and Saibya—the best of men.
```

reference identifying phrase:
```text
There are also great heroic, powerful fighters like Dhṛṣṭaketu, Cekitāna, Kāśirāja, Purujit, Kuntibhoja and Śaibya.
```

notes: low lexical overlap with vedabase translation: score=0.08

### [BG 1.6] severity: LOW

source: https://vedabase.io/en/library/bg/1/6/

current translation:
```text
The strong Yudhamanyu and the brave Uttamaujas, the son of Subhadra (Abhimanyu, the son of Subhadra and Arjuna), and the sons of Draupadi, all of them great warriors.
```

reference identifying phrase:
```text
There are the mighty Yudhāmanyu, the very powerful Uttamaujā, the son of Subhadrā and the sons of Draupadī. All these warriors are great chariot fighters.
```

notes: low lexical overlap with vedabase translation: score=0.13

### [BG 1.7] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/7/

current translation:
```text
Know also, O best among the twice-born! the names of those who are the most distinguished amongst ourselves, the leaders of my army; these I name to you for your information.
```

reference identifying phrase:
```text
But for your information, O best of the brāhmaṇas, let me tell you about the captains who are especially qualified to lead my military force.
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 1.8] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/8/

current translation:
```text
"Thou thyself, Bhishma, Karna, Kripa, the victorious in war, Asvatthama, Vikarna, and Bhurisrava, the son of Somadatta—all these are ready for battle.
```

reference identifying phrase:
```text
There are personalities like you, Bhīṣma, Karṇa, Kṛpa, Aśvatthāmā, Vikarṇa and the son of Somadatta called Bhūriśravā, who are always victorious in battle.
```

notes: low lexical overlap with vedabase translation: score=0.10

### [BG 1.9] severity: LOW

source: https://vedabase.io/en/library/bg/1/9/

current translation:
```text
And also many other heroes, ready to give up their lives for my sake, armed with various weapons and missiles, all well-skilled in battle.
```

reference identifying phrase:
```text
There are many other heroes who are prepared to lay down their lives for my sake. All of them are well equipped with different kinds of weapons, and all are experienced in military
```

notes: low lexical overlap with vedabase translation: score=0.15

### [BG 1.10] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/10/

current translation:
```text
Our army, protected by Bhishma, is unlimited, whereas their army, protected by Bhima, is limited.
```

reference identifying phrase:
```text
Our strength is immeasurable, and we are perfectly protected by Grandfather Bhīṣma, whereas the strength of the Pāṇḍavas, carefully protected by Bhīma, is limited.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.11] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/11/

current translation:
```text
Therefore, do all of you, stationed in your respective positions in the several divisions of the army, protect Bhishma alone.
```

reference identifying phrase:
```text
All of you must now give full support to Grandfather Bhīṣma, as you stand at your respective strategic points of entrance into the phalanx of the army.
```

notes: low lexical overlap with vedabase translation: score=0.09

### [BG 1.12] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/12/

current translation:
```text
His glorious grandsire, the oldest of the Kauravas, roared like a lion to cheer Duryodhana and blew his conch.
```

reference identifying phrase:
```text
Then Bhīṣma, the great valiant grandsire of the Kuru dynasty, the grandfather of the fighters, blew his conchshell very loudly, making a sound like the roar of a lion, giving Duryo
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.13] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/13/

current translation:
```text
Then, suddenly, conches, kettledrums, tabors, drums, and cow horns blared forth from the Kaurava side, and the sound was tremendous.
```

reference identifying phrase:
```text
After that, the conchshells, drums, bugles, trumpets and horns were all suddenly sounded, and the combined sound was tumultuous.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.14] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/14/

current translation:
```text
Then, Madhava (Krishna) and the son of Pandu (Arjuna), seated in the magnificent chariot yoked with white horses, blew divine conches.
```

reference identifying phrase:
```text
On the other side, both Lord Kṛṣṇa and Arjuna, stationed on a great chariot drawn by white horses, sounded their transcendental conchshells.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.15] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/15/

current translation:
```text
Hrishikesha blew the Panchajanya, Arjuna blew the Devadatta, and Bhima, the wolf-bellied doer of terrible deeds, blew the great conch Paundra.
```

reference identifying phrase:
```text
Lord Kṛṣṇa blew His conchshell, called Pāñcajanya; Arjuna blew his, the Devadatta; and Bhīma, the voracious eater and performer of herculean tasks, blew his terrific conchshell, ca
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 1.16] severity: LOW

source: https://vedabase.io/en/library/bg/1/16-18/

current translation:
```text
King Yudhishthira, the son of Kunti, blew the Anantavijaya; Nakula and Sahadeva blew the Sughosha and the Manipushpaka.
```

reference identifying phrase:
```text
King Yudhiṣṭhira, the son of Kuntī, blew his conchshell, the Ananta-vijaya, and Nakula and Sahadeva blew the Sughoṣa and Maṇipuṣpaka. That great archer the King of Kāśī, the great 
```

notes: low lexical overlap with vedabase translation: score=0.11; vedabase combines verses 16-18

### [BG 1.17] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/16-18/

current translation:
```text
The king of Kasi, an excellent archer, Sikhandi, the mighty car-warrior, Dhrishtadyumna, Virata, and Satyaki, the unconquered.
```

reference identifying phrase:
```text
King Yudhiṣṭhira, the son of Kuntī, blew his conchshell, the Ananta-vijaya, and Nakula and Sahadeva blew the Sughoṣa and Maṇipuṣpaka. That great archer the King of Kāśī, the great 
```

notes: low lexical overlap with vedabase translation: score=0.03; vedabase combines verses 16-18

### [BG 1.18] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/16-18/

current translation:
```text
Drupada and the sons of Draupadi, O Lord of the Earth, and the son of Subhadra, the mighty-armed, blew their conches each separately.
```

reference identifying phrase:
```text
King Yudhiṣṭhira, the son of Kuntī, blew his conchshell, the Ananta-vijaya, and Nakula and Sahadeva blew the Sughoṣa and Maṇipuṣpaka. That great archer the King of Kāśī, the great 
```

notes: low lexical overlap with vedabase translation: score=0.05; vedabase combines verses 16-18

### [BG 1.19] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/19/

current translation:
```text
The tumultuous sound rent the hearts of Dhritarashtra's party, reverberating through both heaven and earth.
```

reference identifying phrase:
```text
The blowing of these different conchshells became uproarious. Vibrating both in the sky and on the earth, it shattered the hearts of the sons of Dhṛtarāṣṭra.
```

notes: low lexical overlap with vedabase translation: score=0.05

### [BG 1.20] severity: LOW

source: https://vedabase.io/en/library/bg/1/20/

current translation:
```text
Then, seeing the people of Dhritarashtra's party standing arrayed and the discharge of weapons about to begin, Arjuna, the son of Pandu whose ensign was a monkey, took up his bow and said the following to Krishna, O Lord of the Earth.
```

reference identifying phrase:
```text
At that time Arjuna, the son of Pāṇḍu, seated in the chariot bearing the flag marked with Hanumān, took up his bow and prepared to shoot his arrows. O King, after looking at the so
```

notes: low lexical overlap with vedabase translation: score=0.11

### [BG 1.21] severity: LOW

source: https://vedabase.io/en/library/bg/1/21-22/

current translation:
```text
Arjuna said, "O Krishna, place my chariot in the middle between the two armies."
```

reference identifying phrase:
```text
Arjuna said: O infallible one, please draw my chariot between the two armies so that I may see those present here, who desire to fight, and with whom I must contend in this great t
```

notes: low lexical overlap with vedabase translation: score=0.13; vedabase combines verses 21-22

### [BG 1.22] severity: LOW

source: https://vedabase.io/en/library/bg/1/21-22/

current translation:
```text
So that I may behold those who stand here eager for battle, and know with whom I must fight in this great war.
```

reference identifying phrase:
```text
Arjuna said: O infallible one, please draw my chariot between the two armies so that I may see those present here, who desire to fight, and with whom I must contend in this great t
```

notes: low lexical overlap with vedabase translation: score=0.18; vedabase combines verses 21-22

### [BG 1.23] severity: LOW

source: https://vedabase.io/en/library/bg/1/23/

current translation:
```text
For I desire to observe those who are assembled here to fight, wishing to please in battle the evil-minded Duryodhana—the son of Dhritarashtra.
```

reference identifying phrase:
```text
Let me see those who have come here to fight, wishing to please the evil-minded son of Dhṛtarāṣṭra.
```

notes: low lexical overlap with vedabase translation: score=0.21

### [BG 1.24] severity: LOW

source: https://vedabase.io/en/library/bg/1/24/

current translation:
```text
Sanjaya said, Thus addressed by Arjuna, Krishna stationed the best of chariots, O Dhritarashtra, in the midst of the two armies.
```

reference identifying phrase:
```text
Sañjaya said: O descendant of Bharata, having thus been addressed by Arjuna, Lord Kṛṣṇa drew up the fine chariot in the midst of the armies of both parties.
```

notes: low lexical overlap with vedabase translation: score=0.18

### [BG 1.25] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/25/

current translation:
```text
In front of Bhishma and Drona, and all the rulers of the earth, he said: "O Arjuna, son of Pritha, behold these Kurus gathered together.
```

reference identifying phrase:
```text
In the presence of Bhīṣma, Droṇa and all the other chieftains of the world, the Lord said, “Just behold, Pārtha, all the Kurus assembled here.”
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 1.26] severity: LOW

source: https://vedabase.io/en/library/bg/1/26/

current translation:
```text
Then, Arjuna (son of Pritha) saw there (in the armies) stationed fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, and friends.
```

reference identifying phrase:
```text
There Arjuna could see, within the midst of the armies of both parties, his fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, friends, and also his fathe
```

notes: low lexical overlap with vedabase translation: score=0.26

### [BG 1.27] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/27/

current translation:
```text
He saw fathers-in-law and friends in both the armies. The son of Kunti, Arjuna, seeing all those kinsmen thus standing arrayed, spoke sorrowfully, deeply filled with pity.
```

reference identifying phrase:
```text
When the son of Kuntī, Arjuna, saw all these different grades of friends and relatives, he became overwhelmed with compassion and spoke thus.
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 1.28] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/28/

current translation:
```text
Arjuna said, "O Krishna, seeing my kinsmen arrayed here, eager to fight,
```

reference identifying phrase:
```text
Arjuna said: My dear Kṛṣṇa, seeing my friends and relatives present before me in such a fighting spirit, I feel the limbs of my body quivering and my mouth drying up.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.29] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/29/

current translation:
```text
My limbs fail, my mouth is parched, my body quivers, and my hair stands on end.
```

reference identifying phrase:
```text
My whole body is trembling, my hair is standing on end, my bow Gāṇḍīva is slipping from my hand, and my skin is burning.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.30] severity: LOW

source: https://vedabase.io/en/library/bg/1/30/

current translation:
```text
The Gandiva slips from my hand, and my skin burns all over; I am unable to stand, and my mind is reeling, as it were.
```

reference identifying phrase:
```text
I am now unable to stand here any longer. I am forgetting myself, and my mind is reeling. I see only causes of misfortune, O Kṛṣṇa, killer of the Keśī demon.
```

notes: low lexical overlap with vedabase translation: score=0.15

### [BG 1.31] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/31/

current translation:
```text
And I see ill omens, O Kesava. I do not see any good in slaying my kinsmen in battle.
```

reference identifying phrase:
```text
I do not see how any good can come from killing my own kinsmen in this battle, nor can I, my dear Kṛṣṇa, desire any subsequent victory, kingdom or happiness.
```

notes: low lexical overlap with vedabase translation: score=0.09

### [BG 1.32] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/32-35/

current translation:
```text
I desire not victory, O Krishna, nor kingdom, nor pleasures.
What use is dominion to us, O Krishna, or pleasures or even life?
```

reference identifying phrase:
```text
O Govinda, of what avail to us are a kingdom, happiness or even life itself when all those for whom we may desire them are now arrayed on this battlefield? O Madhusūdana, when teac
```

notes: low lexical overlap with vedabase translation: score=0.02; vedabase combines verses 32-35

### [BG 1.33] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/32-35/

current translation:
```text
Those for whose sake we desire kingdom, enjoyments, and pleasures stand here in battle, having renounced life and wealth.
```

reference identifying phrase:
```text
O Govinda, of what avail to us are a kingdom, happiness or even life itself when all those for whom we may desire them are now arrayed on this battlefield? O Madhusūdana, when teac
```

notes: low lexical overlap with vedabase translation: score=0.00; vedabase combines verses 32-35

### [BG 1.34] severity: LOW

source: https://vedabase.io/en/library/bg/1/32-35/

current translation:
```text
Teachers, fathers, sons, and grandfathers, maternal uncles, fathers-in-law, grandsons, brothers-in-law, and other relatives—
```

reference identifying phrase:
```text
O Govinda, of what avail to us are a kingdom, happiness or even life itself when all those for whom we may desire them are now arrayed on this battlefield? O Madhusūdana, when teac
```

notes: low lexical overlap with vedabase translation: score=0.14; vedabase combines verses 32-35

### [BG 1.35] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/32-35/

current translation:
```text
These I do not wish to kill, O Krishna, even though they kill me, for the sake of dominion over the three worlds; leave alone killing them for the sake of the earth.
```

reference identifying phrase:
```text
O Govinda, of what avail to us are a kingdom, happiness or even life itself when all those for whom we may desire them are now arrayed on this battlefield? O Madhusūdana, when teac
```

notes: low lexical overlap with vedabase translation: score=0.04; vedabase combines verses 32-35

### [BG 1.36] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/36/

current translation:
```text
By killing these sons of Dhritarashtra, what pleasure could be ours, O Janardana? Only sin would accrue to us from killing these felons.
```

reference identifying phrase:
```text
Sin will overcome us if we slay such aggressors. Therefore it is not proper for us to kill the sons of Dhṛtarāṣṭra and our friends. What should we gain, O Kṛṣṇa, husband of the god
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.37] severity: HIGH

source: https://vedabase.io/en/library/bg/1/37-38/

current translation:
```text
Therefore, we should not kill the sons of Dhritarashtra, our relatives; for how can we be happy by killing our own kin, O Madhava (Krishna)?
```

reference identifying phrase:
```text
O Janārdana, although these men, their hearts overtaken by greed, see no fault in killing one’s family or quarreling with friends, why should we, who can see the crime in destroyin
```

notes: possible off-by-one: current=0.00, prev=0.20, next=0.00; vedabase combines verses 37-38

### [BG 1.38] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/37-38/

current translation:
```text
Though they, with intelligence overpowered by greed, see no evil in the destruction of families and no sin in hostility to friends,
```

reference identifying phrase:
```text
O Janārdana, although these men, their hearts overtaken by greed, see no fault in killing one’s family or quarreling with friends, why should we, who can see the crime in destroyin
```

notes: low lexical overlap with vedabase translation: score=0.07; vedabase combines verses 37-38

### [BG 1.39] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/39/

current translation:
```text
Why should we not, who clearly see the evil in the destruction of families, learn to turn away from this sin, O Janardana (Krishna)?
```

reference identifying phrase:
```text
With the destruction of the dynasty, the eternal family tradition is vanquished, and thus the rest of the family becomes involved in irreligion.
```

notes: low lexical overlap with vedabase translation: score=0.05

### [BG 1.40] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/40/

current translation:
```text
In the destruction of a family, the immemorial religious rites of that family perish; on the destruction of spirituality, impiety indeed, overwhelms the whole family.
```

reference identifying phrase:
```text
When irreligion is prominent in the family, O Kṛṣṇa, the women of the family become polluted, and from the degradation of womanhood, O descendant of Vṛṣṇi, comes unwanted progeny.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.41] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/41/

current translation:
```text
O Krishna, by the prevalence of impiety, the women of the family become corrupt; and, when women are corrupted, O Varshenya (descendant of Vrishni), intermingling of castes arises.
```

reference identifying phrase:
```text
An increase of unwanted population certainly causes hellish life both for the family and for those who destroy the family tradition. The ancestors of such corrupt families fall dow
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.42] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/42/

current translation:
```text
Confusion of castes leads to hell for the slayers of the family, for their forebears fall, deprived of the offerings of rice-balls and libations of water.
```

reference identifying phrase:
```text
By the evil deeds of those who destroy the family tradition and thus give rise to unwanted children, all kinds of community projects and family welfare activities are devastated.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.43] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/43/

current translation:
```text
By these evil deeds of the destroyers of the family, which cause confusion of castes, the eternal religious rites of the caste and the family are destroyed.
```

reference identifying phrase:
```text
O Kṛṣṇa, maintainer of the people, I have heard by disciplic succession that those whose family traditions are destroyed dwell always in hell.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.44] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/44/

current translation:
```text
We have heard, O Janardana, that those men in whose families the religious practices have been destroyed are inevitably destined to dwell in hell for an unknown period.
```

reference identifying phrase:
```text
Alas, how strange it is that we are preparing to commit greatly sinful acts. Driven by the desire to enjoy royal happiness, we are intent on killing our own kinsmen.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.45] severity: MEDIUM

source: https://vedabase.io/en/library/bg/1/45/

current translation:
```text
Alas! We are involved in a great sin, for we are prepared to kill our kinsmen, out of greed for the pleasures of a kingdom.
```

reference identifying phrase:
```text
Better for me if the sons of Dhṛtarāṣṭra, weapons in hand, were to kill me unarmed and unresisting on the battlefield.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 1.46] severity: HIGH

source: https://vedabase.io/en/library/bg/1/46/

current translation:
```text
If the sons of Dhritarashtra, with weapons in hand, should slay me in battle, unresisting and unarmed, that would be better for me.
```

reference identifying phrase:
```text
Sañjaya said: Arjuna, having thus spoken on the battlefield, cast aside his bow and arrows and sat down on the chariot, his mind overwhelmed with grief.
```

notes: possible off-by-one: current=0.00, prev=0.20, next=0.00

### [BG 2.1] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/1/

current translation:
```text
Sanjaya said: To him, who was thus overcome with pity, despondent, with eyes full of tears and agitated, Madhusudana (the destroyer of Madhu) or Krishna spoke these words.
```

reference identifying phrase:
```text
Sañjaya said: Seeing Arjuna full of compassion, his mind depressed, his eyes full of tears, Madhusūdana, Kṛṣṇa, spoke the following words.
```

notes: low lexical overlap with vedabase translation: score=0.09

### [BG 2.2] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/2/

current translation:
```text
The Blessed Lord said, "From whence has this perilous strait come upon you, this dejection which is unworthy of you, disgraceful, and which will close the gates of heaven upon you, O Arjuna?
```

reference identifying phrase:
```text
The Supreme Personality of Godhead said: My dear Arjuna, how have these impurities come upon you? They are not at all befitting a man who knows the value of life. They lead not to 
```

notes: low lexical overlap with vedabase translation: score=0.03

### [BG 2.3] severity: LOW

source: https://vedabase.io/en/library/bg/2/3/

current translation:
```text
Do not yield to impotence, O Arjuna, son of Pritha. It does not befit you. Cast off this mean weakness of the heart! Stand up, O conqueror of foes!
```

reference identifying phrase:
```text
O son of Pṛthā, do not yield to this degrading impotence. It does not become you. Give up such petty weakness of heart and arise, O chastiser of the enemy.
```

notes: low lexical overlap with vedabase translation: score=0.11

### [BG 2.4] severity: LOW

source: https://vedabase.io/en/library/bg/2/4/

current translation:
```text
Arjuna said, "O Madhusudana, how can I fight in battle with arrows against Bhishma and Drona, who are worthy of being worshipped, O destroyer of enemies?
```

reference identifying phrase:
```text
Arjuna said: O killer of enemies, O killer of Madhu, how can I counterattack with arrows in battle men like Bhīṣma and Droṇa, who are worthy of my worship?
```

notes: low lexical overlap with vedabase translation: score=0.16

### [BG 2.5] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/5/

current translation:
```text
Better it is, indeed, in this world to accept alms than to slay the most noble teachers. But if I were to kill them, even in this world, all my enjoyments of wealth and fulfilled desires would be stained with their blood.
```

reference identifying phrase:
```text
It would be better to live in this world by begging than to live at the cost of the lives of great souls who are my teachers. Even though desiring worldly gain, they are superiors.
```

notes: low lexical overlap with vedabase translation: score=0.02

### [BG 2.6] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/6/

current translation:
```text
I can hardly tell which would be better, that we should conquer them or that they should conquer us. Even the sons of Dhritarashtra, whom we do not wish to slay, stand facing us.
```

reference identifying phrase:
```text
Nor do we know which is better – conquering them or being conquered by them. If we killed the sons of Dhṛtarāṣṭra, we should not care to live. Yet they are now standing before us o
```

notes: low lexical overlap with vedabase translation: score=0.03

### [BG 2.7] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/7/

current translation:
```text
My heart is overpowered by the taint of pity; my mind is confused as to my duty. I ask Thee: Tell me decisively what is good for me. I am Thy disciple; instruct me, who has taken refuge in Thee.
```

reference identifying phrase:
```text
Now I am confused about my duty and have lost all composure because of miserly weakness. In this condition I am asking You to tell me for certain what is best for me. Now I am Your
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.8] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/8/

current translation:
```text
I do not see that this sorrow that burns up my senses would be removed, even if I were to attain prosperous and unrivaled dominion on earth or lordship over the gods.
```

reference identifying phrase:
```text
I can find no means to drive away this grief which is drying up my senses. I will not be able to dispel it even if I win a prosperous, unrivaled kingdom on earth with sovereignty l
```

notes: low lexical overlap with vedabase translation: score=0.06

### [BG 2.9] severity: LOW

source: https://vedabase.io/en/library/bg/2/9/

current translation:
```text
Sanjaya said: Having spoken thus to Hrishikesha, the Lord of the senses, Arjuna, the conqueror of sleep and destroyer of foes, said, "I will not fight," and became silent.
```

reference identifying phrase:
```text
Sañjaya said: Having spoken thus, Arjuna, chastiser of enemies, told Kṛṣṇa, “Govinda, I shall not fight,” and fell silent.
```

notes: low lexical overlap with vedabase translation: score=0.14

### [BG 2.10] severity: LOW

source: https://vedabase.io/en/library/bg/2/10/

current translation:
```text
To him who was despondent in the midst of the two armies, Krishna, smiling, O Bharata, spoke these words.
```

reference identifying phrase:
```text
O descendant of Bharata, at that time Kṛṣṇa, smiling, in the midst of both the armies, spoke the following words to the grief-stricken Arjuna.
```

notes: low lexical overlap with vedabase translation: score=0.10

### [BG 2.11] severity: LOW

source: https://vedabase.io/en/library/bg/2/11/

current translation:
```text
The Blessed Lord said, "You have grieved for those who should not be grieved for; yet, you speak words of wisdom. The wise grieve neither for the living nor for the dead.
```

reference identifying phrase:
```text
The Supreme Personality of Godhead said: While speaking learned words, you are mourning for what is not worthy of grief. Those who are wise lament neither for the living nor for th
```

notes: low lexical overlap with vedabase translation: score=0.20

### [BG 2.12] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/12/

current translation:
```text
Nor, at any time, was I not, nor thou, nor these rulers of men; nor, verily, shall we ever cease to be hereafter.
```

reference identifying phrase:
```text
Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 2.13] severity: LOW

source: https://vedabase.io/en/library/bg/2/13/

current translation:
```text
Just as the embodied soul passes through childhood, youth, and old age in this body, so too does it pass into another body; the steadfast one does not grieve over this.
```

reference identifying phrase:
```text
As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by 
```

notes: low lexical overlap with vedabase translation: score=0.13

### [BG 2.14] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/14/

current translation:
```text
The contact of the senses with the objects, O son of Kunti, which causes heat and cold, pleasure and pain, has a beginning and an end; they are impermanent; endure them bravely, O Arjuna.
```

reference identifying phrase:
```text
O son of Kuntī, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons
```

notes: low lexical overlap with vedabase translation: score=0.03

### [BG 2.15] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/15/

current translation:
```text
That firm man, whom surely these afflictions do not, O chief among men, to whom pleasure and pain are the same, is fit for attaining immortality.
```

reference identifying phrase:
```text
O best among men [Arjuna], the person who is not disturbed by happiness and distress and is steady in both is certainly eligible for liberation.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.16] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/16/

current translation:
```text
The unreal has no being; there is no non-being of the real; the truth about both has been seen by the knowers of the truth (or the seers of the essence).
```

reference identifying phrase:
```text
Those who are seers of the truth have concluded that of the nonexistent [the material body] there is no endurance and of the eternal [the soul] there is no change. This they have c
```

notes: low lexical overlap with vedabase translation: score=0.09

### [BG 2.17] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/17/

current translation:
```text
Know that to be indestructible, by which all this is pervaded. No one can cause the destruction of that, the Imperishable.
```

reference identifying phrase:
```text
That which pervades the entire body you should know to be indestructible. No one is able to destroy that imperishable soul.
```

notes: low lexical overlap with vedabase translation: score=0.05

### [BG 2.18] severity: LOW

source: https://vedabase.io/en/library/bg/2/18/

current translation:
```text
These bodies of the embodied Self, which are eternal, indestructible, and immeasurable, are said to have an end. Therefore, fight, O Arjuna.
```

reference identifying phrase:
```text
The material body of the indestructible, immeasurable and eternal living entity is sure to come to an end; therefore, fight, O descendant of Bharata.
```

notes: low lexical overlap with vedabase translation: score=0.14

### [BG 2.19] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/19/

current translation:
```text
He who takes the Self to be the slayer and he who thinks it is slain, neither of them knows. It does not slay, nor is it slain.
```

reference identifying phrase:
```text
Neither he who thinks the living entity the slayer nor he who thinks it slain is in knowledge, for the self slays not nor is slain.
```

notes: low lexical overlap with vedabase translation: score=0.08

### [BG 2.20] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/20/

current translation:
```text
It is not born, nor does it ever die; after having been, it again does not cease to be; unborn, eternal, changeless, and ancient, it is not killed when the body is killed.
```

reference identifying phrase:
```text
For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing 
```

notes: low lexical overlap with vedabase translation: score=0.06

### [BG 2.21] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/21/

current translation:
```text
Whoever knows it to be indestructible, eternal, unborn, and inexhaustible, how can that person slay, O Arjuna, or cause to be slain?
```

reference identifying phrase:
```text
O Pārtha, how can a person who knows that the soul is indestructible, eternal, unborn and immutable kill anyone or cause anyone to kill?
```

notes: low lexical overlap with vedabase translation: score=0.10

### [BG 2.22] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/22/

current translation:
```text
Just as a man casts off worn-out clothes and puts on new ones, so too the embodied Self casts off worn-out bodies and enters others that are new.
```

reference identifying phrase:
```text
As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 2.23] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/23/

current translation:
```text
Weapons cannot cut it, fire cannot burn it, water cannot wet it, wind cannot dry it.
```

reference identifying phrase:
```text
The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.24] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/24/

current translation:
```text
This Self cannot be cut, burned, wetted, nor dried up; it is eternal, all-pervasive, stable, immovable, and ancient.
```

reference identifying phrase:
```text
This individual soul is unbreakable and insoluble, and can be neither burned nor dried. He is everlasting, present everywhere, unchangeable, immovable and eternally the same.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.25] severity: LOW

source: https://vedabase.io/en/library/bg/2/25/

current translation:
```text
This Self is said to be unmanifested, unthinkable, and unchangeable. Therefore, knowing this to be so, you should not grieve.
```

reference identifying phrase:
```text
It is said that the soul is invisible, inconceivable and immutable. Knowing this, you should not grieve for the body.
```

notes: low lexical overlap with vedabase translation: score=0.11

### [BG 2.26] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/26/

current translation:
```text
But even if thou thinkest of It as constantly being born and constantly dying, even then, O mighty-armed one, thou shouldst not grieve.
```

reference identifying phrase:
```text
If, however, you think that the soul [or the symptoms of life] will always be born and die forever, you still have no reason to lament, O mighty-armed.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.27] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/27/

current translation:
```text
For the born, death is certain, and for the dead, birth is certain; therefore, you should not grieve over the inevitable.
```

reference identifying phrase:
```text
One who has taken his birth is sure to die, and after death one is sure to take birth again. Therefore, in the unavoidable discharge of your duty, you should not lament.
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 2.29] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/29/

current translation:
```text
One sees this (the Self) as a wonder; another speaks of it as a wonder; another hears of it as a wonder; yet, having heard, none understands it at all.
```

reference identifying phrase:
```text
Some look on the soul as amazing, some describe him as amazing, and some hear of him as amazing, while others, even after hearing about him, cannot understand him at all.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.30] severity: LOW

source: https://vedabase.io/en/library/bg/2/30/

current translation:
```text
This indweller in the body of everyone is ever indestructible, O Arjuna; therefore, you should not grieve for any creature.
```

reference identifying phrase:
```text
O descendant of Bharata, he who dwells in the body can never be slain. Therefore you need not grieve for any living being.
```

notes: low lexical overlap with vedabase translation: score=0.15

### [BG 2.31] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/31/

current translation:
```text
Further, having regard to your duty, you should not waver, for there is nothing higher for a Kshatriya than a righteous war.
```

reference identifying phrase:
```text
Considering your specific duty as a kṣatriya, you should know that there is no better engagement for you than fighting on religious principles; and so there is no need for hesitati
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.32] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/32/

current translation:
```text
Happy are the Kshatriyas, O Arjuna! who are called to fight in such a battle that comes of its own accord as an open door to heaven.
```

reference identifying phrase:
```text
O Pārtha, happy are the kṣatriyas to whom such fighting opportunities come unsought, opening for them the doors of the heavenly planets.
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 2.33] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/33/

current translation:
```text
But if you will not fight this righteous war, then having abandoned your own duty and reputation, you will incur sin.
```

reference identifying phrase:
```text
If, however, you do not perform your religious duty of fighting, then you will certainly incur sins for neglecting your duties and thus lose your reputation as a fighter.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.34] severity: LOW

source: https://vedabase.io/en/library/bg/2/34/

current translation:
```text
People will also recount your everlasting dishonor; and for one who has been honored, dishonor is worse than death.
```

reference identifying phrase:
```text
People will always speak of your infamy, and for a respectable person, dishonor is worse than death.
```

notes: low lexical overlap with vedabase translation: score=0.19

### [BG 2.35] severity: LOW

source: https://vedabase.io/en/library/bg/2/35/

current translation:
```text
The great chariot-warriors will think that you have withdrawn from the battle out of fear, and you will be held in low esteem by those who have held you in high regard.
```

reference identifying phrase:
```text
The great generals who have highly esteemed your name and fame will think that you have left the battlefield out of fear only, and thus they will consider you insignificant.
```

notes: low lexical overlap with vedabase translation: score=0.14

### [BG 2.36] severity: LOW

source: https://vedabase.io/en/library/bg/2/36/

current translation:
```text
Your enemies, scoffing at your power, will speak many abusive words—what could be more painful than this?
```

reference identifying phrase:
```text
Your enemies will describe you in many unkind words and scorn your ability. What could be more painful for you?
```

notes: low lexical overlap with vedabase translation: score=0.18

### [BG 2.37] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/37/

current translation:
```text
Slain, you will obtain heaven; victorious, you will enjoy the earth; therefore, stand up, O son of Kunti, resolved to fight.
```

reference identifying phrase:
```text
O son of Kuntī, either you will be killed on the battlefield and attain the heavenly planets, or you will conquer and enjoy the earthly kingdom. Therefore, get up with determinatio
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 2.38] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/38/

current translation:
```text
Having made pleasure and pain, gain and loss, victory and defeat equal, engage in battle for the sake of battle; thus, you shall not incur sin.
```

reference identifying phrase:
```text
Do thou fight for the sake of fighting, without considering happiness or distress, loss or gain, victory or defeat – and by so doing you shall never incur sin.
```

notes: low lexical overlap with vedabase translation: score=0.08

### [BG 2.39] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/39/

current translation:
```text
This, which has been taught to you, is wisdom concerning Sankhya. Now listen to wisdom concerning Yoga, endowed with which, O Arjuna, you shall cast off the bonds of action.
```

reference identifying phrase:
```text
Thus far I have described this knowledge to you through analytical study. Now listen as I explain it in terms of working without fruitive results. O son of Pṛthā, when you act in s
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.40] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/40/

current translation:
```text
In this, there is no loss of effort, nor is there any harm produced, nor any transgression. Even a little of this knowledge protects one from great fear.
```

reference identifying phrase:
```text
In this endeavor there is no loss or diminution, and a little advancement on this path can protect one from the most dangerous type of fear.
```

notes: low lexical overlap with vedabase translation: score=0.08

### [BG 2.41] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/41/

current translation:
```text
Here, O joy of the Kurus, there is only one single-pointed determination; many-branched and endless are the thoughts of the indecisive.
```

reference identifying phrase:
```text
Those who are on this path are resolute in purpose, and their aim is one. O beloved child of the Kurus, the intelligence of those who are irresolute is many-branched.
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 2.42] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/42-43/

current translation:
```text
The unwise, taking pleasure in the eulogizing words of the Vedas, utter flowery speech, saying, "There is nothing else," O Arjuna.
```

reference identifying phrase:
```text
Men of small knowledge are very much attached to the flowery words of the Vedas, which recommend various fruitive activities for elevation to heavenly planets, resultant good birth
```

notes: low lexical overlap with vedabase translation: score=0.09; vedabase combines verses 42-43

### [BG 2.43] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/42-43/

current translation:
```text
Full of desires, with heaven as their goal, (they speak words that are directed to ends) leading to new births as the result of their works, and prescribe various methods abounding in specific actions, for the attainment of pleasure and power.
```

reference identifying phrase:
```text
Men of small knowledge are very much attached to the flowery words of the Vedas, which recommend various fruitive activities for elevation to heavenly planets, resultant good birth
```

notes: low lexical overlap with vedabase translation: score=0.00; vedabase combines verses 42-43

### [BG 2.44] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/44/

current translation:
```text
For those who are attached to pleasure and power, whose minds are drawn away by such teachings, their determinate reason is not formed which is steadily bent on meditation and Samadhi (superconscious state).
```

reference identifying phrase:
```text
In the minds of those who are too attached to sense enjoyment and material opulence, and who are bewildered by such things, the resolute determination for devotional service to the
```

notes: low lexical overlap with vedabase translation: score=0.03

### [BG 2.45] severity: LOW

source: https://vedabase.io/en/library/bg/2/45/

current translation:
```text
The Vedas deal with the three attributes; be thou above these three attributes. O Arjuna, free yourself from the pairs of opposites and ever remain in the quality of Sattva, freed from acquisition and preservation, and be established in the Self.
```

reference identifying phrase:
```text
The Vedas deal mainly with the subject of the three modes of material nature. O Arjuna, become transcendental to these three modes. Be free from all dualities and from all anxietie
```

notes: low lexical overlap with vedabase translation: score=0.13

### [BG 2.46] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/46/

current translation:
```text
To the Brahmana who has known the Self, all the Vedas are of as much use as a reservoir of water would be in a place where there is a flood.
```

reference identifying phrase:
```text
All purposes served by a small well can at once be served by a great reservoir of water. Similarly, all the purposes of the Vedas can be served to one who knows the purpose behind 
```

notes: low lexical overlap with vedabase translation: score=0.03

### [BG 2.47] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/47/

current translation:
```text
Your right is only to work, but not to its results; do not let the results of action be your motive, nor let your attachment be to inaction.
```

reference identifying phrase:
```text
You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never b
```

notes: low lexical overlap with vedabase translation: score=0.03

### [BG 2.48] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/48/

current translation:
```text
Perform action, O Arjuna, being steadfast in Yoga, abandoning attachment and balanced in success and failure; evenness of mind is called Yoga.
```

reference identifying phrase:
```text
Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga.
```

notes: low lexical overlap with vedabase translation: score=0.06

### [BG 2.49] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/49/

current translation:
```text
Far lower than the Yoga of wisdom is action, O Arjuna. Seek thou refuge in wisdom; wretched are those whose motive is the fruit.
```

reference identifying phrase:
```text
O Dhanañjaya, keep all abominable activities far distant by devotional service, and in that consciousness surrender unto the Lord. Those who want to enjoy the fruits of their work 
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.50] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/50/

current translation:
```text
Endowed with wisdom and evenness of mind, one casts off in this life both good and evil deeds; therefore, devote yourself to Yoga; Yoga is skill in action.
```

reference identifying phrase:
```text
A man engaged in devotional service rids himself of both good and bad reactions even in this life. Therefore strive for yoga, which is the art of all work.
```

notes: low lexical overlap with vedabase translation: score=0.08

### [BG 2.51] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/51/

current translation:
```text
The wise, possessing knowledge, having abandoned the fruits of their actions, and being freed from the bonds of birth, go to the place which is beyond all evil.
```

reference identifying phrase:
```text
By thus engaging in devotional service to the Lord, great sages or devotees free themselves from the results of work in the material world. In this way they become free from the cy
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.52] severity: LOW

source: https://vedabase.io/en/library/bg/2/52/

current translation:
```text
When your intellect passes beyond the mire of delusion, then you will attain indifference to what has been heard and what has yet to be heard.
```

reference identifying phrase:
```text
When your intelligence has passed out of the dense forest of delusion, you shall become indifferent to all that has been heard and all that is to be heard.
```

notes: low lexical overlap with vedabase translation: score=0.12

### [BG 2.53] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/53/

current translation:
```text
When your intellect, which is perplexed by the Vedic texts you have read, stands immovable and steady in the Self, then you will attain Self-realization.
```

reference identifying phrase:
```text
When your mind is no longer disturbed by the flowery language of the Vedas, and when it remains fixed in the trance of self-realization, then you will have attained the divine cons
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 2.54] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/54/

current translation:
```text
Arjuna said, "O Krishna, what is the description of one who has steady wisdom and is merged in the superconscious state? How does one of steady wisdom speak, how do they sit, and how do they walk?
```

reference identifying phrase:
```text
Arjuna said: O Kṛṣṇa, what are the symptoms of one whose consciousness is thus merged in transcendence? How does he speak, and what is his language? How does he sit, and how does h
```

notes: low lexical overlap with vedabase translation: score=0.06

### [BG 2.55] severity: LOW

source: https://vedabase.io/en/library/bg/2/55/

current translation:
```text
The Blessed Lord said, "When a man completely casts off, O Arjuna, all the desires of the mind and is satisfied in the Self by the Self, then he is said to be one of steady wisdom.
```

reference identifying phrase:
```text
The Supreme Personality of Godhead said: O Pārtha, when a man gives up all varieties of desire for sense gratification, which arise from mental concoction, and when his mind, thus 
```

notes: low lexical overlap with vedabase translation: score=0.15

### [BG 2.57] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/57/

current translation:
```text
He who is everywhere without attachment, upon encountering anything good or bad, neither rejoices nor hastens; his wisdom is firm.
```

reference identifying phrase:
```text
In the material world, one who is unaffected by whatever good or evil he may obtain, neither praising it nor despising it, is firmly fixed in perfect knowledge.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.58] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/58/

current translation:
```text
When, like the tortoise which withdraws all its limbs on all sides, he withdraws his senses from the sense-objects, then his wisdom becomes steady.
```

reference identifying phrase:
```text
One who is able to withdraw his senses from sense objects, as the tortoise draws its limbs within the shell, is firmly fixed in perfect consciousness.
```

notes: low lexical overlap with vedabase translation: score=0.04

### [BG 2.59] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/59/

current translation:
```text
The objects of the senses turn away from the abstinent man, leaving the longing behind; but his longing also turns away upon seeing the Supreme.
```

reference identifying phrase:
```text
Though the embodied soul may be restricted from sense enjoyment, the taste for sense objects remains. But, ceasing such engagements by experiencing a higher taste, he is fixed in c
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.60] severity: LOW

source: https://vedabase.io/en/library/bg/2/60/

current translation:
```text
The turbulent senses, O Arjuna, can violently carry away the mind of a wise person, even though they are striving to control them.
```

reference identifying phrase:
```text
The senses are so strong and impetuous, O Arjuna, that they forcibly carry away the mind even of a man of discrimination who is endeavoring to control them.
```

notes: low lexical overlap with vedabase translation: score=0.13

### [BG 2.61] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/61/

current translation:
```text
Having restrained them all, he should sit steadfast, intent on Me; his wisdom is steady whose senses are under control.
```

reference identifying phrase:
```text
One who restrains his senses, keeping them under full control, and fixes his consciousness upon Me, is known as a man of steady intelligence.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.62] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/62/

current translation:
```text
When one thinks of objects, attachment to them arises; from attachment, desire is born; from desire, anger arises.
```

reference identifying phrase:
```text
While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.63] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/63/

current translation:
```text
Anger leads to delusion, which causes loss of memory; this, in turn, leads to the destruction of discrimination, resulting in destruction.
```

reference identifying phrase:
```text
From anger, complete delusion arises, and from delusion bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost one falls down again 
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.64] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/64/

current translation:
```text
But the self-controlled man, moving among objects with the senses restrained and free from attraction and repulsion, attains peace.
```

reference identifying phrase:
```text
But a person free from all attachment and aversion and able to control his senses through regulative principles of freedom can obtain the complete mercy of the Lord.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.65] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/65/

current translation:
```text
In that peace, all pains are destroyed; for the intellect of the tranquil-minded soon becomes steady.
```

reference identifying phrase:
```text
For one thus satisfied [in Kṛṣṇa consciousness], the threefold miseries of material existence exist no longer; in such satisfied consciousness, one’s intelligence is soon well esta
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.66] severity: LOW

source: https://vedabase.io/en/library/bg/2/66/

current translation:
```text
There is no knowledge of the Self for the unsteady, and no meditation is possible for the unsteady, and no peace for the unmeditative, and how can there be happiness for one who has no peace?
```

reference identifying phrase:
```text
One who is not connected with the Supreme [in Kṛṣṇa consciousness] can have neither transcendental intelligence nor a steady mind, without which there is no possibility of peace. A
```

notes: low lexical overlap with vedabase translation: score=0.12

### [BG 2.67] severity: LOW

source: https://vedabase.io/en/library/bg/2/67/

current translation:
```text
For the mind, which follows in the wake of the wandering senses, carries away his discrimination, as the wind carries away a boat on the waters.
```

reference identifying phrase:
```text
As a strong wind sweeps away a boat on the water, even one of the roaming senses on which the mind focuses can carry away a man’s intelligence.
```

notes: low lexical overlap with vedabase translation: score=0.12

### [BG 2.68] severity: LOW

source: https://vedabase.io/en/library/bg/2/68/

current translation:
```text
Therefore, O mighty-armed Arjuna, his knowledge is steady whose senses are completely restrained from sense objects.
```

reference identifying phrase:
```text
Therefore, O mighty-armed, one whose senses are restrained from their objects is certainly of steady intelligence.
```

notes: low lexical overlap with vedabase translation: score=0.14

### [BG 2.69] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/69/

current translation:
```text
That which is night to all beings, in that the self-controlled man is awake; when all beings are awake, that is night for the sage who sees.
```

reference identifying phrase:
```text
What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage.
```

notes: low lexical overlap with vedabase translation: score=0.09

### [BG 2.70] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/70/

current translation:
```text
He attains peace into whom all desires enter, just as waters enter the ocean which, filled from all sides, remains unmoved; but not the man who is full of desires.
```

reference identifying phrase:
```text
A person who is not disturbed by the incessant flow of desires – that enter like rivers into the ocean, which is ever being filled but is always still – can alone achieve peace, an
```

notes: low lexical overlap with vedabase translation: score=0.09

### [BG 2.71] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/71/

current translation:
```text
That person attains peace who, abandoning all desires, moves about without longing, without the sense of ownership, and without egoism.
```

reference identifying phrase:
```text
A person who has given up all desires for sense gratification, who lives free from desires, who has given up all sense of proprietorship and is devoid of false ego – he alone can a
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 2.72] severity: MEDIUM

source: https://vedabase.io/en/library/bg/2/72/

current translation:
```text
O son of Pritha, this is the eternal state, the Brahmic seat. Attaining this, one is not deluded. Being established in it, one attains oneness with Brahman even at the end of life.
```

reference identifying phrase:
```text
That is the way of the spiritual and godly life, after attaining which a man is not bewildered. If one is thus situated even at the hour of death, one can enter into the kingdom of
```

notes: low lexical overlap with vedabase translation: score=0.03

### [BG 3.1] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/1/

current translation:
```text
Arjuna said: If Thou thinkest that knowledge is superior to action, O Krishna, why then, O Kesava, doest Thou ask me to engage in this terrible action?
```

reference identifying phrase:
```text
Arjuna said: O Janārdana, O Keśava, why do You want to engage me in this ghastly warfare, if You think that intelligence is better than fruitive work?
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 3.2] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/2/

current translation:
```text
With this seemingly perplexing speech, you seem to be confusing my understanding; therefore, tell me one certain way by which I may attain bliss.
```

reference identifying phrase:
```text
My intelligence is bewildered by Your equivocal instructions. Therefore, please tell me decisively which will be most beneficial for me.
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 3.3] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/3/

current translation:
```text
The Blessed Lord said, "In this world, there is a twofold path, as I said before, O sinless one: the path of knowledge of the Sankhyas and the path of action of the Yogins.
```

reference identifying phrase:
```text
The Supreme Personality of Godhead said: O sinless Arjuna, I have already explained that there are two classes of men who try to realize the self. Some are inclined to understand i
```

notes: low lexical overlap with vedabase translation: score=0.00

### [BG 3.4] severity: MEDIUM

source: https://vedabase.io/en/library/bg/3/4/

current translation:
```text
Man does not reach actionlessness by not performing actions; nor does he attain perfection by mere renunciation.
```

reference identifying phrase:
```text
Not by merely abstaining from work can one achieve freedom from reaction, nor by renunciation alone can one attain perfection.
```

notes: low lexical overlap with vedabase translation: score=0.00


564 additional English findings are omitted from the expanded section. Full details are available in `06-english-results.json`.


## Stop Point

No English text was changed. Step 7 can proceed after review.
