import pluginJs from '@eslint/js';
import { parser } from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{
		ignores: ['public/build', 'eslint.config.mjs', '.prettierrc'],
	},
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{
		languageOptions: {
			parser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				tsconfigRootDir: './',
				project: './tsconfig.json',
			},
			globals: { ...globals.browser, ...globals.node },
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
			react,
		},
		rules: {
			'sort-imports': 'off',
			'simple-import-sort/imports': [
				'error',
				{
					groups: [['^react$', '^@?\\w'], ['^@components', '^@pages', '^@utils'], ['^\\.']],
				},
			],
			'simple-import-sort/exports': 'error',
		},
	},
];
