import { defineConfig } from 'vite'

const path = require('path')
const { createVuePlugin } = require('vite-plugin-vue2')
import { svgBuilder } from './src/plugins/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), svgBuilder('./src/icons/svg/')],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['@/assets/fonts'],
  },
  base: '/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        manualChunks: {
          'element-ui': ['element-ui'],
          // lodash: ["lodash"],
        },
      },
    },
  },
})
