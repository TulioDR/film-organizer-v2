import Link from "next/link";
import { motion } from "framer-motion";

export default function ListsLoginAdvice() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="flex flex-col gap-3 items-center justify-center mt-5"
      >
         <div className="text-dark-1">
            <span className="material-symbols-outlined !text-6xl sm:!text-8xl">
               format_list_bulleted
            </span>
         </div>
         <div className="text-base sm:text-lg md:text-xl text-center">
            {"Don't miss the opportunity to create your own Lists"}
         </div>
         <div className="text-xs sm:text-sm md:text-base text-center">
            Log in to save the Movies and Shows as you need
         </div>
         <Link
            href="/auth"
            className="h-10 px-4 flex items-center bg-light-1 text-dark-1 dark:bg-dark-1 dark:text-light-1"
         >
            Log in
         </Link>
      </motion.div>
   );
}
