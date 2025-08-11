export default function getPersonWiki(name: string): string {
   const nameUrl = name.split(" ").join("_");
   return `https://en.wikipedia.org/wiki/${nameUrl}`;
}
