import { useState } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import BlurredCircle from "@/components/ui/BlurredCircle";
import { StarIcon, ChevronLeftIcon, ShoppingCartIcon } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import Image from "next/image";
import CommentsForm from "@/components/forms/comments/comments";
import CommentsList from "@/components/forms/comments/CommentList";
export default function ProductDetailPage({ product }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const { user, loading } = useAuth();

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Product not found
      </div>
    );
  }

  const handleSave = async (id) => {
    if (!user) {
      alert("You need to be logged in to save products.");
      router.push("/login");
    }

    const res = await fetch(`/api/favourites-save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.id, p_id:id }),
    });

    if (res.ok) {
      alert("Product saved successfully!");
    } else {
      const errorData = await res.json();
      console.error("Error saving product:", errorData);
      alert("Failed to save product.");
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute left-[-10%] top-[10%] opacity-60">
        <BlurredCircle />
      </div>
      <div className="absolute right-[-10%] bottom-[10%] opacity-60 scale-x-[-1]">
        <BlurredCircle />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5 mr-1" />
              Back to Products
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <Image
                  src={`/${product.image_path}`}
                  alt={product.name}
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
              <div className="flex gap-3">
                {[1, 2, 3].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-md border ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-700"
                    } overflow-hidden`}
                  >
                    <Image
                      src={`/${product.image_path}`}
                      alt={product.name}
                      width={500}
                      height={400}
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-gray-400">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-white mt-1">
                  {product.name} {product.image_path}
                </h1>
                <div className="flex items-center mt-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 ml-2 text-sm">
                    ({product.reviews} reviews)
                  </span>
                  <span className="mx-3 text-gray-600">|</span>
                  <span
                    className={`text-sm ${
                      product.inStock ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() =>
                      router.push(
                        `/products/${product.id}/seller/${product.sellerId}`
                      )
                    }
                    className="text-sm text-blue-400 hover:underline"
                  >
                    View Seller Profile
                  </button>
                </div>
              </div>

              <div className="border-t border-b border-gray-800 py-6 my-4">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-white">
                    ${product.price.toFixed(2)}
                  </span>
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
                <h3 className="text-lg font-semibold text-white mb-3">
                  Specifications
                </h3>
                <ul className="space-y-2">
                  {product.specifications?.map((spec, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span className="text-gray-300">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-6">
                <button className="flex-1 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center">
                  <ShoppingCartIcon className="w-5 h-5 mr-2" />
                  Contact Seller
                </button>
                <button
                  className="flex-1 px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium rounded-lg"
                  onClick={() => handleSave(product.id)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommentsForm pid={product.id} />
      <CommentsList pid={product.id}/>
      

    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products/${context.params.id}`
    );
    if (!res.ok) {
      return { props: { product: null } };
    }

    const data = await res.json();

    return {
      props: { product: data.product }, // fixed here
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: { product: null },
    };
  }
}
