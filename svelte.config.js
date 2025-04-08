import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  kit: { adapter: adapter() },
  vitePlugin: {
    inspector: {
      toggleKeyCombo: "meta-shift",
      holdMode: true,
      showToggleButton: "always",
    },
  },
};

export default config;
