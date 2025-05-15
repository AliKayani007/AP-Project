import { useState } from "react";
import Link from "next/link";
import { Heart, Star, ShoppingCart, Eye } from "lucide-react";
import GlowEffect from "../ui/GlowEffect";
import Badge from "../ui/Badge";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const conditionVariant = {
    New: "success",
    Used: "warning",
    Refurbished: "primary",
  };

  return (
    <div
      className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-blue-800/20 to-purple-900/10 border border-teal-100/10 group-hover:from-blue-800/30 group-hover:to-purple-900/20 transition-all duration-300"></div>

      <div className="relative h-full flex flex-col p-3 z-10">
        {/* Product Image with White Background */}
        <div className="relative h-32 w-full overflow-hidden rounded-lg bg-white">
          <img
            src={
              product.image_path || product.image || "/api/placeholder/300/200"
            }
            alt={product.name}
            className="w-full h-full object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 -z-10 opacity-70 scale-125 translate-x-4 -translate-y-2">
            <GlowEffect color="#7B8CE5" />
          </div>

          <div className="absolute top-2 right-2 z-10">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-1.5 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <Heart
                size={14}
                className={
                  isFavorite ? "fill-red-500 stroke-red-500" : "stroke-white"
                }
              />
            </button>
          </div>

          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 text-xs font-bold rounded">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="mt-3 flex-1 flex flex-col">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-white line-clamp-1">
              {product.name}
            </h3>
            <Badge
              variant={conditionVariant[product.condition] || "default"}
              className="text-xs"
            >
              {product.condition || "New"}
            </Badge>
          </div>

          <div className="flex items-center mt-1">
            <div className="flex items-center mr-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={
                    i < (product.rating || 4)
                      ? "fill-yellow-400 stroke-yellow-400"
                      : "fill-gray-700 stroke-gray-700"
                  }
                />
              ))}
            </div>
            <span className="text-gray-400 text-xs">
              ({product.reviews || 0})
            </span>
          </div>

          <div className="mt-2 flex-1">
            {product.description && (
              <p className="text-gray-400 text-xs line-clamp-2">
                {product.description}
              </p>
            )}
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div>
              {product.oldPrice && (
                <span className="text-gray-500 line-through text-xs mr-1">
                  ${product.oldPrice.toLocaleString()}
                </span>
              )}
              <span className="text-white font-bold text-sm">
                ${product.price?.toLocaleString() || "0"}
              </span>
            </div>
            <span className="text-gray-400 text-xs">
              {product.sold ? `${product.sold}+ sold` : "New"}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1">
            <Link href={`/products/${product.id}`} className="flex-1">
              <button className="w-full px-2 py-1.5 rounded-lg bg-[#7b8de557] hover:bg-[#7b8de580] text-white text-xs flex items-center justify-center gap-1 transition-colors">
                <Eye size={12} />
                View
              </button>
            </Link>
            <button className="flex-1 px-2 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs flex items-center justify-center gap-1 transition-colors">
              <Heart size={12} />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
