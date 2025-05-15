import React, { useState, useEffect } from "react";
import ProductGrid from "@/components/products/ProductGrid";
import PageHeader from "@/components/products/PageHeader";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import BlurredCircle from "@/components/ui/BlurredCircle";
import ProductFilters from "@/components/products/ProductFilters";
import ProductCarousel from "@/components/products/ProductCarousel";

export default function ProductsPage({ products }) {
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    maxPrice: "500000",
    condition: "All",
    type: "All",
  });

  useEffect(() => {
    // Set loading state while filtering
    setIsLoading(true);
    
    try {
      // Apply filters to products
      const results = allProducts.filter(product => {
        // Search filter
        const matchesSearch = !filters.search || 
          product.name.toLowerCase().includes(filters.search.toLowerCase());
        
        // Price filter - ensure both values are numbers for comparison
        const maxPrice = Number(filters.maxPrice);
        const productPrice = Number(product.price);
        const matchesPrice = !isNaN(maxPrice) && !isNaN(productPrice) && 
          productPrice <= maxPrice;
        
        // Condition filter
        const matchesCondition = filters.condition === "All" || 
          product.condition === filters.condition;
        
        // Type filter
        const matchesType = filters.type === "All" || 
          product.type === filters.type;
        
        // Product must pass all active filters
        return matchesSearch && matchesPrice && matchesCondition && matchesType;
      });
      
      setFilteredProducts(results);
    } catch (error) {
      console.error("Error filtering products:", error);
      setFilteredProducts([]);
    } finally {
      // Remove loading state
      setIsLoading(false);
    }
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

          {/* Product Carousel added below filters */}
          <div className="my-8">
            <ProductCarousel products={allProducts} title="Featured Products" />
          </div>

          <div className="mb-4 text-gray-400">
            Showing {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
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

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products`);
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