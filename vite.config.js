import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CS2/',  // ví dụ repo tên "cs2-fresh" thì base: '/cs2-fresh/'
  plugins: [react()],
})
