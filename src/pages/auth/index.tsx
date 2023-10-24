import SkipAuthButton from "@/features/authentication/components/SkipAuthButton";

import RenderingAnimation from "@/features/authentication/components/RenderingAnimation";
import LoginForm from "@/features/authentication/components/AuthForms/LoginForm";
import RegisterForm from "@/features/authentication/components/AuthForms/RegisterForm";
import ResetForm from "@/features/authentication/components/AuthForms/ResetForm";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import RegisterPanel from "@/features/authentication/components/AuthPanels/RegisterPanel";
import LoginPanel from "@/features/authentication/components/AuthPanels/LoginPanel";
import PanelsContainer from "@/features/authentication/components/AuthPanels/PanelsContainer";
import AuthAppLogo from "@/features/authentication/components/AuthAppLogo";
import AuthFormsContainer from "@/features/authentication/components/AuthForms/AuthFormsContainer";
import PageHead from "@/components/PageHead";

export default function Auth() {
   const { isLoaded, isSignedIn } = useUser();
   const router = useRouter();

   const [showLogin, setShowLogin] = useState<boolean>(true);
   const openLogin = () => setShowLogin(true);
   const openRegister = () => setShowLogin(false);

   const [showReset, setShowReset] = useState<boolean>(false);
   const openReset = () => setShowReset(true);
   const closeReset = () => setShowReset(false);

   if (isLoaded && isSignedIn) router.push("/");
   if (!isLoaded || (isLoaded && isSignedIn))
      return <div className="h-screen w-full bg-primary-light"></div>;

   return (
      <div className="md:h-screen pt-20 md:pt-0 w-full relative overflow-hidden bg-primary-light flex">
         <RenderingAnimation />
         <PageHead title="Authentication" />
         <AuthAppLogo />
         <SkipAuthButton />
         <AuthFormsContainer showLogin={showLogin}>
            <LoginForm
               showForm={showLogin}
               openReset={openReset}
               openRegister={openRegister}
            />
            <RegisterForm showForm={showLogin} openLogin={openLogin} />
         </AuthFormsContainer>
         <PanelsContainer showPanel={showLogin}>
            <AuthAppLogo white />
            <SkipAuthButton white />
            <LoginPanel openLogin={openLogin} />
            <RegisterPanel openRegister={openRegister} />
         </PanelsContainer>
         <ResetForm showReset={showReset} closeReset={closeReset} />
      </div>
   );
}
