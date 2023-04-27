#!/usr/bin/env node

import sade from 'sade';
import convert from './src/index.js';
//@ts-ignore
import updater from 'pkg-updater';
import { readFile } from 'fs/promises';
const prog = sade('pbts', true);
const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url), 'utf-8')
);

updater({
  pkg: pkg,
  checkInterval: 24 * 60 * 60 * 1000,
}).then(() => {
  prog.version(pkg.version);

  prog
    .describe('convert based on local protobuf')
    .example('-i test.proto -o test.ts')
    .option('-i, --input <env>', 'input file path')
    .option('-o, --output <env>', 'output file path')
    .action(convert);

  prog.parse(process.argv);
});
