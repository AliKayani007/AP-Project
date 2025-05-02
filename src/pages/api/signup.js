
import { supabase } from "@/utils/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ error: "All fields are required." });
  }


  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: username, 
      },
    },
  });

  if (signUpError) {
    return res.status(400).json({ error: signUpError.message });
  }

  res.status(200).json({ message: "User signed up successfully!" });
}
