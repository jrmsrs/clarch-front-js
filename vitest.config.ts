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
        // config files and scripts
        '**/*.js', '**/*.cjs', '**/.pnp.*',
        // types and abstract classes
        '**/*.d.ts',
        // used only for export
        '**/index.ts',
        // used only to render the app
        'src/main/index.tsx',
        // factory functions
        'src/main/factories/*'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
