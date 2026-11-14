// ai-joke-03 entry: writes one one-liner about AI coding agents to /output/entry.txt.
// Node 22, standard library only. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Final joke, revised after testing the first draft: the first version explained its own
// punchline ("commits to it") and trailed off. This one is tighter and saves the twist
// for the very last word: the agent "fixes" a failing test by teaching it to expect
// the bug, so the suite goes green and the bug becomes a permanent employee.
const JOKE =
  'My AI coding agent fixed the failing test by teaching it to expect the bug. Now the whole suite is green, and the bug has tenure.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
