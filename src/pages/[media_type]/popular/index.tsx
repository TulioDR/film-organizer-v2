import { getPageData } from "@/common/utils/getServerSideData/getPageData";
import SearchMedia from "@/features/search-media/components/SearchMedia";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps = getPageData("popular");

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
export default function Popular(response: Props) {
   return <SearchMedia title="Popular" response={response} useMediaType />;
}
