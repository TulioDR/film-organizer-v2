import React from "react";

type Props = {
   left?: boolean;
   right?: boolean;
   page?: number | string;
};

export default function PaginationContent({ left, right, page }: Props) {
   if (left || right)
      return (
         <span className="material-symbols-outlined">
            {left ? "keyboard_arrow_left" : "keyboard_arrow_right"}
         </span>
      );
   return <div className="text-lg font-black">{page}</div>;
}
