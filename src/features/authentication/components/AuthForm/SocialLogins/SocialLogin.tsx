import Image, { StaticImageData } from "next/image";

type Props = {
   onClick: () => void;
   logo: StaticImageData;
   provider: string;
};

export default function SocialLogin({ onClick, logo, provider }: Props) {
   return (
      <button
         onClick={onClick}
         className="rounded-full bg-white h-11 aspect-square p-2 relative group"
      >
         <Image src={logo} alt={provider} className="h-full" />
         <div className="absolute right-1/2 translate-x-1/2 top-full translate-y-1 bg-secondary-light text-black text-xs rounded-full px-3 py-1 scale-0 group-hover:scale-100 duration-200">
            <div className="relative capitalize">
               {provider}
               <div className="absolute right-1/2 translate-x-1/2 bottom-full w-2 h-2 bg-secondary-light rotate-45"></div>
            </div>
         </div>
      </button>
   );
}
