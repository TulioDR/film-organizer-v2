import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isExiting: boolean;
};

export default function SearchMediaCardsContainer({
   children,
   isExiting,
}: Props) {
   return (
      <motion.div
         animate={isExiting && { opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className={`gap-4 grid grid-cols-2 md:grid-cols-3 mt-12  ${
            true
               ? "lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6"
               : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
         }`}
      >
         {children}
      </motion.div>
   );
}
