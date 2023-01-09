import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  site: "https://hello-astro-nine.vercel.app",
  integrations: [
    react(),
    sitemap(),
    prefetch(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
  ],
  adapter: vercel(),
});
