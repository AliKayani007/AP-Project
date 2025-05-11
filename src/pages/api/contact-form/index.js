import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, business_name, features, usecase } = req.body;

  try {
    const { data, error } = await supabase.from("contact_us").insert([
      {
        name,
        email,
        business_name,
        features,
        usecase,
      },
    ]);

    if (error) {
      throw new Error(error.message);
    }

    res.status(201).json({ message: "Form submitted successfully!", data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
