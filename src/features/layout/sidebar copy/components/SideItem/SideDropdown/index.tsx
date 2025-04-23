import { useState } from "react";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import useSidebarActiveMark from "@/features/layout/sidebar/hooks/useSidebarActiveMark";
import SideDropdownContainer from "./SideDropdownContainer";
import SideDropdownItem from "./SideDropdownItem";

import DropdownIcon from "./DropdownIcon";
import SideInnerItem from "../SideInnerItem";

type Props = {
   icon: string;
   text: string;
   link: string;
   items: any[];
   mediaType: "movie" | "tv";
};

export default function SideDropdown({
   icon,
   text,
   link,
   items,
   mediaType,
}: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => setIsOpen((prev) => !prev);

   const { isSelected } = useSidebarActiveMark({ mediaType, link });
   return (
      <>
         <button
            onClick={toggle}
            className="w-full flex items-center justify-between overflow-hidden"
         >
            <SideInnerItem isSelected={isSelected} icon={icon} text={text} />
            <DropdownIcon open={isOpen || false} />
         </button>
         <SideDropdownContainer open={isOpen && expandSidebar}>
            {items.map((item, index) => (
               <SideDropdownItem
                  key={index}
                  link={item.link}
                  icon={item.icon}
                  text={item.text}
                  isDropdownSelected={isSelected}
               />
            ))}
         </SideDropdownContainer>
      </>
   );
}
