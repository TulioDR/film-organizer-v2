import { GetServerSideProps } from "next";
import { useEffect } from "react";

import { layoutActions } from "@/store/slices/layout-slice";

import PageHead from "@/common/components/PageHead";
import { MediaDetailsModel } from "@/features/pages/media-id/models/MediaDetailsModel";
import BackgroundViewButton from "@/features/pages/media-id/components/BackgroundViewButton";
import MediaIdContainer from "@/features/pages/media-id/components/MediaIdContainer";
import Header from "@/features/pages/media-id/components/Header";
import Body from "@/features/pages/media-id/components/Body";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { AnimatePresence } from "framer-motion";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { useLenis } from "lenis/react";

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

export default function MediaId({ media_type, media }: Props) {
   const dispatch = useAppDispatch();
   const { removeBackground } = useBackground();
   useEffect(() => {
      dispatch(layoutActions.revealLayout());
      console.log(media.title || media.name);
      return () => {
         removeBackground();
      };
   }, [media.title || media.name]);
   const lenis = useLenis();
   return (
      <>
         <BackgroundViewButton />
         <AnimatePresence
            mode="wait"
            propagate
            onExitComplete={() => lenis!.scrollTo("top", { immediate: true })}
         >
            <MediaIdContainer key={media.id} media={media}>
               <PageHead
                  title={media.title || media.name}
                  content={media.overview}
               />
               <Header media={media} media_type={media_type} />
               <Body media={media} media_type={media_type} />
            </MediaIdContainer>
         </AnimatePresence>
      </>
   );
}
