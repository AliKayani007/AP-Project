import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { uid, name, pid, review } = req.body;

    if (!uid || !name || !pid || !review) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      // Insert new comment into the comments table
      const { data, error } = await supabase.from("comments").insert([
        {
          userID: uid,
          name,
          pid,
          review,
        },
      ]);

      if (error) {
        throw new Error(error.message);
      }

      // Fetch all comments for the given product (pid)
      const { data: allComments, error: fetchError } = await supabase
        .from("comments")
        .select("*")
        .eq("pid", pid);

      if (fetchError) {
        throw new Error(fetchError.message);
      }

      return res.status(201).json({ message: "Comment saved successfully", data: allComments });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  } else if (req.method === "GET") {
    const { pid } = req.query;

    if (!pid) {
      return res.status(400).json({ message: "Product ID is required." });
    }

    try {
      // Fetch all comments for the given product (pid)
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("pid", pid);

      if (error) {
        throw new Error(error.message);
      }

      return res.status(200).json({ data });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
