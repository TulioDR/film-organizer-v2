import { Form, Formik } from "formik";
import { useState } from "react";
import AuthInput from "./AuthInput";
import BottomMessage from "./BottomMessage";
import SubmitButton from "./SubmitButton";

type Props = {
   isLogin: boolean;
   toggleType: () => void;
   submitHandler: (values: any, reset: any) => any;
};

export default function FormikForm({
   isLogin,
   toggleType,
   submitHandler,
}: Props) {
   const [showPassword, setShowPassword] = useState<boolean>(false);
   const [showPassword2, setShowPassword2] = useState<boolean>(false);
   const togglePassword = () => setShowPassword(!showPassword);
   const togglePassword2 = () => setShowPassword2(!showPassword2);

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
               <AuthInput
                  icon="mail"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  touched={touched}
                  errors={errors}
               />
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
               <SubmitButton isLogin={isLogin} />
               <BottomMessage isLogin={isLogin} toggle={toggleType} />
            </Form>
         )}
      </Formik>
   );
}
