import Lenis from "lenis";

export const useCustomLenisInstance = () => {
   const getLenis = (): Lenis | null => {
      if (typeof window !== "undefined") {
         return (window as any).lenis || null;
      }
      return null;
   };

   return {
      instance: getLenis(),
   };
};
