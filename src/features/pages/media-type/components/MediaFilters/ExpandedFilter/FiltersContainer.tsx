import { useCustomLenis } from "@/common/hooks/useCustomLenis";
import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function FiltersContainer({ children }: Props) {
   const { scrollWrapperRef } = useCustomLenis();
   return (
      <div className="flex-1 w-full overflow-hidden">
         <div
            ref={scrollWrapperRef}
            className="w-full h-full overflow-y-scroll"
         >
            <div className="grid gap-4 p-4 w-full">{children}</div>
         </div>
      </div>
   );
}
