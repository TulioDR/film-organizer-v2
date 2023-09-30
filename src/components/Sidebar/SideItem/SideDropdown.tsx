import { useState } from "react";
import SideInnerItem from "./SideInnerItem";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import SideLink from "./SideLink";
import SideActiveMark from "./SideActiveMark";
import useSidebarActiveMark from "@/hooks/useSidebarActiveMark";
import SideItemsContainer from "./SideItemsContainer";

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

   const [open, setOpen] = useState<boolean>(false);
   const toggle = () => setOpen((prev) => !prev);

   const { isSelected } = useSidebarActiveMark({ mediaType, link });
   return (
      <>
         <SideActiveMark isSelected={isSelected} isMainMark />
         <button onClick={toggle} className="w-full">
            <SideInnerItem
               icon={icon}
               text={text}
               isSelected={isSelected}
               dropdown
               open={open}
               isMainLink
            />
         </button>
         <SideItemsContainer open={open && expandSidebar}>
            <ul className="space-y-2 py-2">
               {items.map((item, index) => (
                  <SideLink
                     key={index}
                     link={item.link}
                     icon={item.icon}
                     text={item.text}
                  />
               ))}
            </ul>
         </SideItemsContainer>
      </>
   );
}
