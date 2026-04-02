import React from "react";
import { motion } from "framer-motion";
import { HOME_DURATION } from "../../../constants/ANIMATIONS";

type Props = {};

export default function SelectedAnimation({}: Props) {
   return (
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[calc(100%+8px)] h-[calc(100%+8px)]">
         <motion.div
            layout
            layoutId="group-button-selected-animation"
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", duration: HOME_DURATION }}
            className="w-full h-full bg-accent rounded-full"
         ></motion.div>
      </div>
   );
}
