/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Kurumsal Renk Paleti
        'corporate': {
          'navy': '#003B73',      // Ana kurumsal mavi/lacivert
          'blue': '#0074B7',      // İkincil mavi
          'light-blue': '#0099D8', // Açık mavi
          'gold': '#FFB81C',      // Altın/Turuncu accent
          'dark-gold': '#E5A617', // Koyu altın
          'gray-light': '#F5F7FA', // Açık gri bg
          'gray': '#E8EAED',      // Gri
          'dark': '#1A1A1A',      // Koyu gri/siyah
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero': '3.5rem',
        'display': '2.5rem',
      },
      boxShadow: {
        'corporate': '0 4px 6px -1px rgba(0, 59, 115, 0.1), 0 2px 4px -1px rgba(0, 59, 115, 0.06)',
        'corporate-lg': '0 10px 15px -3px rgba(0, 59, 115, 0.1), 0 4px 6px -2px rgba(0, 59, 115, 0.05)',
        'corporate-xl': '0 20px 25px -5px rgba(0, 59, 115, 0.1), 0 10px 10px -5px rgba(0, 59, 115, 0.04)',
      }
    },
  },
  plugins: [],
}
