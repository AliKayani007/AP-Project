import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const ProductCarousel = ({ products, title = "Featured Products" }) => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Get featured or discounted products, or just first few if none are featured
  const displayProducts =
    products.length > 0
      ? products.filter((p) => p.featured || p.discount).length > 0
        ? products.filter((p) => p.featured || p.discount).slice(0, 8)
        : products.slice(0, 8)
      : [];

  useEffect(() => {
    if (carouselRef.current) {
      setMaxScroll(
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      );
    }

    const handleResize = () => {
      if (carouselRef.current) {
        setMaxScroll(
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [products]);

  const scroll = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      if (carouselRef.current) {
        setScrollPosition(carouselRef.current.scrollLeft);
      }
    }, 300);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  if (displayProducts.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={scrollPosition <= 10}
            className={`p-2 rounded-full ${
              scrollPosition <= 10
                ? "bg-gray-800 text-gray-600"
                : "bg-gray-800 text-white hover:bg-gray-700"
            } transition-colors`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={scrollPosition >= maxScroll - 10}
            className={`p-2 rounded-full ${
              scrollPosition >= maxScroll - 10
                ? "bg-gray-800 text-gray-600"
                : "bg-gray-800 text-white hover:bg-gray-700"
            } transition-colors`}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] w-[280px] flex-shrink-0"
          >
            <Link href={`/products/${product.id}`}>
              <div className="relative group cursor-pointer h-[320px] rounded-xl overflow-hidden">
                {/* Card gradient background */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800/20 to-purple-900/10 border border-teal-100/10 group-hover:from-blue-800/30 group-hover:to-purple-900/20 transition-all duration-300"></div>

                {/* Product image with white background */}
                <div className="absolute inset-x-4 top-4 h-[180px] bg-white rounded-lg overflow-hidden">
                  <img
                    src={
                      product.image_path ||
                      product.image ||
                      "/api/placeholder/300/200"
                    }
                    alt={product.name}
                    className="w-full h-full object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Discount badge */}
                {product.discount && (
                  <div className="absolute top-6 left-6 bg-red-500 text-white px-2 py-0.5 text-xs font-bold rounded">
                    -{product.discount}%
                  </div>
                )}

                {/* Product info */}
                <div className="absolute inset-x-4 bottom-4 flex flex-col">
                  <h3 className="text-white font-medium line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center mt-1">
                    <div className="flex-1">
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-xs mr-2">
                          ${product.oldPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-white font-bold">
                        ${product.price?.toLocaleString() || "0"}
                      </span>
                    </div>

                    {product.condition && (
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          product.condition === "New"
                            ? "bg-green-500/80"
                            : product.condition === "Used"
                            ? "bg-amber-500/80"
                            : "bg-blue-500/80"
                        }`}
                      >
                        {product.condition}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <button className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
