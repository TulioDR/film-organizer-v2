import RevealHorizontal from "@/animations/RevealHorizontal";
import React from "react";
import TitleContainer from "./TitleContainer";

type Props = {
   title: string;
   children?: React.ReactNode;
};

export default function Title({ title, children }: Props) {
   return (
      <TitleContainer>
         <RevealHorizontal>
            <div className="text-xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold font-elianto tracking-wider text-light-1 dark:text-dark-1">
               {title}
            </div>
         </RevealHorizontal>
         {children}
      </TitleContainer>
   );
}
