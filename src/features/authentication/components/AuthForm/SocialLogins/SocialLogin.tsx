import Image, { StaticImageData } from "next/image";

type Props = {
   onClick: () => void;
   logo: StaticImageData;
   provider: string;
};

export default function SocialLogin({ onClick, logo, provider }: Props) {
   return (
      <button
         type="button"
         onClick={onClick}
         className={`rounded-full h-11 aspect-square p-2 relative group border border-light-2`}
      >
         <Image src={logo} alt={provider} className="h-full" />
         <div
            className={`absolute right-1/2 translate-x-1/2 top-full translate-y-1 text-xs rounded-full px-3 py-1 scale-0 group-hover:scale-100 duration-200 bg-light-2 text-dark-1 z-50`}
         >
            <div className="relative capitalize font-medium">
               {provider}
               <div className="absolute right-1/2 translate-x-1/2 bottom-full w-2 h-2 rotate-45 bg-light-2"></div>
            </div>
         </div>
      </button>
   );
}
