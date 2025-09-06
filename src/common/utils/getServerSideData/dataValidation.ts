export function isPageInvalid(page: number) {
   const isPageInvalid = !(page > 0 && page < 21 && Number.isInteger(page));
   return isPageInvalid;
}
export function isMediaTypeInvalid(mediaType: string) {
   const isTypeInvalid = mediaType !== "movie" && mediaType !== "tv";
   return isTypeInvalid;
}
