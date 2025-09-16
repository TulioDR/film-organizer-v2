import { getPageData } from "@/common/utils/getServerSideData/getPageData";
import SearchMedia from "@/features/search-media/components/SearchMedia";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps = getPageData("trending");

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
export default function Trending(response: Props) {
   return <SearchMedia response={response} />;
}
