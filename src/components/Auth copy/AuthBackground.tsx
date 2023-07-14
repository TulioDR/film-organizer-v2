import Image from "next/image";
import background from "../../data/images/auth-background.jpg";

export default function AuthBackground() {
   return (
      <div className="w-full h-screen fixed top-0 left-0 -z-10">
         <div className="relative w-full h-full">
            <Image
               alt="background"
               src={background}
               fill
               sizes="100%"
               priority
               className="object-cover"
            />
         </div>
      </div>
   );
}
