/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['lcov', 'html'],
      all: true,
      exclude: [...configDefaults.coverage.exclude ?? '', '**/.pnp.*', '**/*.js', '**/*.cjs', '**/index.ts', '**/domain/*']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
