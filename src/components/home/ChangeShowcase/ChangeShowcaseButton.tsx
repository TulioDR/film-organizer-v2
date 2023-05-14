import useThemeContext from "../../../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   showcase: "movies" | "series" | "upcoming";
   currentShowcase: "movies" | "series" | "upcoming";
   children: React.ReactNode;
   onClick: () => void;
};

export default function ChangeShowcaseButton({
   showcase,
   currentShowcase,
   children,
   onClick,
}: Props) {
   const { themeColor } = useThemeContext();
   return (
      <button className="relative">
         <span
            onClick={onClick}
            className={`font-semibold cursor-pointer duration-300 text-xl 2xl:text-2xl ${
               showcase === currentShowcase ? "text-white" : "text-gray-300"
            }`}
         >
            {children}
         </span>
         <AnimatePresence>
            {showcase === currentShowcase && (
               <div className="absolute h-[2px] w-full flex justify-center">
                  <motion.div
                     initial={{ width: 0 }}
                     animate={{ width: "100%" }}
                     exit={{ width: 0 }}
                     transition={{ duration: 0.3 }}
                     style={{ backgroundColor: themeColor }}
                     className="h-full top-full"
                  ></motion.div>
               </div>
            )}
         </AnimatePresence>
      </button>
   );
}