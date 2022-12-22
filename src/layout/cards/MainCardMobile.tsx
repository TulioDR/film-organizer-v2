import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { staggerItem } from "../../animations/StaggerCards";
import Poster from "../../components/Poster";

type Props = {
   media: any;
   mediaType: "tv" | "movie";
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function MainCard({ media, mediaType, setSelectedImg }: Props) {
   const router = useRouter();
   const goTo = () => {
      router.push(`/${mediaType}/${media.id}`);
      if (window.innerWidth >= 1280) {
         setSelectedImg(
            `https://image.tmdb.org/t/p/w${780}${media.poster_path}`
         );
      }
   };

   return (
      <motion.article
         variants={staggerItem}
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
