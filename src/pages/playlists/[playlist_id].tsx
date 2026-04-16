import { fetchSinglePlaylistWithMedia } from "@/api/playlistsService";
import FilterCardsLayout from "@/common/components/FilterCardsLayout";
import PageHead from "@/common/components/PageHead";
import { PlaylistDetails, PlaylistItems } from "@/common/models/Playlist";
import MediaCard from "@/features/media-card/components/MediaCard";
import CardsGrid from "@/features/pages/media-type/components/CardsGrid";
import CompactPlaylistDetailsFilter from "@/features/pages/playlist-id/components/CompactPlaylistDetailsFilter";
import PlaylistDetailsDescription from "@/features/pages/playlist-id/components/PlaylistDetailsDescription";
import { createClerkSupabaseClient } from "@/lib/supabaseClient";
import { getAuth } from "@clerk/nextjs/server";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

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

   useEffect(() => {
      console.log(playlist);
   }, []);

   const [isFilterOpen, setIsFilterOpen] = useState(false);

   const [filteredMedia, setFilteredMedia] = useState<PlaylistItems[]>(
      playlist.playlist_items,
   );

   return (
      <>
         <PageHead title={playlist.name} />

         <FilterCardsLayout
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
            title={playlist.name}
            compactFilter={
               <CompactPlaylistDetailsFilter
                  allMedia={playlist.playlist_items}
                  setFilteredMedia={setFilteredMedia}
               />
            }
         >
            <div className="w-full flex flex-col gap-41 pb-4">
               <div className="text-black dark:text-white font-medium tracking-wider uppercase">
                  Description
               </div>
               <div className="text-black/80 dark:text-white/80">
                  {playlist.description || "This playlist has no description"}
               </div>
            </div>
            <PlaylistDetailsDescription description={playlist.description} />

            <CardsGrid isOpen={isFilterOpen}>
               {filteredMedia.map(({ media, media_type }, index) => (
                  <MediaCard
                     key={`${media_type}-${media.id}-${index}`}
                     id={`${media_type}-${media.id}-${index}`}
                     media={media}
                     mediaType={media_type}
                  />
               ))}
            </CardsGrid>
         </FilterCardsLayout>
      </>
   );
}
