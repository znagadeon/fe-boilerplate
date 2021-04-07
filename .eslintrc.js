module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'jest/globals': true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	plugins: ['jest'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	}
};
