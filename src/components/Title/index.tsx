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
         <RevealHorizontal>
            <div
               className={`text-xl md:text-4xl lg:text-6xl 2xl:text-7xl font-title tracking-wider ${
                  backgroundKey
                     ? "text-dark-1"
                     : "text-light-1 dark:text-dark-1"
               }`}
            >
               {title}
            </div>
         </RevealHorizontal>
         {children}
      </TitleContainer>
   );
}
