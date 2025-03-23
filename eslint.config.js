import { dirname } from 'path';
import { fileURLToPath } from 'url';

import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsxAst from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Common configurations
const commonIgnores = ['node_modules/**', '.rollup.cache/', '.eslintcache', '**/apps/**', '**/packages/**'];

const commonFiles = ['*.{ts,js}'];

const languageOptions = {
  // Changed ecmaVersion from 'latest' to a numeric value, e.g. 2022.
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
    ecmaFeatures: {
      jsx: true,
    },
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

// TypeScript configuration
const typescriptConfig = {
  files: ['**/*.{ts}'],
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

/** @type {import('eslint').ESLint}  */
const config = tseslint.config({ ignores: commonIgnores }, baseConfig, typescriptConfig);

export default config;
