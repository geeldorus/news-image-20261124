// News-image entry: copy the shipped entry.png to the output directory.
// The image sums up 24 November 2026 world news in six labelled panels.
// Runs on Node 22 with the standard library only. The grader sets
// MAKEFUN_OUTPUT_DIR outside its container; /output is the default.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
