import { Form, Formik } from "formik";
import AuthInput from "../AuthForm/AuthManagement/AuthInput";
import AuthTitle from "../AuthForm/AuthTitle";
import AuthMessage from "../AuthForm/AuthMessage";
import AuthForm from "../AuthForm";

type Props = {
   toggleForgotPassword: () => void;
};

export default function ResetPassword({ toggleForgotPassword }: Props) {
   const checkEmailValidity = (email: string): boolean => {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
   };
   const validation = (values: any) => {
      const { email } = values;
      let error: any = {};
      if (!email) {
         error.email = "Email required";
      } else if (!checkEmailValidity(email)) {
         error.email = "Invalid Email";
      }
      return error;
   };
   const handleSubmit = async (values: any, { resetForm }: any) => {
      console.log("submitting");
   };
   return (
      <div className="fixed -z-10 top-0 left-0 h-screen bg-primary text-white w-full flex items-center justify-center">
         <div className="w-full max-w-[24rem] flex flex-col gap-5">
            <AuthForm
               type="reset"
               isSelected={false}
               onButtonClick={() => {}}
            />
            <button
               type="button"
               onClick={toggleForgotPassword}
               className="cursor-pointer bg-secondary w-40 mx-auto"
            >
               Go Back
            </button>
         </div>
      </div>
   );
}
