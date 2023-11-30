import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/',
  },
  resolve: {
    alias: {
      app: '/src/app',
      components: '/src/components',
      service: '/src/service',
      pages: '/src/pages',
      types: '/src/types',
      styles: '/src/styles',
      ui: '/src/ui',
      helpers: '/src/helpers',
      storage: '/src/storage',
      test: '/src/test',
      store: '/src/store'
    },
  },
})
