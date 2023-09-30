import React from "react";
import SideItemIcon from "./SideItemIcon";
import SideItemText from "./SideItemText";
import DropdownIcon from "./DropdownIcon";

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
      <div
         className={`flex items-center justify-between w-full overflow-hidden ${
            isSelected
               ? "text-light-1 dark:text-dark-1"
               : "text-light-2 hover:text-light-1 dark:text-dark-2 dark:hover:text-dark-1"
         }`}
      >
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
      </div>
   );
}
