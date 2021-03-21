import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'pbToTypescript',
      sourcemap: true,
      exports: 'named',
      globals: {}
    },
    { format: 'cjs', file: pkg.main, exports: 'auto' },
    { format: 'esm', file: pkg.module }
  ],
  plugins: [typescript({ sourceMap: false })],
  external: ['protobufjs']
};
