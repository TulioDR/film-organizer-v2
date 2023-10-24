import { motion } from "framer-motion";

export default function RenderingAnimation() {
   return (
      <motion.div
         initial={{ height: "100vh" }}
         animate={{ height: 0 }}
         exit={{ height: "100vh" }}
         transition={{ duration: 0.5 }}
         className="fixed top-0 right-0 w-screen bg-primary-light dark:bg-primary-dark z-50"
      />
   );
}
