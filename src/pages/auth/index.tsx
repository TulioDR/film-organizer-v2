import AuthSidebar from "@/features/authentication/components/AuthSidebar";
import SkipAuthButton from "@/features/authentication/components/SkipAuthButton";

import RenderingAnimation from "@/features/authentication/components/RenderingAnimation";
import LoginForm from "@/features/authentication/components/AuthForms/LoginForm";
import RegisterForm from "@/features/authentication/components/AuthForms/RegisterForm";
import ResetForm from "@/features/authentication/components/AuthForms/ResetForm";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Auth() {
   type AuthType = "login" | "register" | "reset";
   const [authType, setAuthType] = useState<AuthType>("login");
   const switchToReset = () => setAuthType("reset");

   const login = authType === "login";
   const register = authType === "register";
   const reset = authType === "reset";

   const { isLoaded, isSignedIn } = useUser();
   const router = useRouter();
   if (isLoaded && isSignedIn) router.push("/");
   if (!isLoaded || (isLoaded && isSignedIn))
      return (
         <div className="h-screen w-full bg-primary-light dark:bg-primary-dark"></div>
      );

   return (
      <div className="min-h-screen relative overflow-auto">
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
