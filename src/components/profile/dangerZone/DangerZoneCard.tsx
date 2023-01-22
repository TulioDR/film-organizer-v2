import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CardTitle from "../CardTitle";
import DeleteAccountButton from "./DeleteAccountButton";
import DeleteForm from "./DeleteForm";

type Props = {};

export default function DangerZoneCard({}: Props) {
   const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
   const toggle = () => setIsDeleteOpen(!isDeleteOpen);

   return (
      <motion.div
         initial={{ y: "100%", opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: "100%", opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="w-full bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-xl rounded-xl p-5"
      >
         <CardTitle>Danger Zone</CardTitle>
         <AnimatePresence mode="wait" initial={false}>
            <div key={`${isDeleteOpen}`}>
               {!isDeleteOpen ? (
                  <DeleteAccountButton onClick={toggle} />
               ) : (
                  <DeleteForm close={toggle} />
               )}
            </div>
         </AnimatePresence>
      </motion.div>
   );
}
