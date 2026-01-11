import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import filterLogic, {
   PreviewInterface,
} from "@/features/pages/media-type/utils/filterLogic";
import React, { useEffect, useState } from "react";
import PreviewCard from "../../../Desktop/DesktopMediaFilter/ExpandedFilter/ExpandedPreview/PreviewCard";
type Props = {};

export default function MobilePreview({}: Props) {
   const context = useMediaFilterContext();
   const [activeFilters, setActiveFilters] = useState<PreviewInterface[]>([]);

   useEffect(() => {
      const result = filterLogic(context);
      setActiveFilters(result);
   }, [context]);

   return (
      <div className="w-full overflow-x-auto p-1 flex gap-1">
         {activeFilters.map((f) => (
            <PreviewCard
               key={f.id}
               text={f.text}
               icon={f.icon}
               onRemove={f.onRemove}
               small
            />
         ))}
      </div>
   );
}
