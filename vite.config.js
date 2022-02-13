import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://hikki12.github.io/react-vite/',
  plugins: [react()]
})
