/**
 * Vite Configuration File (vite.config.ts)
 *
 * This file configures the Vite build tool for the project.
 * It includes settings for plugins, server proxy, path resolution,
 * and other build optimizations.
 *
 * For more information on Vite and its configuration options, visit:
 * https://vitejs.dev/config/
 */

// Import required plugins and modules
import react from '@vitejs/plugin-react';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import { config } from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// Load environment variables from .env file
config();

// Export Vite configuration object
export default defineConfig({
  // Add plugins to Vite
  plugins: [
    // Enable React plugin for handling React components
    react(),

    // Resolve TypeScript path aliases based on tsconfig.json
    tsconfigPaths(),

    // basicSsl({
    //   /** name of certification */
    //   name: 'test',
    //   /** custom trust domains */
    //   domains: ['*.custom.com'],
    //   /** custom certification directory */
    //   certDir: '/Users/.../.devServer/cert',
    // }),
  ],
  server: {
    // Configure development server proxy
    proxy: {
      '/api': {
        // Set target URL for API calls
        target: process.env.VITE_PROXY_URL || 'http://localhost:4000',

        // Enable changing the request's origin
        changeOrigin: true,

        // Rewrite the path, removing '/api' from the beginning
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      // Define custom alias for the 'src' directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Define global variable mapping
      define: {
        global: 'globalThis',
      },

      // Add any esbuild plugins if required (currently empty)
      plugins: [],
    },
  },
});
