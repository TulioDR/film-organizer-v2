import RevealHorizontal from "@/animations/RevealHorizontal";
import React from "react";
import TitleContainer from "./TitleContainer";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

type Props = {
   title: string;
   children?: React.ReactNode;
};

export default function Title({ title, children }: Props) {
   const { backgroundKey } = useSelector(
      (state: StoreModel) => state.background
   );
   return (
      <TitleContainer>
         <div className="overflow-hidden">
            <RevealHorizontal>
               <div
                  className={`text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-title tracking-wide uppercase ${
                     backgroundKey
                        ? "text-dark-1"
                        : "text-light-1 dark:text-dark-1"
                  }`}
               >
                  {title}
               </div>
            </RevealHorizontal>
         </div>
         {children}
      </TitleContainer>
   );
}
