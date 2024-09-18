import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  server: {
    host: true,
    https: true,
    proxy: {
      "^/api/.*": {
        target: "https://dogej.org",
        changeOrigin: true,
        secure: false,
        rewrite: (path: string) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      interface: path.resolve(__dirname, "./src/interface"),
      common: path.resolve(__dirname, "./src/common"),
      config: path.resolve(__dirname, "./src/config"),
      app: path.resolve(__dirname, "./src/app"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
