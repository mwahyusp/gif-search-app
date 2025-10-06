/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // Pastikan dark mode diaktifkan secara class-based
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Pertahankan hanya warna aksen yang cerah
        "accent-teal": "#10B981",
        "accent-hover": "#059669",
      },
    },
  },
  plugins: [],
};
