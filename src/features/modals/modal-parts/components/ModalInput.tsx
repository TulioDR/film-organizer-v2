import { Field } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

type Props = {
   name: string;
   placeholder: string;
   maxLength?: number;
};

export default function ModalInput({ name, placeholder, maxLength }: Props) {
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
   const onFocus = () => setIsOnFocus(true);
   const onBlur = () => setIsOnFocus(false);

   const inputRef = useRef<HTMLInputElement>(null);

   const [value, setValue] = useState<string>("");

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
   };

   return (
      <div className="flex flex-col w-full">
         <div className="h-12 w-full relative">
            <Field
               ref={inputRef}
               name={name}
               placeholder={placeholder}
               autoComplete="off"
               maxLength={maxLength}
               className="w-full h-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 outline-none"
               onFocus={onFocus}
               value={value}
               onChange={handleChange}
               onBlur={onBlur}
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
         {maxLength && (
            <div className="w-full flex justify-end">
               <span className="text-xs text-text-2">
                  {value.length}/{maxLength}
               </span>
            </div>
         )}
      </div>
   );
}
