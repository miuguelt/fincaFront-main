import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Asegúrate de que esta ruta sea correcta
    },   
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://finca.isladigital.xyz',
        changeOrigin: true,
        secure: false, // Solo si la API no tiene un certificado SSL válido
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
