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
      <motion.div
         whileTap={{
            scale: expandSidebar ? 0.95 : 1,
         }}
         onTap={goToAuth}
         className="cursor-pointer flex flex-col items-center"
      >
         <div
            className="w-9 h-9 grid place-content-center rounded-lg -mb-[18px] shadow-lg z-10"
            style={{ backgroundColor: themeColor }}
         >
            <span className="material-icons">priority_high</span>
         </div>
         <AnimatePresence>
            {expandSidebar && (
               <motion.div
                  initial={{ width: 0, height: 0 }}
                  animate={{ width: 160, height: 160 }}
                  exit={{ width: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl bg-secondary shadow-lg text-center overflow-hidden flex items-center justify-center"
               >
                  <motion.span
                     initial={{ opacity: 0 }}
                     animate={{
                        opacity: 1,
                        transition: { duration: 0.3, delay: 0.3 },
                     }}
                     exit={{ opacity: 0, transition: { duration: 0 } }}
                     className="px-5"
                  >
                     Login to Create and see your Lists!
                  </motion.span>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   );
}
