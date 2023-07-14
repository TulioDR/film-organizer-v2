import Image from "next/image";
import filmOrganizer from "../../data/images/logos/film-organizer.png";

export default function AuthAppLogo() {
   return (
      <div className="fixed top-10 left-10 flex items-center space-x-2">
         <div className="relative aspect-square w-8">
            <Image src={filmOrganizer} alt="Film Organizer" sizes="100%" fill />
         </div>
         <span className="text-2xl font-bold text-black font-oswald">
            Film Organizer
         </span>
      </div>
   );
}
