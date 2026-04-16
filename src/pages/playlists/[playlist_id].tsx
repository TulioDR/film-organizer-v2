import { fetchSinglePlaylistWithMedia } from "@/api/playlistsService";
import FilterCardsLayout from "@/common/components/FilterCardsLayout";
import PageHead from "@/common/components/PageHead";
import { PlaylistDetails } from "@/common/models/Playlist";
import MediaCard from "@/features/media-card/components/MediaCard";
import CardsGrid from "@/features/pages/media-type/components/CardsGrid";
import { createClerkSupabaseClient } from "@/lib/supabaseClient";
import { getAuth } from "@clerk/nextjs/server";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { GetServerSideProps } from "next";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { playlist_id } = context.params as { playlist_id: string };
   const authData = getAuth(context.req);

   if (!authData.userId) {
      return { redirect: { destination: "/auth", permanent: false } };
   }

   try {
      const supabase = createClerkSupabaseClient(authData);
      const playlist = await fetchSinglePlaylistWithMedia(
         supabase,
         playlist_id,
      );

      if (playlist.user_id !== authData.userId) {
         return { notFound: true };
      }

      return {
         props: {
            playlist: JSON.parse(JSON.stringify(playlist)),
         },
      };
   } catch (error) {
      console.error("Error fetching detailed playlist:", error);
      return { notFound: true };
   }
};

type Props = {
   playlist: PlaylistDetails;
};

export default function PlaylistId({ playlist: initialPlaylist }: Props) {
   const [playlist, _setPlaylist] = useState<PlaylistDetails>(initialPlaylist);

   const [isFilterOpen, setIsFilterOpen] = useState(false);

   const lenis = useLenis();
   const onExitComplete = () => {
      if (!lenis) return;
      lenis.scrollTo("top", { immediate: true });
   };

   return (
      <>
         <PageHead title={playlist.name} />

         <FilterCardsLayout
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
            title={playlist.name}
            compactFilter={<></>}
         >
            <AnimatePresence
               mode="wait"
               propagate
               onExitComplete={onExitComplete}
            >
               <CardsGrid isOpen={isFilterOpen}>
                  {playlist.playlist_items.map(
                     ({ media, media_type }, index) => (
                        <MediaCard
                           key={`${media_type}-${media.id}-${index}`}
                           id={`${media_type}-${media.id}-${index}`}
                           media={media}
                           mediaType={media_type}
                        />
                     ),
                  )}
               </CardsGrid>
            </AnimatePresence>
         </FilterCardsLayout>
      </>
   );
}
