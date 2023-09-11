import Head from "next/head";
import { useEffect, useState } from "react";

import ListCard from "../../components/Lists/ListCard";
import PageTitle from "../../components/PageTitle";
import ListModel from "../../models/listModel";
import ListsLoginAdvice from "../../components/Lists/ListsLoginAdvice";

import ListFinder from "../../components/Lists/ListFinder";
import NoListsMessage from "../../components/Lists/NoListsMessage";
import { useSelector } from "react-redux";
import DeleteListModal from "@/components/Modals/DeleteListModal";
import ListsCardsContainer from "@/components/Lists/ListsCardsContainer";
import StoreModel from "@/models/StoreModel";
import ModalPortal from "@/components/Modals/ModalPortal";
import { useUser } from "@clerk/nextjs";
import useRemoveBackgroundImage from "@/hooks/useRemoveBackgroundImage";

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
   const [filteredLists, setFilteredLists] = useState<any[]>([]);
   useEffect(() => {
      if (!lists) return;
      const founded = lists.filter(({ name }) =>
         name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      );
      setFilteredLists(founded);
   }, [inputValue, lists]);

   useRemoveBackgroundImage();
   return (
      <div className="px-10 pb-10 overflow-hidden">
         <Head>
            <title>Manage Lists</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="sm:flex w-full justify-between items-end">
            <PageTitle>Manage</PageTitle>
            <ListFinder
               onChange={(e) => setInputValue(e.currentTarget.value)}
               value={inputValue}
            />
         </div>
         {user ? (
            <div>
               {filteredLists.length > 0 ? (
                  <ListsCardsContainer>
                     {filteredLists.map((list) => (
                        <ListCard
                           key={list.id}
                           list={list}
                           openDeleteModal={openDeleteModal}
                        />
                     ))}
                  </ListsCardsContainer>
               ) : (
                  <NoListsMessage />
               )}
            </div>
         ) : (
            <ListsLoginAdvice />
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
