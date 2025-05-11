import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  const {
    query: { id, pid },
    method,
  } = req;

  if (method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { data, error } = await supabase
      .from("components")
      .delete()
      .eq("user_id", id)
      .eq("id", pid);

    if (error) {
      console.error("Error deleting:", error.message);
      return res.status(400).json({ error: error.message });
    }

    if (data && data.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    console.log("Product deleted successfully:", data);
    return res
      .status(200)
      .json({ message: "Product deleted successfully", data });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "Unexpected error occurred." });
  }
}
