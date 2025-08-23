import { getPageData } from "@/common/utils/getPageData";
import SearchMedia from "@/features/search-media/components/SearchMedia";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps = getPageData("top-rated");

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
export default function Trending({ response }: Props) {
   return <SearchMedia title="Top Rated" response={response} useMediaType />;
}
