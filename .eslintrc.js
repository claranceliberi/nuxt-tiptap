module.exports = {
	parser: "vue-eslint-parser",
	// https://github.com/vuejs/vue-eslint-parser#parseroptionsparser,
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	plugins: ["@typescript-eslint"],
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/essential",
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	rules: {
		"vue/multi-word-component-names": "off",
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
	},
};
