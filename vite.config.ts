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
      '/*': {
        target: 'https://finca.isladigital.xyz',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        changeOrigin: true,
        secure: true
      },
    },
  },
});
