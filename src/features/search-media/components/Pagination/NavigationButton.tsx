import GlassContainer from "@/common/components/GlassContainer";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
   page: number;
   disabled: boolean;
   left?: true;
   right?: true;
};

export default function NavigationButton({
   page,
   disabled,
   left,
   right,
}: Props) {
   const router = useRouter();
   const { pathname, query } = router;
   const newQuery = { ...query, page: page };

   return (
      <GlassContainer className="h-full overflow-hidden w-12 md:w-auto md:aspect-square">
         <Link
            href={{ pathname: pathname, query: newQuery }}
            scroll={false}
            className={`h-full w-full select-none flex items-center justify-center text-white md:hover:bg-white md:hover:text-black 
            ${disabled ? "pointer-events-none text-border" : ""}
         `}
         >
            <span className="material-symbols-outlined">
               {left && "keyboard_arrow_left"}
               {right && "keyboard_arrow_right"}
               {!left && !right && "keyboard_arrow_right"}
            </span>
         </Link>
      </GlassContainer>
   );
}
