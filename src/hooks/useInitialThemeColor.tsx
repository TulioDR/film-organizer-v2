import { themeActions } from "@/store/slices/theme-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useInitialThemeColor() {
   const dispatch = useDispatch();
   const { themeColor } = useSelector((state: any) => state.theme);

   useEffect(() => {
      const savedValue = localStorage.getItem("theme");
      if (savedValue) dispatch(themeActions.changeThemeColor(savedValue));
      else localStorage.setItem("theme", "#3b82f6");
   }, [dispatch]);

   useEffect(() => {
      localStorage.setItem("theme", themeColor);
   }, [themeColor]);
}
