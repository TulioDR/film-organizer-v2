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
            primary: "#1a1b1f",
            secondary: "#4B5563",
            silver: "#A6A6A6",
            text: {
               1: "rgba(255, 255, 255, 0.9)",
               2: "rgba(255, 255, 255, 0.6)",
               3: "rgba(255, 255, 255, 0.4)",
            },
         },
      },
   },
   plugins: [],
};
