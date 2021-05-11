module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'jest/globals': true,
	},
	parser: '@typescript-eslint/parser',
	extends: 'eslint:recommended',
	parserOptions: {
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	plugins: [
		'jest',
		'@typescript-eslint',
	],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	}
};
