import type { NextApiRequest, NextApiResponse } from "next";
const apiKey = process.env.API_KEY;
type Data = {
   name: string;
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const { media_type, genre_id, page } = req.query;
   const url = `https://api.themoviedb.org/3/discover/${media_type}?api_key=${apiKey}&language=en-US&include_adult=false&with_genres=${genre_id}&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
