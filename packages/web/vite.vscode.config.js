import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'app',
  plugins: [
    svelte(),
    viteSingleFile(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          injectHead:
            "<script>document.documentElement.classList.add('dark');</script>",
        },
      },
    }),
  ],
  build: {
    outDir: resolve(__dirname, '../vscode', 'webview'),
  },
});
