import Image from "next/image";

type Props = {
   alt: string;
   posterPath: string;
};

export default function HeaderPoster({ alt, posterPath }: Props) {
   return (
      <div className="aspect-[2/3] relative w-full sm:w-auto sm:h-full">
         <Image
            alt={alt}
            src={`https://image.tmdb.org/t/p/w${780}${posterPath}`}
            placeholder="empty"
            fill
            sizes="100%"
            priority
         />
      </div>
   );
}
