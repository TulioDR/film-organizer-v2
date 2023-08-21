import useResetPassword from "../../../hooks/useResetPassword";
import AuthFormContainer from "../../AuthForm/AuthFormContainer";
import MainResetForm from "./MainResetForm";
import ResetVerificationForm from "./ResetVerificationForm";

export default function ResetForm() {
   const { handleReset, handleResetVerification, successfulCreation } =
      useResetPassword();

   return (
      <AuthFormContainer reset>
         {!successfulCreation && <MainResetForm onSubmit={handleReset} />}
         {successfulCreation && (
            <ResetVerificationForm onSubmit={handleResetVerification} />
         )}
      </AuthFormContainer>
   );
}
