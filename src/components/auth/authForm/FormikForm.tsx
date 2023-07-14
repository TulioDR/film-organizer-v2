import { Form } from "formik";
import AuthInput from "./AuthInput";
import { useState } from "react";

type Props = {
   isSignUp: true | undefined;
};

export default function FormikForm({ isSignUp }: Props) {
   const [showPassword, setShowPassword] = useState<boolean>(false);
   const [showPassword2, setShowPassword2] = useState<boolean>(false);
   const togglePassword = () => setShowPassword(!showPassword);
   const togglePassword2 = () => setShowPassword2(!showPassword2);
   return (
      <Form className="flex flex-col space-y-4">
         <AuthInput
            icon="mail"
            name="email"
            placeholder="Email Address"
            type="email"
            isSignUp={isSignUp}
         />
         <AuthInput
            icon="lock"
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            toggleVisibility
            toggle={togglePassword}
            isSignUp={isSignUp}
         />
         {isSignUp && (
            <AuthInput
               icon="lock"
               name="confirmPassword"
               placeholder="Confirm Password"
               type={showPassword2 ? "text" : "password"}
               toggleVisibility
               toggle={togglePassword2}
               isSignUp={isSignUp}
            />
         )}
      </Form>
   );
}
