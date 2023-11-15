import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";
import ListModel from "@/models/ListModel";
import StoreModel from "@/models/StoreModel";

import ModalPortal from "@/components/Modals/ModalPortal";
import DeleteListModal from "@/components/Modals/DeleteListModal";
import Title from "@/components/Title";
import ListFinder from "@/features/pages/manageLists/ListFinder";
import ListsCardsContainer from "@/features/pages/manageLists/ListsCardsContainer";
import ListCard from "@/features/pages/manageLists/ListCard";
import NoListsMessage from "@/features/pages/manageLists/NoListsMessage";
import ListsLoginAdvice from "@/features/pages/manageLists/ListsLoginAdvice";
import PageHead from "@/components/PageHead";

export default function Lists() {
   const { user } = useUser();
   const { lists } = useSelector((state: StoreModel) => state.lists);

   const [listToDelete, setListToDelete] = useState<ListModel | null>(null);

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
   const [filteredLists, setFilteredLists] = useState<ListModel[] | null>(null);
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
         <Title title="Manage">
            <ListFinder
               onChange={(e) => setInputValue(e.currentTarget.value)}
               value={inputValue}
            />
         </Title>
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
