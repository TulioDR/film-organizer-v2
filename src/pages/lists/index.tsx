import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";

import ListFinder from "@/features/pages/manageLists/ListFinder";
import ListsCardsContainer from "@/features/pages/manageLists/ListsCardsContainer";
import ListCard from "@/features/pages/manageLists/ListCard";
import NoListsMessage from "@/features/pages/manageLists/NoListsMessage";
import ListsLoginAdvice from "@/features/pages/manageLists/ListsLoginAdvice";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import DeleteListModal from "@/features/modals/list-modals/delete-list-modal/components/DeleteListModal";
import PageHead from "@/common/components/PageHead";
import PageTitle from "@/common/components/PageTitle";
import List from "@/common/models/List";
import Store from "@/common/models/Store";

export default function Lists() {
   const { user } = useUser();
   const { lists } = useSelector((state: Store) => state.lists);

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
         name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      );
      setFilteredLists(founded);
   }, [inputValue, lists]);

   if (filteredLists === null) return <></>;
   return (
      <div className="overflow-hidden">
         <PageHead title="Manage Lists<" />
         {/* <PageTitle title="Manage">
            <ListFinder
               onChange={(e) => setInputValue(e.currentTarget.value)}
               value={inputValue}
            />
         </PageTitle> */}
         {!user && <ListsLoginAdvice />}
         {user && filteredLists.length === 0 && <NoListsMessage />}
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
         )}
         <ModalPortal isOpen={isModalOpen}>
            <DeleteListModal
               close={closeDeleteModal}
               listToDelete={listToDelete}
            />
         </ModalPortal>
      </div>
   );
}
