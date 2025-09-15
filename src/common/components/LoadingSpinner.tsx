import React from "react";
import { SpinnerCircular } from "spinners-react";
import useAppSelector from "@/store/hooks/useAppSelector";

interface Props {
   white?: true;
}

export default function LoadingSpinner({ white }: Props) {
   const { themeColor } = useAppSelector((state) => state.theme);
   return (
      <SpinnerCircular
         size="100%"
         thickness={100}
         speed={150}
         color={white ? "white" : themeColor}
         secondaryColor={"transparent"}
      />
   );
}
