import { useRouter } from "next/router";
import Poster from "../Poster";
import { motion } from "framer-motion";

type Props = {
   media: any;
   mediaType: "tv" | "movie";
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Card({ media, mediaType, setSelectedImg }: Props) {
   const router = useRouter();
   const goTo = () => {
      router.push(`/${mediaType}/${media.id}`);
      setSelectedImg(`https://image.tmdb.org/t/p/w${780}${media.poster_path}`);
   };

   return (
      <motion.article
         layoutId={`https://image.tmdb.org/t/p/w${780}${media.poster_path}`}
         onClick={goTo}
         className="aspect-[2/3] relative rounded-xl overflow-hidden cursor-pointer"
      >
         <Poster
            alt={media.title || media.name}
            posterPath={media.poster_path}
            size="lg"
         />
      </motion.article>
   );
}
