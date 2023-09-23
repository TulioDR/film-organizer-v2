import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

type Props = {
   onClick: () => void;
};

export default function LearnMoreButton({ onClick }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <button
         onClick={onClick}
         className="group backdrop-blur drop-shadow-lg px-3 2xl:px-5 border border-white h-full text-sm font-medium relative overflow-hidden flex items-center"
      >
         <div
            style={{ backgroundColor: themeColor }}
            className="absolute h-full top-0 left-0 -z-10 w-0 group-hover:w-full duration-200"
         ></div>
         <span className="uppercase">Learn More</span>
      </button>
   );
}