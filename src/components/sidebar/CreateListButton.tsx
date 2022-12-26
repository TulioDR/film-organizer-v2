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
         className="rounded-lg h-9 grid place-content-center mt-2 w-full"
      >
         CreateListButton
      </button>
   );
}
