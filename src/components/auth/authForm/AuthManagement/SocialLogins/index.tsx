import React from "react";
import FormSeparation from "./FormSeparation";
import SocialLogin from "./SocialLogin";
import googleSignIn from "@/firebase/auth/signup";

type Props = {
   register: boolean;
};

export default function SocialLogins({ register }: Props) {
   const handleClick = () => {
      googleSignIn();
   };
   return (
      <div className="w-40 flex-shrink-0">
         <div className="flex justify-between w-full">
            <SocialLogin onClick={handleClick} />
            <SocialLogin onClick={handleClick} />
            <SocialLogin onClick={handleClick} />
         </div>
         <FormSeparation register={register} />
      </div>
   );
}
