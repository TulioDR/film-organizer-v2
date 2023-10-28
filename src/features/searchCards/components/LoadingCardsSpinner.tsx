import StoreModel from "@/models/StoreModel";
import React from "react";
import { useSelector } from "react-redux";
import { SpinnerCircularFixed } from "spinners-react";

type Props = {};

export default function LoadingCardsSpinner({}: Props) {
   const { themeColor, isDarkMode } = useSelector(
      (state: StoreModel) => state.theme
   );
   return (
      <div className="w-full flex justify-center mt-5">
         <div className="w-32">
            <SpinnerCircularFixed
               size="100%"
               thickness={100}
               speed={200}
               color={themeColor}
               secondaryColor={isDarkMode ? "white" : "black"}
            />
         </div>
      </div>
   );
}
