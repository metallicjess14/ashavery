import { defineConfig } from 'vite'

export default defineConfig({
  // Project root directory
  root: './',
  // Base public path when served in production
  base: './',
  build: {
    // Output directory for the build
    outDir: 'dist',
    // Assets directory under outDir
    assetsDir: 'assets',
    // Generate manifest.json in outDir
    manifest: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  }
})
