import { useSelector } from "react-redux";
import { motion } from "framer-motion";

type Props = { onClick: () => void; isMovie: boolean };

export default function TypeButton({ onClick, isMovie }: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   return (
      <motion.div
         onTap={onClick}
         whileTap={{ scale: 0.95 }}
         whileHover={{ scale: 1.05 }}
         initial={{ x: "-100%", opacity: 0 }}
         animate={{ x: 0, transition: { duration: 0.4 }, opacity: 1 }}
         exit={{ x: "-100%", transition: { duration: 0.4 }, opacity: 0 }}
         className="w-60 mt-10 cursor-pointer select-none"
      >
         <div className="bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-lg p-5 w-full">
            <div
               className="-mt-10 w-full h-16 rounded-xl grid place-content-center drop-shadow-lg"
               style={{ backgroundColor: themeColor }}
            >
               <span className="material-icons text-5xl">
                  {isMovie ? "movie" : "tv"}
               </span>
            </div>
            <div className="font-semibold text-lg text-light-2 dark:text-dark-2">
               Searching for: {isMovie ? "Movies" : "TV Shows"}
            </div>
         </div>
      </motion.div>
   );
}
