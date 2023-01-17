import { useRef, useState } from "react";

export default function useTransitionCard() {
   const transitionCard = useRef<HTMLDivElement>(null);
   const [isInvisible, setIsInvisible] = useState<boolean>(false);
   return { transitionCard, isInvisible, setIsInvisible };
}
