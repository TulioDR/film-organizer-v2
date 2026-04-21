import { useEffect } from "react";
import { motion } from "framer-motion";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { themeActions } from "@/store/slices/theme-slice";
import useAppSelector from "@/store/hooks/useAppSelector";

type Props = {};

export default function DarkModeButton({}: Props) {
   const dispatch = useAppDispatch();

   const toggle = () => {
      dispatch(themeActions.toggleDarkMode());
   };

   const { isDarkMode } = useAppSelector((state) => state.theme);

   useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
         dispatch(themeActions.startDarkMode());
      } else if (savedTheme === "light") {
         dispatch(themeActions.stopDarkMode());
      }
   }, [dispatch]);

   useEffect(() => {
      const root = window.document.documentElement;
      if (isDarkMode) {
         root.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         root.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [isDarkMode]);

   return (
      <div className="h-12 py-2">
         <motion.button
            whileHover={{ scale: 1.5 }}
            onClick={toggle}
            className="h-full aspect-square bg-black dark:bg-white rounded-full"
         />
      </div>
   );
}
