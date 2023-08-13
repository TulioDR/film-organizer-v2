import StoreModel from "@/models/StoreModel";
import { themeActions } from "@/store/slices/theme-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useInitialThemeColor() {
   const dispatch = useDispatch();
   const { themeColor, themeColorName, isDarkMode } = useSelector(
      (state: StoreModel) => state.theme
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
