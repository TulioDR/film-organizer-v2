import { AnimationControls, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   id: string;
   onHoverStart: () => void;
   onHoverEnd: () => void;
   cardRef: React.RefObject<HTMLDivElement>;
   scaleControls: AnimationControls;
   exitStyle: React.CSSProperties;
   handleUpdate: (e: any) => void;
   rotateControls: AnimationControls;
   containerControls: AnimationControls;
   isSelected: boolean;
};

export default function Container({
   children,
   id,
   onHoverStart,
   onHoverEnd,
   cardRef,
   scaleControls,
   exitStyle,
   handleUpdate,
   rotateControls,
   containerControls,
   isSelected,
}: Props) {
   const transition = { duration: 0.4 };

   return (
      <motion.div
         animate={containerControls}
         exit={isSelected ? { opacity: 1 } : { opacity: 0 }}
         transition={{ duration: 0.2 }}
         id={id}
         ref={cardRef}
         className="aspect-[2/3]"
      >
         <motion.div
            layout
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            style={exitStyle}
            transition={transition}
            className="aspect-[2/3]"
         >
            <motion.div
               animate={scaleControls}
               transition={transition}
               className="origin-top-left [perspective:2000px] aspect-[2/3]"
            >
               <motion.div
                  animate={rotateControls}
                  onUpdate={handleUpdate}
                  className="relative [transform-style:preserve-3d]"
               >
                  {children}
               </motion.div>
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
