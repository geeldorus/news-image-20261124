// News-image entry: copy the shipped entry.png to the output directory.
// Runs on Node 22 with the standard library only. The grader sets
// MAKEFUN_OUTPUT_DIR outside its container; /output is the default.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
