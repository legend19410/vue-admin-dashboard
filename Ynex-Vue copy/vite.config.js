import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [vue(),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL(import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 160000,
  },
})