import React from "react";

type Props = { open: boolean };

export default function DropdownIcon({ open }: Props) {
   return (
      <span
         className={`material-icons duration-300 ${open ? "rotate-180" : ""}`}
      >
         expand_more
      </span>
   );
}
