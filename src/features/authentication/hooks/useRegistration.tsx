import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";

export default function useRegistration() {
   const { isLoaded, signUp } = useSignUp();
   const [pendingVerification, setPendingVerification] = useState(false);

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
   return { handleRegister, pendingVerification };
}
