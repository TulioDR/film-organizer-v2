import useThemeContext from "../../../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   media: "movies" | "series" | "upcoming";
   currentMedia: "movies" | "series" | "upcoming";
   children: React.ReactNode;
   onClick: () => void;
};

export default function ChangeMediaButton({
   media,
   currentMedia,
   children,
   onClick,
}: Props) {
   const { themeColor } = useThemeContext();
   return (
      <button className="relative">
         <span
            onClick={onClick}
            className={`font-semibold cursor-pointer duration-300 text-xl 2xl:text-2xl ${
               media === currentMedia ? "text-white" : "text-gray-300"
            }`}
         >
            {children}
         </span>
         <AnimatePresence>
            {media === currentMedia && (
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: themeColor }}
                  className="absolute h-[2px] top-full"
               ></motion.div>
            )}
         </AnimatePresence>
      </button>
   );
}
