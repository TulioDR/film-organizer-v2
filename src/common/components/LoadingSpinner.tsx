import React from "react";
import { SpinnerCircular } from "spinners-react";

interface Props {}

export default function LoadingSpinner({}: Props) {
   return (
      <SpinnerCircular
         size="100%"
         thickness={100}
         speed={150}
         color={"#CBAB60"}
         secondaryColor={"transparent"}
      />
   );
}
