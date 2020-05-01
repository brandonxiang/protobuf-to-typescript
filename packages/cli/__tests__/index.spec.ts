import convert from '../src/convert';

test('Field type with uint64 should be converted', async () => {
  const res = await convert({
    input: 'packages/cli/__tests__/__fixtures__/app/input',
    output: 'packages/cli/__tests__/__fixtures__/app/output'
  });
});
