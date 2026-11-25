// Have You Tried Turning It Off? — make.fun bounty u-motasimfuad-have-you-tried-turning-it-off-154a938b
// The line: a hopeless tech support agent tells a desperate customer
// their ticket is now "critical" — and the twist is that "critical"
// only means it gets ignored faster. The humour is the agent's
// cheerful uselessness: he hears the urgency, acts on it in the most
// official-sounding way, and the action makes things worse. It sounds
// like a real support reply, stays tight at 116 characters, and lands
// on a first read without explaining the joke. 116 characters against
// a 199-character ceiling.
// The program below only guards the bounty rules and writes the line
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally),
// with no trailing newline at the end of the file.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "I hear how urgent this is, so I have marked your ticket as critical, which means it will now be ignored much faster.";

// The ceiling comes from the bounty rules: one line, 1 to 199 chars,
// written as UTF-8 text. The gate also refuses a file that is only
// whitespace, so the checks below cover all conditions at once.
const MAX_CHARS = 199;

// Spread into code points so an astral character counts as one.
function charCount(value: string): number {
  return [...value].length;
}

function problemsWithLength(): string[] {
  const found: string[] = [];
  const n = charCount(TEXT);
  if (n < 1) {
    found.push("entry must not be empty");
  }
  if (n > MAX_CHARS) {
    found.push(`entry must be 1-199 characters, got ${n}`);
  }
  return found;
}

function problemsWithSingleLine(): string[] {
  const found: string[] = [];
  if (/[\r\n]/.test(TEXT)) {
    found.push("entry must be a single line with no line breaks");
  }
  return found;
}

function problemsWithWhitespace(): string[] {
  const found: string[] = [];
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

function problemsWithEncoding(): string[] {
  const found: string[] = [];
  // A UTF-8 round-trip must reproduce the text exactly; anything else
  // means the entry holds characters the gate cannot read as UTF-8.
  if (Buffer.from(TEXT, "utf8").toString("utf8") !== TEXT) {
    found.push("entry must be valid UTF-8 text");
  }
  return found;
}

// Every rule violation is collected first so one run reports all of them.
function collectProblems(): string[] {
  return [
    ...problemsWithLength(),
    ...problemsWithSingleLine(),
    ...problemsWithWhitespace(),
    ...problemsWithEncoding(),
  ];
}

function main(): void {
  const problems = collectProblems();
  if (problems.length > 0) {
    throw new Error(problems.join("; "));
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // A plain string write adds no trailing newline.
  const outPath = `${outDir}/entry.txt`;
  writeFileSync(outPath, TEXT, "utf8");
  // Read the file back: a partial write or an encoding slip must fail
  // loudly here instead of shipping a corrupted entry.
  if (readFileSync(outPath, "utf8") !== TEXT) {
    throw new Error("entry.txt does not match the validated entry text");
  }
}

main();
