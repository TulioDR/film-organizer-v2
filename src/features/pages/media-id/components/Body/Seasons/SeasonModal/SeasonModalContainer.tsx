import { motion } from "framer-motion";
type Props = {
   children: React.ReactNode;
   close: () => void;
};

export default function SeasonModalContainer({ children, close }: Props) {
   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 grid place-content-center z-50"
         ></motion.div>
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 h-[calc(100vh-100px)] w-full pt-10 rounded-t-3xl bg-primary/50 backdrop-blur-md z-50 overflow-hidden"
         >
            {children}
         </motion.div>
      </>
   );
}
