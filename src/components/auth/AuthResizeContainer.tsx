import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
   children: React.ReactNode;
};

export default function AuthResizeContainer({ children }: Props) {
   const [height, setHeight] = useState<number | "auto">("auto");
   const elementRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      if (!elementRef.current) return;
      const resizeObserver = new ResizeObserver(() => {
         const newHeight = elementRef.current?.clientHeight;
         setHeight(newHeight!);
      });
      resizeObserver.observe(elementRef.current);
      return () => resizeObserver.disconnect(); // clean up
   }, []);

   return (
      <motion.div
         animate={{
            height: height,
            transition: { height: { duration: 0.4 } },
         }}
         className="overflow-hidden flex items-center w-full"
      >
         <div ref={elementRef} className="w-full">
            {children}
         </div>
      </motion.div>
   );
}
