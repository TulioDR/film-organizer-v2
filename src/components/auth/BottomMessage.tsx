import { useFormikContext } from "formik";

type Props = {
   isLogin: boolean;
   toggle: () => void;
};

export default function BottomMessage({ isLogin, toggle }: Props) {
   const { resetForm } = useFormikContext();
   const handleClick = () => {
      resetForm();
      toggle();
   };
   return (
      <div className="text-sm text-center mt-5 text-light-text-normal">
         {isLogin && (
            <span className="hover:underline cursor-pointer mb-1">
               Forgot your password?
            </span>
         )}
         <div>
            <span>
               {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
            </span>
            <span
               onClick={handleClick}
               className="text-blue-600 cursor-pointer hover:underline"
            >
               {isLogin ? "Register!" : "Log In!"}
            </span>
         </div>
      </div>
   );
}
