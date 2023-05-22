import { createContext, useContext, useEffect, useState } from "react";

interface AppContextInterface {
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
   const [themeColor, setThemeColor] = useState<string>("#3b82f6");

   useEffect(() => {
      const savedValue = localStorage.getItem("theme");
      if (savedValue) setThemeColor(savedValue);
      else localStorage.setItem("theme", "#3b82f6");
   }, []);

   useEffect(() => {
      localStorage.setItem("theme", themeColor);
   }, [themeColor]);

   const value: AppContextInterface = {
      themeColor,
      setThemeColor,
   };

   return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   );
}
