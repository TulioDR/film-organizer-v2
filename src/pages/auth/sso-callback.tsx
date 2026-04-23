import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SSOCallback() {
   const { handleRedirectCallback } = useClerk();

   useEffect(() => {
      const handleCallback = async () => {
         await handleRedirectCallback({
            signInFallbackRedirectUrl: "/",
            signUpFallbackRedirectUrl: "/",
         });
      };

      handleCallback();
   }, [handleRedirectCallback]);

   return (
      <div className="h-[100svh] w-full flex items-center">
         <div>Loading...</div>
      </div>
   );
}
