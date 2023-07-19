import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import AuthHead from "@/components/Auth/AuthHead";
import AuthAppLogo from "@/components/Auth/AuthAppLogo";

import { useAuthState } from "react-firebase-hooks/auth";
import app from "@/firebase/config";
import { getAuth, signOut } from "firebase/auth";
import AuthForm from "@/components/Auth/AuthForm";
import { AnimatePresence } from "framer-motion";
import ResetPassword from "@/components/Auth/ResetPassword";
import TranslateContainer from "@/components/Auth/AuthForm/TranslateContainer";

export const getServerSideProps: GetServerSideProps = async (context) => {
   console.log(context);
   // const supabase = createServerSupabaseClient(context);
   // const { data } = await supabase.auth.getSession();
   // if (data.session) {
   //    return {
   //       redirect: {
   //          destination: "/",
   //          permanent: false,
   //       },
   //    };
   // }

   return {
      props: {},
   };
};

export default function Auth() {
   const [isLogin, setIsLogin] = useState(true);
   const toggle = () => setIsLogin(!isLogin);

   // const [showModal, setShowModal] = useState<boolean>(false);
   // const closeModal = () => setShowModal(false);

   const [forgotPassWord, setForgotPassword] = useState<boolean>(false);
   const toggleForgotPassword = () => setForgotPassword((prev) => !prev);

   const auth = getAuth(app);
   const [user, loading, error] = useAuthState(auth);

   useEffect(() => {
      console.log(user);
      console.log(loading);
      console.log(error);
   }, [user, loading, error]);

   const signOutFunction = async () => {
      signOut(auth)
         .then((data) => {
            // Sign-out successful.
            console.log("you sign Out");
            console.log(data);
         })
         .catch((error) => {
            // An error happened.
            console.log("there is an error");
            console.log(error);
         });
      // try {
      //    const data = await signOut(auth);
      //    console.log("you sign Out");
      //    console.log(data);
      // } catch (e) {
      //    console.log(e);
      // }
   };

   return (
      <div className="overflow-hidden">
         <button
            onClick={signOutFunction}
            className="bg-red-600 text-white fixed top-0 right-0 py-5 px-8"
         >
            Sign Out
         </button>
         <AuthAppLogo />
         <AuthHead forgotPassWord={forgotPassWord} isLogin={isLogin} />
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
   );
}
