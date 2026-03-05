import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://camilooviedo.com/",
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
