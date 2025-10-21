import React from "react";
import ReelItem from "./ReelItem";
import { motion } from "framer-motion";

type Props = {};

export default function Reel({}: Props) {
   const SECTION_WIDTH = 160;
   const GAP = 32;
   const TOTAL_WIDTH = SECTION_WIDTH + GAP;

   return (
      <motion.div
         animate={{ x: TOTAL_WIDTH }}
         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
         style={{ gap: GAP }}
         className="bg-[#EFE7DC] dark:bg-[#27231A] flex shadow-2xl"
      >
         {Array.from({ length: 15 }).map((_, index) => (
            <div
               style={{ width: SECTION_WIDTH }}
               key={index}
               className="flex flex-col gap-3 pt-2 pb-4"
            >
               <ReelItem />
               <div
                  className={`aspect-[4/5] w-full rounded-md bg-[#E4DAD0] dark:bg-[#4a4235]`}
               ></div>
               <ReelItem />
            </div>
         ))}
      </motion.div>
   );
}
