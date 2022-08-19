import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import { imagePreprocessor } from "svimg";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
    imagePreprocessor({
      inputDir: "static",
      outputDir: "static/g",
      webp: true,
      avif: true,
    }),
  ],
};

export default config;
