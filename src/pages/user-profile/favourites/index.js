import React, { useState, useEffect } from "react";
import ProductGrid from "@/components/products/ProductGrid";
import PageHeader from "@/components/products/PageHeader";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import BlurredCircle from "@/components/ui/BlurredCircle";
import { getServerSideProps } from "@/pages/products";
import { useAuth } from "@/context/auth-context";
import Router, { useRouter } from "next/router";

export default function FavouritesPage() {
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      Router.push("/login");
      return;
    }

    if (!loading && user) {
      fetch(`/api/favourites-products/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.products) {
            setFavouriteProducts(data.products);
            setIsLoading(false);
          }
        })
        .catch((err) => console.error("Error fetching products:", err));
    }
  }, [user, loading, router]);

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
            Showing {favouriteProducts.length}{" "}
            {favouriteProducts.length === 1 ? "product" : "products"}
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
