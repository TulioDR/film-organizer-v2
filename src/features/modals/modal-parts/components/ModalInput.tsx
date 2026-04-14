import AuthInputError from "@/features/authentication/components/AuthForm/AuthInput/AuthInputError";
import { Field, useFormikContext } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
   name: string;
   placeholder: string;
   maxLength?: number;
};

export default function ModalInput({ name, placeholder, maxLength }: Props) {
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
   const { errors, touched, values, setTouched } = useFormikContext<any>();
   const onFocus = () => {
      setTouched({ ...touched, [name]: true });
      setIsOnFocus(true);
   };
   const onBlur = () => {
      setIsOnFocus(false);
   };

   return (
      <div className="flex flex-col w-full">
         <div className="h-12 w-full relative">
            <Field
               name={name}
               placeholder={placeholder}
               autoComplete="off"
               maxLength={maxLength}
               className="w-full h-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 outline-none"
               onFocus={onFocus}
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

         {(maxLength || (touched[name] && errors[name])) && (
            <div className="w-full flex justify-between">
               {touched[name] && errors[name] && (
                  <AuthInputError message={errors[name] as string} />
               )}
               {maxLength && (
                  <span className="text-xs text-black dark:text-white ml-auto">
                     {values[name].length}/{maxLength}
                  </span>
               )}
            </div>
         )}
      </div>
   );
}
