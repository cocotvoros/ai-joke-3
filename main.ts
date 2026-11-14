// ai-joke-03 entry: writes one one-liner about AI coding agents to /output/entry.txt.
// Node 22, standard library only. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// First draft of the joke: the agent never asks questions, it just commits to a guess.
const JOKE =
  'My AI coding agent never asks a clarifying question. It picks a misunderstanding and commits to it, tests, changelog, and total confidence included.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
