import AuthForm from "../AuthForm";

type Props = {
   toggleForgotPassword: () => void;
};

export default function ResetPassword({ toggleForgotPassword }: Props) {
   return (
      <div className="fixed -z-10 top-0 left-0 h-screen bg-primary-dark text-white w-full flex items-center justify-center">
         <AuthForm
            type="reset"
            isSelected={false}
            onButtonClick={() => {}}
            toggleForgotPassword={toggleForgotPassword}
         />
      </div>
   );
}
