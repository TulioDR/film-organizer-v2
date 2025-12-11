import useScrollToTop from "@/common/hooks/useScrollToTop";
import useStopLoader from "@/features/layout/loader/hooks/useStopLoader";
import useAppSelector from "@/store/hooks/useAppSelector";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
   isExpanded: boolean;
};

export default function DesktopCardsGrid({
   children,
   isOpen,
   isExpanded,
}: Props) {
   useScrollToTop();
   useStopLoader();

   const { isHidden } = useAppSelector((state) => state.layout);

   const container = {
      initial: {},
      animate: {
         transition: {
            staggerChildren: 0.08,
         },
      },
      exit: {
         transition: {
            staggerChildren: 0.04,
            staggerDirection: -1,
         },
      },
   };

   return (
      <motion.div
         animate={{
            // opacity: isHidden ? 0 : 1,
            opacity: isExpanded ? 0.5 : 1,
         }}
         transition={{ duration: 0.3, ease: "easeInOut" }}
         className={`w-full mt-20 ${isOpen ? "pl-96" : ""}`}
      >
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`gap-4 2xl:gap-8 grid ${
               isOpen
                  ? "grid-cols-3 2xl:grid-cols-4 pl-8"
                  : "grid-cols-4 2xl:grid-cols-5"
            }`}
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
