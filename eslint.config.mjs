import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
    // ၁။ စစ်ဆေးစရာမလိုတဲ့ Folder တွေကို ချန်လှပ်ထားမယ်
    {
        ignores: ["dist/**", "node_modules/**", "jest.config.cjs"]
    },

    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            globals: {
                ...globals.node, // Node.js ရဲ့ global စကားလုံးတွေကို နားလည်အောင်လုပ်တာ
            }
        }
    },

    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

    {
        rules: {
            "no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "no-undef": "error"
        }
    }
];