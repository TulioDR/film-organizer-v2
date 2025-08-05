import React from "react";
import { useSelector } from "react-redux";
import { SpinnerCircular } from "spinners-react";
import Store from "@/common/models/Store";

interface Props {
   white?: true;
}

export default function LoadingSpinner({ white }: Props) {
   const { themeColor } = useSelector((state: Store) => state.theme);
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
