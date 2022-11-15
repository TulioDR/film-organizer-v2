import Image from "next/image";

type Props = { movie: any };

export default function FrontPoster({ movie }: Props) {
   return (
      <Image
         alt={movie.name || movie.title}
         src={`https://image.tmdb.org/t/p/w${1280}${movie.poster_path}`}
         fill
         sizes="100%"
         priority
      />
   );
}
