import React from "react";
import ModalAnimationContainer from "./ModalAnimationContainer";
import ModalTitle from "./ModalTitle";
import { Form, Formik } from "formik";

type Props = {
   closeModal: () => void;
   children: React.ReactNode;
   initialValues: any;
   validate: (values: any) => any;
   onSubmit: (values: any) => void;
   title: string;
};

export default function ModalContainer({
   closeModal,
   children,
   initialValues,
   validate,
   onSubmit,
   title,
}: Props) {
   return (
      <ModalAnimationContainer closeModal={closeModal}>
         <ModalTitle>{title}</ModalTitle>
         <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
         >
            <Form className="w-full sm:w-96 flex flex-col gap-4">
               {children}
            </Form>
         </Formik>
      </ModalAnimationContainer>
   );
}
