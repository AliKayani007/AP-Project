import React, { useState, useEffect } from "react";
import ProductGrid from "@/components/products/ProductGrid";
import PageHeader from "@/components/products/PageHeader";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import BlurredCircle from "@/components/ui/BlurredCircle";
import ProductFilters from "@/components/products/ProductFilters"; // 👈 Import the new filter component

// const mockProducts = [
//     {
//         id: "1",
//         name: "Premium Headphones",
//         description: "High-quality noise-cancelling headphones with crystal clear audio.",
//         price: 199.99,
//         image_url: "/images/headphones.jpg",
//         condition: "New",
//         type: "Audio"
//     },
//     {
//         id: "2",
//         name: "Wireless Keyboard",
//         description: "Ergonomic wireless keyboard with mechanical switches.",
//         price: 89.99,
//         image_url: "/images/keyboard.jpg",
//         condition: "New",
//         type: "Peripheral"
//     },
//     {
//         id: "3",
//         name: "Gaming Mouse",
//         description: "High DPI gaming mouse with customizable RGB lighting.",
//         price: 59.99,
//         image_url: "/images/mouse.jpg",
//         condition: "Refurbished",
//         type: "Peripheral"
//     },
//     {
//         id: "4",
//         name: "Bluetooth Speaker",
//         description: "Portable speaker with 20hr battery life.",
//         price: 129.99,
//         image_url: "/images/speaker.jpg",
//         condition: "New",
//         type: "Audio"
//     },
// ];

export default function ProductsPage({ products }) {
    const [allProducts, setAllProducts] = useState(products);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isLoading, setIsLoading] = useState(false); // No loading on SSR
    const [filters, setFilters] = useState({
        search: "",
        maxPrice: "500000", // You may adjust this as needed
        condition: "All",
        type: "All"
    });

    useEffect(() => {
        let results = allProducts;

        if (filters.search) {
            results = results.filter(product =>
                product.name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        results = results.filter(product =>
            product.price <= Number(filters.maxPrice)
        );

        if (filters.condition !== "All") {
            results = results.filter(product =>
                product.condition === filters.condition
            );
        }

        if (filters.type !== "All") {
            results = results.filter(product =>
                product.type === filters.type
            );
        }

        setFilteredProducts(results);
    }, [filters, allProducts]);

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
                    <PageHeader title="Products" />

                    <ProductFilters filters={filters} setFilters={setFilters} />

                    <div className="mb-4 text-gray-400">
                        Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                    </div>

                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <ProductGrid products={filteredProducts} />
                    )}
                </main>
            </div>
        </div>
    );
}

// SSR function
export async function getServerSideProps() {
    try {
        const res = await fetch("http://localhost:3000/api/products");
        const data = await res.json();

        return {
            props: {
                products: data.products || [],
            },
        };
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return {
            props: {
                products: [],
            },
        };
    }
}