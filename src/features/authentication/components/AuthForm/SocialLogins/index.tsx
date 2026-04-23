import SocialLogin from "./SocialLogin";
import googleLogo from "@/data/images/logos/google.png";
import githubLogo from "@/data/images/logos/github.png";

import { useSignIn } from "@clerk/nextjs/legacy";

type Props = {};

export default function SocialLogins({}: Props) {
   const { isLoaded } = useSignIn();

   const handleAuth = async (_strategy: "oauth_google" | "oauth_github") => {
      try {
         if (!isLoaded) return;
         console.log("Sign-in URL:", process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL);
         // await signIn.authenticateWithRedirect({
         //    strategy: strategy,
         //    redirectUrl: "/auth/sso-callback",
         //    redirectUrlComplete: "/",
         // });
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
