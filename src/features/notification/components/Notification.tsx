import useNotification from "@/features/notification/hooks/useNotification";
import StoreModel from "@/models/StoreModel";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

type Props = {};

export default function Notification({}: Props) {
   const { notification, success } = useSelector(
      (state: StoreModel) => state.notification
   );

   const { closeNotification } = useNotification();

   return (
      <AnimatePresence>
         {notification && (
            <motion.div
               initial={{ y: "100%", opacity: 0, scale: 0.9 }}
               animate={{ y: 0, opacity: 1, scale: 1 }}
               exit={{ y: "100%", opacity: 0, scale: 0.9 }}
               transition={{ duration: 0.3 }}
               className="fixed bottom-0 left-0 z-50 pl-10 pb-10"
            >
               <div
                  className={`rounded-xl px-4 py-3 text-white flex items-center gap-2 ${
                     success ? "bg-green-800" : "bg-red-700"
                  }`}
               >
                  <span>{notification}</span>
                  <button
                     onClick={closeNotification}
                     className="grid place-content-center"
                  >
                     <span className="material-symbols-outlined">close</span>
                  </button>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
