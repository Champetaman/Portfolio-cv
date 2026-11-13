import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://www.camilooviedo.com/",
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
