import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // si usas MDX fuera de esas carpetas, añade sus rutas
    './content/**/*.{md,mdx}',
  ],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography')],
}

export default config

