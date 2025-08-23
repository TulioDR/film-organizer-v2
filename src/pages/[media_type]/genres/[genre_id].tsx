import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import SearchMedia from "@/features/search-media/components/SearchMedia";
import { getPageData } from "@/common/utils/getPageData";

export const getServerSideProps: GetServerSideProps = getPageData("genres");

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
export default function GenrePage({ response }: Props) {
   return (
      <SearchMedia useGenres useMediaType title="Genres" response={response} />
   );
}
