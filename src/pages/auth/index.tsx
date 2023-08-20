import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (_context) => {
   // console.log(context);
   // if (userExist) {
   //    return {
   //       redirect: {
   //          destination: "/",
   //          permanent: false,
   //       },
   //    };
   // }
   return { props: {} };
};

import { useUser } from "@clerk/nextjs";
import { AnimatePresence } from "framer-motion";
import AuthSidebar from "@/features/authentication/components/AuthSidebar";
import AuthFormContainer from "@/features/authentication/components/AuthForm/AuthFormContainer";
import AuthForm from "@/features/authentication/components/AuthForm";
import PendingForm from "@/features/authentication/components/PendingForm";
import useRegistration from "@/features/authentication/hooks/useRegistration";
import useLogin from "@/features/authentication/hooks/useLogin";
import SkipAuthButton from "@/features/authentication/components/SkipAuthButton";

export default function Auth() {
   const { isLoaded: isUserLoaded, isSignedIn, user } = useUser();
   useEffect(() => {
      console.log(isUserLoaded);
      console.log(isSignedIn);
      console.log(user);
   }, [isUserLoaded, isSignedIn, user]);

   type AuthType = "login" | "register" | "reset";
   const [authType, setAuthType] = useState<AuthType>("login");
   const switchToReset = () => setAuthType("reset");

   const login = authType === "login";
   const register = authType === "register";
   const reset = authType === "reset";

   const { handleLogin } = useLogin();
   const { handleRegister, pendingVerification } = useRegistration();

   return (
      <div className="h-screen relative overflow-auto">
         <SkipAuthButton login={login} />
         <AuthSidebar setAuthType={setAuthType} />
         <AnimatePresence initial={false}>
            {login && (
               <AuthFormContainer key="login" login>
                  <AuthForm
                     onSubmit={handleLogin}
                     switchToReset={switchToReset}
                     login
                  />
               </AuthFormContainer>
            )}
            {register && (
               <AuthFormContainer key="register" register>
                  {pendingVerification ? (
                     <PendingForm />
                  ) : (
                     <AuthForm onSubmit={handleRegister} register />
                  )}
               </AuthFormContainer>
            )}
            {reset && (
               <AuthFormContainer key="reset" reset>
                  <AuthForm onSubmit={handleLogin} reset />
               </AuthFormContainer>
            )}
         </AnimatePresence>
      </div>
   );
}
