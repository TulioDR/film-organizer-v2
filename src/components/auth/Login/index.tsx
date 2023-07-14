import { AnimatePresence } from "framer-motion";
import AuthButton from "../AuthButton";
import AuthContainer from "../AuthContainer";
import AuthMessage from "../AuthMessage";
import AuthTitle from "../AuthTitle";
import AuthForm from "../AuthForm";
import AuthResizeContainer from "../AuthResizeContainer";
import { Formik } from "formik";

type Props = {
   onButtonClick: () => void;
   isSelected: boolean;
};

export default function Login({ onButtonClick, isSelected }: Props) {
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
      // if (forgotPassWord) {
      //    if (!email) {
      //       error.email = "Email required";
      //    } else if (!checkEmailValidity(email)) {
      //       error.email = "Invalid Email";
      //    }
      //    return error;
      // }
      if (!email) {
         error.email = "Email required";
      }
      if (!checkEmailValidity(email)) {
         error.email = "Invalid Email";
      }
      if (!password) {
         error.password = "Password required";
      }
      //  else if (password !== confirmPassword) {
      //    error.password = "Passwords do not match";
      // }
      return error;
   };

   const handleSubmit = async (values: any, { resetForm }: any) => {
      console.log("submitting");
      // try {
      // } catch (error) {
      //    console.log(error);
      // }
   };
   return (
      <Formik
         initialValues={initialValues}
         validate={validation}
         onSubmit={handleSubmit}
      >
         <AuthContainer>
            <AuthTitle>Login</AuthTitle>

            <AuthResizeContainer>
               <AnimatePresence mode="wait">
                  {isSelected ? (
                     <AuthMessage key="auth-message">
                        Already have an account? Login and start saving your
                        favorite Movies and Series
                     </AuthMessage>
                  ) : (
                     <AuthForm key="auth-form" />
                  )}
               </AnimatePresence>
            </AuthResizeContainer>

            <AuthButton
               onClick={isSelected ? onButtonClick : undefined}
               isSelected={isSelected}
            >
               Login
            </AuthButton>

            <div className="text-sm">Forgot your password?</div>
         </AuthContainer>
      </Formik>
   );
}
