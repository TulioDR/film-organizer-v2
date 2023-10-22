import useRegistration from "../../../hooks/useRegistration";
import AuthFormContainer from "../../AuthForm/AuthFormContainer";
import MainRegisterForm from "./MainRegisterForm";
import RegisterVerificationForm from "./RegisterVerificationForm";

export default function RegisterForm() {
   const { handleRegister, pendingVerification, handleRegisterVerification } =
      useRegistration();

   return (
      <AuthFormContainer register>
         {pendingVerification ? (
            <RegisterVerificationForm onSubmit={handleRegisterVerification} />
         ) : (
            <MainRegisterForm onSubmit={handleRegister} />
         )}
      </AuthFormContainer>
   );
}
