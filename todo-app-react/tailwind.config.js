/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        artistic: ['Pacifico', 'cursive'], // Add the artistic font
      },
      colors: {
        primary: {
          light: '#93c5fd',  // Light Blue
          DEFAULT: '#3b82f6',  // Blue
          dark: '#1e3a8a'  // Dark Blue
        },
        secondary: '#f3f4f6',  // Light Gray
        accent: '#fbbf24',  // Yellow
        danger: '#ef4444',  // Red
        success: '#10b981',  // Green
        lightPurple: '#d4a5f5', // Lighter version of #6a11cb
        lightBlue: '#6cc2f2', // Lighter version of #2575fc
        bluePurple: '#9a5bff', // Blended color
      },
      boxShadow: {
        'primary-hover': '0 4px 6px -1px rgba(59, 130, 246, 0.5)', // Blue shadow
        'danger-hover': '0 4px 6px -1px rgba(239, 68, 68, 0.5)', // Red shadow
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradient background
      },
    },
  },
  plugins: [],
}
