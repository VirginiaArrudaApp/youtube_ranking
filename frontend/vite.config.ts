import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
    resolve: {
      alias: {
        '@hooks': resolve(__dirname, './src/hooks'),
        '@utils': resolve(__dirname, './src/utils'),
        '@pages': resolve(__dirname, './src/pages'),
        '@schemas': resolve(__dirname, './src/schemas'),
        '@components': resolve(__dirname, './src/components'),
      },
  },
})
