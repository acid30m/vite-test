import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import handlebars from "vite-plugin-handlebars";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
	react()],
})
