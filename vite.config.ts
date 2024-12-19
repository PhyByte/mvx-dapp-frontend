import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { config } from "dotenv";

// Load environment variables from .env file
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    esbuildOptions: {
      // Define global variable mapping
      define: {
        global: "globalThis",
      },

      // Add any esbuild plugins if required (currently empty)
      plugins: [],
    },
  },
});
