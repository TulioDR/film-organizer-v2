import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export const useCustomLenis = (isRoot: boolean = false) => {
   const scrollWrapperRef = useRef<HTMLDivElement>(null);
   const [localInstance, setLocalInstance] = useState<Lenis | null>(null);

   useEffect(() => {
      if (!isRoot && !scrollWrapperRef.current) return;

      const options = {
         autoRaf: true,
         duration: 1.2,
         smoothWheel: true,
         ...(isRoot
            ? {}
            : {
                 wrapper: scrollWrapperRef.current as HTMLElement,
                 content: scrollWrapperRef.current
                    ?.firstElementChild as HTMLElement,
              }),
      };

      const lenis = new Lenis(options);
      setLocalInstance(lenis); // Store it locally

      if (isRoot) {
         (window as any).lenis = lenis;
      }

      return () => {
         lenis.destroy();
         if (isRoot) (window as any).lenis = null;
         setLocalInstance(null);
      };
   }, [isRoot]);

   // Return the local instance so the component can use it
   return { scrollWrapperRef, instance: localInstance };
};
