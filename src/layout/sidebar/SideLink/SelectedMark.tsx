import { motion } from "framer-motion";
import useThemeContext from "../../../context/ThemeContext";

type Props = { item?: boolean; isSelected: boolean };

export default function SelectedMark({ isSelected, item }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <div className={`${item ? "w-6" : "w-10"}`}>
         {isSelected && (
            <motion.div
               style={{ backgroundColor: themeColor }}
               className="w-1 h-full"
               layoutId={item ? "underline-item" : "underline"}
            />
         )}
      </div>
   );
}
