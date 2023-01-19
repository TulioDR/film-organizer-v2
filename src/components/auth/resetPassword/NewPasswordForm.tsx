import { Form, Formik } from "formik";
import React, { useState } from "react";
import AuthInput from "../authForm/AuthInput";
import SubmitButton from "../authForm/SubmitButton";

type Props = {
   submitHandler: (values: any, reset: any) => any;
};

export default function NewPasswordForm({ submitHandler }: Props) {
   const initialValues = {
      password: "",
   };
   const validation = (values: any) => {
      const { password } = values;
      let error: any = {};
      if (!password) {
         error.password = "Please type a new password";
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
   const togglePassword = () => setShowPassword(!showPassword);
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
               <SubmitButton>Reset Password</SubmitButton>
            </Form>
         )}
      </Formik>
   );
}
