import { useState } from "react";
import { createList } from "../../actions/lists";
import { Formik, Form, Field } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import useThemeContext from "../../context/ThemeContext";
import listNameValidation from "../../utils/listNameValidation";

type Props = {
   close: () => void;
};

export default function CreateListForm({ close }: Props) {
   const { themeColor } = useThemeContext();
   const [isFocused, setIsFocused] = useState<boolean>(false);

   const handleSubmit = (values: any) => {
      createList({ listName: values.name });
      console.log("submitted");
      close();
   };

   return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 grid place-content-center z-50">
         <Formik
            initialValues={{ name: "" }}
            validate={listNameValidation}
            onSubmit={handleSubmit}
         >
            {({ errors, touched }) => (
               <Form className="rounded-lg w-96 p-10 bg-light-bg dark:bg-dark-bg">
                  <div className="relative overflow-hidden">
                     <Field
                        name="name"
                        placeholder="List name"
                        autoComplete="off"
                        maxLength={20}
                        className="w-full h-9 bg-transparent text-light-text-normal dark:text-dark-text-normal placeholder:text-light-text-soft dark:placeholder:text-dark-text-soft border-b-2 border-light-text-normal dark:border-dark-text-normal outline-none"
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
                     <div className="w-full text-red-600 dark:text-red-400">
                        {errors.name}
                     </div>
                  )}
                  <div className="w-full flex justify-end space-x-2 mt-5">
                     <button
                        type="button"
                        onClick={close}
                        className="px-3 py-2 rounded-lg bg-red-600"
                     >
                        Close
                     </button>
                     <button
                        type="submit"
                        className="px-3 py-2 rounded-lg bg-blue-600"
                     >
                        Create
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
}
