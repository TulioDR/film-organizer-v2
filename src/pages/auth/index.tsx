import LoginForm from "@/features/authentication/components/AuthForms/LoginForm";
import RegisterForm from "@/features/authentication/components/AuthForms/RegisterForm";
import ResetForm from "@/features/authentication/components/AuthForms/ResetForm";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import RegisterPanel from "@/features/authentication/components/AuthPanels/RegisterPanel";
import LoginPanel from "@/features/authentication/components/AuthPanels/LoginPanel";
import PanelsContainer from "@/features/authentication/components/AuthPanels/PanelsContainer";
import PageHead from "@/common/components/PageHead";
import AuthFormContainer from "@/features/authentication/components/AuthForm/AuthFormContainer";
import Responsive from "@/common/components/Responsive";
import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import AuthContainer from "@/features/authentication/components/AuthContainer";

import dynamic from "next/dynamic";
const LoadingSpinner = dynamic(
   () => import("@/common/components/LoadingSpinner"),
   { ssr: false },
);

export default function Auth() {
   const { isLoaded, isSignedIn } = useUser();

   const router = useRouter();

   const [showLogin, setShowLogin] = useState<boolean>(true);
   const toggleForms = () => setShowLogin((prev) => !prev);

   const [showReset, setShowReset] = useState<boolean>(false);
   const openReset = () => setShowReset(true);
   const closeReset = () => setShowReset(false);

   useEffect(() => {
      if (isLoaded && isSignedIn) {
         router.push("/");
      }
   }, [isLoaded, isSignedIn, router]);

   if (!isLoaded || isSignedIn) {
      return (
         <div className="h-[100svh] w-full flex items-center justify-center">
            <div className="w-40">
               <LoadingSpinner />
            </div>
         </div>
      );
   }

   return (
      <>
         <PageHead title="Authentication" />
         <AuthContainer>
            <AuthFormContainer reverse showForm={showLogin}>
               <LoginForm openReset={openReset} toggleForms={toggleForms} />
            </AuthFormContainer>
            <AuthFormContainer showForm={!showLogin}>
               <RegisterForm toggleForms={toggleForms} />
            </AuthFormContainer>

            <Responsive minWidth={XL_MEDIA_QUERY}>
               <PanelsContainer showPanel={showLogin}>
                  <LoginPanel openLogin={toggleForms} />
                  <RegisterPanel openRegister={toggleForms} />
               </PanelsContainer>
            </Responsive>

            <ResetForm showReset={showReset} closeReset={closeReset} />
         </AuthContainer>
      </>
   );
}
