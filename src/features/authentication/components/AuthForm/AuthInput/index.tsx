import { Field, useFormikContext } from "formik";
import AuthInputError from "./AuthInputError";
import ToggleVisibilityButton from "./ToggleVisibilityButton";
import AuthInputIcon from "./AuthInputIcon";
import { useState } from "react";

type Props = {
   placeholder: string;
   name: string;
   icon: string;
   password?: true;
};

export default function AuthInput({
   placeholder,
   name,
   icon,
   password,
}: Props) {
   const { errors, touched } = useFormikContext<any>();

   const [hidePassword, setHidePassword] = useState<boolean>(true);
   const togglePassword = () => setHidePassword((prev) => !prev);

   const fieldType = password && hidePassword ? "password" : "text";

   return (
      <div className="w-full relative text-xs sm:text-sm md:text-base">
         <div
            className={`w-full flex items-center relative h-10 lg:h-12 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-black `}
         >
            <AuthInputIcon icon={icon} />
            <div className="relative flex-1">
               <Field
                  name={name}
                  type={fieldType}
                  placeholder={placeholder}
                  autoComplete="off"
                  className={`w-full bg-transparent h-full outline-none
                     placeholder:text-black/50 text-black dark:placeholder:text-white/50 dark:text-white
                      ${password ? "pr-10" : "pr-3"} 
                  `}
               />
               {password && (
                  <ToggleVisibilityButton
                     onClick={togglePassword}
                     type={fieldType}
                  />
               )}
            </div>
         </div>
         {touched[name] && errors[name] && (
            <AuthInputError message={errors[name] as string} />
         )}
      </div>
   );
}
