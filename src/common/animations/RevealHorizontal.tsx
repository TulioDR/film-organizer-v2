import { motion } from "framer-motion";

interface Props {
   children: React.ReactNode;
   fromRight?: boolean;
   stagger?: boolean;
}

export default function RevealHorizontal({
   children,
   fromRight,
   stagger,
}: Props) {
   const item = {
      initial: { x: fromRight ? "100%" : "-100%", opacity: 0 },
      animate: {
         x: 0,
         opacity: 1,
         transition: { duration: 0.4, ease: "easeInOut" },
      },
      exit: {
         x: fromRight ? "100%" : "-100%",
         opacity: 0,
         transition: { duration: 0.4, ease: "easeInOut" },
      },
   };

   if (stagger) return <motion.div variants={item}>{children}</motion.div>;
   return (
      <motion.div
         variants={item}
         initial="initial"
         animate="animate"
         exit="exit"
      >
         {children}
      </motion.div>
   );
}
