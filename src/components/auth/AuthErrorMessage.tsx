import { AnimatePresence, motion } from "framer-motion";

type Props = {
   error: string | null;
   setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function AuthErrorMessage({ error, setError }: Props) {
   return (
      <AnimatePresence>
         {error && (
            <motion.div
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               exit={{ y: "100%" }}
               transition={{ duration: 0.3 }}
               className="absolute bottom-0 left-0 pb-5 pl-5"
            >
               <div className="text-xs sm:text-sm text-white bg-red-700 rounded-lg py-2 px-4 flex items-center space-x-2">
                  <span>{error}</span>
                  <button onClick={() => setError(null)}>
                     <span className="material-icons text-xl">close</span>
                  </button>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
