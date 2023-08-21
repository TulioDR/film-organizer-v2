import { useState, useEffect } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function useRegistration() {
   const { isLoaded, signUp, setActive } = useSignUp();
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
      if (!isLoaded) return;

      try {
         await signUp.create({
            username: username,
            emailAddress: email,
            password: password,
         });

         // send the email.
         await signUp.prepareEmailAddressVerification({
            strategy: "email_code",
         });

         // change the UI to our pending section.
         setPendingVerification(true);
      } catch (err: any) {
         console.error(JSON.stringify(err, null, 2));
      }
   };

   const handleRegisterVerification = async (values: any) => {
      const { code } = values;
      if (!isLoaded) {
         return;
      }

      try {
         const completeSignUp = await signUp.attemptEmailAddressVerification({
            code,
         });
         if (completeSignUp.status !== "complete") {
            /*  investigate the response, to see if there was an error
            or if the user needs to complete more steps.*/
            console.log(JSON.stringify(completeSignUp, null, 2));
         }
         if (completeSignUp.status === "complete") {
            await setActive({ session: completeSignUp.createdSessionId });
            setIsComplete(true);
         }
      } catch (err: any) {
         console.error(JSON.stringify(err, null, 2));
      }
   };

   return { handleRegister, pendingVerification, handleRegisterVerification };
}
