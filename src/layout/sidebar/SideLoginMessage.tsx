import { popUpAnimation } from "@/animations/PopUpAnimation";
import StoreModel from "@/models/StoreModel";
import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {};

export const sideLoginAnimation = {
   initial: { opacity: 0 },
   animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
   },
   exit: {},
};

export default function SideLoginMessage({}: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   const router = useRouter();
   const goToAuth = () => {
      router.push("/auth");
   };

   const messageContainerControls = useAnimationControls();
   const messageControls = useAnimationControls();

   useEffect(() => {
      if (expandSidebar) {
         messageContainerControls.start({
            width: 160,
            height: 160,
         });
      } else {
         messageContainerControls.start({
            width: 0,
            height: 0,
         });
      }
   }, [expandSidebar]);

   useEffect(() => {
      if (expandSidebar) {
         messageControls.start({
            opacity: 1,
            transition: { duration: 0.3, delay: 0.3 },
         });
      } else {
         messageControls.start({
            opacity: 0,
            transition: { duration: 0 },
         });
      }
   }, [expandSidebar]);

   return (
      <motion.div
         whileTap={{
            scale: expandSidebar ? 0.95 : 1,
         }}
         onTap={goToAuth}
         className="cursor-pointer flex flex-col items-center"
      >
         <motion.div
            variants={popUpAnimation}
            initial="initial"
            animate="animate"
            className="w-9 h-9 grid place-content-center rounded-lg -mb-[18px] shadow-lg z-10"
            style={{ backgroundColor: themeColor }}
         >
            <span className="material-icons">priority_high</span>
         </motion.div>
         <motion.div
            initial={{ width: 0, height: 0 }}
            animate={messageContainerControls}
            exit={{ width: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-secondary shadow-lg text-center overflow-hidden flex items-center justify-center"
         >
            <motion.span
               initial={{ opacity: 0 }}
               animate={messageControls}
               exit={{ opacity: 0, transition: { duration: 0 } }}
               className="px-5"
            >
               Login to Create and see your Lists!
            </motion.span>
         </motion.div>
      </motion.div>
   );
}
