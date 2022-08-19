import { defineMDSveXConfig as defineConfig } from "mdsvex";
import { rehypeSvimg } from "rehype-svimg";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [
    [
      rehypeSvimg,
      {
        inputDir: "static",
        outputDir: "static/g",
        webp: true,
        avif: true,
        generateImages: true,
      },
    ],
  ],
});

export default config;
