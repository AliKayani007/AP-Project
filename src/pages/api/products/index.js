// pages/api/products/index.js

import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { data, error } = await supabase
      .from("components")
      .select("*")

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ products: data });
  } catch (err) {
    return res.status(500).json({ error: "Unexpected error occurred." });
  }
}
