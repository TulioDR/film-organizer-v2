import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import AuthHead from "@/components/Auth/AuthHead";
import AuthAppLogo from "@/components/Auth/AuthAppLogo";
import AuthForm from "@/components/Auth/AuthForm";

import ResetPassword from "@/components/Auth/ResetPassword";
import TranslateContainer from "@/components/Auth/AuthForm/TranslateContainer";
import SkipButton from "@/components/Auth/SkipButton";
import AuthMobile from "@/components/Auth/Mobile/AuthMobile";

import { AnimatePresence } from "framer-motion";

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

import { useClerk } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
export default function Auth() {
   const [isLogin, setIsLogin] = useState(true);
   const toggle = () => setIsLogin(!isLogin);

   // const [showModal, setShowModal] = useState<boolean>(false);
   // const closeModal = () => setShowModal(false);

   const [forgotPassWord, setForgotPassword] = useState<boolean>(false);
   const toggleForgotPassword = () => setForgotPassword((prev) => !prev);

   const { isLoaded, isSignedIn, user } = useUser();
   const { signOut } = useClerk();

   const signOutFunction = async () => {
      const data = await signOut();
      console.log(data);
   };

   useEffect(() => {
      console.log(isLoaded);
      console.log(isSignedIn);
      console.log(user);
   }, [isLoaded, isSignedIn, user]);

   return (
      <div className="overflow-hidden">
         <AuthHead forgotPassWord={forgotPassWord} isLogin={isLogin} />
         <div className="lg:hidden">
            <AuthMobile />
         </div>
         <div className="hidden lg:block">
            <button
               onClick={signOutFunction}
               className="bg-red-600 text-white fixed top-0 right-0 py-5 px-8 z-10"
            >
               Sign Out
            </button>
            <AuthAppLogo white={forgotPassWord} />
            <SkipButton forgotPassWord={forgotPassWord} />
            <ResetPassword toggleForgotPassword={toggleForgotPassword} />
            <AnimatePresence initial={false}>
               {!forgotPassWord && (
                  <div className="flex h-screen w-full z-10 over-flow-hidden">
                     <TranslateContainer isSelected={isLogin}>
                        <AuthForm
                           onButtonClick={toggle}
                           isSelected={isLogin}
                           toggleForgotPassword={toggleForgotPassword}
                           type="login"
                        />
                     </TranslateContainer>
                     <TranslateContainer isSelected={!isLogin} register>
                        <AuthForm
                           onButtonClick={toggle}
                           isSelected={!isLogin}
                           type="register"
                        />
                     </TranslateContainer>
                  </div>
               )}
            </AnimatePresence>
         </div>
      </div>
   );
}
