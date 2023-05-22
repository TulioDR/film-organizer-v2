/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/containers/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/animations/**/*.{js,ts,jsx,tsx}",
      "./src/layout/**/*.{js,ts,jsx,tsx}",
      "./src/features/**/*.{js,ts,jsx,tsx}",
   ],
   darkMode: "class",
   theme: {
      extend: {
         fontFamily: {
            oswald: "'Oswald', sans-serif",
            roboto: "'Roboto', sans-serif",
         },
         colors: {
            primary: "#0D0D0D",
            accent: "#202020",
            silver: "#A6A6A6",
            light: {
               text: {
                  soft: "#6b7280",
                  normal: "#334155",
                  hard: "#0f172a",
               },
               bg: {
                  primary: "#e5e7eb",
                  secondary: "#ffffff",
               },
            },
            dark: {
               text: {
                  soft: "#9ca3af",
                  normal: "#d1d5db",
                  hard: "#f9fafb",
               },
               bg: {
                  primary: "#1A1B20",
                  secondary: "#2D2F3B",
               },
            },
         },
      },
   },
   plugins: [],
};
