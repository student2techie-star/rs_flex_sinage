import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        fs.copyFileSync('dist/index.html', 'dist/404.html')
      }
    }
  ],
  base: '/rs_flex_sinage/'
})
