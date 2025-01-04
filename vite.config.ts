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
  build: {
    chunkSizeWarningLimit: 1000, // Cambia el límite a 1000 kB
  },
});
