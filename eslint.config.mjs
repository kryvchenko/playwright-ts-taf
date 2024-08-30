// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, prettierConfig, 
  {
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: ".",
    },
  },
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/await-thenable": "error",
    "prettier/prettier": "error",
  },
  plugins: {
    prettier: prettierPlugin,
  },
},
{
  ignores: ["playwright-report", "*.config.mjs", "*.config.ts", "node_modules/", "test-results/", ".vscode/*", ".DS_Store", "Thumbs.db"]
}
);
