import SideTooltipContainer from "./SideTooltipContainer";
import SideDropdownItem from "../SideDropdown/SideDropdownItem";
import Link from "next/link";

type Props = {
   open: boolean;
   tooltipPosition: any;
   items?: any[];
   text: string;
   onHoverStart: () => void;
   onHoverEnd: () => void;
   isSelected: boolean;
   link: string;
};

export default function SideTooltip({
   isSelected,
   open,
   tooltipPosition,
   items,
   text,
   link,
   onHoverStart,
   onHoverEnd,
}: Props) {
   return (
      <SideTooltipContainer
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         tooltipPosition={tooltipPosition}
         open={open}
      >
         <div
            className={`w-32 rounded-r-lg ${items ? "rounded-bl-lg" : ""} ${
               isSelected
                  ? "bg-light-1 text-dark-1 dark:bg-dark-1 dark:text-light-1"
                  : "bg-secondary-light dark:bg-secondary-dark text-light-1 dark:text-dark-1"
            }`}
         >
            {items ? (
               <div className="text-base h-10 flex items-center pl-5">
                  {text}
               </div>
            ) : (
               <Link
                  href={link}
                  className="text-base h-10 flex items-center pl-5 w-full"
               >
                  {text}
               </Link>
            )}

            {items && (
               <div className="pb-2 px-2">
                  {items.map((item, index) => (
                     <SideDropdownItem
                        key={index}
                        link={item.link}
                        icon={item.icon}
                        text={item.text}
                        hideIcon
                        isDropdownSelected={isSelected}
                     />
                  ))}
               </div>
            )}
         </div>
      </SideTooltipContainer>
   );
}
