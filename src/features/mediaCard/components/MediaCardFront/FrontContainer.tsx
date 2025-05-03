import React from "react";

type Props = {
   children: React.ReactNode;
   onClick: () => void;
};

export default function FrontContainer({ children, onClick }: Props) {
   return (
      <div
         onClick={onClick}
         className="cursor-pointer relative [backface-visibility:hidden] overflow-hidden rounded-xl"
      >
         {children}
      </div>
   );
}
