import type { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.API_KEY;

type Data = {
   id: string;
   name: string;
   media: any;
}[];

export default async function handler(
   _req: NextApiRequest,
   res: NextApiResponse<Data>,
) {
   const url1 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
   const url2 = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`;
   const url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&region=US&page=1`;
   try {
      const homeMedia: any = await Promise.all([
         fetch(url1).then((res) => res.json()),
         fetch(url2).then((res) => res.json()),
         fetch(url3).then((res) => res.json()),
      ]);

      const data = [
         {
            id: "now_playing",
            name: "Now playing",
            media: homeMedia[0].results,
         },
         {
            id: "on_the_air",
            name: "On the air",
            media: homeMedia[1].results,
         },
         {
            id: "upcoming",
            name: "Upcoming",
            media: homeMedia[2].results,
         },
      ];
      res.status(200).json(data);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
