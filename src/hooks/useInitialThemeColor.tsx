import { themeActions } from "@/store/slices/theme-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useInitialThemeColor() {
   const dispatch = useDispatch();
   const { themeColor } = useSelector((state: any) => state.theme);
   const setNewColor = (color: string) => {
      dispatch(themeActions.changeThemeColor(color));
   };
   useEffect(() => {
      const savedValue = localStorage.getItem("theme");
      if (savedValue) setNewColor(savedValue);
      else localStorage.setItem("theme", "#3b82f6");
   }, []);

   useEffect(() => {
      localStorage.setItem("theme", themeColor);
   }, [themeColor]);
}
