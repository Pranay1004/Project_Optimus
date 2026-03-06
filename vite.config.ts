import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          icons: ['lucide-react'],
          uploader: ['@uploadcare/react-uploader'],
          vercel: ['@vercel/analytics/react', '@vercel/speed-insights/react'],
        },
      },
    },
  },
  assetsInclude: ['**/*.svg'],
});