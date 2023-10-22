import AuthFormikContainer from "../../AuthForm/AuthFormikContainer";
import AuthInput from "../../AuthForm/AuthInput";
import AuthTitle from "../../AuthForm/AuthTitle";
import SocialLogins from "../../AuthForm/SocialLogins";
import ForgotPasswordButton from "../../AuthForm/ForgotPasswordButton";
import AuthSubmitButton from "../../AuthForm/AuthSubmitButton";
import SkipAuthButton from "../../SkipAuthButton";

type Props = {
   switchToReset: () => void;
   onSubmit: (values: any) => void;
};

export default function MainLoginForm({ switchToReset, onSubmit }: Props) {
   const loginValidation = (values: any) => {
      const { email, password } = values;
      let error: any = {};
      if (!email) {
         error.email = "Username or Email required";
      }
      if (!password) {
         error.password = "Password required";
      }
      return error;
   };

   const initialValues = {
      email: "",
      password: "",
   };
   return (
      <AuthFormikContainer
         validation={loginValidation}
         initialValues={initialValues}
         onSubmit={onSubmit}
      >
         <AuthTitle>Login to your Account</AuthTitle>
         <SocialLogins />
         <AuthInput
            icon="person"
            name="email"
            placeholder="Email or username"
         />
         <AuthInput
            icon="lock"
            name="password"
            placeholder="Password"
            password
         />
         <AuthSubmitButton>Login</AuthSubmitButton>
         <ForgotPasswordButton onClick={switchToReset} />
         <SkipAuthButton login mobile />
      </AuthFormikContainer>
   );
}
