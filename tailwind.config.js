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
            roboto: "'Roboto', sans-serif",
            title: "Octosquares",
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
         },
      },
   },
   plugins: [],
};
