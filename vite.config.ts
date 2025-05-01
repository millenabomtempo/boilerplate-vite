/// <reference types="vitest" />
import path from 'path'
import { fileURLToPath } from 'url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults } from 'vitest/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
      '@ui': path.resolve(__dirname, './src/shared/styles'),
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'html', 'json-summary', 'clover'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        ...(configDefaults.coverage?.exclude ?? []),
        'src/**/*.d.ts',
        'src/main.tsx',
        'src/routes.tsx',
        'src/app/index.tsx',
        'src/app/**/service/*',
        'src/mocks/*',
        'src/shared/hooks/*',
        'src/shared/interfaces/*',
        'src/shared/routes/*',
        'src/shared/services/*',
        'src/shared/types/*',
        'src/shared/utils/*',
        'src/shared/styles/*',
      ],
    },
  },
})
