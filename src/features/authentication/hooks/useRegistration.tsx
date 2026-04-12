import { useState, useEffect } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function useRegistration() {
   const { signUp } = useSignUp();
   const [pendingVerification, setPendingVerification] = useState(false);

   const router = useRouter();
   const [isComplete, setIsComplete] = useState<boolean>(false);
   useEffect(() => {
      if (isComplete && router.isReady) {
         setTimeout(() => {
            router.push("/");
         }, 400);
      }
   }, [router, isComplete]);

   const handleRegister = async (values: any) => {
      const { email, password, username } = values;

      const { error } = await signUp.password({
         emailAddress: email,
         password,
         username,
      });

      if (error) {
         console.error(JSON.stringify(error, null, 2));
      } else {
         await signUp.verifications.sendEmailCode();
         setPendingVerification(true);
      }
   };

   const handleRegisterVerification = async (values: any) => {
      const { code } = values;
      console.log("the code is:", code);
      try {
         await signUp.verifications.verifyEmailCode({
            code,
         });
         if (signUp.status === "complete") {
            await signUp.finalize({
               // Redirect the user to the home page after signing up
               navigate: ({ session, decorateUrl }) => {
                  if (session?.currentTask) {
                     console.log(session?.currentTask);
                     return;
                  }

                  // If no session tasks, navigate the signed-in user to the home page
                  const url = decorateUrl("/");
                  if (url.startsWith("http")) {
                     window.location.href = url;
                  } else {
                     router.push(url);
                  }
               },
            });
         }
      } catch (err: any) {
         console.error("Sign-up attempt not complete:", signUp);
         console.error(JSON.stringify(err, null, 2));
      }
   };

   return { handleRegister, pendingVerification, handleRegisterVerification };
}
