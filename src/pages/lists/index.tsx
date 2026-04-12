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

export default function Lists() {
   const { user } = useUser();
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
   const [filteredLists, setFilteredLists] = useState<List[] | null>(null);
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

   // if (filteredLists === null) return <></>;

   useEffect(() => {
      console.log(user);
   }, [user]);

   const logOut = async () => {
      const data = await signOut();
      console.log(data);
   };
   return (
      <div className="w-full px-4 lg:px-32 pt-14 pb-14 xl:pb-0 mt-4 xl:pt-20">
         <button
            onClick={logOut}
            className="fixed right-8 top-1/2 -translate-y-1/2 w-40 h-10 bg-red-500"
         >
            logOut
         </button>
         <PageHead title="Playlists" />
         {/* <ListFinder
            onChange={(e) => setInputValue(e.currentTarget.value)}
            value={inputValue}
         /> */}
         {!user && <ListsLoginAdvice />}
         {/* {user && filteredLists.length === 0 && <NoListsMessage />}
         {user && filteredLists.length > 0 && (
            <ListsCardsContainer>
               {filteredLists.map((list) => (
                  <ListCard
                     key={list.id}
                     list={list}
                     openDeleteModal={openDeleteModal}
                  />
               ))}
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
