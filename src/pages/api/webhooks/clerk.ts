import { Webhook } from "svix";
import { buffer } from "micro";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL!,
   process.env.SUPABASE_SERVICE_ROLE_KEY!, // Use the SECRET key here
);

export const config = { api: { bodyParser: false } };

export default async function handler(req: any, res: any) {
   const payload = (await buffer(req)).toString();
   const headers = req.headers;
   const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

   let evt: any;
   try {
      evt = wh.verify(payload, headers) as any;
   } catch (err) {
      return res.status(400).json({ error: "Verification failed" });
   }

   const { id } = evt.data;

   // 1. User Signs Up with Google
   if (evt.type === "user.created") {
      await supabaseAdmin.from("users").insert({ id });
   }

   // 2. User Deletes their account
   if (evt.type === "user.deleted") {
      // This one line triggers the CASCADE delete in Supabase
      await supabaseAdmin.from("users").delete().eq("id", id);
   }

   return res.status(200).json({ success: true });
}
