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
import LoadingSpinner from "@/common/components/LoadingSpinner";
import AuthContainer from "@/features/authentication/components/AuthContainer";

export default function Auth() {
   const { isLoaded, isSignedIn } = useUser();

   useEffect(() => {
      console.log(isLoaded, isSignedIn);
   }, [isLoaded, isSignedIn]);

   const router = useRouter();

   const [showLogin, setShowLogin] = useState<boolean>(true);
   const toggleForms = () => setShowLogin((prev) => !prev);

   const [showReset, setShowReset] = useState<boolean>(false);
   const openReset = () => setShowReset(true);
   const closeReset = () => setShowReset(false);

   // if (isLoaded && isSignedIn) router.push("/");
   // if (!isLoaded || (isLoaded && isSignedIn))
   //    return (
   //       <div className="h-[100svh] w-full flex items-center justify-center">
   //          <div className="w-40">
   //             <LoadingSpinner />
   //          </div>
   //       </div>
   //    );

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
