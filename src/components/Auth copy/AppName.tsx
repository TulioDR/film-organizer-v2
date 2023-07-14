import Image from "next/image";
import filmOrganizer from "../../data/images/logos/film-organizer.png";

export default function AppName() {
   return (
      <div className="flex items-center space-x-2">
         <span>
            <Image
               src={filmOrganizer}
               alt="Film Organizer"
               width={40}
               height={40}
            />
         </span>
         <span className="text-2xl font-bold text-light-text-hard">
            Film Organizer
         </span>
      </div>
   );
}
