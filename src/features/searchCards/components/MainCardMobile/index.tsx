import Link from "next/link";
import { motion } from "framer-motion";
import Poster from "../../../../components/Poster";

type Props = {
   media: any;
   mediaType: "tv" | "movie";
};

export default function MainCardMobile({ media, mediaType }: Props) {
   return (
      <motion.article layout className="shadow-xl">
         <Link href={`/${mediaType}/${media.id}`}>
            <Poster
               alt={media.title || media.name}
               posterPath={media.poster_path}
               size="md"
            />
         </Link>
      </motion.article>
   );
}
