import Select from "react-select";
import { staggerItem } from "../../../animations/StaggerCards";
import { OptionModel } from "../../../models/DiscoverModel";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

type Props = {
   title: string;
   options: OptionModel[];
   value: OptionModel;
   setValue: any;
   icon: string;
};

export default function DropDown({
   title,
   options,
   value,
   setValue,
   icon,
}: Props) {
   const { themeColor, isDarkMode } = useSelector(
      (state: StoreModel) => state.theme
   );

   const colors = {
      primary: {
         light: "#e5e7eb",
         dark: "#1a1b1f",
      },
      secondary: {
         light: "#FFFFFF",
         dark: "#2a282a",
      },

      light: {
         1: "#000000",
         2: "#616161",
      },
      dark: {
         1: "#FFFFFF",
         2: "#9AA1AD",
      },
   };
   const { primary, secondary, dark, light } = colors;
   return (
      <motion.div
         variants={staggerItem}
         className="bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-lg p-5"
      >
         <div
            className="-mt-10 w-full h-16 rounded-xl grid place-content-center shadow-lg"
            style={{ backgroundColor: themeColor }}
         >
            <span className="material-symbols-outlined text-5xl">{icon}</span>
         </div>
         <div className="font-semibold my-1 text-lg text-light-2 dark:text-dark-2">
            {title}
         </div>
         <Select
            options={options}
            value={value}
            onChange={setValue}
            styles={{
               control: (styles) => ({
                  ...styles,
                  backgroundColor: "transparent",
                  borderColor: isDarkMode ? dark[2] : light[2],
               }),
               singleValue: (styles) => ({
                  ...styles,
                  color: isDarkMode ? dark[1] : light[1],
               }),
               menu: (styles) => ({
                  ...styles,
                  backgroundColor: isDarkMode
                     ? secondary.dark
                     : secondary.light,
               }),
               option: (styles, state) => ({
                  ...styles,
                  backgroundColor: state.isSelected ? themeColor : "",
                  "&:hover": {
                     ...styles,
                     color: isDarkMode ? dark[1] : light[1],
                     backgroundColor: isDarkMode ? primary.dark : primary.light,
                  },
               }),
            }}
         />
      </motion.div>
   );
}