// @ts-check
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxAst from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// export const languageOptions = {
//   ecmaVersion: 'latest',
//   sourceType: 'module',
//   parser: tsParser,
//   parserOptions: {
//     project: './tsconfig.json',
//     tsconfigRootDir: __dirname,
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
// };

export const importConfig = {
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  ignores: ['node_modules/**', 'dist/**', '.next/**', 'storybook-static/**', 'src/generated/**', '/storybook-static'],
  languageOptions,
  plugins: {
    import: importPlugin,
  },
  rules: {
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: { 'arrow-body-style': 'as-needed' },
    },
  },
};

export const typescriptConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  ignores: ['node_modules/**', 'dist/**', '.next/**', 'storybook-static/**', 'src/generated/**', '/storybook-static'],
  languageOptions,
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  rules: {
    // Include TypeScript ESLint recommended rules
    ...typescriptPlugin.configs.recommended.rules,
    // ESLint-plugin-typescript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};

export const reactHookConfig = {
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  ignores: ['node_modules/**', 'dist/**', '.next/**', 'storybook-static/**', 'src/generated/**', '/storybook-static'],
  languageOptions,
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHookPlugin,
  },
  rules: {
    ...reactHookPlugin.configs.recommended.rules,
    // ESLint-plugin-react rules
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    // ESLint-plugin-react-hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

export const storybookConfig = {
  files: ['**/*.stories.ts', '**/*.stories.tsx'],
  ignores: ['node_modules/**', 'dist/**', '.next/**', 'storybook-static/**', 'src/generated/**', '/storybook-static'],
  languageOptions,
  plugins: {
    storybook: fixupPluginRules(storybookPlugin),
  },
  rules: {
    // Additional rules
    // ESLint-plugin-storybook rules
    'storybook/csf-component': 'error',
    'storybook/no-redundant-story-name': 'error',
    'storybook/csf-component': 'error',
    'storybook/no-redundant-story-name': 'error',
  },
};

/** @type {import('typescript-eslint').ConfigWithExtends[]}  */
export const config = tseslint.config(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    ignores: ['node_modules/**', 'dist/**', '.next/**', 'storybook-static/**', 'src/generated/**', '/storybook-static'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      prettier: prettierPlugin,
      js,
      'jsx-a11y': jsxAst,
    },
    rules: {
      ...reactHookPlugin.configs.recommended.rules,
      ...jsxAst.configs.recommended.rules,
      // Additional rules
      // ESLint-plugin-prettier rules
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  importConfig,
  typescriptConfig,
  reactHookConfig,
  storybookConfig,
);
