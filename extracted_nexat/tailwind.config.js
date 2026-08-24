export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--background)',
        'bg-light': 'var(--surface)',
        accent: 'var(--accent)',
        'text-dark': 'var(--background)',
        'text-light': 'var(--primary-text)',
        surface: 'var(--surface)',
        divider: 'var(--divider)',
      },
      fontFamily: {
        syne: ['Darker Grotesque', 'sans-serif'],
        sans: ['Darker Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
