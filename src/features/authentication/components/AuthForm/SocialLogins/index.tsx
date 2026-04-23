import SocialLogin from "./SocialLogin";
import googleLogo from "@/data/images/logos/google.png";

import { useSignIn } from "@clerk/nextjs/legacy";
type Props = {};

export default function SocialLogins({}: Props) {
   const { signIn } = useSignIn();

   const handleGoogleSignIn = async () => {
      try {
         if (!signIn) return;

         await signIn.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/dashboard",
         });
      } catch (err) {
         console.log(err);
         console.error("OAuth error:", err);
      }
   };
   return (
      <div className="flex flex-col justify-between gap-4">
         <SocialLogin
            logo={googleLogo}
            provider="google"
            onClick={handleGoogleSignIn}
         />
      </div>
   );
}
