import { AnimatePresence, motion } from "framer-motion";
import useThemeContext from "../../context/ThemeContext";

type Props = {
   isOnFocus: boolean;
};

export default function BottomBorder({ isOnFocus }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <AnimatePresence>
         {isOnFocus && (
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
               style={{ backgroundColor: themeColor }}
               className="absolute bottom-4 left-0 h-[3px] w-full"
            ></motion.div>
         )}
      </AnimatePresence>
   );
}
