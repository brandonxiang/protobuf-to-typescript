import convert from '../src/commands/convert';

test('convert it from proto to ts', async () => {
  expect(
    convert({
      input: 'packages/cli/__tests__/__fixtures__/input/app/single.proto',
      output: 'packages/cli/__tests__/__fixtures__/output/single.ts',
    })
  ).resolves.toBe('Convert Success!');
});

// test('Field type with uint64 should be converted', async () => {
//   const res = await convert({
//     input: 'packages/cli/__tests__/__fixtures__/app/input',
//     output: 'packages/cli/__tests__/__fixtures__/app/output'
//   });
// });
