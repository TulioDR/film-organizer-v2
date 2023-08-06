import React from "react";
import SideTooltipContainer from "./SideTooltipContainer";
import SideDdItem from "../SidebarDropdown/SideDdItem";

type Props = {
   items?: any[];
   text: string;
   tagPosition: any;
};

export default function SidebarTooltip({ items, text, tagPosition }: Props) {
   return (
      <SideTooltipContainer tagPosition={tagPosition}>
         <div className="flex items-center h-9 text-base">{text}</div>
         {items && (
            <ul className="space-y-1 pb-2">
               {items?.map((item, index) => (
                  <SideDdItem key={index} item={item} isTooltip />
               ))}
            </ul>
         )}
      </SideTooltipContainer>
   );
}
