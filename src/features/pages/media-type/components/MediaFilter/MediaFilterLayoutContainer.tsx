import React from "react";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
   isExpanded: boolean;
};

export default function MediaFilterLayoutContainer({
   children,
   isOpen,
   isExpanded,
}: Props) {
   return (
      <div
         className={`
                        flex border rounded-lg overflow-hidden duration-200 pointer-events-auto
                        bg-primary-light dark:bg-primary-dark border-border-light dark:border-border-dark
                         ${isOpen ? (isExpanded ? "h-full w-full" : "h-full w-full xl:w-[410px]") : "w-12 h-12 xl:w-16 xl:h-16"} 
                     `}
      >
         {children}
      </div>
   );
}
