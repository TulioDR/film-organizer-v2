import Image from "next/image";
import filmOrganizer from "../../data/images/logos/film-organizer.png";

interface Props {
   white: boolean;
}

export default function AuthAppLogo({ white }: Props) {
   return (
      <div className="fixed top-10 left-10 flex items-center space-x-2 z-20">
         <div className="relative aspect-square w-8">
            <Image src={filmOrganizer} alt="Film Organizer" sizes="100%" fill />
         </div>
         <span
            className={`text-2xl font-bold font-oswald duration-500 ${
               white ? "text-white" : "text-black"
            }`}
         >
            Film Organizer
         </span>
      </div>
   );
}
