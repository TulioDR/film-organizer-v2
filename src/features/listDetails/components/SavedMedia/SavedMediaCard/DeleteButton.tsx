import React from "react";

type Props = {};

export default function DeleteButton({}: Props) {
   return (
      <button className="aspect-square h-10 bg-red-700 text-white grid place-content-center rounded-lg">
         <span className="material-symbols-outlined">delete</span>
      </button>
   );
}
