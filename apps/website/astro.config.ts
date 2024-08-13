import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://abi-js.github.io",
  base: "abi",
  compressHTML: true,
  integrations: [
    starlight({
      favicon: "/favicon.svg",
      logo: {
        src: "./src/assets/abi.svg",
        alt: "Abi.js",
      },
      title: "Abi.js",
      social: {
        github: "https://github.com/abi-js",
        twitter: "https://x.com/abidotjs",
      },
      editLink: {
        baseUrl: "https://github.com/abi-js/abi/edit/trunk/apps/website/",
      },
      sidebar: [
        {
          label: "🏠 Home",
          link: "/",
        },
        {
          label: "📖 Guides",
          items: [
            {
              label: "Getting Started 🎉",
              link: "/guides/",
            },
          ],
        },
        {
          label: "📚 Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
  ],
});
