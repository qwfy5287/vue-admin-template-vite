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
})
