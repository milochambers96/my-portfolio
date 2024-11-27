const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        woodland: {
          // Main colors
          background: "#1C2421", // Deep Fern
          text: "#E5EDE9", // Morning Frost
          secondary: "#8FA098", // Forest Mist
          accent: "#2D4B3E", // Pine Needle
          "accent-text": "#F2F7F5", // Frost White

          link: "#7FBA9A", // sage/mint green
          "link-select": "#94CF96", // birght moss,

          // Additional variants for flexibility
          muted: "#2A3530", // Slightly lighter than background for subtle contrast
          "secondary-hover": "#A0B0A8", // Lighter version of secondary for hover states
          "accent-hover": "#375B4B", // Lighter version of accent for hover states
        },
      },
      keyframes: {
        "highlight-message-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        "highlight-message-fade-out": {
          "0%": { opacity: "100" },
          "100%": { opacity: "0" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "highlight-message-fade-in": "highlight-message-fade-in 4s ease-in-out",
        "highlight-message-fade-out":
          "highlight-message-fade-out 4s ease-in-out",
        wave: "wave 5.5s infinite",
      },
    },
  },
  plugins: [],
};
