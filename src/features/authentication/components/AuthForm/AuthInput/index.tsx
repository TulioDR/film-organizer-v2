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
   dark?: true;
};

export default function AuthInput({
   placeholder,
   name,
   icon,
   password,
   dark,
}: Props) {
   const { errors, touched } = useFormikContext<any>();

   const [hidePassword, setHidePassword] = useState<boolean>(true);
   const togglePassword = () => setHidePassword((prev) => !prev);

   const fieldType = password && hidePassword ? "password" : "text";

   return (
      <div className="w-full relative text-xs sm:text-sm md:text-base">
         <div
            className={`w-full flex items-center relative h-11 border-b ${
               dark
                  ? "border-dark-2 text-dark-2"
                  : "border-light-2 text-light-2"
            }`}
         >
            <AuthInputIcon icon={icon} />
            <div className="relative flex-1">
               <Field
                  name={name}
                  type={fieldType}
                  placeholder={placeholder}
                  autoComplete="off"
                  className={`w-full bg-transparent h-full outline-none ${
                     password ? "pr-10" : "pr-3"
                  } ${
                     dark
                        ? "placeholder:text-dark-2 text-dark-1"
                        : "placeholder:text-light-2 text-light-1"
                  }`}
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
            <AuthInputError message={errors[name] as string} dark={dark} />
         )}
      </div>
   );
}
