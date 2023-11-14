import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/config/supabaseClient";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      const { list_id } = req.query;
      const response = await supabase
         .from("List")
         .select()
         .match({ id: list_id })
         .single();
      res.status(200).json(response);
   }
   if (req.method === "PATCH") {
      try {
         const { name } = req.body;
         const { list_id } = req.query;
         const response = await supabase
            .from("List")
            .update({ name })
            .match({ id: list_id });
         res.status(200).json(response);
      } catch (error) {
         console.log(error);
         res.json(error);
      }
   }
   if (req.method === "DELETE") {
      try {
         const { list_id } = req.query;
         const { status } = await supabase
            .from("List")
            .delete()
            .match({ id: list_id });
         res.status(200).json(status);
      } catch (error) {
         console.log(error);
         res.json(error);
      }
   }
}
