import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/prweb': {
        target: 'https://c0btedt2.pegace.net',
        changeOrigin: true,
        secure: false, // For non-verified HTTPS if needed, or because we are proxying to https
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ticket: resolve(__dirname, 'it-ticket.html'),
        confirmation: resolve(__dirname, 'confirmation.html'),
      },
    },
  },
})
