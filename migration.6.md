# Migrating from @linzjs/style 5.x to 6.x

Version 6 replaces ESLint + Prettier with [oxlint](https://oxc.rs/docs/guide/usage/linter) and [oxfmt](https://oxc.rs/docs/guide/usage/formatter).

## Migration

### 1. Remove ESLint and Prettier

```bash
npm uninstall eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-config-prettier eslint-plugin-prettier eslint-plugin-react \
  eslint-plugin-react-hooks eslint-plugin-simple-import-sort

rm .eslintrc.cjs .eslintrc-react.cjs .prettierrc.cjs
```

### 2. Update @linzjs/style

```bash
npm install --save-dev @linzjs/style@^6.0.0 oxfmt oxlint oxlint-tsgolint
```

### 3. Migrate tsconfig.json

Update your `tsconfig.json` to extend `@linzjs/style/tsconfig.base.json` and keep only project-specific overrides:

```json
{
  "extends": "@linzjs/style/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "build"
  },
  "include": ["src"]
}
```

Remove any compiler options already provided by `tsconfig.base.json` (strict mode, module resolution, target, lib, etc.). Retain only settings specific to your project such as `outDir`, `rootDir`, `paths`, or `include`/`exclude`.

### 5. Update CI / scripts

Replace commands in package.json:

```json
"scripts": {
  "lint": "oxlint . && oxfmt --check .",
  "format": "oxlint --fix . && oxfmt ."
}
```

| Old                  | New               |
| -------------------- | ----------------- |
| `eslint .`           | `oxlint .`        |
| `eslint --fix .`     | `oxlint --fix .`  |
| `prettier --check .` | `oxfmt --check .` |
| `prettier --write .` | `oxfmt .`         |

### 6. Check for unexpected changes

- stage changes and then run `npm run format`

  ```
  git add .
  npm run format
  ```

- update overrides
  - overrides in new configs `oxlint.config.ts` and `oxfmt.config.ts`

  - `.gitignore` is used to ignore generated files and must be _inside working directory_
    https://oxc.rs/docs/guide/usage/linter/ignore-files.html#ignore-files

  - nested configurations can customize different areas in same repository
    https://oxc.rs/docs/guide/usage/linter/nested-config.html#nested-configuration-files

### 7. Update IDE settings

**Before:**

```json
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"eslint.validate": ["javascript"]
```

**After:**

```json
"editor.defaultFormatter": "oxc.oxfmt-vscode",
"editor.formatOnSave": true
```

Install the [oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) and [oxfmt](https://marketplace.visualstudio.com/items?itemName=oxc.oxfmt-vscode) VS Code extensions.
