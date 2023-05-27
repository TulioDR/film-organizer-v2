import { SpinnerCircularFixed } from "spinners-react";
import { useSelector } from "react-redux";

export default function SeasonLoadingAnimation() {
   const { themeColor } = useSelector((state: any) => state.theme);

   return (
      <div className="h-full w-full flex items-center justify-center">
         <SpinnerCircularFixed
            size={50}
            thickness={100}
            speed={100}
            color={themeColor}
            secondaryColor="white"
         />
      </div>
   );
}
