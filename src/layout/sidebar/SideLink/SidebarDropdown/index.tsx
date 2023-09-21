import { AnimatePresence } from "framer-motion";
import SideDdContainer from "./SideDdContainer";
import SideDdItem from "./SideDdItem";
import { useState } from "react";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import DropdownIcon from "./DropdownIcon";
import InnerSideLink from "../InnerSideLink";

type Props = {
   items?: any[];
   icon: string;
   text: string;
   isSelected: boolean;
};

export default function SidebarDropdown({
   items,
   icon,
   text,
   isSelected,
}: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   const [open, setOpen] = useState<boolean>(false);
   const toggle = () => setOpen((prev) => !prev);

   return (
      <>
         <button
            onClick={toggle}
            className="flex items-center justify-between w-full "
         >
            <InnerSideLink icon={icon} text={text} isSelected={isSelected} />
            <DropdownIcon open={open} />
         </button>
         <AnimatePresence>
            {open && expandSidebar && (
               <SideDdContainer>
                  {items?.map((item, index) => (
                     <SideDdItem key={index} item={item} />
                  ))}
               </SideDdContainer>
            )}
         </AnimatePresence>
      </>
   );
}
