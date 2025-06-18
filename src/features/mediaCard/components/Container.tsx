import { AnimationScope, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   id: string;
   onHoverStart: () => void;
   onHoverEnd: () => void;
   isSelected: boolean;
   scope: AnimationScope<any>;
};

export default function Container({
   isSelected,
   children,
   id,
   onHoverStart,
   onHoverEnd,
   scope,
}: Props) {
   return (
      <motion.div id={id} className="aspect-[2/3] w-full">
         {!isSelected && (
            <motion.div
               layoutId={id}
               onHoverStart={onHoverStart}
               onHoverEnd={onHoverEnd}
               ref={scope}
               className="aspect-[2/3] [perspective:2000px]"
            >
               <motion.div className="relative [transform-style:preserve-3d] w-full h-full rotate-card">
                  {children}
               </motion.div>
            </motion.div>
         )}
      </motion.div>
   );
}
