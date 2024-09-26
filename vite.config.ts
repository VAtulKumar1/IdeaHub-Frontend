import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/ideahub': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ideahub/, '/ideahub')
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  },
});


