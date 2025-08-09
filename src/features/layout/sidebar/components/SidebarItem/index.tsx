import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import DropdownItemModel from "../../models/DropdownItemModel";
import { useRouter } from "next/router";
import MainLink from "./MainLink";
import DropdownLinks from "./DropdownLinks";

interface Props {
   link: string;
   icon: string;
   text: string;
   mediaType?: "movie" | "tv";
   items?: DropdownItemModel[];
}

export default function SidebarItem({
   link,
   icon,
   text,
   mediaType,
   items,
}: Props) {
   const elementRef = useRef<HTMLLIElement>(null);

   const [isHovered, setIsHovered] = useState<boolean>(false);
   const handleHoverStart = () => setIsHovered(true);
   const handleHoverEnd = () => setIsHovered(false);

   const [isMainSelected, setIsMainSelected] = useState<boolean>(false);

   const router = useRouter();

   useEffect(() => {
      if (!mediaType) return;
      if (mediaType !== router.query.media_type) return;
      setIsMainSelected(router.pathname.startsWith("/[media_type]/"));
   }, [mediaType, router.pathname, router.query.media_type]);

   return (
      <motion.li
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         ref={elementRef}
         className="h-16 w-full list-none select-none relative"
      >
         <MainLink
            link={link}
            icon={icon}
            hasItems={!!items}
            isHovered={isHovered}
            mediaType={mediaType}
            text={text}
         />
         {isHovered && items && (
            <DropdownLinks items={items} isMainSelected={isMainSelected} />
         )}
      </motion.li>
   );
}
