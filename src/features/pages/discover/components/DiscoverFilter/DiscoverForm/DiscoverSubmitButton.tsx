import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

export default function DiscoverSubmitButton() {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <button
         type="submit"
         style={{ backgroundColor: themeColor }}
         className="px-5 rounded-lg mx-auto block shadow-lg text-white font-medium uppercase h-10"
      >
         Search
      </button>
   );
}
