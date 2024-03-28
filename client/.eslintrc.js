module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": "plugin:react/recommended",
  "overrides": [
    {
      "env": {
        "node": true,
      },
      "files": [
        ".eslintrc.{js,cjs}",
      ],
      "parserOptions": {
        "sourceType": "script",
      },
    },
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
