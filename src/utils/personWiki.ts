export default function personWiki(name: string) {
   const nameUrl = name.split(" ").join("_");
   window.open(`https://en.wikipedia.org/wiki/${nameUrl}`, "_blank");
}
