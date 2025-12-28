import React from "react";
import PreviewButton from "./PreviewButton";

type Props = {};

export default function CompactPreview({}: Props) {
   return (
      <div className="w-full h-full flex p-4 gap-2">
         <div className="flex-1 flex flex-col gap-2">
            <PreviewButton icon="shuffle" text="Shuffle" />
            <PreviewButton icon="refresh" text="Reset" />
         </div>
         <PreviewButton icon="search" text="Search" square />
      </div>
   );
}
