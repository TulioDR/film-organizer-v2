import React from "react";
import useThemeContext from "../../context/ThemeContext";

type Props = {
   onClick: () => void;
};

export default function CreateListButton({ onClick }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <button
         onClick={onClick}
         style={{ backgroundColor: themeColor }}
         className="h-full grid place-content-center w-full"
      >
         CreateListButton
      </button>
   );
}
