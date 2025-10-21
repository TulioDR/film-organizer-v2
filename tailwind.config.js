/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/common/**/*.{js,ts,jsx,tsx}",
      "./src/features/**/*.{js,ts,jsx,tsx}",
   ],
   darkMode: "class",
   theme: {
      extend: {
         fontFamily: {
            roboto: "'Roboto', sans-serif",
            title: "Octosquares",
         },
         borderWidth: {
            "border-width": "2px",
         },
         colors: {
            primary: {
               light: "#ffffff",
               dark: "#040603",
            },
            secondary: {
               light: "#e5e7eb",
               dark: "#2a282a",
            },
            light: {
               1: "#000000",
               2: "#616161",
            },
            dark: {
               1: "#FFFFFF",
               2: "#9AA1AD",
            },
            accent: "#CBAB60",
            border: {
               DEFAULT: "#71717a",
               light: "rgb(197 189 178)",
               dark: "rgb(197 189 178 / 0.25)",
            },
         },
      },
   },
   plugins: [],
};
