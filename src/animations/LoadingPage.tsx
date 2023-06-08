import { motion } from "framer-motion";
import { useSelector } from "react-redux";

interface Props {
   onAnimationComplete: () => void;
   isLoading: boolean;
}
export default function LoadingPage({ isLoading, onAnimationComplete }: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);
   return (
      <motion.div
         exit={{ opacity: 0, transition: { duration: 0.3 } }}
         className="flex items-center justify-center h-[calc(100vh-96px)] pb-10"
      >
         <div className="flex flex-col items-center w-full">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { duration: 0.3 } }}
            >
               Loading...
            </motion.div>
            <div className="h-9 w-full sm:w-96 border-2 border-white rounded-full overflow-hidden">
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isLoading ? "75%" : "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="h-full "
                  style={{ backgroundColor: themeColor }}
                  onAnimationComplete={onAnimationComplete}
               />
            </div>
         </div>
      </motion.div>
   );
}
