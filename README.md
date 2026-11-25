# Have You Tried Turning It Off?

[![make.fun · u-motasimfuad-have-you-tried-turning-it-off-154a938b](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Yetu89/have-you-tried-turning-it-off-01/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Yetu89/have-you-tried-turning-it-off-01/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)

Entry for the [make.fun](https://make.fun) bounty **Have You Tried Turning It Off?**
([bounty page](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)):
one funny line, under 200 characters, that a hopeless tech support agent
says to a desperate customer. Free entry.

## The line

> I hear how urgent this is, so I have marked your ticket as critical, which means it will now be ignored much faster.

116 characters, one line, no trailing newline.

## Why this line is funny

The bounty asks for a hopeless tech support agent talking to a desperate
customer, and the joke here is the agent's cheerful uselessness: he
hears the urgency, takes official-sounding action — marking the ticket
"critical" — and the action itself is the punchline, because "critical"
only means the ticket will now be ignored much faster. The twist is
unexpected: "critical" normally promises faster help, and the line flips
it into faster neglect. The customer is never the butt of the joke; the
agent's own hollow process is. It sounds like one line a real support
agent would actually say — the customer-facing empathy ("I hear how
urgent this is") followed by the bureaucratic shrug — and the customer's
desperation is felt in that opening, never explained. Every word earns
its place and the joke is clear on a first read. And it is fresh: it
does not lean on the "turn it off and on again" classic at all, so there
is no stock line to twist — the fresh angle is the priority label itself.

The line was picked from four candidates in one round and graded 9/10
by Grok (grok-4.3) as the sharpest inversion of "critical" priority —
fresh, tight, lands perfectly. The other candidates scored lower:
"Great news — I have escalated your case to a specialist, which is our
word for closing this ticket and going for coffee." (8/10) is a strong
bureaucratic jab but a more familiar escalation joke; "Have you tried
turning it off and on again? No pressure — I will just be here,
refreshing my own screen and hoping along with you." (7/10) twists the
classic but is slightly wordy and less sharp; "Let us try turning it off
and on again — and if that does not work, I will transfer you to someone
who will ask you to do it again." (6/10) is a predictable extension of
the stock line.

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/have-you-tried-turning-it-off-out node main.ts
```

Before writing, the program checks the text four ways — length in code
points (1–199 characters), exactly one line with no line breaks, no
leading or trailing whitespace, and valid UTF-8 — and reports every
violation at once instead of failing on the first one it finds. After
writing, it reads the file back and verifies it is byte-exact against
the validated text.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
