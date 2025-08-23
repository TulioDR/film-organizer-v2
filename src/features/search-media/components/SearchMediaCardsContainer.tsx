import useScrollToTop from "@/common/hooks/useScrollToTop";
import Store from "@/common/models/Store";
import { motion, stagger } from "framer-motion";
import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
};

export default function SearchMediaCardsContainer({ children }: Props) {
   useScrollToTop();
   const { isHidden } = useSelector((state: Store) => state.layout);

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
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         // initial={{ opacity: 0 }}
         // animate={{ opacity: isHidden ? 0 : 1 }}
         // exit={{ opacity: 0 }}
         // transition={{ duration: 0.2 }}
         className="gap-4 grid grid-cols-2 md:grid-cols-3 pb-24 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5"
      >
         {children}
      </motion.div>
   );
}
