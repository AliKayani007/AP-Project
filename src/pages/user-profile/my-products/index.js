"use client";

import { useState, useEffect } from "react";
import BlurredCircle from "@/components/ui/BlurredCircle"; // Make sure this is available

export default function MyProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch user's products from Supabase or mock
        setProducts([
            { id: 1, name: "Old Phone", price: 150 },
            { id: 2, name: "Laptop", price: 800 },
        ]);
    }, []);

    const removeProduct = (id) => {
        // Call API to remove product
        setProducts((prev) => prev.filter(p => p.id !== id));
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
                        {products.map((product) => (
                            <li key={product.id} className="flex justify-between items-center border-b border-white/20 pb-4">
                                <span className="text-white">{product.name} - ${product.price}</span>
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
