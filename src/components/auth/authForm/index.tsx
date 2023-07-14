import SocialLogin from "./SocialLogin";
import FormikForm from "./FormikForm";
import AuthFormContainer from "./AuthFormContainer";
import FormSeparation from "./FormSeparation";
import AuthFormMessage from "./AuthFormMessage";

type Props = {
   isSignUp?: true;
};

export default function AuthForm({ isSignUp }: Props) {
   return (
      <AuthFormContainer>
         <div className="flex flex-col items-center gap-2">
            <AuthFormMessage isSignUp={isSignUp} />
            <div className="flex gap-2 flex-shrink-0">
               <SocialLogin />
               <SocialLogin />
               <SocialLogin />
            </div>
         </div>
         <div className="w-full max-w-[24rem]">
            <FormSeparation isSignUp={isSignUp} />
            <FormikForm isSignUp={isSignUp} />
         </div>
      </AuthFormContainer>
   );
}
