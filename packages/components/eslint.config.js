import { dirname } from 'path';
import { fileURLToPath } from 'url';

import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import * as reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Common configurations
const commonIgnores = ['.rollup.cache/**', 'dist/**', '.turbo/**', 'node_modules/**'];
const commonFiles = ['**/*.{ts,tsx,js,jsx}'];

const languageOptions = {
  ecmaVersion: 'latest',
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

// Jest configuration
const jestConfig = {
  files: ['**/*.{spec,test}.{ts,tsx,js,jsx}'],
  plugins: { jest: jestPlugin },
  languageOptions: {
    globals: jestPlugin.environments.globals.globals,
  },
  // 'React' is not defined.eslintno-undef
  rules: { ...jestPlugin.configs.recommended.rules, 'no-undef': 'off' },
};

// Base configuration
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

/** @type {import('eslint').ESLint} */
const config = tseslint.config(
  { ignores: commonIgnores },
  baseConfig,
  importConfig,
  typescriptConfig,
  reactConfig,
  jestConfig,
);

export default config;
