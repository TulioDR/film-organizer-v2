import { useEffect, useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";

import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import DeleteListModal from "@/features/modals/list-modals/delete-list-modal/components/DeleteListModal";
import PageHead from "@/common/components/PageHead";
import List from "@/common/models/List";
import useAppSelector from "@/store/hooks/useAppSelector";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { listActions } from "@/store/slices/list-slice";
// import { getLists } from "@/api/lists";
import ListsLoginAdvice from "@/features/pages/playlists/components/ListsLoginAdvice";
import NoListsMessage from "@/features/pages/playlists/components/NoListsMessage";
import PageTitle from "@/common/components/PageTitle";
import PlaylistCard from "@/features/pages/playlists/components/PlaylistCard";

export default function Lists() {
   const { user, isLoaded } = useUser();
   const { signOut } = useClerk();
   const { lists } = useAppSelector((state) => state.lists);

   const [listToDelete, setListToDelete] = useState<List | null>(null);

   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const openDeleteModal = (list: any) => {
      setIsModalOpen(true);
      setListToDelete(list);
   };
   const closeDeleteModal = () => {
      setIsModalOpen(false);
      setListToDelete(null);
   };
   const [inputValue, setInputValue] = useState<string>("");
   const [filteredLists, setFilteredLists] = useState<List[]>([]);
   useEffect(() => {
      if (!lists) {
         setFilteredLists([]);
         return;
      }
      const founded = lists.filter(({ name }) =>
         name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()),
      );
      setFilteredLists(founded);
   }, [inputValue, lists]);

   // const dispatch = useAppDispatch();
   // useEffect(() => {
   //    const getInitialLists = async () => {
   //       if (!user) {
   //          dispatch(listActions.setLists(null));
   //          return;
   //       }
   //       const lists = await getLists(user.id);
   //       dispatch(listActions.setLists(lists));
   //    };
   //    getInitialLists();
   // }, [user, dispatch]);

   useEffect(() => {
      console.log(user);
   }, [user]);

   if (!isLoaded || !user)
      return (
         <div className="h-[100svh] w-full flex items-center justify-center">
            <PageHead title="Playlists" />
            <ListsLoginAdvice />
         </div>
      );
   return (
      <div className="w-full px-4 lg:px-32 pt-14 pb-14 xl:pb-4 mt-4 xl:pt-20">
         <PageHead title="Playlists" />
         <div className="fixed top-20 left-32 z-10 w-full h-64 flex items-center justify-between">
            <PageTitle title="Playlists" />
         </div>
         {/* <ListFinder
            onChange={(e) => setInputValue(e.currentTarget.value)}
            value={inputValue}
         /> */}

         <div className="grid w-full xl:grid-cols-2 gap-4 mt-64">
            {Array.from({ length: 10 }).map((_, index) => (
               <PlaylistCard key={index} />
            ))}
         </div>
         {/* {filteredLists.length === 0 && <NoListsMessage />}
         {filteredLists.length > 0 && (
            <ListsCardsContainer>
               {filteredLists.map((list) => ())}
            </ListsCardsContainer>
         )} */}
         {/* <ModalPortal isOpen={isModalOpen}>
            <DeleteListModal
               close={closeDeleteModal}
               listToDelete={listToDelete}
            />
         </ModalPortal> */}
      </div>
   );
}
