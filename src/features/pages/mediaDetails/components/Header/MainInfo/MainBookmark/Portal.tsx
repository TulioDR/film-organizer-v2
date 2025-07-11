import React from "react";
import { createPortal } from "react-dom";

type Props = {
   children: React.ReactNode;
};

export default function Portal({ children }: Props) {
   return createPortal(
      <div className="fixed top-1/2 -translate-y-1/2 right-8 w-16 aspect-square">
         {children}
      </div>,
      document.getElementById("main-layout")!
   );
}
