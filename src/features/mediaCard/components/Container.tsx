import { AnimationControls, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   id: string;
   onHoverStart: () => void;
   onHoverEnd: () => void;
   handleUpdate: (e: any) => void;
   containerControls: AnimationControls;
   cardControls: AnimationControls;
   selectedID: string;
};

export default function Container({
   children,
   id,
   onHoverStart,
   onHoverEnd,
   handleUpdate,
   containerControls,
   cardControls,
   selectedID,
}: Props) {
   return (
      <div id={id} className="aspect-[2/3] w-full">
         {selectedID !== id && (
            <motion.div
               layoutId={id}
               transition={{ layout: { duration: 0.4 } }}
               onHoverStart={onHoverStart}
               onHoverEnd={onHoverEnd}
               animate={containerControls}
               className="aspect-[2/3] [perspective:2000px]"
            >
               <motion.div
                  animate={cardControls}
                  onUpdate={handleUpdate}
                  className="relative [transform-style:preserve-3d] w-full h-full"
               >
                  {children}
               </motion.div>
            </motion.div>
         )}
      </div>
   );
}
