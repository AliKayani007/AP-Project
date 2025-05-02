// app/products/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import BlurredCircle from "@/components/ui/BlurredCircle";
import { StarIcon, ChevronLeftIcon, ShoppingCartIcon } from "lucide-react";

// Mock product data
const mockProducts = [
    {
        id: "1",
        name: "Premium Headphones",
        description: "High-quality noise-cancelling headphones with crystal clear audio. Perfect for music enthusiasts and professionals who demand superior sound quality.",
        price: 199.99,
        image_url: "/images/headphones.jpg",
        condition: "New",
        category: "Audio",
        specifications: [
            "Active Noise Cancellation",
            "30-hour battery life",
            "Bluetooth 5.0",
            "Built-in microphone",
            "Foldable design"
        ],
        rating: 4.8,
        reviews: 124,
        inStock: true
    },
    // Add other mock products as needed
];

export default function ProductDetailPage() {
    const router = useRouter();
    const id  = router.query;

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            const foundProduct = mockProducts[0]; // Just grab the first mock product
            setProduct(foundProduct);
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    if (!product && !isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                Product not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute left-[-10%] top-[10%] opacity-60">
                <BlurredCircle />
            </div>
            <div className="absolute right-[-10%] bottom-[10%] opacity-60 scale-x-[-1]">
                <BlurredCircle />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="max-w-6xl mx-auto">
                        {/* Back button */}
                        <div className="mb-8">
                            <button
                                onClick={() => router.back()}
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <ChevronLeftIcon className="w-5 h-5 mr-1" />
                                Back to Products
                            </button>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Image Gallery */}
                            <div className="space-y-4">
                                <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                                    <img
                                        src={product.image_url}
                                        alt={product.name}
                                        className="w-full h-auto max-h-[500px] object-contain mx-auto"
                                    />
                                </div>
                                <div className="flex gap-3">
                                    {[1, 2, 3].map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`w-20 h-20 rounded-md border ${selectedImage === index ? 'border-blue-500' : 'border-gray-700'} overflow-hidden`}
                                        >
                                            <img
                                                src={product.image_url}
                                                alt={`${product.name} thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-6">
                                <div>
                                    <span className="text-sm text-gray-400">{product.category}</span>
                                    <h1 className="text-3xl font-bold text-white mt-1">{product.name}</h1>
                                    <div className="flex items-center mt-3">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon
                                                    key={i}
                                                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-400 ml-2 text-sm">
                                            ({product.reviews} reviews)
                                        </span>
                                        <span className="mx-3 text-gray-600">|</span>
                                        <span className={`text-sm ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                        </div>
                                        <div className="pt-4">
                                            <button
                                                onClick={() => router.push(`/products/${product.id}/seller/${product.sellerId}`)}
                                                className="text-sm text-blue-400 hover:underline"
                                            >
                                                View Seller Profile
                                            </button>
                                        </div>
                                </div>

                                <div className="border-t border-b border-gray-800 py-6 my-4">
                                    <div className="flex items-center">
                                        <span className="text-3xl font-bold text-white">${product.price.toFixed(2)}</span>
                                        {product.condition && (
                                            <span className="ml-3 px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">
                                                {product.condition}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-300 mt-4">{product.description}</p>
                                </div>

                                {/* Specifications */}
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Specifications</h3>
                                    <ul className="space-y-2">
                                        {product.specifications.map((spec, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-gray-400 mr-2">•</span>
                                                <span className="text-gray-300">{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-6">
                                    <button className="flex-1 lg:flex-none px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                                        <ShoppingCartIcon className="w-5 h-5 mr-2" />
                                        Contact Seller
                                    </button>
                                    <button className="flex-1 lg:flex-none px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium rounded-lg transition-colors">
                                        Save
                                    </button>
                                    </div>
                                    {/* Seller Profile Link */}

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
