import { useState } from "react";

import { Formik, Form, Field } from "formik";
import { AnimatePresence, motion } from "framer-motion";

import { useUser } from "@supabase/auth-helpers-react";

import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalButton from "../ModalButton";
import listNameValidation from "../../../utils/listNameValidation";
import { createList } from "../../../api/lists";
import { useSelector } from "react-redux";
import useListsRefresh from "@/hooks/useListsRefresh";

type Props = {
   close: () => void;
};

export default function CreateListModal({ close }: Props) {
   const { refreshLists } = useListsRefresh();

   const { themeColor } = useSelector((state: any) => state.theme);

   const [isFocused, setIsFocused] = useState<boolean>(false);

   const user = useUser();

   const handleSubmit = async (values: any) => {
      const createdList = await createList({
         name: values.name,
         authorId: user?.id,
      });
      console.log(createdList);
      refreshLists();
      close();
   };

   return (
      <ModalContainer close={close}>
         <Formik
            initialValues={{ name: "" }}
            validate={listNameValidation}
            onSubmit={handleSubmit}
         >
            {({ errors, touched }) => (
               <Form className="w-72">
                  <ModalTitle>Create a List</ModalTitle>
                  <div className="relative overflow-hidden">
                     <Field
                        name="name"
                        placeholder="List name"
                        autoComplete="off"
                        maxLength={20}
                        className="w-full h-9 bg-transparent text-text-2 placeholder:text-text-3 border-b-2 border-text-2 outline-none"
                        autoFocus
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                     />
                     <AnimatePresence>
                        {isFocused && (
                           <motion.div
                              initial={{ x: "-100%" }}
                              animate={{ x: 0 }}
                              exit={{ x: "100%" }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              style={{ backgroundColor: themeColor }}
                              className="absolute bottom-0 left-0 w-full h-1"
                           ></motion.div>
                        )}
                     </AnimatePresence>
                  </div>
                  {touched.name && errors.name && (
                     <div className="w-full text-red-400">{errors.name}</div>
                  )}
                  <ModalButtonsContainer>
                     <ModalButton onClick={close}>Cancel</ModalButton>
                     <ModalButton submit blue>
                        Create
                     </ModalButton>
                  </ModalButtonsContainer>
               </Form>
            )}
         </Formik>
      </ModalContainer>
   );
}
