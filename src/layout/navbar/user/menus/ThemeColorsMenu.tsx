import { motion } from "framer-motion";
import ColorIcon from "../ColorIcon";
import DropdownItem from "../DropdownItem";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "@/store/slices/theme-slice";
import { useState, useEffect } from "react";
import { darkThemeColors, lightThemeColors } from "@/data/themeColors";
import StoreModel from "@/models/StoreModel";

type Props = {
   setMenu: React.Dispatch<React.SetStateAction<"main" | "colors">>;
};

interface ThemeColorsModel {
   name: string;
   color: string;
}

export default function ThemeColorsMenu({ setMenu }: Props) {
   const dispatch = useDispatch();
   const setNewColor = (color: string, colorName: string) => {
      const object = {
         color: color,
         name: colorName,
      };
      dispatch(themeActions.changeThemeColor(object));
   };
   const { isDarkMode } = useSelector((state: StoreModel) => state.theme);
   const [currentColors, setCurrentColors] =
      useState<ThemeColorsModel[]>(darkThemeColors);

   useEffect(() => {
      if (isDarkMode) setCurrentColors(darkThemeColors);
      else setCurrentColors(lightThemeColors);
   }, [isDarkMode]);

   return (
      <motion.ul
         key="colors"
         initial={{
            x: "100%",
         }}
         animate={{
            x: 0,
         }}
         exit={{ x: "100%" }}
         transition={{ duration: 0.4 }}
         className="w-full space-y-2 absolute left-0 top-0"
      >
         <div className="font-semibold text-2xl flex space-x-2 pl-2">
            <button
               onClick={() => setMenu("main")}
               className="rounded-full aspect-square w-9 hover:bg-primary-light dark:hover:bg-primary-dark grid place-content-center"
            >
               <span className="material-symbols-outlined ">west</span>
            </button>
            <span>Theme Colors</span>
         </div>
         {currentColors.map(({ name, color }) => (
            <DropdownItem
               key={name}
               icon={<ColorIcon color={color} />}
               onClick={() => setNewColor(color, name)}
            >
               {name}
            </DropdownItem>
         ))}
      </motion.ul>
   );
}
