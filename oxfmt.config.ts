import { defineConfig } from 'oxfmt';

export default defineConfig({
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  useTabs: false,
  tabWidth: 2,
  endOfLine: 'lf',

  sortImports: {
    groups: [
      ['style', 'side_effect_style', 'side_effect'],
      ['builtin', 'external'],
      'internal',
      ['parent', 'sibling', 'subpath'],
    ],
    sortSideEffects: false,
  },

  ignorePatterns: [
    'build/',
    'node_modules/',

    // "*" has special meaning and should not be reformatted
    '**/CODEOWNERS',
  ],
});
