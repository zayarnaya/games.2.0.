import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";

// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [pluginJs.configs.recommended, ...tseslint.configs.recommended, pluginReact.configs.flat.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    // plugins: {
    //   "react-hooks": reactHooks,
    //   "react-refresh": reactRefresh,
    // },
    rules: {
      // ...reactHooks.configs.recommended.rules,
      // "react-refresh/only-export-components": [
      //   "warn",
      //   { allowConstantExport: true },
      // ],
      "no-console": ["warn"],
    },
    // env: {
    //   jest: true,
    // }
  },
);
