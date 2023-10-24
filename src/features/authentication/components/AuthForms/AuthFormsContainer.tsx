import React from "react";

type Props = {
   children: React.ReactNode;
   showLogin: boolean;
};

export default function AuthFormsContainer({ children, showLogin }: Props) {
   return (
      <div
         className={`w-[200%] relative flex-shrink-0 md:w-full flex h-full duration-1000 text-light-1 ${
            showLogin ? "" : "-translate-x-1/2 md:translate-x-0"
         }`}
      >
         {children}
      </div>
   );
}
