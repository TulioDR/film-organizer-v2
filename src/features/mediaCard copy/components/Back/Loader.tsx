import React from "react";
import { AnimationControls, motion } from "framer-motion";

type Props = {
   loaderControls: AnimationControls;
};

export default function Loader({ loaderControls }: Props) {
   return (
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white">
         <motion.div
            initial={{ width: 0 }}
            animate={loaderControls}
            className="h-full bg-blue-500"
         />
      </div>
   );
}
