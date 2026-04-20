import { getPlaylistDetails } from "@/api/playlists";
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

   if (!authData.userId)
      return { redirect: { destination: "/sign-in", permanent: false } };

   try {
      const supabase = createClerkSupabaseClient(authData);

      const playlist = await fetchSinglePlaylistWithMedia(
         supabase,
         playlist_id,
         authData.userId,
      );

      return {
         props: {
            initialPlaylist: JSON.parse(JSON.stringify(playlist)),
         },
      };
   } catch (error) {
      return { notFound: true };
   }
};

type Props = {
   initialPlaylist: PlaylistDetails;
};

export default function PlaylistId({ initialPlaylist }: Props) {
   const [playlist, setPlaylist] = useState<PlaylistDetails>(initialPlaylist);

   const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

   const [filteredMedia, setFilteredMedia] = useState<PlaylistItems[]>(
      playlist.playlist_items,
   );

   useEffect(() => {
      setFilteredMedia(playlist.playlist_items);
   }, [playlist.playlist_items]);

   const [isBookmarkOpen, setIsBookmarkOpen] = useState<boolean>(false);

   useEffect(() => {
      const refreshPlaylist = async () => {
         if (isBookmarkOpen) return;
         const updatedData = await getPlaylistDetails(initialPlaylist.id);
         setPlaylist(updatedData);
      };
      refreshPlaylist();
   }, [isBookmarkOpen, initialPlaylist.id]);

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
            <PlaylistDetailsDescription
               description={playlist.description}
               isFilterOpen={isFilterOpen}
            />

            <CardsGrid isOpen={isFilterOpen}>
               {filteredMedia.map(({ media, media_type, id }) => (
                  <MediaCard
                     setIsBookmarkOpen={setIsBookmarkOpen}
                     key={`${media_type}-${media.id}-${id}`}
                     id={`${media_type}-${media.id}-${id}`}
                     media={media}
                     mediaType={media_type}
                  />
               ))}
            </CardsGrid>
         </FilterCardsLayout>
      </>
   );
}
