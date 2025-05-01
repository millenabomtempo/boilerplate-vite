import js from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

import noSharedUiImport from './eslint-rules/no-shared-ui-import.mjs'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      js,
      import: importPlugin,
      'react-hooks': pluginReactHooks,
      '@typescript-eslint': tsPlugin,
      'custom-rules': {
        rules: {
          'no-shared-ui-import': noSharedUiImport,
        },
      },
    },
    extends: ['js/recommended'],
    languageOptions: {
      parser: parser,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [
            ['@app', './src/app'],
            ['@shared', './src/shared'],
            ['@mocks', './src/mocks'],
            ['@ui', './src/shared/styles'],
            ['msw/browser', './node_modules/msw/browser'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
  pluginReact.configs.flat.recommended,
  ...pluginQuery.configs['flat/recommended'],
  {
    rules: {
      // Estilo de Código
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      indent: ['error', 2],
      'no-multi-spaces': 'error',
      curly: ['error', 'all'],

      // Qualidade
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off', // desativa a padrão
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'prefer-const': 'error',
      'no-async-promise-executor': 'error',

      // React
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',

      // Ordem das importações e quebras de linha
      'import/order': [
        'error',
        {
          groups: [
            ['builtin'],
            ['external'],
            ['internal'],
            ['sibling', 'parent', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
          distinctGroup: true,
          named: false,
          warnOnUnassignedImports: true,
        },
      ],

      'custom-rules/no-shared-ui-import': 'error',
    },
  },
])
