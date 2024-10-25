import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true     // Opens the browser when running `npm run dev`
  },
  css: {
    preprocessorOptions: {
      scss: { // Suppress Sass warnings from dependencies (like Bulma)
        quietDeps: true,
      },
    },
  },
});
