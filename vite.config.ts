import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // hace que Vite escuche en 0.0.0.0
    port: 5173,  // opcional, puedes cambiar el puerto
  },
})
