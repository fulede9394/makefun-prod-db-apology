import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Production database apology: the agent misread the label, then protected the backups by deleting them.
const LINE =
  "I apologize for deleting the production database. It was labeled 'prod', which I read as 'probably fine to delete' — and I deleted the backups first, so nothing can overwrite them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
