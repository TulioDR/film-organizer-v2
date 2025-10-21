import useScrollToTop from "@/common/hooks/useScrollToTop";
import useStopLoader from "@/features/layout/loader/hooks/useStopLoader";
import useAppSelector from "@/store/hooks/useAppSelector";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MediaCardsGrid({ children }: Props) {
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
         animate={{ opacity: isHidden ? 0 : 1 }}
         transition={{ duration: 0.2 }}
         className="w-full"
      >
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
