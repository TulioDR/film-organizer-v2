import React from "react";

type Props = {
   icon: string;
   onClick?: () => void;
   red?: boolean;
   submit?: boolean;
};

export default function EditButton({ icon, onClick, red, submit }: Props) {
   return (
      <button
         type={submit ? "submit" : "button"}
         onClick={onClick}
         className={`w-12 h-full hover:text-white ${
            red
               ? "text-red-500 hover:bg-red-500"
               : "text-blue-500 hover:bg-blue-500"
         }`}
      >
         <span className="material-icons text-3xl">{icon}</span>
      </button>
   );
}
