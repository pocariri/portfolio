import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' 로 설정해 GitHub Pages 등 하위 경로 배포에서도 에셋 경로가 깨지지 않도록 함
export default defineConfig({
  plugins: [react()],
  base: './',
})
