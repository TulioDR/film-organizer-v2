import React from "react";

type Props = {
   close: () => void;
};

export default function CreateListForm({ close }: Props) {
   return (
      <div className="fixed top-0 left-0 w-full h-screen bg-gray-500 bg-opacity-50 grid place-content-center">
         <div className="h-80 w-80 p-5 bg-light-bg dark:bg-dark-bg">
            <button onClick={close}>Close</button>
         </div>
      </div>
   );
}
