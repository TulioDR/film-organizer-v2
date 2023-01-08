import { useRouter } from "next/router";
import { useRef, useState } from "react";
import AuthBackground from "../components/auth/AuthBackground";
import AuthContainer from "../components/auth/AuthContainer";
import Description from "../components/auth/Description";
import FormContainer from "../components/auth/FormContainer";
import ToggleType from "../components/auth/ToggleType";
import { GetServerSideProps } from "next";

import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const supabase = createServerSupabaseClient(context);
   const { data } = await supabase.auth.getSession();
   if (data.session) {
      return {
         redirect: {
            destination: "/",
            permanent: false,
         },
      };
   }

   return {
      props: {},
   };
};

export default function Auth() {
   const [isLogin, setIsLogin] = useState(true);
   const toggle = () => setIsLogin(!isLogin);

   const emailRef = useRef<HTMLInputElement>(null);
   const supabaseClient = useSupabaseClient();
   const router = useRouter();
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const email = emailRef.current?.value;
      if (!email) return;
      try {
         const result = await supabaseClient.auth.signInWithOtp({ email });
         console.log(result);
         router;
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="relative">
         <AuthBackground />
         <AuthContainer>
            {isLogin && <Description />}
            <FormContainer isLogin={isLogin}>
               <div className="text-2xl text-center mb-4">
                  {isLogin ? "Log In" : "Sign Up"}
               </div>
               <form
                  onSubmit={handleSubmit}
                  className="space-y-4 flex flex-col"
               >
                  <input
                     ref={emailRef}
                     type="email"
                     name=""
                     id=""
                     className="rounded-lg bg-gray-light h-10 outline-none pl-3"
                  />
                  <button className="h-10 bg-slate-800 rounded-full text-white">
                     Login
                  </button>
               </form>
               <ToggleType isLogin={isLogin} toggle={toggle} />
            </FormContainer>
         </AuthContainer>
      </div>
   );
}
