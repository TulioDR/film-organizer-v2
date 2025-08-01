import API_PUBLIC from "@/api/public";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
   type: string;
};

export default function SelectorBackground({ type }: Props) {
   const [background, setBackground] = useState<string | null>(null);
   const router = useRouter();

   useEffect(() => {
      const getImage = async () => {
         const mediaType = router.query.media_type;
         if (!mediaType || !type) return;
         const url = `/${mediaType}/${type}/1`;
         const { data } = await API_PUBLIC.get(url);
         const image = `https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`;
         setBackground(image);
      };
      getImage();
   }, [type, router.query.media_type]);

   if (!background) return <></>;
   return (
      <Image
         src={background}
         alt="popular"
         sizes="100%"
         fill
         className="object-cover"
      />
   );
}
