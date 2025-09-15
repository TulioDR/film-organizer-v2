import { themeActions } from "@/store/slices/theme-slice";
import { useEffect } from "react";
import useAppSelector from "@/store/hooks/useAppSelector";
import useAppDispatch from "@/store/hooks/useAppDispatch";

export default function useInitialThemeColor() {
   const dispatch = useAppDispatch();
   const { themeColor, themeColorName, isDarkMode } = useAppSelector(
      (state) => state.theme
   );

   useEffect(() => {
      const color = localStorage.getItem("theme");
      const name = localStorage.getItem("themeName");
      if (color && name) {
         dispatch(themeActions.changeThemeColor({ color, name }));
      } else {
         localStorage.setItem("theme", "#5d9cec");
         localStorage.setItem("themeName", "blue");
      }
   }, [dispatch]);

   useEffect(() => {
      localStorage.setItem("theme", themeColor);
      localStorage.setItem("themeName", themeColorName);
   }, [themeColor, themeColorName]);

   useEffect(() => {
      const root = window.document.documentElement;
      if (isDarkMode) {
         localStorage.setItem("darkMode", "true");
         root.classList.add("dark");
      } else {
         localStorage.setItem("darkMode", "false");
         root.classList.remove("dark");
      }
   }, [isDarkMode]);
}
