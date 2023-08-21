import useLogin from "@/features/authentication/hooks/useLogin";
import AuthFormContainer from "../../AuthForm/AuthFormContainer";
import MainLoginForm from "./MainLoginForm";

type Props = {
   switchToReset: () => void;
};

export default function LoginForm({ switchToReset }: Props) {
   const { handleLogin } = useLogin();
   return (
      <AuthFormContainer login>
         <MainLoginForm switchToReset={switchToReset} onSubmit={handleLogin} />
      </AuthFormContainer>
   );
}
