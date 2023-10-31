import type { NextApiRequest, NextApiResponse } from "next";
const apiKey = process.env.API_KEY;
export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const { media_type, page } = req.query;
   console.log(req.query);
   try {
      const url = `https://api.themoviedb.org/3/trending/${media_type}/week?api_key=${apiKey}&language=en-US&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
