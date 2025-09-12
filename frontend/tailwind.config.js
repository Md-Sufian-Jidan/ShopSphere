/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#FACC15",
        accent: "#10B981",
        dark: "#111827",
        light: "#F9FAFB",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Merriweather'", "serif"],
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
    },
  },
  plugins: [],
};
