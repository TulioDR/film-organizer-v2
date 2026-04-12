import useRegistration from "../../../hooks/useRegistration";
import MainRegisterForm from "./MainRegisterForm";
import RegisterVerificationForm from "./RegisterVerificationForm";

interface Props {
   toggleForms: () => void;
}

export default function RegisterForm({ toggleForms }: Props) {
   const { handleRegister, pendingVerification, handleRegisterVerification } =
      useRegistration();
   return pendingVerification ? (
      <RegisterVerificationForm onSubmit={handleRegisterVerification} />
   ) : (
      <MainRegisterForm onSubmit={handleRegister} openLogin={toggleForms} />
   );
}
