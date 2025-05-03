import React, { useMemo } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type Props = React.HTMLAttributes<HTMLDivElement> & {
   children: React.ReactNode;
   className?: string;
   el?: keyof JSX.IntrinsicElements;
};

export default function GlassContainer({
   children,
   className = "",
   el: Wrapper = "div",
   ...rest
}: Props & HTMLMotionProps<keyof HTMLElementTagNameMap>) {
   const MotionWrapper = useMemo(() => motion.create(Wrapper), [Wrapper]);
   return (
      <MotionWrapper
         {...rest}
         className={`backdrop-blur-md bg-black/40 rounded-md border border-border ${className}`}
      >
         {children}
      </MotionWrapper>
   );
}
