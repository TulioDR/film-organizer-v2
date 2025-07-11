import React, { useMemo } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

type Props = React.HTMLAttributes<HTMLDivElement> & {
   children: React.ReactNode;
   className?: string;
   el?: keyof JSX.IntrinsicElements;
};

export default function zGlassContainer({
   children,
   className = "",
   el: Wrapper = "div",
   ...rest
}: Props & HTMLMotionProps<keyof HTMLElementTagNameMap>) {
   const MotionWrapper = useMemo(() => motion.create(Wrapper), [Wrapper]);

   const { isHidden } = useSelector((state: StoreModel) => state.layout);
   return (
      <MotionWrapper
         {...rest}
         style={{ backdropFilter: "blur(20px)" }}
         animate={{ opacity: isHidden ? 0 : 1, transition: { duration: 0.2 } }}
         className={`bg-black/50 rounded-md border border-border ${className}`}
      >
         {children}
      </MotionWrapper>
   );
}
