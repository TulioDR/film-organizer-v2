import { useState, useEffect } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function useLogin() {
   const { isLoaded, signIn, setActive } = useSignIn();

   const router = useRouter();
   const [isComplete, setIsComplete] = useState<boolean>(false);
   useEffect(() => {
      if (isComplete && router.isReady) {
         setTimeout(() => {
            router.push("/");
         }, 400);
      }
   }, [router, isComplete]);

   const handleLogin = async (values: any) => {
      const { email, password } = values;
      if (!isLoaded) return;

      try {
         const result = await signIn.create({
            identifier: email,
            password,
         });

         if (result.status === "complete") {
            console.log(result);
            await setActive({ session: result.createdSessionId });
            setIsComplete(true);
            // console.log("you are here");
            // router.push("/");
         } else {
            /*Investigate why the login hasn't completed */
            console.log(result);
         }
      } catch (err: any) {
         console.error("error", err.errors[0].longMessage);
      }
   };

   return { handleLogin };
}
