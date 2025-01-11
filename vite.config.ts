
import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Adjust the path if necessary
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://backend:8081', // Usa el nombre del servicio de Flask en Docker
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Carpeta de salida para la construcción
  },
});