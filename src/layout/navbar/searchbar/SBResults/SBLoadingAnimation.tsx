import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import { SpinnerCircularFixed } from "spinners-react";

export default function SBLoadingAnimation() {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <div className="w-full grid place-content-center h-40">
         <SpinnerCircularFixed
            size={50}
            thickness={100}
            speed={100}
            color={themeColor}
            secondaryColor="rgba(0, 0, 0, 0.44)"
         />
      </div>
   );
}
