import { useState, useEffect } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function useResetPassword() {
   const { signIn, setActive } = useSignIn();
   const [successfulCreation, setSuccessfulCreation] = useState(false);

   const router = useRouter();
   const [isComplete, setIsComplete] = useState<boolean>(false);
   useEffect(() => {
      if (isComplete && router.isReady) {
         setTimeout(() => {
            router.push("/");
         }, 400);
      }
   }, [router, isComplete]);

   const handleReset = async (values: any) => {
      const { email } = values;
      await signIn
         ?.create({
            strategy: "reset_password_email_code",
            identifier: email,
         })
         .then((_) => {
            setSuccessfulCreation(true);
         })
         .catch((err) => console.error("error", err.errors[0].longMessage));
   };

   const handleResetVerification = async (values: any) => {
      const { code, password } = values;
      await signIn
         ?.attemptFirstFactor({
            strategy: "reset_password_email_code",
            code,
            password,
         })
         .then((result) => {
            if (result.status === "complete") {
               setActive({ session: result.createdSessionId });
               //Here add notification that password was changed successfully
               setIsComplete(true);
            } else {
               console.log(result);
            }
         })
         .catch((err) => console.error("error", err.errors[0].longMessage));
   };

   return {
      handleReset,
      handleResetVerification,
      successfulCreation,
   };
}
