import useRegistration from "../../../hooks/useRegistration";
import AuthFormContainer from "../../AuthForm/AuthFormContainer";
import MainRegisterForm from "./MainRegisterForm";
import RegisterVerificationForm from "./RegisterVerificationForm";

interface Props {
   showForm: boolean;
   openLogin: () => void;
}

export default function RegisterForm({ showForm, openLogin }: Props) {
   const { handleRegister, pendingVerification, handleRegisterVerification } =
      useRegistration();
   return (
      <AuthFormContainer showForm={showForm}>
         {pendingVerification ? (
            <RegisterVerificationForm onSubmit={handleRegisterVerification} />
         ) : (
            <MainRegisterForm onSubmit={handleRegister} openLogin={openLogin} />
         )}
      </AuthFormContainer>
   );
}
