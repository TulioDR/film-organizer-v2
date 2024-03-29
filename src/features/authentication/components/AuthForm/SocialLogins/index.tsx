import SocialLogin from "./SocialLogin";
import googleLogo from "@/data/images/logos/google.png";
import githubLogo from "@/data/images/logos/github.png";
import discordLogo from "@/data/images/logos/discord.png";
import { OAuthStrategy } from "@clerk/types";

import { useSignIn } from "@clerk/nextjs";

type Props = {};

export default function SocialLogins({}: Props) {
   const { signIn } = useSignIn();

   const handleAuth = (strategy: OAuthStrategy) => {
      try {
         signIn!.authenticateWithRedirect({
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
   const discordAuth = () => handleAuth("oauth_discord");

   return (
      <div className="flex justify-between gap-5">
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
         <SocialLogin
            logo={discordLogo}
            provider="discord"
            onClick={discordAuth}
         />
      </div>
   );
}
