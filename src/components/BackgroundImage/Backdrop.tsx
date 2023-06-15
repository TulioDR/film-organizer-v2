import StoreModel from "@/models/StoreModel";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SpinnerCircularFixed } from "spinners-react";
type Props = {
   backgroundKey: string;
   src: string | StaticImageData;
};

export default function Backdrop({ backgroundKey, src }: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);
   const onLoadingComplete = () => setIsLoaded(true);

   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <>
         <Image
            src={src}
            alt={backgroundKey}
            fill
            sizes="100%"
            onLoadingComplete={onLoadingComplete}
            className="object-cover"
         />
         {!isLoaded && (
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
               <SpinnerCircularFixed
                  size={"20%"}
                  thickness={100}
                  speed={100}
                  color={themeColor}
                  secondaryColor="transparent"
               />
            </div>
         )}
      </>
   );
}
