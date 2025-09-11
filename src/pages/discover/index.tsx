import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import SearchMedia from "@/features/search-media/components/SearchMedia";
import { getDiscoverData } from "@/common/utils/getServerSideData/getDiscoverData";

export const getServerSideProps: GetServerSideProps = getDiscoverData();

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Discover(response: Props) {
   return <SearchMedia useDiscover title="Discover" response={response} />;
}
