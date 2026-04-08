import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sistema-custom/', // Garanta que este seja o nome do seu repositório
})
