import { Form, Formik } from "formik";
import React, { useState } from "react";
import AuthInput from "../AuthForm/AuthInput";
import SubmitButton from "../AuthForm/SubmitButton";

type Props = {
   submitHandler: (values: any, reset: any) => any;
};

export default function NewPasswordForm({ submitHandler }: Props) {
   const initialValues = {
      password: "",
      confirmPassword: "",
   };
   const validation = (values: any) => {
      const { password, confirmPassword } = values;
      let error: any = {};
      if (!password) {
         error.password = "Please type a new password";
      } else if (password !== confirmPassword) {
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

   const [showPassword, setShowPassword] = useState<boolean>(false);
   const [showPassword2, setShowPassword2] = useState<boolean>(false);
   const togglePassword = () => setShowPassword(!showPassword);
   const togglePassword2 = () => setShowPassword2(!showPassword2);
   return (
      <Formik
         initialValues={initialValues}
         validate={validation}
         onSubmit={handleSubmit}
      >
         {({ errors, touched }) => (
            <Form className="flex flex-col space-y-4">
               <AuthInput
                  icon="lock"
                  name="password"
                  placeholder="New Password"
                  type={showPassword ? "text" : "password"}
                  password
                  toggle={togglePassword}
                  touched={touched}
                  errors={errors}
               />
               <AuthInput
                  icon="lock"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  type={showPassword ? "text" : "password"}
                  password
                  toggle={togglePassword2}
                  touched={touched}
                  errors={errors}
               />
               <SubmitButton>Reset Password</SubmitButton>
            </Form>
         )}
      </Formik>
   );
}
