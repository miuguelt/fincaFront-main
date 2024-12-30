import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://finca.isladigital.xyz', // URL de la API
        changeOrigin: true,
        rewrite: (path) => path.replace(s/^\/api/, ''), // Elimina el prefijo /api
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
