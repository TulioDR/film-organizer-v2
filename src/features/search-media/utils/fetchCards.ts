import API_PUBLIC from "@/api/public";

export default async function fetchCards(url: string) {
   const { data } = await API_PUBLIC.get(url);
   return data;
}
