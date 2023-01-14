import { Field } from "formik";

type Props = {
   placeholder: string;
   type: string;
   name: string;
   icon: string;
   password?: boolean;
   toggle?: () => void;
   touched: any;
   errors: any;
};

export default function AuthInput({
   placeholder,
   type,
   name,
   icon,
   password,
   toggle,
   touched,
   errors,
}: Props) {
   return (
      <div>
         <div className="flex items-center relative">
            <div className="text-dark-bg-secondary w-10 text-center">
               <span className="material-icons text-2xl">{icon}</span>
            </div>
            <Field
               name={name}
               type={type}
               placeholder={placeholder}
               autoComplete="off"
               className={`rounded-lg bg-gray-dark h-10 outline-none pl-3 placeholder:text-light-text-soft text-light-text-normal flex-1 shadow-xl ${
                  password ? "pr-10" : "pr-3"
               }`}
            />
            {password && (
               <div
                  onClick={toggle}
                  className="text-white w-10 text-center absolute right-0 top-0 h-full grid place-content-center cursor-pointer"
               >
                  <span className="material-icons text-2xl">
                     {type === "password" ? "visibility" : "visibility_off"}
                  </span>
               </div>
            )}
         </div>
         {touched[name] && errors[name] && (
            <div className="w-full text-red-600 pl-10 text-sm">
               {errors[name]}
            </div>
         )}
      </div>
   );
}
