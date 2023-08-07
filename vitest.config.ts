/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    coverage: {
      exclude: [...configDefaults.coverage.exclude ?? '', '**/.pnp.*']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
