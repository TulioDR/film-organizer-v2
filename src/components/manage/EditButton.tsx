import React from "react";

type Props = {
   icon: string;
   onClick: () => void;
   red?: boolean;
};

export default function EditButton({ icon, onClick, red }: Props) {
   return (
      <button
         type="button"
         onClick={onClick}
         onMouseDown={(e) => e.preventDefault()}
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