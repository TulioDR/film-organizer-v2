import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

import { MediaDetailsModel } from "@/features/pages/mediaDetails/models/MediaDetailsModel";
// import MainPoster from "@/features/pages/mediaDetails/components/MainPoster";
// import MainInfo from "@/features/pages/mediaDetails/components/MainInfo";
// import ScrollDownIcon from "@/features/pages/mediaDetails/components/ScrollDownIcon";
import Overview from "@/features/pages/mediaDetails/components/Overview";
import People from "@/features/pages/mediaDetails/components/People";
import Seasons from "@/features/pages/mediaDetails/components/Seasons";
import Trailers from "@/features/pages/mediaDetails/components/Trailers";
import Similar from "@/features/pages/mediaDetails/components/Similar";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { layoutActions } from "@/store/slices/layout-slice";
import Container from "@/features/pages/mediaDetails/components/Container";
import MediaData from "@/features/pages/mediaDetails/components/MediaData";
import Header from "@/features/pages/mediaDetails/components/Header";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { media_type, media_id } = context.query!;
   const certifications =
      media_type === "movie" ? "release_dates" : "content_ratings";
   const url = `https://api.themoviedb.org/3/${media_type}/${media_id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,credits,similar,${certifications}`;
   const res = await fetch(url);
   const media = await res.json();

   if (media.status_code === 34) {
      return { notFound: true };
   }

   return {
      props: { media_type, media },
   };
};

type Props = {
   media_type: "tv" | "movie";
   media: MediaDetailsModel;
};

export default function Details({ media_type, media }: Props) {
   const dispatch = useDispatch();
   const router = useRouter();

   useEffect(() => {
      dispatch(layoutActions.revealLayout());
   }, []);

   useEffect(() => {
      router.beforePopState((state) => {
         state.options.scroll = false;
         return true;
      });
   }, [router]);

   useEffect(() => {
      console.log("first render");
   }, []);

   // useEffect(() => {
   //    console.log(media);
   // }, [media]);

   return (
      <AnimatePresence mode="wait">
         <Container key={router.asPath} media={media}>
            <Head>
               <title>{media.title || media.name}</title>
               <meta name="description" content={media.overview} />
               <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header media={media} media_type={media_type} />
            <div className="-mt-24 gap-8 grid grid-cols-2 text-black relative">
               <Overview media={media} />
               <MediaData
                  media={media}
                  crew={media.created_by || media.credits.crew}
                  isMovie={media_type === "movie"}
               />
               {media_type === "tv" && (
                  <Seasons seasons={media.seasons} seriesID={media.id} />
               )}
               <Trailers trailers={media.videos.results} />
               <People type="Cast" people={media.credits?.cast} />
               <People type="Crew" people={media.credits?.crew} />
               <Similar media={media} mediaType={media_type} />
            </div>
         </Container>
      </AnimatePresence>
   );
}
