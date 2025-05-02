import React, { useState, useEffect } from "react";
import ProductGrid from "@/components/products/ProductGrid";
import PageHeader from "@/components/products/PageHeader";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import BlurredCircle from "@/components/ui/BlurredCircle";

const mockFavouriteProducts = [
    {
        id: "1",
        name: "Premium Headphones",
        description: "High-quality noise-cancelling headphones with crystal clear audio.",
        price: 199.99,
        image_url: "/images/headphones.jpg",
        condition: "New",
        type: "Audio"
    },
    {
        id: "2",
        name: "Wireless Keyboard",
        description: "Ergonomic wireless keyboard with mechanical switches.",
        price: 89.99,
        image_url: "/images/keyboard.jpg",
        condition: "New",
        type: "Peripheral"
    },
    {
        id: "3",
        name: "Gaming Mouse",
        description: "High DPI gaming mouse with customizable RGB lighting.",
        price: 59.99,
        image_url: "/images/mouse.jpg",
        condition: "Refurbished",
        type: "Peripheral"
    },
    {
        id: "4",
        name: "Bluetooth Speaker",
        description: "Portable speaker with 20hr battery life.",
        price: 129.99,
        image_url: "/images/speaker.jpg",
        condition: "New",
        type: "Audio"
    },
];

export default function FavouritesPage() {
    const [favouriteProducts, setFavouriteProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading favourite products (e.g., fetch from API or localStorage)
        const timer = setTimeout(() => {
            setFavouriteProducts(mockFavouriteProducts);
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            <div className="absolute left-[-10%] top-[10%] opacity-60">
                <BlurredCircle />
            </div>
            <div className="absolute right-[-10%] bottom-[10%] opacity-60 scale-x-[-1]">
                <BlurredCircle />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-6">
                <main className="py-8">
                    <PageHeader title="Favourite Products" />

                    <div className="mb-4 text-gray-400">
                        Showing {favouriteProducts.length} {favouriteProducts.length === 1 ? "product" : "products"}
                    </div>

                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <ProductGrid products={favouriteProducts} />
                    )}
                </main>
            </div>
        </div>
    );
}
