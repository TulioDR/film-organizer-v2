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
   register: boolean;
};

export default function AuthInput({
   placeholder,
   name,
   icon,
   password,
   register,
}: Props) {
   const { errors, touched } = useFormikContext<any>();

   const [hidePassword, setHidePassword] = useState<boolean>(true);
   const togglePassword = () => setHidePassword((prev) => !prev);

   const type = password && hidePassword ? "password" : "text";

   return (
      <div className="w-full relative">
         <div
            className={`w-full flex items-center relative h-11 border-b ${
               register
                  ? "border-gray-400 text-white"
                  : "border-gray-500 text-gray-400"
            }`}
         >
            <AuthInputIcon icon={icon} />
            <div className="relative flex-1">
               <Field
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  autoComplete="off"
                  className={`w-full bg-transparent h-full outline-none ${
                     password ? "pr-10" : "pr-3"
                  } ${
                     register
                        ? "placeholder:text-gray-400 text-white"
                        : "placeholder:text-gray-500 text-black"
                  }`}
               />
               {password && (
                  <ToggleVisibilityButton
                     onClick={togglePassword}
                     type={type}
                  />
               )}
            </div>
         </div>
         {touched[name] && errors[name] && (
            <AuthInputError
               message={errors[name] as string}
               register={register}
            />
         )}
      </div>
   );
}
