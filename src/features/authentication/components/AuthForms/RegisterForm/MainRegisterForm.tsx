import AuthFormikContainer from "../../AuthForm/AuthFormikContainer";
import AuthInput from "../../AuthForm/AuthInput";
import AuthTitle from "../../AuthForm/AuthTitle";
import SocialLogins from "../../AuthForm/SocialLogins";

import AuthButton from "../../AuthButton";
import UnderlineButton from "../../AuthForm/UnderlineButton";

type Props = {
   onSubmit: (values: any) => void;
   openLogin: () => void;
};

export default function MainRegisterForm({ onSubmit, openLogin }: Props) {
   const checkEmailValidity = (email: string): boolean => {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
   };
   const registerValidation = (values: any) => {
      const { username, email, password, confirmPassword } = values;
      let error: any = {};
      if (!username) {
         error.username = "Username required";
      }
      if (!email) {
         error.email = "Email required";
      } else if (!checkEmailValidity(email)) {
         error.email = "Invalid Email";
      }
      if (!password) {
         error.password = "Password required";
      }
      if (!confirmPassword) {
         error.confirmPassword = "This field can't be empty";
      } else if (password !== confirmPassword) {
         error.confirmPassword = "Passwords do not match";
      }
      return error;
   };

   const initialValues = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
   };
   return (
      <AuthFormikContainer
         validation={registerValidation}
         initialValues={initialValues}
         onSubmit={onSubmit}
      >
         <AuthTitle>Sing Up</AuthTitle>
         <SocialLogins />
         <AuthInput icon="person" name="username" placeholder="Username" />
         <AuthInput icon="mail" name="email" placeholder="Email Address" />
         <AuthInput
            icon="lock"
            name="password"
            placeholder="Password"
            password
         />
         <AuthInput
            icon="lock"
            name="confirmPassword"
            placeholder="Confirm Password"
            password
         />
         <AuthButton submit>Sign Up</AuthButton>
         <div className="md:hidden">
            <UnderlineButton onClick={openLogin}>
               Already, have an account? Log in!
            </UnderlineButton>
         </div>
      </AuthFormikContainer>
   );
}
