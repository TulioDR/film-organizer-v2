import Image from "next/image";

type Props = {};

export default function BackgroundImage({}: Props) {
   return (
      <div className="fixed top-0 left-0 h-screen w-full bg-red-500 text-white flex items-center justify-center">
         <div className="relative w-full h-full">
            <Image
               src={`https://image.tmdb.org/t/p/w${1280}${"/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg"}`}
               alt="image"
               fill
               sizes="100%"
               priority
               className="object-cover"
            />
         </div>
      </div>
   );
}
