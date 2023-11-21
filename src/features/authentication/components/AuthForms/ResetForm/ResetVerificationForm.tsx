import AuthButton from "../../AuthButton";
import AuthFormikContainer from "../../AuthForm/AuthFormikContainer";
import AuthInput from "../../AuthForm/AuthInput";
import AuthMessage from "../../AuthForm/AuthMessage";
import AuthTitle from "../../AuthForm/AuthTitle";

type Props = {
   onSubmit: (values: any) => void;
};

export default function ResetVerificationForm({ onSubmit }: Props) {
   const validation = (values: any) => {
      const { code, password } = values;
      let error: any = {};

      if (!code) {
         error.email = "This field can't be empty";
      }
      if (!password) {
         error.email = "New Password Required";
      }
      return error;
   };
   const initialValues = {
      code: "",
      password: "",
   };

   return (
      <AuthFormikContainer
         initialValues={initialValues}
         validation={validation}
         onSubmit={onSubmit}
      >
         <AuthTitle>New Password</AuthTitle>
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
         <AuthInput
            icon="lock"
            name="password"
            placeholder="New Password"
            password
            dark
         />
         <AuthButton submit>Verify and Change Password</AuthButton>
      </AuthFormikContainer>
   );
}
