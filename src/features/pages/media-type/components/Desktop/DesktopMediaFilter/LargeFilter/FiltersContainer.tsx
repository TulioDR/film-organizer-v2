import ReactLenis from "lenis/react";
import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function FiltersContainer({ children }: Props) {
   return (
      <div className="flex-1 w-full overflow-hidden pr-4">
         <ReactLenis className="w-full h-full overflow-y-scroll">
            <div className="grid gap-4 mb-4 px-4 pt-4 w-full">{children}</div>
         </ReactLenis>
      </div>
   );
}
