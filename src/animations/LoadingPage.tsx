import { motion } from "framer-motion";
import usePageLoadingContext from "../context/PageLoadingContext";

export default function LoadingPage() {
   const { isLoading, setShowLoadingAnimation } = usePageLoadingContext();

   return (
      <motion.div
         exit={{ opacity: 0, transition: { duration: 0.3 } }}
         className="h-full grid place-content-center"
      >
         <div className="flex flex-col items-center">
            <div className="h-1 w-96">
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isLoading ? "75%" : "100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-white h-full"
                  onAnimationComplete={() => {
                     if (!isLoading) setShowLoadingAnimation(false);
                  }}
               ></motion.div>
            </div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { duration: 0.3 } }}
            >
               Film Organizer
            </motion.div>
         </div>
      </motion.div>
   );
}
