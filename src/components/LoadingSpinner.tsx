import StoreModel from "@/models/StoreModel";
import React from "react";
import { useSelector } from "react-redux";
import { SpinnerCircular } from "spinners-react";

interface Props {
   white?: true;
}

export default function LoadingSpinner({ white }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
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
