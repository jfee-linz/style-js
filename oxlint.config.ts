import { defineConfig } from 'oxlint';

export default defineConfig({
  options: {
    reportUnusedDisableDirectives: 'warn',
    typeAware: true,
    typeCheck: true,
  },

  plugins: ['eslint', 'import', 'jsx-a11y', 'node', 'typescript'],

  /** Default rules for Javascript, Typescript & Tests */
  rules: {
    // Use const/let
    'eslint/no-var': 'error',

    /**
     *  Force `===` but allow `== null`
     *  to prevent `x === undefined || x === null`
     */
    'eslint/eqeqeq': ['error', 'always', { null: 'ignore' }],

    // https://eslint.org/blog/2022/07/interesting-bugs-caught-by-no-constant-binary-expression/
    'eslint/no-constant-binary-expression': 'error',

    // import sorting handled by oxfmt, see oxfmt.config.ts
    'import/no-cycle': ['error', { maxDepth: 8 }],

    // Disallow comma operators
    'eslint/no-sequences': 'error',

    // Allow unused with underscore prefix
    'typescript/no-unused-vars': ['error', 'always', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },

  overrides: [
    {
      /**
       * Overrides for typescript tests
       * All rules in the Typescript overrides are also applied
       * They can be overwriten here
       */
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.*'],
      rules: {
        'typescript/no-non-null-assertion': 'off',
      },
    },
  ],
});
