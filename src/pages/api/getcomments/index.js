import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  // Handle GET request
  if (req.method === "GET") {
    const { pid } = req.query; // Get the product ID from the query

    if (!pid) {
      return res.status(400).json({ message: "Product ID is required." });
    }

    try {
      // Fetch all comments for the specified product ID
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("pid", pid); // Use 'eq' to filter comments by the product ID

      if (error) {
        throw new Error(error.message);
      }

      // Return the fetched comments
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ message: "Method not allowed" });
  }
}
