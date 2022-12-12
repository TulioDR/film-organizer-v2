import { createContext, useContext, useEffect, useState } from "react";

interface AppContextInterface {
   isDark: boolean;
   toggleDarkMode: () => void;
}
interface ThemeProvider {
   children: React.ReactNode;
}

const ThemeContext = createContext({} as AppContextInterface);
export default function useThemeContext() {
   return useContext(ThemeContext);
}

export function ThemeProvider({ children }: ThemeProvider) {
   const [isDark, setIsDark] = useState<boolean>(() => {
      if (typeof window !== "undefined") {
         const savedValue = localStorage.getItem("darkMode");
         const isDarkSaved = savedValue === "true";
         return isDarkSaved;
      }
      return false;
   });
   const toggleDarkMode = () => setIsDark(!isDark);

   useEffect(() => {
      const root = window.document.documentElement;
      if (isDark) {
         localStorage.setItem("darkMode", "true");
         root.classList.add("dark");
      } else {
         localStorage.setItem("darkMode", "false");
         root.classList.remove("dark");
      }
   }, [isDark]);

   const value: AppContextInterface = {
      isDark,
      toggleDarkMode,
   };

   return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   );
}
