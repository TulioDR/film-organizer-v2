import GenreModel from "../../models/GenreModel";
import GenreName from "./GenreName";
import ImageLink from "@/common/components/ImageLink";
import Poster from "@/common/components/Poster";

type Props = {
   genre: GenreModel;
   mediaType: "tv" | "movie";
};

export default function GenreCard({ genre, mediaType }: Props) {
   return (
      <ImageLink
         key={genre.id}
         link={`/${mediaType}/genres/${genre.id}`}
         background={<Poster alt={genre.name} posterPath={genre.image} />}
         front={<GenreName name={genre.name} />}
         className="aspect-[3/2]"
      />
   );
}
