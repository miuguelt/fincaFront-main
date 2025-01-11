import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias para importaciones
    },
  },
  server: {
    proxy: {
      '/api': {  // Prefijo para las solicitudes al backend
        target: 'https://finca.isladigital.xyz',  // URL del backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Elimina el prefijo /api
      },
    },
  },
});