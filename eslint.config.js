import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jsxAst from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Common configurations
const commonIgnores = [
  '**/node_modules/**',
  '**/build/**/*',
  '**/.rollup.cache/**/*.js',
  '**/dist/**/*/',
  '**/dist/**',
  '**/dist',
  '**/.next/**/*',
  '**/storybook-static/**/*',
  '**/src/generated/**',
  '**/playwright-report/**',
];

const commonFiles = ['**/*.{ts,tsx,js,jsx}'];

const languageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  parser: tsParser,
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.es2021,
    // ...globals.jest,
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
// Jest configuration
const jestConfig = {
  files: ['**/*.{spec,test}.{ts,tsx,js,jsx}'],
  // languageOptions: {
  //   ...languageOptions,
  //   globals: {
  //     ...jestPlugin.configs.recommended.globals,
  //   },
  // },
  // plugins: {
  //   jest: jestPlugin,
  // },
  // rules: {
  //   ...jestPlugin.configs.recommended.rules,
  //   'jest/expect-expect': 'error',
  //   'jest/no-commented-out-tests': 'error',
  //   'jest/no-disabled-tests': 'error',
  //   'jest/no-focused-tests': 'error',
  //   'jest/no-identical-title': 'error',
  //   'jest/no-standalone-expect': 'error',
  //   'jest/no-test-prefixes': 'error',
  //   'jest/valid-expect': 'error',
  //   'jest/valid-expect-in-promise': 'error',
  //   'jest/valid-title': 'error',
  //   '@typescript-eslint/no-explicit-any': 'off',
  //   '@typescript-eslint/no-non-null-assertion': 'off',
  //   '@typescript-eslint/no-unnecessary-condition': 'off',
  //   '@typescript-eslint/consistent-type-assertions': 'off',
  //   '@typescript-eslint/no-unused-vars': 'off',
  // },
  plugins: { jest: jestPlugin },
  languageOptions: {
    globals: jestPlugin.environments.globals.globals,
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};

// Base configuration with prettier and general rules
const baseConfig = {
  files: commonFiles,
  languageOptions,
  plugins: {
    prettier: prettierPlugin,
    js,
    'jsx-a11y': jsxAst,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...jsxAst.configs.recommended.rules,
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

// Import configuration
const importConfig = {
  files: commonFiles,
  languageOptions,
  plugins: {
    import: importPlugin,
  },
  rules: {
    // 'import/no-unresolved': 'error',
    'import/no-unresolved': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    // handle absolute imports in tsconfig.json
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};

// TypeScript configuration
const typescriptConfig = {
  files: ['**/*.{ts,tsx}'],
  languageOptions,
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  rules: {
    ...typescriptPlugin.configs.recommended.rules,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};

// React and Hooks configuration
const reactConfig = {
  files: commonFiles,
  languageOptions,
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHookPlugin,
  },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...reactHookPlugin.configs.recommended.rules,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off', // Since we're using TypeScript
  },
};

// Storybook configuration
const storybookConfig = {
  files: ['**/*.stories.{ts,tsx}'],
  languageOptions,
  plugins: {
    storybook: fixupPluginRules(storybookPlugin),
  },
  rules: {
    'storybook/csf-component': 'error',
    'storybook/no-redundant-story-name': 'error',
    'storybook/hierarchy-separator': 'error',
    'storybook/default-exports': 'error',
  },
};

/** @type {import('eslint').ESLint}  */
const config = tseslint.config(
  { ignores: commonIgnores },
  baseConfig,
  importConfig,
  typescriptConfig,
  reactConfig,
  storybookConfig,
  jestConfig,
);

export default config;
