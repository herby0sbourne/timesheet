module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["prettier", "react", "@typescript-eslint"],
    rules: {
        "prettier/prettier": ["warn"],
        "@typescript-eslint/ban-ts-comment": "off",
        "react/react-in-jsx-scope": "off"
    }
};
