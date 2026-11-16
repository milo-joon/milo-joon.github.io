// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://milo-joon.github.io',
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
