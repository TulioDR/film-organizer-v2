import React from "react";

type Props = {
   position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
   isAnimating: boolean;
   children: React.ReactNode;
};

export default function MobileMenuButtonContainer({
   position,
   isAnimating,
   children,
}: Props) {
   return (
      <div
         className={`absolute
            ${isAnimating ? "z-40" : "z-30"} 
            ${position === "topLeft" ? "top-0 left-0" : ""}
            ${position === "topRight" ? "top-0 right-0" : ""}
            ${position === "bottomLeft" ? "bottom-0 left-0" : ""}
            ${position === "bottomRight" ? "bottom-0 right-0" : ""}   
         `}
      >
         {children}
      </div>
   );
}
