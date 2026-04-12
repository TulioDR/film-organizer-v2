import Link from "next/link";
import { motion } from "framer-motion";

export default function ListsLoginAdvice() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="flex flex-col gap-4 items-center justify-center mt-8 text-black dark:text-white w-full"
      >
         <span className="material-symbols-outlined !text-6xl sm:!text-8xl">
            format_list_bulleted
         </span>
         <div className="text-base sm:text-lg md:text-xl text-center">
            {"Don't miss the opportunity to create your own Playlists"}
         </div>
         <div className="text-xs sm:text-sm md:text-base text-center">
            Log in to save the Movies and Series as you need
         </div>
         <Link
            href="/auth"
            className={`h-10 px-4 flex items-center rounded-md
               border border-border-light dark:border-border-dark
               hover:border-black dark:hover:border-white
               active:border-black dark:active:border-white 
               bg-accent dark:text-black text-white
               tracking-widest font-semibold
            `}
         >
            Log in
         </Link>
      </motion.div>
   );
}
