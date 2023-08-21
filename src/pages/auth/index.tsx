import { useState } from "react";
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

// import { useUser } from "@clerk/nextjs";
import { AnimatePresence } from "framer-motion";
import AuthSidebar from "@/features/authentication/components/AuthSidebar";
import SkipAuthButton from "@/features/authentication/components/SkipAuthButton";

import RegisterForm from "@/features/authentication/components/AuthForms/RegisterForm";

import LoginForm from "@/features/authentication/components/AuthForms/LoginForm";
import ResetForm from "@/features/authentication/components/AuthForms/ResetForm";
import RenderingAnimation from "@/features/authentication/components/RenderingAnimation";
import { useClerk } from "@clerk/nextjs";

export default function Auth() {
   // const { isLoaded: isUserLoaded, isSignedIn, user } = useUser();
   // useEffect(() => {
   //    console.log(isUserLoaded);
   //    console.log(isSignedIn);
   //    console.log(user);
   // }, [isUserLoaded, isSignedIn, user]);

   type AuthType = "login" | "register" | "reset";
   const [authType, setAuthType] = useState<AuthType>("login");
   const switchToReset = () => setAuthType("reset");

   const login = authType === "login";
   const register = authType === "register";
   const reset = authType === "reset";

   const { signOut } = useClerk();
   const logOut = async () => {
      signOut();
   };
   return (
      <div className="h-screen relative overflow-auto">
         <button
            onClick={logOut}
            className="fixed z-40 top-0 right-0 text-white bg-red-600 py-7 px-10"
         >
            Log out
         </button>
         <RenderingAnimation />
         <SkipAuthButton login={login} />
         <AuthSidebar setAuthType={setAuthType} />
         <AnimatePresence initial={false}>
            {login && <LoginForm key="login" switchToReset={switchToReset} />}
            {register && <RegisterForm key="register" />}
            {reset && <ResetForm key="reset" />}
         </AnimatePresence>
      </div>
   );
}
