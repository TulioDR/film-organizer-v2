import { motion } from "framer-motion";

export default function RenderingAnimation() {
   return (
      <>
         {/* For Entering */}
         <motion.div
            initial={{ width: "100vw" }}
            animate={{ width: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 h-screen bg-primary-light dark:bg-primary-dark z-50"
         />
         {/* For Exiting */}
         <motion.div
            initial={{ width: 0 }}
            exit={{ width: "100vw" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 h-screen bg-primary-light dark:bg-primary-dark z-50"
         />
      </>
   );
}