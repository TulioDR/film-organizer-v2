import { createContext, useContext, useEffect, useState } from "react";

interface AppContextInterface {
   isDark: boolean;
   toggleDarkMode: () => void;
   themeColor: string;
   setThemeColor: React.Dispatch<React.SetStateAction<string>>;
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
      if (typeof window === "undefined") return false;
      const savedValue = localStorage.getItem("darkMode");
      return savedValue === "true";
   });
   const toggleDarkMode = () => setIsDark(!isDark);

   const [themeColor, setThemeColor] = useState<string>(() => {
      if (typeof window === "undefined") return "#3b82f6";
      return "#3b82f6";
   });

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
      themeColor,
      setThemeColor,
   };

   return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   );
}
