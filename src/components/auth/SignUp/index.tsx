import { AnimatePresence } from "framer-motion";
import AuthButton from "../AuthButton";
import AuthContainer from "../AuthContainer";
import AuthMessage from "../AuthMessage";
import AuthTitle from "../AuthTitle";
import AuthForm from "../AuthForm";
import AuthResizeContainer from "../AuthResizeContainer";
import { Formik } from "formik";

type Props = {
   isSelected: boolean;
   onButtonClick: () => void;
};

export default function SignUp({ isSelected, onButtonClick }: Props) {
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
      }
      if (!checkEmailValidity(email)) {
         error.email = "Invalid Email";
      }
      if (!password) {
         error.password = "Password required";
      }
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
         <AuthContainer isLogin={isSelected} isSignUp>
            <AuthTitle>New Here?</AuthTitle>

            <AuthResizeContainer>
               <AnimatePresence mode="wait">
                  {isSelected ? (
                     <AuthMessage key="auth-message">
                        Sign Up and Discover Movies and Series, and save them or
                        keep track of them.
                     </AuthMessage>
                  ) : (
                     <AuthForm key="auth-form" isSignUp />
                  )}
               </AnimatePresence>
            </AuthResizeContainer>

            <AuthButton
               onClick={isSelected ? onButtonClick : undefined}
               isSelected={isSelected}
               isSignUp
            >
               Sing Up
            </AuthButton>
         </AuthContainer>
      </Formik>
   );
}
