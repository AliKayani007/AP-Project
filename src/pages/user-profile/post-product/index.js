"use client";
import { useAuth } from "@/context/auth-context";
import { useEffect, useState } from "react";
import BlurredCircle from "@/components/ui/BlurredCircle";
import { useRouter } from "next/router";
export default function PostProductPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image_path:"",
    condition: "New",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // For all inputs except file input, update the state
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/addproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
          price: form.price,
          condition: form.condition,
          type: form.category,
          image_path:form.image_path,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Product posted successfully!");
        setForm({
          name: "",
          description: "",
          price: "",
          category: "",
          image_path:"",
          condition: "New",
        });
      } else {
        console.error(result.error);
        alert("Failed to post product");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An error occurred while posting the product.");
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* 💫 Blurred Circles */}
      <div className="absolute left-[-10%] top-[10%] opacity-60">
        <BlurredCircle />
      </div>
      <div className="absolute right-[-10%] bottom-[10%] opacity-60 scale-x-[-1]">
        <BlurredCircle />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 flex items-center justify-center min-h-screen">
        <main className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl ring-1 ring-white/10">
          <h1 className="text-3xl font-bold text-white mb-10 text-center drop-shadow">
            Post a New Product
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              placeholder="Product Name"
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <input
              name="price"
              placeholder="Price"
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <input
              name="category"
              placeholder="Category"
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />
 <input
              name="image_path"
              placeholder="Image Url"
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />

            <div>
              <label className="block text-white mb-2">Product Condition</label>
              <select
                name="condition"
                value={form.condition}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none border border-gray-600"
              >
                <option value="New" className="bg-black">
                  New
                </option>
                <option value="Used" className="bg-black">
                  Used
                </option>
                <option value="Refurbished" className="bg-black">
                  Refurbished
                </option>
              </select>
            </div>

            {/* <div>
              <label className="block text-white mb-2">Product Images</label>
              <input
                type="file"
                name="imageUrl"
                multiple
                onChange={handleChange}
                className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
              />
            </div> */}
            <button
              type="submit"
              className="w-full py-3 rounded bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:brightness-110 transition"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
