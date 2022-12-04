import { motion } from "framer-motion";

type Props = {
   selectedImg: string | null;
   children: React.ReactNode;
};

export default function ExitDetails({ selectedImg, children }: Props) {
   return (
      <motion.div
         exit={
            selectedImg
               ? {
                    opacity: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                 }
               : {}
         }
         className="w-full details-height"
      >
         {children}
      </motion.div>
   );
}
