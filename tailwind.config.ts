import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light Rust Blue palette
        rustblue: {
          DEFAULT: '#5B7C99',
          dark: '#3D5A73',
          light: '#7A9BB8',
        },
        // Warm cream/beige accents
        cream: {
          DEFAULT: '#F8F4F0',
          dark: '#E8E0D8',
          light: '#FFFBF7',
        },
        ivory: '#FDFCFA',
        // Keep aliases for compatibility
        olive: {
          DEFAULT: '#5B7C99',
          dark: '#3D5A73',
          light: '#7A9BB8',
        },
        beige: {
          DEFAULT: '#F8F4F0',
          dark: '#E8E0D8',
          light: '#FFFBF7',
        },
      },
    },
  },
  plugins: [],
}
export default config
