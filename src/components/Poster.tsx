import Image from "next/image";

type Props = {
   movie: any;
};

export default function Poster({ movie }: Props) {
   return (
      <Image
         alt={movie.title}
         src={`https://image.tmdb.org/t/p/w${1280}${movie.backdrop_path}`}
         fill
         sizes="100%"
         priority
      />
   );
}
