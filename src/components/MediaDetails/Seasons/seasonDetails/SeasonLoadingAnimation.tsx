import { SpinnerCircularFixed } from "spinners-react";
import useThemeContext from "../../../../context/ThemeContext";

export default function SeasonLoadingAnimation() {
   const { themeColor } = useThemeContext();
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
