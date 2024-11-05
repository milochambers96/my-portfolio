/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Desert Tones
        desert: {
          background: "#F4F1EA", // Sand background
          accent: "#C46D3B", // Burnt sienna
          secondary: "#9CA777", // Sage
          info: "#F9FAFB",
          dark: "#535E3F", // Forest green
        },
        // Sage & Burnt Orange
        sage: {
          background: "#F5F5F0", // Light sage background
          accent: "#D35400", // Burnt orange
          secondary: "#8B9D83", // Sage green
          dark: "#4A5043", // Dark olive
        },
        // Olive & Terra
        olive: {
          background: "#E8E6D9", // Light olive background
          accent: "#CC5500", // Terra cotta
          secondary: "#7D8471", // Olive green
          dark: "#556052", // Deep olive
        },
      },
    },
  },
  plugins: [],
};
