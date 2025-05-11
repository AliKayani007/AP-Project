
import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!id) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    
    const { data, error } = await supabase
      .from("favourites")
      .select("p_id")
      .eq("user_id", id);

    if (error) {
      console.error("Error fetching favorites:", error.message);
      return res.status(500).json({ error: "Failed to fetch favorites" });
    }

    if (data.length === 0) {
      return res.status(200).json({ products: [] });
    }

   
    const productIds = data.map((fav) => fav.p_id);

    
    const { data: products, error: productsError } = await supabase
      .from("components")
      .select("*")
      .in("id", productIds);

    if (productsError) {
      console.error("Error fetching products:", productsError.message);
      return res.status(500).json({ error: "Failed to fetch products" });
    }

    
    return res.status(200).json({ products });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "Unexpected error occurred." });
  }
}
