import { Field } from "formik";
import React from "react";

type Props = {
   setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateListInput({ setIsFocused }: Props) {
   return (
      <Field
         name="name"
         placeholder="List name"
         autoComplete="off"
         maxLength={12}
         className="w-full h-9 bg-transparent text-light-1 dark:text-dark-1 placeholder:text-light-2 dark:placeholder:text-dark-2 border-b-2 border-light-2 dark:border-dark-2 outline-none"
         autoFocus
         onFocus={() => setIsFocused(true)}
         onBlur={() => setIsFocused(false)}
      />
   );
}
