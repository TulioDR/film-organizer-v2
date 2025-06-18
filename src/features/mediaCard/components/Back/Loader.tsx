import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Loader({}: Props) {
   return (
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white ">
         <motion.div
            initial={{ width: 0 }}
            className="h-full bg-blue-500 loader-animation"
         />
      </div>
   );
}
