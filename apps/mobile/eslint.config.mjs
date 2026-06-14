import globals from 'globals';
import jsPlugin from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import justinanastosPlugin from 'eslint-plugin-justinanastos';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reanimatedPlugin from 'eslint-plugin-reanimated';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: [
      '__tests__',
      '__tests__/**',
      '__mocks__',
      '__mocks__/**',
      '.eslintrc.js',
      '*.config.js',
      'jest.setup.js',
      'scripts/*.js',
      'index.js',
      '*.test.tsx',
      '*.test.ts',
      '.prettierrc.js',
      '.yarn/releases/yarn-stable-temp.cjs',
      'eslint.config.mjs',
      '**/settings.json',
    ],
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
      justinanastos: justinanastosPlugin,
      'react-hooks': reactHooksPlugin,
      reanimated: reanimatedPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'arrow-body-style': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'func-call-spacing': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'warn',
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-var-requires': 'warn',
      'global-require': 'off',
      'import/extensions': 'off',
      'import/no-duplicates': ['error', { 'prefer-inline': false }],
      'import/prefer-default-export': 'off',
      'justinanastos/switch-braces': 'error',
      'no-bitwise': 'off',
      'no-console': 'error',
      'no-debugger': 'error',
      'react-hooks/exhaustive-deps': [
        'error',
        {
          additionalHooks:
            '(useAnimatedStyle|useDerivedValue|useAnimatedProps)',
        },
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message: 'No need to import this.',
            },
            {
              name: 'react-redux',
              importNames: ['useDispatch'],
              message: 'Use useAppDispatch from `~/redux/store` instead.',
            },
            {
              name: 'react-redux',
              importNames: ['useSelector'],
              message: 'Use useAppSelector from `~/redux/store` instead.',
            },
            {
              name: 'lodash',
              message: 'Use lodash/fp instead.',
            },
            {
              name: 'react-native-redash',
              importNames: ['useTranslation'],
              message: 'Use the import from react-i18next.',
            },
          ],
        },
      ],
      'no-shadow': 'off',
      'no-spaced-func': 'off',
      'no-undef': 'off',
      'no-use-before-define': 'off',
      'no-nested-ternary': 'warn',
      'max-lines': ['error', { max: 300, skipComments: true }],
      'max-params': ['warn', { max: 4 }],
      'no-else-return': 'warn',
      'no-param-reassign': 'warn',
      'no-throw-literal': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-useless-catch': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'require-await': 'warn',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'react-native/no-inline-styles': 'off',
      'react/jsx-closing-bracket-location': [
        'warn',
        { selfClosing: 'line-aligned', nonEmpty: 'after-props' },
      ],
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/no-array-index-key': 'error',
      'reanimated/js-function-in-worklet': 'error',
      'reanimated/unsupported-syntax': 'error',
      'reanimated/no-multiple-animated-style-usages': 'off',
      curly: 'error',
      eqeqeq: 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
];
