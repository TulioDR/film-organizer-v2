import React from "react";
import { motion } from "framer-motion";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { themeActions } from "@/store/slices/theme-slice";

type Props = {};

export default function DarkModeButton({}: Props) {
   const dispatch = useAppDispatch();

   const toggle = () => {
      dispatch(themeActions.toggleDarkMode());
   };

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
