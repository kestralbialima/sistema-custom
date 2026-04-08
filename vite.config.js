import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
  plugins: [react()],
  base: '/sistema-custom/', // 👈 ADICIONE ISSO (use o nome exato do seu repo no GitHub)
})
