import AuthButton from "../../AuthButton";
import AuthFormikContainer from "../../AuthForm/AuthFormikContainer";
import AuthInput from "../../AuthForm/AuthInput";
import AuthMessage from "../../AuthForm/AuthMessage";
import AuthTitle from "../../AuthForm/AuthTitle";
import UnderlineButton from "../../AuthForm/UnderlineButton";

type Props = {
   onSubmit: (values: any) => void;
   closeReset: () => void;
};

export default function MainResetForm({ onSubmit, closeReset }: Props) {
   const checkEmailValidity = (email: string): boolean => {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
   };
   const resetValidation = (values: any) => {
      const { email } = values;
      let error: any = {};
      if (!email) {
         error.email = "Email required";
      } else if (!checkEmailValidity(email)) {
         error.email = "Invalid Email";
      }
      return error;
   };
   const initialValues = {
      email: "",
   };
   return (
      <AuthFormikContainer
         validation={resetValidation}
         initialValues={initialValues}
         onSubmit={onSubmit}
      >
         <AuthTitle>Reset your password</AuthTitle>
         <AuthMessage>
            {
               "Type in your email and we'll send you a link to reset your password"
            }
         </AuthMessage>
         <AuthInput icon="mail" name="email" placeholder="Email Address" dark />
         <AuthButton submit>Send Reset Email</AuthButton>
         <UnderlineButton onClick={closeReset}>
            Go back to Log in
         </UnderlineButton>
      </AuthFormikContainer>
   );
}
