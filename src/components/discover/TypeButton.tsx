import useThemeContext from "../../context/ThemeContext";
import { motion } from "framer-motion";

type Props = { onClick: () => void; isMovie: boolean };

export default function TypeButton({ onClick, isMovie }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <motion.div
         onTap={onClick}
         whileTap={{ scale: 0.95 }}
         whileHover={{ scale: 1.05 }}
         className="w-60 mt-10 cursor-pointer select-none"
      >
         <div className="bg-light-bg-secondary dark:bg-gray-500 rounded-xl shadow-lg p-5 w-full">
            <div
               className="-mt-10 w-full h-16 rounded-xl grid place-content-center drop-shadow-lg"
               style={{ backgroundColor: themeColor }}
            >
               <span className="material-icons text-5xl">
                  {isMovie ? "movie" : "tv"}
               </span>
            </div>
            <div className="font-semibold mb-1 text-xl">Searching for:</div>
            <span>{isMovie ? "Movies" : "TV Shows"}</span>
         </div>
      </motion.div>
   );
}
