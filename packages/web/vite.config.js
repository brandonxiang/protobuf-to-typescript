import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'app',
  plugins: [
    svelte(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          injectHead:
            `
            <meta name="keywords" content="protobuffer,typescript,convert,transform,generate typescript definition,jsdoc">
            <meta name="description" content="how to convert protobuffer for frontend web developing">
            <meta property="og:url" content="https://pb.brandonxiang.top">
            <meta property="og:type" content="article">
            <meta property="og:title" content="protobuffer to typescript">
            <meta property="og:description" content="how to convert protobuffer for frontend web developing">
            <meta property="og:image" content="/static/favicon.png">
            <link rel='icon' type='image/png' href='/static/favicon.png'>`,
        },
      },
    }),
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['protobufjs', 'clipboard'],
        },
      },
    },
  },
});
