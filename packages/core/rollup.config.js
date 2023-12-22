import { defineConfig } from 'rollup';
import { dts } from 'rollup-plugin-dts';

export default defineConfig([
  {
    input: './src/index.js',
    output: [{ file: 'types/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  {
    input: './src/core.js',
    output: [{ file: 'types/core.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]);
