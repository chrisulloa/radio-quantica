import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import pluginNext from '@next/eslint-plugin-next'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['build/*', 'dist/*', 'eslint.config.mjs', '.next/*', "node_modules/*", "src/app/(payload)/admin/importMap.js"],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier'
    )
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      prettier,
      '@next/next': pluginNext
    },
    languageOptions: {
      globals: {
        ...Object.fromEntries(
          Object.entries(globals.browser).map(([key]) => [key, 'off'])
        ),
        ...globals.node,
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: '.',
        project: './tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.ts', '.js', '.tsx'],
          typescript: {
            alwaysTryTypes: true,
            paths: './tsconfig.json',
          },
        },
      },
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      'no-console': 'off',
      'prettier/prettier': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      '@typescript-eslint/no-restricted-types': 'warn',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/require-await': 'warn'
    },
  },
];
