export default interface MediaModel {
   id?: string;
   media_id: number;
   name: string;
   poster_path: string;
   media_type: "movie" | "tv";
   listId: string;
}
