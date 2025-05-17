
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["4273aff2-6185-46e1-87de-503e43773855.lovableproject.com"],
  },
  plugins: [
    react(),
    mode === 'development' && {
      name: 'lovable-tagger',
      apply: 'serve',
      enforce: 'post',
      ...(() => {
        try {
          return require('lovable-tagger').componentTagger();
        } catch (e) {
          // Fallback for production where the package might not be available
          console.log('Lovable tagger not available in this environment');
          return {};
        }
      })()
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
}));
