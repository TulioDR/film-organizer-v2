import GenreImage from "./GenreImage";
import GenreModel from "../../models/GenreModel";
import GenreName from "./GenreName";
import ImageLink from "@/common/components/ImageLink";

type Props = {
   genre: GenreModel;
   mediaType: "tv" | "movie";
};

export default function GenreCard({ genre, mediaType }: Props) {
   return (
      <ImageLink
         key={genre.id}
         link={`/${mediaType}/${genre.id}`}
         background={<GenreImage alt={genre.name} src={genre.image} />}
         front={<GenreName name={genre.name} />}
         className="aspect-[3/2]"
      />
   );
}
