import { StaticImageData } from "next/image";

export default interface GenreModel {
   name: string;
   id: number;
   image: StaticImageData;
}
