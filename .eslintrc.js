const eslintConfig = {
	overrides: [
		{
			files: ["src/**/*.ts"],
			env: {
				node: true,
				es2021: true,
			},
			extends: ["eslint-config-nodets"],
			parserOptions: { project: "./tsconfig.json", ecmaVersion: 12, sourceType: "module" },
		},
		{
			files: ["rollup.config.js"],
			env: {
				node: true,
				commonjs: true,
				es2021: true,
			},
			extends: "eslint:recommended",
			parserOptions: {
				ecmaVersion: 12,
				sourceType: "module",
			},
		},
	],
	env: {
		node: true,
		commonjs: true,
		es2021: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "script",
	},
	ignorePatterns: ["**/node_modules", "**/*.d.ts"],
};
module.exports = eslintConfig;
