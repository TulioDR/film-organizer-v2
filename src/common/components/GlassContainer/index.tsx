import React, { useMemo } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type Props = React.HTMLAttributes<HTMLDivElement> & {
   children: React.ReactNode;
   className?: string;
   el?: keyof JSX.IntrinsicElements;
   noHide?: true;
};

export default function GlassContainer({
   children,
   className = "",
   el: Wrapper = "div",
   noHide,
   ...rest
}: Props & HTMLMotionProps<keyof HTMLElementTagNameMap>) {
   const MotionWrapper = useMemo(() => motion.create(Wrapper), [Wrapper]);

   return (
      <MotionWrapper
         {...rest}
         style={{ backdropFilter: "blur(20px)" }}
         className={`bg-black/50 rounded-md border-border-width border-border-light dark:border-border-dark pointer-events-auto text-white ${className}`}
         // className={`bg-black/50 rounded-md border border-border pointer-events-auto text-white ${className}`}
      >
         {children}
      </MotionWrapper>
   );
}
