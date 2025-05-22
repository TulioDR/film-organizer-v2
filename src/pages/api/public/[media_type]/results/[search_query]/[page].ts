import type { NextApiRequest, NextApiResponse } from "next";
const apiKey = process.env.API_KEY;
type Data = {
   name: string;
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const { media_type, search_query, page } = req.query;
   const url = `https://api.themoviedb.org/3/search/${media_type}?api_key=${apiKey}&language=en-US&query=${search_query}&include_adult=false&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
