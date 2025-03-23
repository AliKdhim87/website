import { dirname } from 'path';
import { fileURLToPath } from 'url';

// import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import * as reactHooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import globals from 'globals';
import { config as tseslintConfig } from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Common configurations
const commonIgnores = ['node_modules/**', 'build/**/*', 'storybook-static/**', '**/playwright-report/**'];

const commonFiles = ['*.{ts,tsx}'];

const languageOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
  parser: tsParser,
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.es2021,
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: { jsx: true },
  },
};

// Base configuration with prettier and general rules
const baseConfig = {
  files: commonFiles,
  languageOptions,
  plugins: {
    prettier: prettierPlugin,
    js,
    'jsx-a11y': jsxA11yPlugin,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...jsxA11yPlugin.configs.recommended.rules,
    'prettier/prettier': 'error',
  },
  settings: {
    react: { version: 'detect' },
  },
};

// Import configuration
const importConfig = {
  files: commonFiles,
  plugins: { import: importPlugin },
  rules: {
    ...importPlugin.configs.recommended.rules,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        pathGroups: [{ pattern: 'react', group: 'external', position: 'before' }],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { typescript: true, node: true },
  },
};

// TypeScript configuration
const typescriptConfig = {
  files: ['**/*.{ts,tsx}'],
  plugins: { '@typescript-eslint': typescriptPlugin },
  rules: {
    ...typescriptPlugin.configs.recommended.rules,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-empty-object-type': 'off',
  },
};

// React and Hooks configuration
const reactConfig = {
  files: commonFiles,
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
  },
};
// Storybook configuration
const storybookConfig = {
  // Include both .stories files and preview files
  files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '**/preview.@(ts|tsx)', '**/main.@(ts|tsx)'],
  languageOptions, // ensures tsParser and parserOptions.project are used
  plugins: {
    storybook: storybookPlugin,
  },
  rules: {
    ...storybookPlugin.configs.recommended.rules,
    'storybook/csf-component': 'error',
    'storybook/no-redundant-story-name': 'error',
    'storybook/default-exports': 'error',
  },
};

/** @type {import('eslint').ESLint}  */
const config = tseslintConfig(
  { ignores: commonIgnores },
  baseConfig,
  importConfig,
  typescriptConfig,
  reactConfig,
  storybookConfig,
);

export default config;
