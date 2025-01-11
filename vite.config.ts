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
      '/': {
        target: 'https://finca.isladigital.xyz',  // URL de tu backend en desarrollo
        changeOrigin: true,               // Cambia el origen de la solicitud al backend
        secure: false,                    // Desactiva la verificación SSL (útil para desarrollo)
        rewrite: (path) => path.replace(/^\/api/, ''),  // Elimina el prefijo /api
      },
    },
  },
  build: {
    outDir: 'dist',  // Carpeta de salida para la construcción
  },
});