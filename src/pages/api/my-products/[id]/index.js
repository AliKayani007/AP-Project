import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { data, error } = await supabase
      .from("components")
      .select("*")
      .eq("user_id", id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.status(200).json({ products: data });
  } catch (error) {
    return res.status(500).json({ error: "Unexpected error occurred." });
  }
}
