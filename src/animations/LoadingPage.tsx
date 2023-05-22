import { motion } from "framer-motion";
import usePageLoadingContext from "../context/PageLoadingContext";

export default function LoadingPage() {
   const { isLoading, setShowLoadingAnimation } = usePageLoadingContext();

   return (
      <motion.div
         exit={{ opacity: 0, transition: { duration: 0.3 } }}
         className="flex items-center justify-center"
         style={{ height: "calc(100vh - 96px)" }}
      >
         <div className="flex flex-col items-center w-full">
            <div className="h-1 w-full sm:w-96">
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isLoading ? "75%" : "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-light-bg-primary h-full"
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
