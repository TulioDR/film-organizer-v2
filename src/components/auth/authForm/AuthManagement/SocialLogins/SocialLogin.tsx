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
         className="rounded-full bg-white h-11 aspect-square p-2"
      >
         <Image src={logo} alt={provider} className="h-full" />
      </button>
   );
}
