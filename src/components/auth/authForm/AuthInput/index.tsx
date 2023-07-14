import { Field, useFormikContext } from "formik";
import AuthInputError from "./AuthInputError";
import ToggleVisibilityButton from "./ToggleVisibilityButton";
import AuthInputIcon from "./AuthInputIcon";

type Props = {
   placeholder: string;
   type: string;
   name: string;
   icon: string;
   toggleVisibility?: boolean;
   toggle?: () => void;
   isSignUp: true | undefined;
};

export default function AuthInput({
   placeholder,
   type,
   name,
   icon,
   toggleVisibility,
   toggle,
   isSignUp,
}: Props) {
   const { errors, touched } = useFormikContext<any>();

   return (
      <div className="w-full">
         <div
            className={`w-full flex items-center relative h-11 rounded-full ${
               isSignUp ? "bg-white" : "bg-gray-400"
            }`}
         >
            <AuthInputIcon icon={icon} />
            <div className="relative flex-1">
               <Field
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  autoComplete="off"
                  className={`w-full bg-transparent h-full outline-none placeholder:text-secondary text-black ${
                     toggleVisibility ? "pr-10" : "pr-3"
                  }`}
               />
               {toggleVisibility && (
                  <ToggleVisibilityButton onClick={toggle} type={type} />
               )}
            </div>
         </div>
         {touched[name] && errors[name] && (
            <AuthInputError message={errors[name] as string} />
         )}
      </div>
   );
}
