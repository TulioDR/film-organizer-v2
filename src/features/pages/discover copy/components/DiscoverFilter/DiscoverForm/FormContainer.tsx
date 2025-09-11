import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
};

export default function FormContainer({ children, isOpen }: Props) {
   const [scope, animate] = useAnimate();
   const [overflow, setOverflow] = useState(false);

   useEffect(() => {
      const handleAnimation = async () => {
         const duration = 0.3;
         if (isOpen) {
            animate(".first", { x: "0%" }, { duration });
            await animate(".second", { x: "0%" }, { duration });
            setOverflow(true);
         } else {
            setOverflow(false);
            animate(".first", { x: "-100%" }, { duration });
            await animate(".second", { x: "100%" }, { duration });
            animate(".second", { x: "-100%" }, { duration: 0 });
            animate(".first", { x: "100%" }, { duration: 0 });
         }
      };
      handleAnimation();
   }, [isOpen]);

   return (
      <div
         ref={scope}
         className="fixed top-0 left-0 h-screen w-full z-10 pl-32 pr-24 pt-44 pb-8"
      >
         <div
            className={`w-full h-full
               ${overflow ? "" : "overflow-hidden"}
            `}
         >
            <div
               className={`w-full h-full first 
                  ${overflow ? "" : "overflow-hidden"}
               `}
            >
               <div
                  className={`w-full h-full second
                     ${overflow ? "" : "overflow-hidden"}
                  `}
               >
                  {children}
               </div>
            </div>
         </div>
      </div>
   );
}
