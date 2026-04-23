import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import Image, { StaticImageData } from "next/image";

type Props = {
   onClick: () => void;
   logo: StaticImageData;
   provider: string;
};

export default function SocialLogin({ onClick, logo, provider }: Props) {
   return (
      <button
         style={{ borderRadius: STANDARD_RADIUS }}
         type="button"
         onClick={onClick}
         className={`w-full h-12 flex justify-center items-center p-3 gap-2 group bg-white`}
      >
         <div className="h-full aspect-square relative">
            <Image src={logo} alt={provider} className="h-full" />
         </div>
         <div className="text-base tracking-widest font-medium text-black uppercase">
            {provider}
         </div>
      </button>
   );
}
