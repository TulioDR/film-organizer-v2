import AuthMessage from "./AuthMessage";
import AuthTitle from "./AuthTitle";
import { Form, Formik } from "formik";
import ForgotPasswordButton from "./ForgotPasswordButton";
import SocialLogins from "./SocialLogins";
import AuthSubmitButton from "./AuthSubmitButton";
import AuthInputs from "./AuthInputs";

type Props = {
   login?: true;
   register?: true;
   reset?: true;
   onSubmit: (values: any) => void;
   switchToReset?: () => void;
};

export default function AuthForm({
   onSubmit,
   login,
   register,
   reset,
   switchToReset,
}: Props) {
   const initialValues = {
      email: "",
      password: "",
      confirmPassword: "",
   };
   const checkEmailValidity = (email: string): boolean => {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
   };

   const validation = (values: any) => {
      const { email, password, confirmPassword } = values;
      let error: any = {};
      if (!email) {
         error.email = "Email required";
      } else if (!login && !checkEmailValidity(email)) {
         error.email = "Invalid Email";
      }
      if (!reset && !password) {
         error.password = "Password required";
      }
      if (register && !confirmPassword) {
         error.confirmPassword = "This field can't be empty";
      } else if (register && password !== confirmPassword) {
         error.confirmPassword = "Passwords do not match";
      }
      return error;
   };
   const handleSubmit = async (values: any) => {
      console.log(values);
      onSubmit(values);
   };
   return (
      <Formik
         initialValues={initialValues}
         validate={validation}
         onSubmit={handleSubmit}
      >
         <Form className="w-96 flex flex-col items-center gap-6">
            <AuthTitle>
               {register && "New Here? Sign Up!"}
               {login && "Login to your Account"}
               {reset && "Reset your password"}
            </AuthTitle>

            {reset && (
               <AuthMessage>
                  Type in your email and we'll send you a link to reset your
                  password
               </AuthMessage>
            )}

            {!reset && <SocialLogins login={login} />}
            <AuthInputs login={login} register={register} reset={reset} />

            <AuthSubmitButton login={login} register={register} reset={reset}>
               {register && "Sign Up"}
               {login && "Login"}
               {reset && "Send Reset Email"}
            </AuthSubmitButton>

            {login && <ForgotPasswordButton onClick={switchToReset!} />}
         </Form>
      </Formik>
   );
}
