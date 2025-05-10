import Link from "next/link";
import GlowEffect from "@/components/ui/GlowEffect";

export default function ProductCard({ product }) {
    return (
        <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-blue-800/20 to-purple-900/10 border border-teal-100/10 group-hover:from-blue-800/30 group-hover:to-purple-900/20 transition-all duration-300"></div>

            <div className="relative h-full flex flex-col p-6 z-10">
                {/* Product Image */}
                <div className="relative mt-4 h-48 w-full overflow-hidden rounded-lg">
                    <img
                        src={product.image_path}
                        alt={product.name}
                        className="w-full h-full object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 -z-10 opacity-70 scale-125 translate-x-4 -translate-y-2">
                        <GlowEffect color="#7B8CE5" />
                    </div>
                </div>

                {/* Product Info */}
                <div className="mt-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>

                    <div className="mt-2">
                        <span className="text-gray-400 text-sm">Condition: </span>
                        <span className="text-white text-sm font-medium">
                            {product.condition || "New"}
                        </span>
                    </div>

                    <p className="text-gray-400 mt-4 line-clamp-3">
                        {product.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">
                            ${product.price}
                        </span>

                        <Link href={`/products/${product.id}`}>
                            <button className="px-4 py-2 rounded-lg bg-[#7b8de557] hover:bg-[#7b8de580] text-white transition-colors">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}