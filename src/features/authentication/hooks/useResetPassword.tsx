import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function useResetPassword() {
   const { signIn } = useSignIn();
   const [successfulCreation, setSuccessfulCreation] = useState(false);

   const router = useRouter();

   const handleReset = async (values: any) => {
      const { email } = values;

      const { error: createError } = await signIn.create({
         identifier: email,
      });

      if (createError) {
         console.error(JSON.stringify(createError, null, 2));
         return;
      }

      const { error: sendCodeError } =
         await signIn.resetPasswordEmailCode.sendCode();

      if (sendCodeError) {
         console.error(JSON.stringify(sendCodeError, null, 2));
         return;
      }

      setSuccessfulCreation(true);
   };

   const handleResetVerification = async (values: any) => {
      const { code, password } = values;

      const { error: verifyError } =
         await signIn.resetPasswordEmailCode.verifyCode({
            code,
         });

      if (verifyError) {
         console.error(JSON.stringify(verifyError, null, 2));
         return;
      }

      const { error: passwordError } =
         await signIn.resetPasswordEmailCode.submitPassword({
            password,
         });

      if (passwordError) {
         console.error(JSON.stringify(passwordError, null, 2));
         return;
      }

      if (signIn.status === "complete") {
         const { error } = await signIn.finalize({
            navigate: async ({ session, decorateUrl }) => {
               if (session?.currentTask) {
                  console.log(session.currentTask);
                  return;
               }
               const url = decorateUrl("/");
               if (url.startsWith("http")) {
                  window.location.href = url;
               } else {
                  router.push(url);
               }
            },
         });

         if (error) {
            console.error(JSON.stringify(error, null, 2));
         }
      }
   };

   return {
      handleReset,
      handleResetVerification,
      successfulCreation,
   };
}
