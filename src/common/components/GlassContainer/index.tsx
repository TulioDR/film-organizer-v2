import React, { useMemo } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Store from "@/common/models/Store";

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

   const { isHidden } = useSelector((state: Store) => state.layout);
   return (
      <MotionWrapper
         {...rest}
         style={{ backdropFilter: "blur(20px)" }}
         animate={
            noHide
               ? {}
               : { opacity: isHidden ? 0 : 1, transition: { duration: 0.2 } }
         }
         className={`bg-black/50 rounded-md border border-border pointer-events-auto ${className}`}
      >
         {children}
      </MotionWrapper>
   );
}
