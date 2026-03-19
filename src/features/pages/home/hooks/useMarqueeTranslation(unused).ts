import { useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

export default function useMarqueeTranslation(
   reverse: boolean,
   isSelected: boolean,
   isHovered: boolean,
) {
   const direction = reverse ? -1 : 1;
   const baseY = useMotionValue(0);
   const y = useTransform(baseY, [-100, 100], ["-100%", `100%`]);

   useAnimationFrame((_t, delta) => {
      if (!isSelected) return;
      if (baseY.get() >= 100 || baseY.get() <= -100) {
         baseY.jump(0);
         return;
      }
      const velocity = isHovered ? 0.1 : 0.8;
      const moveBy = (direction * delta) / 1000;
      baseY.set(baseY.get() + moveBy * velocity);
   });

   return { y };
}
