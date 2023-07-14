import React, { useState } from "react";
import AuthInput from "./AuthInput";

type Props = {
   touched: any;
   errors: any;
   isLogin: boolean;
   forgotPassWord: boolean;
};

export default function AuthInputsContainer({
   touched,
   errors,
   isLogin,
   forgotPassWord,
}: Props) {
   const [showPassword, setShowPassword] = useState<boolean>(false);
   const [showPassword2, setShowPassword2] = useState<boolean>(false);
   const togglePassword = () => setShowPassword(!showPassword);
   const togglePassword2 = () => setShowPassword2(!showPassword2);
   return (
      <>
         <AuthInput
            icon="mail"
            name="email"
            placeholder="Email Address"
            type="email"
            touched={touched}
            errors={errors}
         />
         {!forgotPassWord && (
            <>
               <AuthInput
                  icon="lock"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  password
                  toggle={togglePassword}
                  touched={touched}
                  errors={errors}
               />
               {!isLogin && (
                  <AuthInput
                     icon="lock"
                     name="confirmPassword"
                     placeholder="Confirm Password"
                     type={showPassword2 ? "text" : "password"}
                     password
                     toggle={togglePassword2}
                     touched={touched}
                     errors={errors}
                  />
               )}
            </>
         )}
      </>
   );
}
