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
   const { themeColor, isDark } = useThemeContext();

   const { light, dark } = tailwindColors;
   return (
      <motion.div
         variants={staggerItem}
         className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl shadow-lg p-5"
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
                  backgroundColor: isDark
                     ? dark.bg.secondary
                     : light.bg.secondary,
                  borderColor: isDark ? dark.text.soft : light.text.soft,
               }),
               singleValue: (styles) => ({
                  ...styles,
                  color: isDark ? dark.text.normal : light.text.normal,
               }),
               menu: (styles) => ({
                  ...styles,
                  backgroundColor: isDark
                     ? dark.bg.secondary
                     : light.bg.secondary,
               }),
               option: (styles, state) => ({
                  ...styles,
                  backgroundColor: state.isSelected ? themeColor : "",
                  "&:hover": {
                     ...styles,
                     backgroundColor: isDark
                        ? dark.bg.primary
                        : light.bg.primary,
                  },
               }),
            }}
         />
      </motion.div>
   );
}
