import Select from "react-select";
import { staggerItem } from "../../../animations/StaggerCards";
import { OptionModel } from "../../../models/DiscoverModel";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import Image, { StaticImageData } from "next/image";

type Props = {
   title: string;
   options: OptionModel[];
   value: OptionModel;
   setValue: any;
   icon: string;
   image: StaticImageData;
};

export default function DropDown({
   title,
   options,
   value,
   setValue,
   icon,
   image,
}: Props) {
   const { themeColor, isDarkMode } = useSelector(
      (state: StoreModel) => state.theme
   );

   const colors = {
      primary: {
         light: "#e5e7eb",
         dark: "#040603",
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
         className="bg-secondary-light dark:bg-secondary-dark rounded-xl p-5 space-y-5"
      >
         <div className="-mt-10 rounded-xl shadow-lg relative overflow-hidden">
            <Image
               src={image}
               alt={title}
               fill
               sizes="100%"
               className="object-cover"
            />
            <div className="relative w-full flex flex-col items-center bg-black/80 p-5 text-dark-1">
               <span className="material-symbols-outlined !text-4xl">
                  {icon}
               </span>
               <span className="font-semibold font-title truncate uppercase">
                  {title}
               </span>
            </div>
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
