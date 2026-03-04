import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buckist.app',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
