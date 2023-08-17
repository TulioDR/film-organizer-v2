import { AnimatePresence } from "framer-motion";
import AuthButton from "./AuthButton";
import AuthMessage from "./AuthMessage";
import AuthTitle from "./AuthTitle";
import AuthResizeContainer from "./AuthResizeContainer";
import { Formik } from "formik";
import ForgotPasswordButton from "./ForgotPasswordButton";
import AuthFormContainer from "./AuthFormContainer";
import SocialLogins from "./AuthManagement/SocialLogins";
import AuthInputs from "./AuthManagement/AuthInputs";
import AuthManagementContainer from "./AuthManagement/AuthManagementContainer";
import GoBackButton from "./GoBackButton";

type Props = {
   type: "register" | "login" | "reset";
   isSelected: boolean;
   onButtonClick: () => void;
   toggleForgotPassword?: () => void;
};

export default function AuthForm({
   type,
   isSelected,
   onButtonClick,
   toggleForgotPassword,
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
      } else if (!checkEmailValidity(email)) {
         error.email = "Invalid Email";
      }
      if (!password) {
         error.password = "Password required";
      }
      return error;
   };
   const handleSubmit = async (values: any, { resetForm }: any) => {
      console.log("submitting");
   };

   const register = type === "register";
   const login = type === "login";
   const reset = type === "reset";

   return (
      <Formik
         initialValues={initialValues}
         validate={validation}
         onSubmit={handleSubmit}
      >
         <AuthFormContainer>
            <AuthTitle>
               {register && "New Here?"}
               {login && "Login"}
               {reset && "Reset your password"}
            </AuthTitle>

            {reset && (
               <AuthMessage>
                  Type in your email and we'll send you a link to reset your
                  password
               </AuthMessage>
            )}

            <AuthResizeContainer>
               <AnimatePresence mode="wait" initial={false}>
                  {isSelected ? (
                     <AuthMessage key="auth-message">
                        {register &&
                           "Sign Up and Discover Movies and Series, and save them or keep track of them."}
                        {login &&
                           "Already have an account? Login and start saving your favorite Movies and Series"}
                     </AuthMessage>
                  ) : (
                     <AuthManagementContainer>
                        {!reset && <SocialLogins login={login} />}
                        <AuthInputs type={type} />
                     </AuthManagementContainer>
                  )}
               </AnimatePresence>
            </AuthResizeContainer>

            <AuthButton
               onClick={onButtonClick}
               isSelected={isSelected}
               type={type}
            >
               {register && "Sign Up"}
               {login && "Login"}
               {reset && "Send Reset Email"}
            </AuthButton>

            {login && <ForgotPasswordButton onClick={toggleForgotPassword!} />}

            {reset && <GoBackButton onClick={toggleForgotPassword!} />}
         </AuthFormContainer>
      </Formik>
   );
}
