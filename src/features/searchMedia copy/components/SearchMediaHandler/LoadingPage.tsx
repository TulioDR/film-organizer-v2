import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function LoadingPage() {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   const { query } = useRouter();
   const { media_type } = query;
   const isMovie = media_type === "movie";
   return (
      <motion.div
         exit={{ opacity: 0, transition: { duration: 1 } }}
         className="flex flex-col items-center justify-center mt-40 mx-auto"
      >
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
         >
            {`Loading ${isMovie ? "Movies" : "Series"}...`}
         </motion.div>
         <div className="h-3 w-full sm:w-96 bg-light-1 dark:bg-dark-1">
            <motion.div
               initial={{ width: 0 }}
               animate={{ width: "75%" }}
               exit={{ width: "100%" }}
               transition={{ duration: 0.4, ease: "easeInOut" }}
               className="h-full "
               style={{ backgroundColor: themeColor }}
            />
         </div>
      </motion.div>
   );
}
