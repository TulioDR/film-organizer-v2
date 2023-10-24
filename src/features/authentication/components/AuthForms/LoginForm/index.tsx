import useLogin from "@/features/authentication/hooks/useLogin";
import MainLoginForm from "./MainLoginForm";
import AuthFormContainer from "../../AuthForm/AuthFormContainer";

type Props = {
   showForm: boolean;
   openReset: () => void;
   openRegister: () => void;
};

export default function LoginForm({
   showForm,
   openReset,
   openRegister,
}: Props) {
   const { handleLogin } = useLogin();
   return (
      <AuthFormContainer isLoginForm showForm={showForm}>
         <MainLoginForm
            onSubmit={handleLogin}
            openReset={openReset}
            openRegister={openRegister}
         />
      </AuthFormContainer>
   );
}
