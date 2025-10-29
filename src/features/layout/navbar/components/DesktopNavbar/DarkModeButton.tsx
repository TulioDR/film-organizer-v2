import React from "react";
import { motion } from "framer-motion";
import useAppSelector from "@/store/hooks/useAppSelector";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { themeActions } from "@/store/slices/theme-slice";

type Props = {};

export default function DarkModeButton({}: Props) {
   const { isDarkMode } = useAppSelector((state) => state.theme);
   const dispatch = useAppDispatch();

   const toggle = () => {
      dispatch(themeActions.toggleDarkMode());
   };

   return (
      <button
         onClick={toggle}
         className="h-full aspect-[4/3] p-3 group hover:bg-white text-black hover:text-white "
      >
         <div
            className={`h-full w-full flex relative ${
               isDarkMode ? "justify-end" : "justify-start"
            }`}
         >
            <div className="absolute top-0 left-0 w-full h-full border-white border-[2px] rounded-md group-hover:border-black"></div>
            <motion.div
               layout
               transition={{ type: "spring", duration: 0.6 }}
               className="bg-white group-hover:bg-black h-full aspect-square rounded-md flex items-center justify-center"
            >
               <span className="material-symbols-outlined">
                  {isDarkMode ? "dark_mode" : "light_mode"}
               </span>
            </motion.div>
         </div>
      </button>
   );
}
