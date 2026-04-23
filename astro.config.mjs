// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // your configuration options here...
  vite: {
    plugins: [tailwindcss()],

    //исправляет ошибку https://github.com/withastro/astro/issues/15857
    //optimizeDeps: {
    //  exclude: ['astro/runtime/client/dev-toolbar/entrypoint.js'],
    //}
  },

  integrations: [sitemap()],
  //отключить панель инструментов разработчика
  devToolbar: {
    enabled: false
  }

});
