
import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, description, price, condition, type } = req.body;


  if (!name || !description || !price || !condition || !type) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const { data, error } = await supabase
      .from("components") 
      .insert([
        {
          name,
          description,
          price,
          condition,
          type,
        },
      ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ message: "Product added", data });
  } catch (err) {
    return res.status(500).json({ error: "Unexpected error occurred." });
  }
}
