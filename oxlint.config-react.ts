import base from '@linzjs/style/oxlint.config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [base],

  plugins: ['react', 'react-perf'],

  rules: {
    'react/display-name': 'error',
    'react/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/hook-use-state': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
  },
});
