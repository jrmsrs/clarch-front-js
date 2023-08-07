module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    'standard-with-typescript',
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:markdown/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    // ecmaFeatures: { jsx: true },
  },
  plugins: ['react-refresh', 'react', 'import', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/no-absolute-path': 'off',
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
