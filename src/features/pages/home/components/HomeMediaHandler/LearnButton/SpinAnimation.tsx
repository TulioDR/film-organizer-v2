import { motion, useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";
import useHomeContext from "../../../context/HomeContext";

type Props = {};

export default function SpinAnimation({}: Props) {
   const [scope, animate] = useAnimate();
   const [isPresent, safeToRemove] = usePresence();

   const { navigateMedia } = useHomeContext();

   useEffect(() => {
      if (!isPresent) {
         animate(scope.current, { pathLength: 0 }, { duration: 0.2 }).then(
            safeToRemove,
         );
         return;
      }
      const startSequence = async () => {
         await animate(
            scope.current,
            { pathLength: 1 },
            { duration: 6, ease: "linear" },
         );
         if (!isPresent) return;
         await animate(scope.current, { rotateX: 180 }, { duration: 0 });
         navigateMedia(1);
         await animate(scope.current, { pathLength: 0 }, { duration: 0.5 });
         if (!isPresent) return;
         await animate(scope.current, { rotateX: 0 }, { duration: 0 });
         startSequence();
      };
      startSequence();
   }, [isPresent]);

   return (
      <div className={`absolute inset-0 pointer-events-none`}>
         <svg className="w-full h-full overflow-visible">
            <motion.circle
               ref={scope}
               initial={{ pathLength: 0 }}
               r="50%"
               cx="50%"
               cy="50%"
               className="stroke-accent fill-transparent stroke-[8px]"
            />
         </svg>
      </div>
   );
}
