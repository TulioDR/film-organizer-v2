import SocialLogin from "./SocialLogin";
import googleLogo from "@/data/images/logos/google.png";
// import githubLogo from "@/data/images/logos/github.png";

import { OAuthStrategy } from "@clerk/shared/types";
import { useSignIn } from "@clerk/nextjs";

type Props = {};

export default function SocialLogins({}: Props) {
   const { signIn } = useSignIn();

   const signInWith = async (strategy: OAuthStrategy) => {
      const { error } = await signIn.sso({
         strategy,
         redirectCallbackUrl: "/auth/sso-callback",
         redirectUrl: "/",
      });

      if (error) {
         console.error(JSON.stringify(error, null, 2));
      }
   };

   // const handleAuth = async (strategy: "oauth_google" | "oauth_github") => {
   //    try {
   //       if (!isLoaded) return;

   //       await signIn.authenticateWithRedirect({
   //          strategy: strategy,
   //          redirectUrl: "/auth/sso-callback",
   //          redirectUrlComplete: "/",
   //       });
   //    } catch (error) {
   //       console.log(error);
   //    }
   // };

   const googleAuth = () => signInWith("oauth_google");
   // const githubAuth = () => handleAuth("oauth_github");

   return (
      <div className="flex justify-between gap-4">
         <SocialLogin
            logo={googleLogo}
            provider="google"
            onClick={googleAuth}
         />
         {/* <SocialLogin
            logo={githubLogo}
            provider="github"
            onClick={githubAuth}
         /> */}
      </div>
   );
}
