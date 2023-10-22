import { Form, Formik } from "formik";
type Props = {
   children: React.ReactNode;
   initialValues: any;
   validation: (values: any) => void;
   onSubmit: (values: any) => void;
};

export default function AuthFormikContainer({
   children,
   initialValues,
   validation,
   onSubmit,
}: Props) {
   return (
      <Formik
         initialValues={initialValues}
         validate={validation}
         onSubmit={onSubmit}
      >
         <Form className="w-full sm:w-96 flex flex-col items-center gap-6">
            {children}
         </Form>
      </Formik>
   );
}
