import type { NextApiRequest, NextApiResponse } from "next";
const apiKey = process.env.API_KEY;

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      const { show_id, season_number } = req.query;
      try {
         const url = `https://api.themoviedb.org/3/tv/${show_id}/season/${season_number}?api_key=${apiKey}&language=en-US`;
         const response = await fetch(url);
         const data = await response.json();
         res.status(200).json(data);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
