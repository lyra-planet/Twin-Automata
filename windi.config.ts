import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: true,
  attributify: {
    prefix: 'w:',
  },
})