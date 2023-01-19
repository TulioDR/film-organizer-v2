import SocialOption from "./SocialOption";
import linkedin from "../../../data/images/logos/linkedin.png";
import github from "../../../data/images/logos/github.png";
import google from "../../../data/images/logos/google.png";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
type Props = {
   setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function SocialLogin({ setError }: Props) {
   const supabaseClient = useSupabaseClient();
   const signInWithGoogle = async () => {
      const { error } = await supabaseClient.auth.signInWithOAuth({
         provider: "google",
      });
      if (error) setError(error.message);
   };

   const signInWithGitHub = async () => {
      const { error } = await supabaseClient.auth.signInWithOAuth({
         provider: "github",
      });
      if (error) setError(error.message);
   };

   return (
      <div className="border-b border-gray-light grid grid-cols-3 gap-1 sm:gap-2">
         <SocialOption
            provider="google"
            logo={google}
            onClick={signInWithGoogle}
         />
         <SocialOption provider="LinkedIn" logo={linkedin} onClick={() => {}} />
         <SocialOption
            provider="github"
            logo={github}
            onClick={signInWithGitHub}
         />
      </div>
   );
}
