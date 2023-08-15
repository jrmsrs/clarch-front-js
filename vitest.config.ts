/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'lcov', 'html'],
      all: true,
      exclude: [
        ...configDefaults.coverage.exclude ?? '',
        '**/.pnp.*', '**/*.d.ts', '**/*.js', '**/*.cjs', '**/index.ts'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
