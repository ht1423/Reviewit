import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    hmr: true, 
    watch: {
      usePolling: true, 
    },
  },
  build: {
    outDir: 'dist',  
  },
  base: '/', 
})
