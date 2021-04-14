import { defineConfig } from 'vite'
// import vue from "@vitejs/plugin-vue";
const path = require('path')
const { createVuePlugin } = require('vite-plugin-vue2')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue()
    createVuePlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
