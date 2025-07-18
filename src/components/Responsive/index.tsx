import dynamic from "next/dynamic";
import React from "react";

const MediaQuery = dynamic(() => import("react-responsive"), {
   ssr: false,
});

type Props = {
   maxWidth?: number;
   minWidth?: number;
   children: React.ReactNode;
};

export default function Responsive({ maxWidth, minWidth, children }: Props) {
   return (
      <MediaQuery maxWidth={maxWidth} minWidth={minWidth}>
         {children}
      </MediaQuery>
   );
}
