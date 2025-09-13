import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
   title: {
      text: string;
      link: string;
   };
};

export default function TitleSection({ title }: Props) {
   const item = {
      initial: { y: "100%" },
      animate: {
         y: 0,
         transition: { duration: 0.4, ease: "easeInOut" },
      },
      exit: {
         y: "-100%",
         transition: { duration: 0.4, ease: "easeInOut" },
      },
   };

   return (
      <motion.div
         variants={item}
         initial="initial"
         animate="animate"
         exit="exit"
         className="h-full flex items-center cursor-pointer hover:border-b border-white uppercase text-xs xl:text-3xl font-title tracking-wide"
      >
         <Link href={title.link} className="h-full flex items-center">
            {`>\xa0${title.text}`}
         </Link>
      </motion.div>
   );
}
