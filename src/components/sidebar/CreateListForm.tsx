import React, { FormEvent, useRef } from "react";
import { createList } from "../../actions/lists";

type Props = {
   close: () => void;
};

export default function CreateListForm({ close }: Props) {
   const inputRef = useRef<HTMLInputElement>(null);

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // close();
      const listName = inputRef.current?.value!;
      createList({ listName });
      console.log("submitted");
   };

   return (
      <div className="fixed top-0 left-0 w-full h-screen bg-gray-500 bg-opacity-50 grid place-content-center">
         <form
            onSubmit={handleSubmit}
            className="h-80 w-80 p-5 bg-light-bg dark:bg-dark-bg flex flex-col space-y-2"
         >
            <input
               ref={inputRef}
               type="text"
               className="w-full h-9 bg-transparent border-b-2 border-blue-600 outline-none"
            />
            <div className="w-full flex justify-end space-x-2">
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
         </form>
      </div>
   );
}
