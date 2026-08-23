import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Splitting react and packages into separate cacheable bundles
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-scroll')) {
              return 'vendor-react-core'
            }
            if (id.includes('react-icons')) {
              return 'vendor-react-icons'
            }
            return 'vendor-others'
          }
        }
      }
    },
    chunkSizeWarningLimit: 800, // Increase threshold for larger modular bundles
    cssCodeSplit: true,         // Separate CSS per component
    minify: true,               // Default minifier
  }
})