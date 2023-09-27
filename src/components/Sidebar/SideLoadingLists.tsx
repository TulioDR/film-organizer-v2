import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import { SpinnerCircularFixed } from "spinners-react";

export default function SideLoadingLists() {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <div className="w-full flex justify-center">
         <SpinnerCircularFixed
            size={36}
            thickness={100}
            speed={100}
            color={themeColor}
            secondaryColor="white"
         />
      </div>
   );
}
