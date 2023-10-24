import AuthButton from "../../AuthButton";
import AuthFormikContainer from "../../AuthForm/AuthFormikContainer";
import AuthInput from "../../AuthForm/AuthInput";
import AuthMessage from "../../AuthForm/AuthMessage";

import AuthTitle from "../../AuthForm/AuthTitle";

type Props = {
   onSubmit: (values: any) => void;
};

export default function RegisterVerificationForm({ onSubmit }: Props) {
   const validation = (values: any) => {
      const { code } = values;
      let error: any = {};
      if (!code) {
         error.email = "This field can't be empty";
      }
      return error;
   };
   const initialValues = {
      code: "",
   };
   return (
      <AuthFormikContainer
         initialValues={initialValues}
         validation={validation}
         onSubmit={onSubmit}
      >
         <AuthTitle>Verification Code</AuthTitle>
         <AuthMessage>
            A verification code has been sent to your email, please enter it on
            the input below to verify your account
         </AuthMessage>
         <AuthInput
            icon="key"
            name="code"
            placeholder="Verification code"
            dark
         />
         <AuthButton>Verify</AuthButton>
      </AuthFormikContainer>
   );
}
