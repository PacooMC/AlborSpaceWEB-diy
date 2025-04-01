/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1A1A2E',
          200: '#16213E',
          300: '#0F3460',
          800: '#0D0F1A', // Slightly darker for more depth
          900: '#030305'
        },
        accent: {
          // Keep other accents in case they are used elsewhere, but primary focus is orange now
          primary: '#FF8C00',   // Orange (matches orange-500)
          secondary: '#E94560', // Red/Pink
          tertiary: '#1C82AD',  // Blue
          quaternary: '#533483' // Purple
        },
        // Extended Orange Palette (Tailwind CSS default palette inspired)
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Main accent orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Keep the placeholder RGB variables for now, though they are overridden by the direct orange palette above
        // These might be used elsewhere or can be cleaned up later.
        'orange-light': 'rgb(var(--orange-light))',
        'orange-medium': 'rgb(var(--orange-medium))',
        'orange-dark': 'rgb(var(--orange-dark))',
        'orange-deep': 'rgb(var(--orange-deep))',
        'orange-burnt': 'rgb(var(--orange-burnt))',
        'orange-golden': 'rgb(var(--orange-golden))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
