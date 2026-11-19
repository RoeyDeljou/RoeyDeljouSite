// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Change `site` to your custom domain once you have one.
export default defineConfig({
  site: 'https://roeydeljou.vercel.app',
  integrations: [sitemap()],
  // Cast avoids a known Vite version type mismatch between Astro and @tailwindcss/vite.
  vite: { plugins: [/** @type {any} */ (tailwindcss())] },
});
