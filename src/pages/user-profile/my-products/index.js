"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BlurredCircle from "@/components/ui/BlurredCircle"; 
import { useAuth } from "@/context/auth-context";
export default function MyProductsPage() {
  const [productList, setProductList] = useState([]);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
    if (!loading && user) {
      fetch(`/api/my-products/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.products) {
            setProductList(data.products);
          }
        })
        .catch((err) => console.error("Error fetching products:", err));
    }
  }, [user, loading, router]);

  const removeProduct = async (id) => {
    try {
        console.log("Deleting for user_id:", user.id, "and product id:", id);

      const res = await fetch(`/api/remove-products/${user.id}/${id}`, {
        method: "DELETE",
      });

        const result = await res.json();
        console.log(result)

      if (res.ok) {
        alert("Product removed successfully!");
        
        setProductList((prev) => prev.filter((p) => p.id !== id));
      } else {
        console.error(result.error);
        alert("Failed to remove product.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An error occurred while removing the product.");
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-12 flex items-center justify-center min-h-screen">
        <main className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl ring-1 ring-white/10">
          <h1 className="text-3xl font-bold text-white mb-10 text-center drop-shadow">
            My Products
          </h1>
          <ul className="space-y-6">
            {productList.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center border-b border-white/20 pb-4"
              >
                <span className="text-white">
                  {product.name} - ${product.price}
                </span>
                <button
                  onClick={() => removeProduct(product.id)}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
