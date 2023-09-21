import React from "react";

type Props = { open: boolean };

export default function DropdownIcon({ open }: Props) {
   return (
      <span
         className={`material-symbols-outlined duration-300 !text-center w-9 ${
            open ? "rotate-180" : ""
         }`}
      >
         expand_more
      </span>
   );
}
