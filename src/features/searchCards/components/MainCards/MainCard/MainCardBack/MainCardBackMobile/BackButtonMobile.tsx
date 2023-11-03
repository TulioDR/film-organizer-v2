import StoreModel from "@/models/StoreModel";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
   onClick: () => void;
};

export default function BackButtonMobile({ onClick }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <button
         style={{ backgroundColor: themeColor }}
         className="grid place-content-center rounded-full w-10 aspect-square"
         onClick={onClick}
      >
         <span className="material-symbols-outlined">keyboard_arrow_left</span>
      </button>
   );
}
