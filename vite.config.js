import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ここが重要！自分のリポジトリ名を「/リポジトリ名/」の形で書きます
  // あなたの場合は「neotetra」なので以下のようになります
  base: '/neotetra/',
})
