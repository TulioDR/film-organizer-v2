interface Props {
   isLogin: boolean;
   forgotPassWord: boolean;
}
export default function AuthHeader({ isLogin, forgotPassWord }: Props) {
   return (
      <>
         <div className="text-light-text-normal">
            {forgotPassWord
               ? "Reset your password"
               : isLogin
               ? "Login to your account"
               : "Sign Up today to start saving your lists!"}
         </div>
         {forgotPassWord && (
            <div className="text-sm text-light-text-normal">
               {
                  "Type in your email and we'll send you a link to reset your password"
               }
            </div>
         )}
      </>
   );
}
