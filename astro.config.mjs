import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // The shared stylesheet is about 10 KiB compressed; inline it for first paint.
  build: {
    inlineStylesheets: "always",
  },
  site: "https://www.camilooviedo.com/",
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: process.env.VERCEL === "1" }
  }),
});
