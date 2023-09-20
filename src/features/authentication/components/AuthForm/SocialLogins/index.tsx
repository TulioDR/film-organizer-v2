import FormSeparation from "./FormSeparation";
import SocialLogin from "./SocialLogin";
import googleLogo from "@/data/images/logos/google.png";
import githubLogo from "@/data/images/logos/github.png";
import discordLogo from "@/data/images/logos/discord.png";
import { OAuthStrategy } from "@clerk/types";

import { useSignIn } from "@clerk/nextjs";

type Props = {
   dark?: true;
};

export default function SocialLogins({ dark }: Props) {
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
      <div className="w-40 -mb-2">
         <div className="flex justify-between w-full">
            <SocialLogin
               logo={googleLogo}
               provider="google"
               onClick={googleAuth}
               dark={dark}
            />
            <SocialLogin
               logo={githubLogo}
               provider="github"
               onClick={githubAuth}
               dark={dark}
            />
            <SocialLogin
               logo={discordLogo}
               provider="discord"
               onClick={discordAuth}
               dark={dark}
            />
         </div>
         <FormSeparation dark={dark} />
      </div>
   );
}
