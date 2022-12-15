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
         colors: {
            light: {
               text: {
                  soft: "#6b7280",
                  normal: "#334155",
                  hard: "#0f172a",
               },
               bg: "#e5e7eb",
            },
            dark: {
               text: {
                  soft: "#9ca3af",
                  normal: "#d1d5db",
                  hard: "#f9fafb",
               },
               bg: "#1f2937",
            },
            gray: {
               dark: "#4b5563",
               light: "#9ca3af",
            },
         },
      },
   },
   plugins: [],
};
