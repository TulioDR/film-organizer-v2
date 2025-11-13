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
            "border-width": "1px",
         },
         colors: {
            primary: {
               light: "#ffffff",
               dark: "#000000",
               // dark: "#575C60",
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
            background: {
               light: "#E0E0E0",
               // light: "#DCD4CA",
               dark: "#18191b",
               "accent-light": "#e5e5e5",
               // "accent-light": "#EFE7DC",
               "accent-dark": "#222326",
            },
            border: {
               DEFAULT: "#71717a",
               // light: "white",
               // dark: "black",
               light: "rgb(227 227 227)",
               dark: "rgb(227 227 227 / 0.25)",
            },
         },
      },
   },
   plugins: [],
};
