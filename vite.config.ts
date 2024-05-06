import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ],
    }
  }
})
