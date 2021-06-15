import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathSrc = resolve(__dirname, 'src')

const scssImportFiles = ['mixins/_media', '_variables']
const scssImports = scssImportFiles
  .map((v) => {
    return `@import "${pathSrc}/assets/styles/${v}";`
  })
  .join('')
const scssData = `@use 'sass:math'; ${scssImports}`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssData,
      },
    },
  },

  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
