import ReactLenis, { LenisRef } from "lenis/react";
import React, { useEffect } from "react";

type Props = {
   children: React.ReactNode;
   lenisRef: React.RefObject<LenisRef>;
   handleKey: (e: KeyboardEvent) => void;
};

export default function SBItemsContainer({
   children,
   lenisRef,
   handleKey,
}: Props) {
   useEffect(() => {
      document.addEventListener("keydown", handleKey);
      return () => {
         document.removeEventListener("keydown", handleKey);
      };
   }, [handleKey]);

   const arrowKeys = [
      "keyboard_arrow_left",
      "keyboard_arrow_up",
      "keyboard_arrow_down",
      "keyboard_arrow_right",
   ];

   return (
      <ReactLenis
         ref={lenisRef}
         className="w-full h-full overflow-hidden flex flex-col"
      >
         <div className="h-10 w-full text-black px-4 py-2 flex gap-1 sticky top-0 bg-gray-200 z-10">
            {arrowKeys.map((icon) => (
               <div
                  key={icon}
                  className="h-full aspect-square bg-black text-white rounded-sm flex items-center justify-center"
               >
                  <span className="material-symbols-outlined !text-base">
                     {icon}
                  </span>
               </div>
            ))}
            <div className="h-full aspect-square flex flex-col items-end">
               <div className="w-4/5 h-1/2 bg-black"></div>
               <div className="w-full h-1/2 bg-black flex items-start justify-end">
                  <span className="material-symbols-outlined !text-sm -translate-y-1.5 -translate-x-0.5 text-white">
                     keyboard_return
                  </span>
               </div>
            </div>
            <span className="font-black mx-1 text-xl">/</span>
            <div className="rounded bg-black h-full aspect-[2/3] flex justify-center pt-1">
               <div className="rounded-full w-0.5 h-2 bg-white animate-bounce"></div>
            </div>
         </div>

         <ul className="w-full grid grid-cols-2 gap-2 p-4 pt-0">{children}</ul>
      </ReactLenis>
   );
}
