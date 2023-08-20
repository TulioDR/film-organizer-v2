import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function useVerification() {
   const router = useRouter();
   const { isLoaded, signUp, setActive } = useSignUp();
   const handleVerification = async (values: any) => {
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
            router.push("/");
         }
      } catch (err: any) {
         console.error(JSON.stringify(err, null, 2));
      }
   };

   return { handleVerification };
}
