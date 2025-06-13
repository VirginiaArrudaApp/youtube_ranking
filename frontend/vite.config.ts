import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
    resolve: {
      alias: {
        '@pages': resolve(__dirname, './src/pages'),
        '@components': resolve(__dirname, './src/components'),
      },
  },
})
