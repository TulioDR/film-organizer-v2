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
   login: boolean;
};

export default function AuthInput({
   placeholder,
   name,
   icon,
   password,
   login,
}: Props) {
   const { errors, touched } = useFormikContext<any>();

   const [hidePassword, setHidePassword] = useState<boolean>(true);
   const togglePassword = () => setHidePassword((prev) => !prev);

   const fieldType = password && hidePassword ? "password" : "text";

   return (
      <div className="w-full relative text-xs sm:text-sm md:text-base">
         <div
            className={`w-full flex items-center relative h-11 border-b ${
               login
                  ? "border-light-2 text-light-2"
                  : "border-dark-2 text-dark-2"
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
                     login
                        ? "placeholder:text-light-2 text-light-1"
                        : "placeholder:text-dark-2 text-dark-1"
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
            <AuthInputError message={errors[name] as string} login={login} />
         )}
      </div>
   );
}
