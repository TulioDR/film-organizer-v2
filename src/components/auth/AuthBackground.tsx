import Image from "next/image";
import background from "../../data/images/auth-background.jpg";

export default function AuthBackground() {
   return (
      <div className="relative w-full h-screen">
         <Image
            alt="background"
            src={background}
            fill
            sizes="100%"
            priority
            className="object-cover"
         />
      </div>
   );
}
