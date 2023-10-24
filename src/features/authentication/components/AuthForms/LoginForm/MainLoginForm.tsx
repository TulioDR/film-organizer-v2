import AuthFormikContainer from "../../AuthForm/AuthFormikContainer";
import AuthInput from "../../AuthForm/AuthInput";
import AuthTitle from "../../AuthForm/AuthTitle";
import SocialLogins from "../../AuthForm/SocialLogins";
import AuthButton from "../../AuthButton";
import UnderlineButton from "../../AuthForm/UnderlineButton";

type Props = {
   onSubmit: (values: any) => void;
   openReset: () => void;
   openRegister: () => void;
};

export default function MainLoginForm({
   onSubmit,
   openReset,
   openRegister,
}: Props) {
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
         <AuthTitle>Log in</AuthTitle>
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
         <AuthButton submit>Login</AuthButton>

         <div className="md:hidden">
            <UnderlineButton onClick={openRegister}>
               New here? Sign Up!
            </UnderlineButton>
         </div>

         <UnderlineButton onClick={openReset}>
            Forgot your password?
         </UnderlineButton>
      </AuthFormikContainer>
   );
}
