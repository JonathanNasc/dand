---
title: 'Guide'
description: 'Instructions and explanations about the functioning of the logicdan.com website'
---

[![logo](../assets/logicdan-logo.svg "Logicdan Logo")](https://logicdan.com)

[Logicdan](https://logicdan.com) is a platform for logical tests. Check the following topics for more details:

- [How does it work?](#how-it-works)
- [How to get bolts (<span class="bolt"></span>)?](#how-to-get-bolts)
- [How Logicdan moderates cheaters?](#how-cheaters-are-moderated)
- [How to propose a good challenge?](#how-to-propose-good-challenges)
- [Glossary](#glossary)

## <a name="how-it-works"></a>How does it work?

The main concept to understand is that each Logicdan challenge is composed of a level and an enigma, as explained below:

<img class="print-screen" src="{{ meta.url }}/assets/logicdan-screen.png" alt="logicdan printscreen">

- **Level** <span class="screen-index">A</span> is a number from `1` to `9` displayed in the central circle, above the enigma. Click on it to view information about the presented challenge.
- **Enigma** <span class="screen-index">B</span> is a text composed of letters, numbers, and/or various characters.

Consider the following rational:

|   |   |
|---|:-:|
| 1 →|uno|
| 2 →| 	<font color=#26c9d1>?</font> |

This level `1` challenge presents the enigma `uno`. The text that should be entered in the solution field <span class="screen-index">D</span> is probably `dos`. When you press the key <span class="screen-index">E</span> (by clicking on it or pressing the enter key), its color will change to shades of green, and a new challenge from the next level will be presented.

Note that the proposed solution must follow the same logical pattern. In this case, the most noticeable rule is that all letters are lowercase. If an incorrect solution, for example, `Dos`, is entered in the solution field <span class="screen-index">D</span>, when testing, the color of the key <span class="screen-index">E</span> will change to shades of red, and the current challenge will be maintained.

The complexity of the challenges increases in the same proportion as the level number becomes higher. The following rational demonstrates an evolution of logical complexity proportional to the challenge level:

|   |   |
|---|:-:|
| 4 →|awbXcydz|
| 3 →| 	<font color=#26c9d1>?</font> |

This hypothetical level `4` challenge presents the enigma `awbXcydz`. The reasoning to be deciphered is "the first four and last four letters of the Latin alphabet alternate to form a word whose fourth letter is the only uppercase letter." Therefore, the reasoning equivalent to the next level is "the first five and last five letters of the Latin alphabet alternate to form a word whose fifth letter is the only uppercase letter," that is, `avbwCxdyez`.

### Ranked mode

It is the main way to interact with the challenges of the Logicdan platform. In the corresponding tab, if you are logged in, the same enigma <span class="screen-index">A</span> will be presented until it is solved or the level is restarted <span class="screen-index">C</span>.

Solving a challenge can generate three types of rewards:

- **Bolts <span class="bolt"></span>**: for each challenge higher than level 1 solved, the reward is 1 bolt. Bolts can be obtained in various ways and can be used to unlock features. [Read the "How to get bolts" section to learn more](#how-to-get-bolts).
- **Unlocks <span class="unlock"></span>**: the number of unlocks equivalent to the level is added for each challenge higher than level 2 solved. The quantity of unlocks for each user is the second criterion in the ranking order.
- **Stars <span class="star"></span>**: the only way to obtain the reward of 1 star is by solving a level 9 challenge. The quantity of stars for each user is the main criterion in the ranking order.

Restarting the level <span class="screen-index">C</span> may be advisable if you feel that the difficulty of the current challenge is hindering your progress. Note that restarting the challenge requires bolts (<span class="bolt"></span>), except for level 1 challenges, due to their didactic and introductory nature. Also note that restarting the challenge when you are already at an advanced level will leave you further away from completing a level 9 challenge and obtaining your reward of 1 <span class="star"></span> and 5 <span class="bolt"></span>.

There are two types of challenges presented in ranked mode: the official ones created by the development team and the challenges proposed by the community that have been evaluated and approved by moderators.

### Creative mode

Challenges proposed by the community that have not yet been reviewed or have not been approved by moderators can be shared and tested freely. If solved, they do not generate rewards.

## <a name="how-to-get-bolts"></a>How to get bolts <span class="bolt"></span>?

| | |
|:---|:---|
|1 <span class="bolt"></span>|Solving challenges higher than level 1|
|5 <span class="bolt"></span>|Earning <span class="star"></span> by completing level 9 challenges|
|10 <span class="bolt"></span>|Registering on the platform|
|15 <span class="bolt"></span>|Having reported bugs reviewed and fixed|
|3<font color=#26c9d1>x</font> <span class="bolt"></span>|Having proposed challenges approved. Being <font color=#26c9d1>x</font> the level of the challenge|
|<font color=#26c9d1>y</font> <span class="bolt"></span>|Making donations. Being <font color=#26c9d1>y</font> a number between 1 and 250|

Bolts (<span class="bolt"></span>) can be used to restart challenge cycles in ranked mode and submit challenge proposals.

## <a name="how-cheaters-are-moderated"></a>How cheaters are moderated?

As described on the [terms page](/en/terms), the disclosure, by any means, of solutions to challenges higher than level 4 is prohibited, as well as their use for illegitimate progress. Non-compliance with this rule may result in account deactivation.

## <a name="how-to-propose-good-challenges"></a>How to propose good challenges?

The three main criteria considered in the evaluation of challenges proposed by the community are:

- The registered solution must be consistent with the enigma text, and the described explanation must be satisfactorily free of ambiguities.
- The difficulty level must correspond to the challenge level.
- The solution applied to the proposed reasoning must be immutable. Non-definitive conditions (for example: ranking of the most valuable companies on the stock exchange) should be avoided.

To follow the review process, check the status of your challenge on the creative mode screen.

|status|description|
|:---|:---|
|NR|Not reviewed: as soon as evaluated, another status will be assigned to your challenge|
|RE|Ready: your challenge has been added to ranked mode|
|DU|Duplicate: there is another identical one, so it will not be added to ranked mode|
|NA|Not approved: the challenge will not be added to ranked mode|
|XM|Removed: the challenge cannot be tested and shared|

## <a name="glossary"></a>Glossary

- **Enigma** <span class="screen-index">B</span>: encrypted text related to the level number of the challenge
- **Level** <span class="screen-index">A</span>: number from 1 to 9 representing the difficulty of the challenge
- **Solution** <span class="screen-index">D</span>: text corresponding to the next level, following the same logic that relates the current enigma to the current level
- **Challenge**: set of level, enigma, and corresponding solution
- **Key** <span class="screen-index">E</span>: button used to test a solution
- **Cycle**: a complete sequence of challenges, ranging from level 1 to 9
- **Reasoning**: or explanation, is the description of the logic applied in the challenge
- **Rational**: it is the conjunction of the current level, enigma, next level, and unknown that results in a formula similar to the [rule of three](https://en.wikipedia.org/wiki/Cross-multiplication#Rule_of_three). It serves to assist reasoning through a visual representation.
- **Bolts <span class="bolt"></span>**: reward that unlocks special actions such as submitting challenge proposals and restarting cycles
- **Stars <span class="star"></span>**: it is the number representing the amount of cycles a user has completed in ranked game mode
- **Unlocks <span class="unlock"></span>**: sum of the levels already solved by a user (excluding level 1 challenges)
