import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
   value: string;
   onChange: (e: any) => void;
};

export default function DeleteUserInput({ value, onChange }: Props) {
   const [isOnFocus, setIsFocus] = useState<boolean>(false);

   const onFocus = () => setIsFocus(true);
   const onBlur = () => setIsFocus(false);

   return (
      <div className="h-12 w-full relative">
         <input
            placeholder={"Type: DELETE"}
            autoComplete="off"
            className="w-full h-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 outline-none"
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            onChange={onChange}
         />
         <div className="absolute bottom-0 left-0 flex justify-center h-0.5 w-full">
            <div className="absolute inset-0 bg-black/50 dark:bg-white/50" />
            <AnimatePresence>
               {isOnFocus && (
                  <motion.div
                     initial={{ width: 0 }}
                     animate={{ width: "100%" }}
                     exit={{ width: 0 }}
                     transition={{ duration: 0.2 }}
                     className="h-full bg-accent z-10 relative"
                  />
               )}
            </AnimatePresence>
         </div>
      </div>
   );
}
