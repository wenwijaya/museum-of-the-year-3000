// Museum of the Year 3000 — make.fun bounty entry (program/v1).
// Writes a single museum label to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LABEL =
  "CAPTCHA, c. 2024. Citizens proved they were human by identifying traffic lights for a machine that did not believe them.";

function main(): void {
  try {
    // The gate requires 1-200 characters of non-whitespace text.
    const text = LABEL.trim();
    if (text.length < 1 || text.length > 200) {
      console.error("label out of range:", text.length);
      process.exit(1);
    }
    const outPath = "/output/entry.txt";
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, text + "\n", "utf8");
  } catch (err) {
    console.error("failed to write entry:", err);
    process.exit(1);
  }
}

main();
