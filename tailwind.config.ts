import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx,js,jsx}",       // deja js/jsx por si tienes algo suelto
    "./components/**/*.{ts,tsx,mdx,js,jsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: { extend: {} },
  plugins: [typography],
} satisfies Config;

