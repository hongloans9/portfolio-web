// Provide a minimal module declaration to satisfy TypeScript when
// type declarations for '@vitejs/plugin-react' aren't available.
declare module '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-web/',
})
