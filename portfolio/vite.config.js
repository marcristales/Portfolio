import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ]
  },
  test: {
    setupFiles: './src/setupTests.js',
    globals: true,
    environment: 'jsdom'
  },
  assetsDir: 'assets',
})