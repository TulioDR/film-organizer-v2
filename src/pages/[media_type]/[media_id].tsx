import { GetServerSideProps } from "next";
import { useEffect } from "react";

import { MediaDetailsModel } from "@/features/pages/mediaDetails/models/MediaDetailsModel";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { layoutActions } from "@/store/slices/layout-slice";
import Container from "@/features/pages/mediaDetails/components/Container";
import Header from "@/features/pages/mediaDetails/components/Header";
import Body from "@/features/pages/mediaDetails/components/Body";
import BackgroundViewButton from "@/features/pages/mediaDetails/components/BackgroundViewButton";
import PageHead from "@/common/components/PageHead";

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

   return (
      <>
         <BackgroundViewButton />
         <AnimatePresence mode="wait">
            <Container key={router.asPath} media={media}>
               <PageHead
                  title={media.title || media.name}
                  content={media.overview}
               />
               <Header media={media} media_type={media_type} />
               <Body media={media} media_type={media_type} />
            </Container>
         </AnimatePresence>
      </>
   );
}
