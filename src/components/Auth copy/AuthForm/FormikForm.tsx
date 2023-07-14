import { Form, Formik } from "formik";
import AuthInputsContainer from "./AuthInputsContainer";
import BottomMessage from "./BottomMessage";
import SubmitButton from "./SubmitButton";

type Props = {
   isLogin: boolean;
   toggleType: () => void;
   submitHandler: (values: any, reset: any) => any;
   forgotPassWord: boolean;
   setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FormikForm({
   isLogin,
   toggleType,
   submitHandler,
   forgotPassWord,
   setForgotPassword,
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
      if (forgotPassWord) {
         if (!email) {
            error.email = "Email required";
         } else if (!checkEmailValidity(email)) {
            error.email = "Invalid Email";
         }
         return error;
      }
      if (!email) {
         error.email = "Email required";
      } else if (!checkEmailValidity(email)) {
         error.email = "Invalid Email";
      } else if (!password) {
         error.password = "Password required";
      } else if (!isLogin && password !== confirmPassword) {
         error.password = "Passwords do not match";
      }
      return error;
   };

   const handleSubmit = async (values: any, { resetForm }: any) => {
      try {
         await submitHandler(values, resetForm);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Formik
         initialValues={initialValues}
         validate={validation}
         onSubmit={handleSubmit}
      >
         {({ errors, touched }) => (
            <Form className="flex flex-col space-y-4">
               <AuthInputsContainer
                  touched={touched}
                  errors={errors}
                  isLogin={isLogin}
                  forgotPassWord={forgotPassWord}
               />
               <SubmitButton>
                  {forgotPassWord
                     ? "Send Reset Email"
                     : isLogin
                     ? "Login"
                     : "Register"}
               </SubmitButton>
               <BottomMessage
                  isLogin={isLogin}
                  toggle={toggleType}
                  forgotPassWord={forgotPassWord}
                  setForgotPassword={setForgotPassword}
               />
            </Form>
         )}
      </Formik>
   );
}
