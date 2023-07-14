import { useFormikContext } from "formik";

type Props = {
   isLogin: boolean;
   toggle: () => void;
   forgotPassWord: boolean;
   setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BottomMessage({
   isLogin,
   toggle,
   forgotPassWord,
   setForgotPassword,
}: Props) {
   const { resetForm } = useFormikContext();
   const handleClick = () => {
      toggle();
      resetForm();
   };

   const openPasswordReset = () => {
      setForgotPassword(true);
      resetForm();
   };

   const closePasswordReset = () => {
      setForgotPassword(false);
      resetForm();
   };
   return (
      <div className="text-sm text-center mt-5 text-light-text-normal">
         {forgotPassWord ? (
            <span
               className="hover:underline cursor-pointer mb-1"
               onClick={closePasswordReset}
            >
               Go Back
            </span>
         ) : (
            <>
               {isLogin && (
                  <span
                     className="hover:underline cursor-pointer mb-1"
                     onClick={openPasswordReset}
                  >
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
            </>
         )}
      </div>
   );
}
