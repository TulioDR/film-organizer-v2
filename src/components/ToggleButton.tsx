import { motion } from "framer-motion";
import useThemeContext from "../context/ThemeContext";

type Props = {
   isOn: boolean;
};
export default function ToggleButton({ isOn }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <div
         className={`switch h-4 w-7 p-[3px] flex rounded-full bg-white ${
            isOn ? "justify-end" : "justify-start"
         }`}
      >
         <motion.div
            style={{ backgroundColor: themeColor }}
            className="rounded-full h-full aspect-square"
            layout
            transition={{ duration: 0.3 }}
         />
      </div>
   );
}
