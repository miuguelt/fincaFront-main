import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite que la aplicación sea accesible desde otras máquinas
    proxy: {
      '/api': {
        target: 'https://finca.isladigital.xyz',   // Dirección de la API (asegúrate de que la URL sea correcta)
        changeOrigin: true,             // Cambia el origen del host para que la solicitud se vea como si viniera de la API
        secure: true,                  // Usar true para HTTPS. Si el servidor tiene un certificado válido, debe ser 'true'
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina '/api' del path al hacer la solicitud
      },
    },
  },
});

