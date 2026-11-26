// Texts From Your Future Self — entry program.
// Writes one funny text message from the writer's future self to /output/entry.txt.
//
// Revision history (thinking_revised gate):
// - Draft: "Hey, it's you from 2039. That 'quick nap' you're about to take
//   lasts four hours. Also the plant dies Tuesday no matter what you do, so
//   stop apologizing to it."
// - Revised (this message): tightened the opener, cut "Also", and swapped the
//   flat ending for a twist — the plant never forgave you.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It's you from 2039. That 'quick nap' you're about to take lasts four hours. The plant dies Tuesday no matter what you do — stop apologizing to it, it never forgave you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
