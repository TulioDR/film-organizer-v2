import useThemeContext from "../context/ThemeContext";

type Props = {
   onClick: () => void;
};

export default function ToggleSidebar({ onClick }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <button
         style={{ backgroundColor: themeColor }}
         onClick={onClick}
         className="h-9 w-9 flex-shrink-0 rounded-lg grid place-content-center shadow-lg"
      >
         <span className="material-icons">menu</span>
      </button>
   );
}
