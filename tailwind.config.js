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
            primary: {
               light: "#e5e7eb",
               dark: "#1a1b1f",
            },
            secondary: {
               light: "#FFFFFF",
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
            disabled: "#D0D8DC",
         },
      },
   },
   plugins: [],
};
