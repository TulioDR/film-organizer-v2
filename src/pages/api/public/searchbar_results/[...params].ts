import type { NextApiRequest, NextApiResponse } from "next";
const apiKey = process.env.API_KEY;
type Data = {
   name: string;
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const { params } = req.query;
   const [mediaType, searchQuery, page] = params!;
   const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${apiKey}&language=en-US&query=${searchQuery}&include_adult=false&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
