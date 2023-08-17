import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

type Props = {
   showcase: "movies" | "series" | "upcoming";
   currentShowcase: "movies" | "series" | "upcoming";
   children: React.ReactNode;
   onClick: () => void;
};

export default function ChangeShowcaseButton({
   showcase,
   currentShowcase,
   children,
   onClick,
}: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   const isSelected = showcase === currentShowcase;
   return (
      <button
         onClick={onClick}
         style={{ backgroundColor: isSelected ? themeColor : "white" }}
         className={`relative rounded-lg py-1 px-4 text-sm 2xl:text-base duration-100 ${
            isSelected ? "text-dark-1" : "text-light-1"
         }`}
      >
         {children}
      </button>
   );
}
