import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [solidPlugin(), viteTsconfigPaths()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
