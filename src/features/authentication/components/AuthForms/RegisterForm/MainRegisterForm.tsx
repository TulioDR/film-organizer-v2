import AuthFormikContainer from "../../AuthForm/AuthFormikContainer";
import AuthInput from "../../AuthForm/AuthInput";
import AuthTitle from "../../AuthForm/AuthTitle";
import SocialLogins from "../../AuthForm/SocialLogins";
import AuthSubmitButton from "../../AuthForm/AuthSubmitButton";
import SkipAuthButton from "../../SkipAuthButton";

type Props = {
   onSubmit: (values: any) => void;
};

export default function MainRegisterForm({ onSubmit }: Props) {
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
         <AuthTitle>New Here? Sign Up!</AuthTitle>
         <SocialLogins dark />
         <AuthInput icon="person" name="username" placeholder="Username" dark />
         <AuthInput icon="mail" name="email" placeholder="Email Address" dark />
         <AuthInput
            icon="lock"
            name="password"
            placeholder="Password"
            password
            dark
         />
         <AuthInput
            icon="lock"
            name="confirmPassword"
            placeholder="Confirm Password"
            password
            dark
         />
         <AuthSubmitButton dark>Sign Up</AuthSubmitButton>
         <SkipAuthButton login={false} mobile />
      </AuthFormikContainer>
   );
}
