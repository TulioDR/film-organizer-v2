import { Form } from "formik";
import React from "react";
import AuthInput from "./AuthInput";

type Props = {
   type: "register" | "login" | "reset";
};

export default function AuthInputs({ type }: Props) {
   const register = type === "register";
   const reset = type === "reset";
   const login = type === "login";
   return (
      <Form className="flex flex-col gap-6 w-full max-w-[24rem]">
         <AuthInput
            icon="mail"
            name="email"
            placeholder="Email Address"
            login={login}
         />
         {!reset && (
            <>
               <AuthInput
                  icon="lock"
                  name="password"
                  placeholder="Password"
                  login={login}
                  password
               />
               {register && (
                  <AuthInput
                     icon="lock"
                     name="confirmPassword"
                     placeholder="Confirm Password"
                     login={login}
                     password
                  />
               )}
            </>
         )}
      </Form>
   );
}
