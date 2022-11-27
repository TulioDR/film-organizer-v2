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
   const [mediaType, genreID, page] = params!;
   const url = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&language=en-US&include_adult=false&with_genres=${genreID}&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
