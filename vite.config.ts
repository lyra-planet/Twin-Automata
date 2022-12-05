import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(),WindiCSS()],
  resolve: {
    alias: {
       '@app': resolve(__dirname, 'src'),
       '@game': resolve(__dirname, 'src/game'),
    }
 },
})
