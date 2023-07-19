import { useState } from "react";
import AuthTitle from "../AuthForm/AuthTitle";
import { Form, Formik } from "formik";
import AuthInput from "../AuthForm/AuthManagement/AuthInput";
import SocialLogins from "../AuthForm/AuthManagement/SocialLogins";
import ForgotPasswordButton from "../AuthForm/ForgotPasswordButton";
import GoBackButton from "../AuthForm/GoBackButton";
import MobileAuthSubmitButton from "./MobileAuthSubmitButton";
import ChangeAuthTypeButton from "./ChangeAuthTypeButton";

type Props = {};

export default function AuthMobile({}: Props) {
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
   const handleSubmit = async (values: any) => {
      console.log("submitting");
   };

   type AuthTypeModel = "login" | "register" | "reset";
   const [authType, setAuthType] = useState<AuthTypeModel>("login");

   const login = authType === "login";
   const register = authType === "register";
   const reset = authType === "reset";

   return (
      <div className="min-h-screen px-5 flex justify-center pt-10 bg-gray-200 text-black">
         <Formik
            initialValues={initialValues}
            validate={validation}
            onSubmit={handleSubmit}
         >
            <Form className="w-full max-w-[384px] space-y-5 h-min flex flex-col items-center">
               <AuthTitle>
                  {login && "Login"}
                  {register && "Register"}
                  {reset && "Reset Password"}
               </AuthTitle>
               {!reset && <SocialLogins register={false} />}
               <AuthInput
                  icon="mail"
                  name="email"
                  placeholder="Email Address"
                  register={false}
               />
               {!reset && (
                  <>
                     <AuthInput
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        register={false}
                        password
                     />
                     {register && (
                        <AuthInput
                           icon="lock"
                           name="confirmPassword"
                           placeholder="Confirm Password"
                           register={false}
                           password
                        />
                     )}
                  </>
               )}

               <MobileAuthSubmitButton>
                  {register && "Sign Up"}
                  {login && "Login"}
                  {reset && "Send Reset Email"}
               </MobileAuthSubmitButton>

               {login && (
                  <ForgotPasswordButton onClick={() => setAuthType("reset")} />
               )}

               {login && (
                  <ChangeAuthTypeButton
                     onClick={() => setAuthType("register")}
                     login={true}
                  />
               )}

               {register && (
                  <ChangeAuthTypeButton
                     onClick={() => setAuthType("login")}
                     login={false}
                  />
               )}

               {reset && <GoBackButton onClick={() => setAuthType("login")} />}
            </Form>
         </Formik>
      </div>
   );
}
