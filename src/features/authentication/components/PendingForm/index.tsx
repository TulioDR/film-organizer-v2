import { Form, Formik } from "formik";
import AuthSubmitButton from "../AuthForm/AuthSubmitButton";
import AuthInput from "../AuthForm/AuthInputs/AuthInput";
import AuthMessage from "../AuthForm/AuthMessage";
import AuthTitle from "../AuthForm/AuthTitle";
import useVerification from "../../hooks/useVerification";

type Props = {};

export default function PendingForm({}: Props) {
   const validation = (values: any) => {
      const { code } = values;
      let error: any = {};
      if (!code) {
         error.email = "This field can't be empty";
      }
      return error;
   };

   const { handleVerification } = useVerification();
   return (
      <Formik
         initialValues={{ code: "" }}
         validate={validation}
         onSubmit={handleVerification}
      >
         <Form className="w-96 flex flex-col items-center gap-6">
            <AuthTitle>Verification Code</AuthTitle>
            <AuthMessage>
               A verification code has been sent to your email, please enter it
               on the input below to verify your account
            </AuthMessage>
            <AuthInput icon="key" name="code" placeholder="Verification code" />
            <AuthSubmitButton register>Verify</AuthSubmitButton>
         </Form>
      </Formik>
   );
}
