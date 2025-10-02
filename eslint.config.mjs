import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 🧠 1. Ignorar carpetas generadas automáticamente
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      ".contentlayer/**", // ⬅️ agregamos esta línea
      "next-env.d.ts",
    ],
  },

  // 🧠 2. Extensiones base de Next.js + TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 🧠 3. (Opcional) Reglas personalizadas
  {
    rules: {
      // Puedes relajar algunas reglas si quieres evitar bloqueos por errores leves
      "@typescript-eslint/no-explicit-any": "error", // sigue marcando 'any'
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
