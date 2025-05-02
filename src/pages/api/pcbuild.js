
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const response = await fetch("http://localhost:3001/api/pc-build", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error proxying to Express API:", error);
    return res
      .status(500)



      console.log("fook")
      .json({ error: "Internal Server Error", details: error.message });
  }
}
