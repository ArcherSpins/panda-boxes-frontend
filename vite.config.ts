import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/panda-boxes-frontend/",
  build: {
    outDir: "dist",
  },
});
