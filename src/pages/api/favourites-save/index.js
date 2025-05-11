import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  
    const { method } = req;
    if (method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
    const { user_id, p_id } = req.body;
  
    if (!user_id || !p_id) {
      return res
        .status(400)
        .json({ error: "Missing required parameters: user_id and p_id" });
    }
  console.log(user_id, p_id);
  
  const { data, error } = await supabase.from("favourites").insert([
    {
      user_id,
      p_id,
    },
  ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ message: "Product added", data });
}
