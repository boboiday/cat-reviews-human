import { mkdirSync, writeFileSync } from "node:fs";

// One-star review written by a house cat about its human (135 chars, limit 1-200).
const LINE =
  "One star. He moved my litter box two inches to the left and acted like nothing happened. I have filed a formal complaint. This is it.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
