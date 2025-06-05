import React from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

type Props = {};

export default function TestPage({}: Props) {
   const [layoutId, setLayoutId] = React.useState<string | null>(null);

   const handleClick = (id: string) => {
      if (layoutId) {
         setLayoutId(null);
      } else {
         setLayoutId(id);
      }
   };

   return (
      <>
         <div className="p-32 grid grid-cols-6 gap-8">
            <AnimatePresence>
               {Array.from({ length: 10 }, (_, i) => (
                  <Card
                     key={i}
                     onClick={() => handleClick(`card-${i}`)}
                     layoutId={`card-${i}`}
                     currentLayoutId={layoutId}
                  />
               ))}
            </AnimatePresence>
         </div>
         {layoutId && (
            <motion.div className="fixed bottom-32 right-32 h-[600px] aspect-[2/3]  pointer-events-none">
               <motion.div
                  layoutId={layoutId}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full aspect-[2/3] [perspective:2000px]"
               >
                  <motion.div
                     initial={{ rotateY: 180 }}
                     animate={{ rotateY: 0 }}
                     transition={{ duration: 0.4 }}
                     className="relative [transform-style:preserve-3d] w-full h-full"
                  >
                     <motion.div className="absolute w-full h-full bg-green-500 rounded-lg [backface-visibility:hidden]"></motion.div>
                     <motion.div className="absolute w-full h-full bg-yellow-500 rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]"></motion.div>
                  </motion.div>
               </motion.div>
            </motion.div>
         )}
      </>
   );
}

type PropsCard = {
   layoutId: string;
   onClick: () => void;
   currentLayoutId: string | null;
};

function Card({ layoutId, onClick, currentLayoutId }: PropsCard) {
   const rotateControls = useAnimationControls();

   const onHoverStart = async () => {
      const transition = { duration: 0.4 };
      rotateControls.start({ rotateY: 180, transition });
   };
   const onHoverEnd = () => {
      const transition = { duration: 0.4 };
      rotateControls.start({ rotateY: 0, transition });
   };

   return (
      <div className="aspect-[2/3] w-full cursor-pointer">
         {currentLayoutId !== layoutId && (
            <motion.div
               onHoverStart={onHoverStart}
               onHoverEnd={onHoverEnd}
               layoutId={layoutId}
               transition={{ duration: 0.4 }}
               onClick={onClick}
               className="h-full w-full aspect-[2/3] [perspective:2000px]"
            >
               <motion.div
                  animate={rotateControls}
                  className="relative [transform-style:preserve-3d] w-full h-full"
               >
                  <motion.div className="absolute w-full h-full bg-blue-500 rounded-lg [backface-visibility:hidden]"></motion.div>
                  <motion.div className="absolute w-full h-full bg-red-500 rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]"></motion.div>
               </motion.div>
            </motion.div>
         )}
      </div>
   );
}
