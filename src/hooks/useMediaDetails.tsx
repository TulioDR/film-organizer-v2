import { useRouter } from "next/router";

export default function useMediaDetails() {
   const router = useRouter();

   const getMediaDetails = (mediaType: string, id: number) => {
      router.push(`/${mediaType}/${id}`);
   };

   return { getMediaDetails };
}
