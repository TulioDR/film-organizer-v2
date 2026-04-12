import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSignIn, useClerk } from "@clerk/nextjs";

export default function useLogin() {
   const { signIn, errors, fetchStatus } = useSignIn();
   const router = useRouter();

   const { setActive } = useClerk();

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
      const { error } = await signIn.password({
         emailAddress: email,
         password,
      });

      // try {
      //    const result = await signIn.create({
      //       identifier: email,
      //       password,
      //    });

      //    if (resul. === "complete") {
      //       console.log(result);
      //       await setActive({ session: result.createdSessionId });
      //       setIsComplete(true);
      //       // console.log("you are here");
      //       // router.push("/");
      //    } else {
      //       /*Investigate why the login hasn't completed */
      //       console.log(result);
      //    }
      // } catch (err: any) {
      //    console.error("error", err.errors[0].longMessage);
      // }
   };

   return { handleLogin };
}
