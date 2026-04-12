import SocialLogin from "./SocialLogin";
import googleLogo from "@/data/images/logos/google.png";
import githubLogo from "@/data/images/logos/github.png";

import { useSignIn } from "@clerk/nextjs/legacy";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

type Props = {};

export default function SocialLogins({}: Props) {
   const { signIn, isLoaded } = useSignIn();

   const user = useUser();
   useEffect(() => {
      console.log(user.user);
   }, [user.user]);

   const handleAuth = async (strategy: "oauth_google" | "oauth_github") => {
      try {
         if (!isLoaded) return;

         await signIn.authenticateWithRedirect({
            strategy: strategy,
            redirectUrl: "/auth/sso-callback",
            redirectUrlComplete: "/",
         });
      } catch (error) {
         console.log(error);
      }
   };

   const googleAuth = () => handleAuth("oauth_google");
   const githubAuth = () => handleAuth("oauth_github");

   return (
      <div className="flex justify-between gap-4">
         <SocialLogin
            logo={googleLogo}
            provider="google"
            onClick={googleAuth}
         />
         <SocialLogin
            logo={githubLogo}
            provider="github"
            onClick={githubAuth}
         />
      </div>
   );
}
