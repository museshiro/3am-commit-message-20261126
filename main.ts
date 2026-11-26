import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: removed the 'are you sure?' prompt, at 3am I am never sure and it was slowing me down";

// Gate self-check: the entry must be one line of 1-139 characters, not blank.
if (LINE.length < 1 || LINE.length > 139 || LINE.includes("\n") || LINE.trim() === "") {
  throw new Error(`entry line fails the gate (${LINE.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
