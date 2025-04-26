import React from "react";

type Props = {
   top?: boolean;
   bottom?: boolean;
   page?: number | string;
};

export default function PaginationContent({ top, bottom, page }: Props) {
   if (top || bottom)
      return (
         <span className="material-symbols-outlined">
            {top ? "keyboard_arrow_up" : "keyboard_arrow_down"}
         </span>
      );
   return <div className="text-lg font-black">{page}</div>;
}
