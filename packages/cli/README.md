# `pbts-cli`

It is the cli for pbts. You can convert pb to ts file by command line

## Usage

### Tranditional Way

step 1 Install @pbts/cli

```shell
npm i @pbts/cli -g
```

step 2 Convert your protobuffer to Typescript Definition File

```shell
pbts convert -i ckageinput/app/order.proto -o output/order.ts
```

### No Installation

Please use npx for short.

```shell
npx pbts convert -i packages/cli/__tests__/__fixtures__/input/app/single.proto -o packages/cli/__tests__/__fixtures__/output/single.ts
```
