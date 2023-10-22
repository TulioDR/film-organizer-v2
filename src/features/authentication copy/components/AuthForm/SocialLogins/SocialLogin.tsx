import Image, { StaticImageData } from "next/image";

type Props = {
   onClick: () => void;
   logo: StaticImageData;
   provider: string;
   dark?: true;
};

export default function SocialLogin({ onClick, logo, provider, dark }: Props) {
   return (
      <button
         type="button"
         onClick={onClick}
         className={`rounded-full h-11 aspect-square p-2 relative group ${
            dark ? "bg-secondary-light" : "bg-secondary-dark"
         }`}
      >
         <Image src={logo} alt={provider} className="h-full" />
         <div
            className={`absolute right-1/2 translate-x-1/2 top-full translate-y-1 text-xs rounded-full px-3 py-1 scale-0 group-hover:scale-100 duration-200 ${
               dark
                  ? "bg-secondary-light text-light-1"
                  : "bg-secondary-dark text-dark-1"
            }`}
         >
            <div className="relative capitalize font-medium">
               {provider}
               <div
                  className={`absolute right-1/2 translate-x-1/2 bottom-full w-2 h-2 rotate-45 ${
                     dark ? "bg-secondary-light" : "bg-secondary-dark"
                  }`}
               ></div>
            </div>
         </div>
      </button>
   );
}
