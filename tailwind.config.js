/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan mencakup semua file di folder src
  ],
  theme: {
    extend: {}, // Tambahkan kustomisasi di sini
    screens: {
      sm: "640px", // Mobile
      md: "768px", // Tablet
      lg: "1024px", // Small Desktop
      xl: "1280px", // Large Desktop
      "2xl": "1536px", // Extra Large Desktop (opsional)
    },
  },
  plugins: [],
};
