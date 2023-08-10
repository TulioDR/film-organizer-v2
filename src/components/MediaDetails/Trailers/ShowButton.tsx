import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
   onClick: () => void;
};

export default function ShowButton({ children, onClick }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <button
         onClick={onClick}
         style={{ backgroundColor: themeColor }}
         className="py-2 px-5 rounded-lg shadow-lg"
      >
         {children}
      </button>
   );
}
