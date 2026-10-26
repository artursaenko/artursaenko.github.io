import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// Built into docs/ so GitHub Pages can serve it from the main branch (Settings → Pages → main, /docs)
export default defineConfig({
  site: "https://artursaenko.github.io",
  outDir: "./docs",
  integrations: [vue()],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
