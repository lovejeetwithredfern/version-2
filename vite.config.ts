import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This is the correct setting for your repo
  base: '/version-2/', 
  plugins: [react()],
}) 