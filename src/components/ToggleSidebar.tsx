import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

type Props = {
   onClick: () => void;
};

export default function ToggleSidebar({ onClick }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <button
         style={{ backgroundColor: themeColor }}
         onClick={onClick}
         className="h-9 aspect-square flex-shrink-0 rounded-lg grid place-content-center"
      >
         <span className="material-icons">menu</span>
      </button>
   );
}
