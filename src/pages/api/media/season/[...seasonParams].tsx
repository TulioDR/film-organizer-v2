import type { NextApiRequest, NextApiResponse } from "next";
const apiKey = process.env.API_KEY;

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      const [tvShowId, seasonNumber] = req.query.seasonParams as string[];
      try {
         const url = `https://api.themoviedb.org/3/tv/${tvShowId}/season/${seasonNumber}?api_key=${apiKey}&language=en-US`;
         const response = await fetch(url);
         const data = await response.json();
         res.status(200).json(data);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
