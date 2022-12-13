import { motion } from "framer-motion";
import useThemeContext from "../../../context/ThemeContext";

type Props = {
   isOn: boolean;
};
const spring = {
   type: "spring",
   stiffness: 700,
   damping: 30,
};
export default function ToggleModeButton({ isOn }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <div className="h-full py-2">
         <div
            style={{ backgroundColor: isOn ? themeColor : "#d1d5db" }}
            className={`switch h-full w-9 p-[3px] flex rounded-full ${
               isOn ? "justify-end" : "justify-start bg-gray-300"
            }`}
         >
            <motion.div
               className="rounded-full h-full aspect-square bg-white"
               layout
               transition={spring}
            />
         </div>
      </div>
   );
}
