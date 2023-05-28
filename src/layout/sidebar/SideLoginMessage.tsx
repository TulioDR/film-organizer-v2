import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

type Props = {};

export default function SideLoginMessage({}: Props) {
   const { expandSidebar } = useSelector((state: any) => state.sidebar);
   const { themeColor } = useSelector((state: any) => state.theme);

   const router = useRouter();
   const goToAuth = () => {
      router.push("/auth");
   };
   return (
      <div className="pl-10 w-full">
         <motion.div
            whileTap={{
               scale: 0.95,
            }}
            animate={{
               height: expandSidebar ? 80 : 48,
               transition: { duration: 0.2 },
            }}
            onTap={goToAuth}
            className={`rounded-xl w-full text-center cursor-pointer flex items-center shadow-lg ${
               expandSidebar ? "px-5" : ""
            }`}
            style={{ backgroundColor: themeColor }}
         >
            <AnimatePresence mode="wait">
               {expandSidebar ? (
                  <motion.div
                     key="message"
                     initial={{ opacity: 0 }}
                     animate={{
                        opacity: 1,
                        transition: { duration: 0.1, delay: 0.3 },
                     }}
                  >
                     Login to Create and see your Lists!
                  </motion.div>
               ) : (
                  <motion.div key="exclamation" className="w-full">
                     <span className="material-icons">priority_high</span>
                  </motion.div>
               )}
            </AnimatePresence>
         </motion.div>
      </div>
   );
}
