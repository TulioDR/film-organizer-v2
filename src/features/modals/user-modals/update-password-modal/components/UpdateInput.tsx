import AuthInputError from "@/features/authentication/components/AuthForm/AuthInput/AuthInputError";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

type Props = {
   name: string;
   placeholder: string;
};

export default function UpdateInput({ name, placeholder }: Props) {
   const { errors, touched } = useFormikContext<any>();

   const [isVisible, setIsVisible] = useState<boolean>(false);
   const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
   };

   return (
      <div className="w-full">
         <div className="w-full flex gap-5 text-xs sm:text-sm md:text-base items-center rounded-lg bg-secondary-light dark:bg-secondary-dark h-10 px-5">
            <Field
               name={name}
               type={isVisible ? "text" : "password"}
               placeholder={placeholder}
               autoComplete="off"
               className="flex-1 bg-transparent h-full outline-none placeholder:text-light-2 text-light-1 dark:placeholder:text-dark-2 dark:text-dark-1"
            />
            <button
               type="button"
               onClick={toggleVisibility}
               className="grid place-content-center"
            >
               <span className="material-symbols-outlined">
                  {isVisible ? "visibility_off" : "visibility"}
               </span>
            </button>
         </div>
         {touched[name] && errors[name] && (
            <AuthInputError message={errors[name] as string} />
         )}
      </div>
   );
}
