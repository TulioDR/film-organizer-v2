import ReactLenis from "lenis/react";
import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function FiltersContainer({ children }: Props) {
   return (
      <div className="flex-1 w-full overflow-hidden">
         <ReactLenis className="w-full h-full overflow-y-scroll">
            <div className="grid gap-4 p-4 w-full">{children}</div>
         </ReactLenis>
      </div>
   );
}
