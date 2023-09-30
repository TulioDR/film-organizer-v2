import React from "react";
import SideItemIcon from "./SideItemIcon";
import SideItemText from "./SideItemText";
import DropdownIcon from "./DropdownIcon";
import SideInnerItemContainer from "./SideInnerItemContainer";

type Props = {
   icon: string;
   text: string;
   isSelected: boolean;
   hideIcon?: true;
   isMainLink?: true;
   dropdown?: true;
   open?: boolean;
};

export default function SideInnerItem({
   icon,
   text,
   isSelected,
   hideIcon,
   isMainLink,
   dropdown,
   open,
}: Props) {
   return (
      <SideInnerItemContainer isSelected={isSelected}>
         <div
            className={`flex items-center ${
               isMainLink ? "gap-4 h-10" : "gap-2"
            } `}
         >
            {!hideIcon && (
               <SideItemIcon
                  isFilled={isSelected}
                  icon={icon}
                  isMainLink={isMainLink}
               />
            )}
            <SideItemText text={text} isMainLink={isMainLink} />
         </div>
         {dropdown && <DropdownIcon open={open || false} />}
      </SideInnerItemContainer>
   );
}
