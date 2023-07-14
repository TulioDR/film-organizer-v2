import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

import AuthBackground from "../../components/Auth/AuthBackground";
import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import AuthHead from "@/components/Auth/AuthHead";
import AuthAppLogo from "@/components/Auth/AuthAppLogo";

export const getServerSideProps: GetServerSideProps = async (context) => {
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
   const supabaseClient = useSupabaseClient();
   const router = useRouter();

   const [isLogin, setIsLogin] = useState(true);
   const toggle = () => setIsLogin(!isLogin);

   const [showModal, setShowModal] = useState<boolean>(false);
   const closeModal = () => setShowModal(false);

   const [emailSent, setEmailSent] = useState<string>("");
   const [error, setError] = useState<string | null>(null);

   const loginHandler = async (values: any) => {
      const { email, password } = values;
      const { error } = await supabaseClient.auth.signInWithPassword({
         email,
         password,
      });
      if (error) setError(error.message);
      else router.push("/");
   };

   const signUpHandler = async (values: any, resetForm: any) => {
      const { email, password } = values;
      const { error, data } = await supabaseClient.auth.signUp({
         email,
         password,
      });
      const alreadyExist = data?.user?.identities?.length === 0;
      if (!data.session && !error && !alreadyExist) {
         resetForm();
         setEmailSent(email);
         setShowModal(true);
      }
      if (alreadyExist) setError("User already exist");
      if (error) setError(error.message);
   };

   const forgotPasswordHandler = async (values: any) => {
      const { email } = values;
      const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
         redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
      });
      if (error) setError(error.message);
      else {
         setEmailSent(email);
         setShowModal(true);
      }
   };

   const [forgotPassWord, setForgotPassword] = useState<boolean>(false);

   return (
      <div className="">
         <AuthAppLogo />
         <AuthHead forgotPassWord={forgotPassWord} isLogin={isLogin} />
         <AuthBackground />
         <div className="flex h-screen w-full z-10">
            <Login onButtonClick={toggle} isSelected={isLogin} />
            <SignUp onButtonClick={toggle} isSelected={!isLogin} />
         </div>
      </div>
   );
}
