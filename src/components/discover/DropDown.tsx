import Select from "react-select";
import { staggerItem } from "../../animations/StaggerCards";
import useThemeContext from "../../context/ThemeContext";
import { OptionModel } from "../../models/DiscoverModel";
import { motion } from "framer-motion";
import tailwindColors from "../../data/tailwindColors";

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
   const { themeColor } = useThemeContext();

   const { dark } = tailwindColors;
   return (
      <motion.div
         variants={staggerItem}
         className="bg-dark-bg-secondary rounded-xl shadow-lg p-5"
      >
         <div
            className="-mt-10 w-full h-16 rounded-xl grid place-content-center drop-shadow-lg"
            style={{ backgroundColor: themeColor }}
         >
            <span className="material-icons text-5xl">{icon}</span>
         </div>
         <div className="font-semibold mb-1 text-xl">{title}</div>
         <Select
            options={options}
            value={value}
            onChange={setValue}
            styles={{
               control: (styles) => ({
                  ...styles,
                  backgroundColor: dark.bg.secondary,
                  borderColor: dark.text.soft,
               }),
               singleValue: (styles) => ({
                  ...styles,
                  color: dark.text.normal,
               }),
               menu: (styles) => ({
                  ...styles,
                  backgroundColor: dark.bg.secondary,
               }),
               option: (styles, state) => ({
                  ...styles,
                  backgroundColor: state.isSelected ? themeColor : "",
                  "&:hover": {
                     ...styles,
                     backgroundColor: dark.bg.primary,
                  },
               }),
            }}
         />
      </motion.div>
   );
}
