import SocialLogin from "./SocialLogin";
import googleLogo from "@/data/images/logos/google.png";
import { useSignIn } from "@clerk/react";
type Props = {};

export default function SocialLogins({}: Props) {
   const { signIn, errors } = useSignIn();
   const signInWithGoogle = async () => {
      const { error } = await signIn.sso({
         strategy: "oauth_google",
         redirectCallbackUrl: "/sso-callback",
         redirectUrl: "/",
      });

      if (error) {
         console.error(JSON.stringify(error, null, 2));
      }
      // If no error, the browser redirects to Google
   };
   return (
      <div className="flex flex-col justify-between gap-4">
         <SocialLogin
            logo={googleLogo}
            provider="google"
            onClick={signInWithGoogle}
         />
         {errors.fields.identifier && <p>{errors.fields.identifier.message}</p>}
      </div>
   );
}
