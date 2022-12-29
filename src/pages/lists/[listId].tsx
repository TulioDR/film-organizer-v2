import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { getList } from "../../actions/lists";
import PageTitle from "../../components/PageTitle";
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

   useEffect(() => {
      const getListFunc = async () => {
         const list = await getList(listID);
         console.log(list);
         setList(list);
      };
      getListFunc();
   }, [listID]);

   return (
      <div>
         <PageTitle>{list?.name}</PageTitle>
         <div></div>
      </div>
   );
}
