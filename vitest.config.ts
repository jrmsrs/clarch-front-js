/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      exclude: [ ...configDefaults.coverage.exclude ?? '', '**/.pnp.*' ]
    }
  }
})
