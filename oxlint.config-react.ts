import { defineConfig } from 'oxlint';

// counter intuitive, but need to import js once built
// if generating errors, run "npm run build" first
import base from './oxlint.config.js';

export default defineConfig({
  extends: [base],

  overrides: [
    {
      files: ['**/*.mts', '**/*.ts', '**/*.tsx'],
      plugins: ['react', 'react-perf'],

      rules: {
        'react/display-name': 'error',
        'react/exhaustive-deps': 'warn',
        'react/hook-use-state': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/only-export-components': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/rules-of-hooks': 'error',
      },
    },
  ],
});
