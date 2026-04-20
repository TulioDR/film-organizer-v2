import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
   icon: string;
   text: string;
   href: string;
};

export default function BottomNavButton({ icon, text, href }: Props) {
   const router = useRouter();
   const [isActive, setIsActive] = useState(false);
   useEffect(() => {
      if (router.pathname === "/[media_type]") {
         setIsActive("/" + router.query.media_type === href);
      } else {
         setIsActive(router.pathname === href);
      }
   }, [href, router.pathname, router.query.media_type]);

   return (
      <Link href={href} className="h-full flex-1 flex justify-center">
         <div className="h-full aspect-square flex flex-col justify-center items-center relative">
            <div className="h-6">
               <span
                  style={{
                     fontVariationSettings: `'FILL' ${isActive ? 1 : 0}`,
                  }}
                  className="material-symbols-outlined"
               >
                  {icon}
               </span>
            </div>
            <span className="text-xs capitalize">{text}</span>
            {isActive && (
               <motion.div
                  layoutId="mobile-active-nav-item"
                  className="absolute bottom-px left-0 w-full h-0.5 bg-accent"
                  transition={{ duration: 0.6, type: "spring" }}
               />
            )}
         </div>
      </Link>
   );
}
