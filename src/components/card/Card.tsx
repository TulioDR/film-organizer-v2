import Poster from "../Poster";

type Props = {
   media: any;
};

export default function Card({ media }: Props) {
   return (
      <article className="aspect-[2/3] relative rounded-xl overflow-hidden">
         <Poster
            alt={media.title || media.name}
            posterPath={media.poster_path}
            size="lg"
         />
      </article>
   );
}
