import React, { useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { LG_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";

type Props = {
   onEnter?: () => void;
   onLeave?: () => void;
   children?: React.ReactNode;
   className?: string;
   el?: keyof JSX.IntrinsicElements;
};

export default function GestureHandler({
   onEnter,
   onLeave,
   children,
   className = "",
   el: Wrapper = "button",
   ...rest
}: Props & HTMLMotionProps<keyof HTMLElementTagNameMap>) {
   const MotionWrapper = useMemo(() => motion.create(Wrapper), [Wrapper]);

   const isMobile = useMediaQuery({ maxWidth: LG_MEDIA_QUERY });

   return (
      <MotionWrapper
         onHoverStart={isMobile ? undefined : onEnter}
         onHoverEnd={isMobile ? undefined : onLeave}
         onTapStart={isMobile ? onEnter : undefined}
         onTap={isMobile ? onLeave : undefined}
         onTapCancel={isMobile ? onLeave : undefined}
         className={`select-none ${className}`}
         {...rest}
      >
         {children}
      </MotionWrapper>
   );
}
