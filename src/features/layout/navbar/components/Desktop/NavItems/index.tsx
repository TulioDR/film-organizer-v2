import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";
import useNavItems from "../../../hooks/useNavItems";
import { NAVIGATION_ITEMS } from "../../../constants/NAVIGATION_ITEMS";

type Props = {};

export default function NavItems({}: Props) {
   const { activePage, isLoading } = useNavItems();
   const [hoveredPage, setHoveredPage] = useState<string>(activePage);
   useEffect(() => setHoveredPage(activePage), [activePage]);
   const onMouseEnter = (link: string) => setHoveredPage(link);
   const onMouseLeave = () => {
      if (!isLoading) setHoveredPage(activePage);
   };
   return (
      <motion.div onMouseLeave={onMouseLeave} className="flex gap-8 ">
         {NAVIGATION_ITEMS.map((item) => (
            <NavItem
               key={item.link}
               item={item}
               onMouseEnter={() => onMouseEnter(item.link)}
               isSelected={hoveredPage === item.link}
            />
         ))}
      </motion.div>
   );
}
