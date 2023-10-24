import Image from "next/image";
import filmOrganizer from "@/data/images/logos/film-organizer.png";

interface Props {
   white?: true;
}

export default function AuthAppLogo({ white }: Props) {
   return (
      <div className="absolute top-10 left-5 sm:left-10 flex items-center space-x-2">
         <div className="relative aspect-square w-8">
            <Image src={filmOrganizer} alt="Film Organizer" sizes="100%" fill />
         </div>
         <span
            className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-title ${
               white ? "text-white" : "text-black"
            }`}
         >
            Film Organizer
         </span>
      </div>
   );
}
