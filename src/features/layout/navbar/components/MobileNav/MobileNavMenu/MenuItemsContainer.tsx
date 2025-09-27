import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function MenuItemsContainer({ children }: Props) {
   return (
      <div className="w-full h-full px-4 py-16 flex justify-center items-center flex-col gap-4">
         {children}
      </div>
   );
}
