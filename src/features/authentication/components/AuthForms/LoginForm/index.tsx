import useLogin from "@/features/authentication/hooks/useLogin";
import MainLoginForm from "./MainLoginForm";

type Props = {
   openReset: () => void;
   toggleForms: () => void;
};

export default function LoginForm({ openReset, toggleForms }: Props) {
   const { handleLogin } = useLogin();
   return (
      <MainLoginForm
         onSubmit={handleLogin}
         openReset={openReset}
         openRegister={toggleForms}
      />
   );
}
