import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/app/assets"),
      "@pages": path.resolve(__dirname, "./src/shared/pages"),
      "@layout": path.resolve(__dirname, "./src/shared/layout"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
  plugins: [react()],
});
