#!/usr/bin/env node

const sade = require('sade');
const { convert } = require('./lib');

const updater = require('pkg-updater');
const prog = sade('pbts');
const pkg = require('./package.json');

updater({
  pkg: pkg,
  checkInterval: 24 * 60 * 60 * 1000,
}).then(() => {
  prog.version(pkg.version);

  prog
    .command('convert')
    .describe('convert based on local protobuf')
    .example('convert -i test.proto -o test.ts')
    .option('-i, --input <env>', 'input file path', '')
    .option('-o, --output <env>', 'output file path', '')
    .action(convert);

  prog.parse(process.argv);
});
