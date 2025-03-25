/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Purple shade for buttons
        secondary: "#4F46E5", // Slightly darker purple for contrast
        accent: "#FACC15", // Yellow for highlights
        darkBg: "#1a1a2e", // Dark background
        cardBg: "#16213e", // Card background color
        textLight: "#EAEAEA", // Light text for contrast
        danger: "#DC2626", // Red color for alerts
        success: "#10B981", // Green for success messages
      },
    },
  },
  plugins: [],
};
