import { defineConfig } from 'vite'

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
  }
})
