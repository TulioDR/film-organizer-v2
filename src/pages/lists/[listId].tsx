import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { getList } from "../../actions/lists";
import PageTitle from "../../components/PageTitle";
import Poster from "../../components/Poster";
import useSidebarContext from "../../context/SidebarContext";
import MediaModel from "../../models/MediaModel";
// import ListModel from "../../models/listModel";

type Props = { listID: string };

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { listID } = context.query!;
   return {
      props: { listID },
   };
};

export default function ListID({ listID }: Props) {
   const [list, setList] = useState<any>();
   const [media, setMedia] = useState<MediaModel[]>([]);
   const { openSidebar } = useSidebarContext();

   useEffect(() => {
      const getListFunc = async () => {
         const { list, media } = await getList(listID);
         console.log(list);
         console.log(media);
         setMedia(media);
         setList(list);
      };
      getListFunc();
   }, [listID]);

   return (
      <div>
         <PageTitle>{list?.name}</PageTitle>
         <div
            className={`grid grid-cols-2 md:grid-cols-3 ${
               openSidebar
                  ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                  : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
            }  gap-5`}
         >
            {media.map((media) => (
               <div className="relative">
                  <Poster
                     alt={media.name}
                     posterPath={media.poster_path}
                     size="lg"
                  />
                  <div className="absolute w-full h-full">{media.name}</div>
               </div>
            ))}
         </div>
      </div>
   );
}
